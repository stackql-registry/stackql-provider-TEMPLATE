#!/usr/bin/env python3
"""pystackql smoke test for the myprovider stackql provider.

Exercises the salient resources against a real dev account: read smokes
across the surface, then cheap self-cleaning write lifecycles (INSERT /
SELECT / UPDATE / DELETE of a secret, key or small object), a config
toggle-and-restore (which doubles as the UPDATE string-coercion probe), the
flagship round trip, and - only behind --with-gated-lifecycle - the expensive
create/delete lifecycle. Design it from the vendor's Terraform provider
examples (the resources and mutations people actually use) with a budget
under $5 (aim under $1).

Everything created is named `stackql-smoke-<stamp>`; before running, the
script sweeps every stackql-smoke-* breadcrumb so each run starts clean and a
failed run cannot leave billable objects behind past the next run. Anything
toggled is restored.

Credentials come from the environment, exactly as the provider reads them
(`make smoke*` sources .env):

    export MYPROVIDER_API_TOKEN=...
    export MYPROVIDER_ORG_ID=...        # the scoping server variable, if any

Rate limiting: every statement is paced by INTER_REQUEST_DELAY_S; a 429 is a
harness bug and fails the run.

Never run this against a production account.

Usage:
    python tests/smoke_test.py                          # local provider-dev/openapi registry (default)
    python tests/smoke_test.py --live                   # the published provider in the stackql registry
    python tests/smoke_test.py --read-only              # read smokes only, no writes
    python tests/smoke_test.py --with-gated-lifecycle   # also the expensive lifecycle
    python tests/smoke_test.py --cleanup-only           # just sweep breadcrumbs

TODO(template): fill in REQUIRED_ENV, the sweep, the read smokes, the write
lifecycles and the gated lifecycle. The run FAILS while no step is defined.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]
PROVIDER = "myprovider"
SMOKE_PREFIX = "stackql-smoke-"
# TODO(template): pace under the vendor's documented limit with margin
INTER_REQUEST_DELAY_S = 1.2
# TODO(template): the credential and scoping variables the provider reads
REQUIRED_ENV = ("MYPROVIDER_API_TOKEN",)
# pystackql manages its own stackql binary; the harness upgrades it when
# older than the minimum the provider needs (x-stackQL-envVar server
# variables need >= 0.10.601).
MIN_STACKQL_VERSION = (0, 10, 601)

ERROR_RE = re.compile(
    r"http response status code: [45]|over HTTP error|error assembling|"
    r"cannot find matching operation|FindRoute|no matching operation|"
    r"cannot find any viable servers|parser error|panic|"
    r"no request body for operation|schema unsuitable|UNAUTHORIZED|FORBIDDEN",
    re.I,
)
RATE_LIMIT_RE = re.compile(r"status code: 429|TOO_MANY_REQUESTS|rate limit", re.I)


class Smoke:
    def __init__(self, args: argparse.Namespace) -> None:
        self.args = args
        self.stamp = str(int(time.time()))[-6:]
        self.name = f"{SMOKE_PREFIX}{self.stamp}"
        self.results: list[tuple[str, str, str]] = []
        self.requests = 0

        for var in REQUIRED_ENV:
            if not os.environ.get(var):
                sys.exit(f"{var} is not set - see the module docstring and .env.example")

        from pystackql import StackQL

        if not args.live:
            reg_path = (BASE_DIR / "provider-dev" / "openapi").resolve()
            reg_url = "file://" + reg_path.as_posix()
            self.sq = StackQL(output="dict", custom_registry=reg_url)
            # pystackql only serialises {"url": ...}; a local file registry
            # additionally needs localDocRoot + nopVerify - patch the exec
            # params in place (compact JSON, shell-quoted).
            full = json.dumps(
                {"url": reg_url, "localDocRoot": reg_path.as_posix(), "verifyConfig": {"nopVerify": True}},
                separators=(",", ":"),
            )
            if sys.platform.startswith("win"):
                quoted = '"' + full.replace('"', '\\"') + '"'
            else:
                import shlex
                quoted = shlex.quote(full)
            params = self.sq.local_query_executor.params
            for i, p in enumerate(params):
                if p == "--registry":
                    params[i + 1] = quoted
                    break
        else:
            self.sq = StackQL(output="dict")
        self.ensure_stackql_version()

    def ensure_stackql_version(self) -> None:
        def parse(v: str) -> tuple[int, ...]:
            return tuple(int(x) for x in re.findall(r"\d+", str(v))[:3])

        current = parse(getattr(self.sq, "version", "") or "")
        if current and current >= MIN_STACKQL_VERSION:
            return
        print(f"stackql {self.sq.version} at {self.sq.bin_path} is older than "
              f"v{'.'.join(map(str, MIN_STACKQL_VERSION))} - upgrading pystackql's binary")
        self.sq.upgrade(showprogress=False)
        if parse(self.sq.version) < MIN_STACKQL_VERSION:
            sys.exit(f"stackql {self.sq.version} is still too old after upgrade")

    # ------------------------------------------------------------------ core
    def q(self, sql: str):
        # serial pacing under the rate limit
        if self.requests:
            time.sleep(INTER_REQUEST_DELAY_S)
        self.requests += 1
        try:
            if sql.lstrip().upper().startswith(("SELECT", "SHOW", "DESCRIBE")) or "RETURNING" in sql.upper():
                out = self.sq.execute(sql)
            else:
                out = self.sq.executeStmt(sql)
        except Exception as exc:  # noqa: BLE001
            return [], str(exc)
        text = json.dumps(out, default=str)
        if RATE_LIMIT_RE.search(text):
            return out if isinstance(out, list) else [out], "RATE LIMITED (429) - harness pacing bug: " + text
        if ERROR_RE.search(text):
            return out if isinstance(out, list) else [out], text
        if isinstance(out, list) and out and isinstance(out[0], dict) and "error" in out[0]:
            return out, text
        return out if isinstance(out, list) else [out], None

    def step(self, name: str, sql: str, expect_rows: bool = False, contains: str | None = None):
        rows, err = self.q(sql)
        if err:
            self.results.append((name, "FAIL", err[:200]))
            print(f"  FAIL  {name}  [{err[:140]}]")
            return None
        blob = json.dumps(rows, default=str)
        if expect_rows and not rows:
            self.results.append((name, "FAIL", "expected rows, got none"))
            print(f"  FAIL  {name}  [no rows]")
            return None
        if contains and contains not in blob:
            self.results.append((name, "FAIL", f"'{contains}' not in result"))
            print(f"  FAIL  {name}  ['{contains}' not in {blob[:100]}]")
            return None
        self.results.append((name, "PASS", ""))
        print(f"  PASS  {name}")
        return rows

    def wait_for(self, name: str, sql: str, pred, timeout: int = 600, interval: int = 10):
        """Poll until pred(rows) holds - for async lifecycles (any-sdk has no LRO polling)."""
        start = time.time()
        last = None
        while time.time() - start < timeout:
            rows, err = self.q(sql)
            last = err or json.dumps(rows, default=str)[:160]
            if not err and pred(rows):
                self.results.append((name, "PASS", f"{int(time.time() - start)}s"))
                print(f"  PASS  {name}  ({int(time.time() - start)}s)")
                return True
            time.sleep(interval)
        self.results.append((name, "FAIL", f"timeout: {last}"))
        print(f"  FAIL  {name}  [timeout: {last}]")
        return False

    # ------------------------------------------------------- breadcrumb sweep
    def cleanup_breadcrumbs(self) -> None:
        print("== breadcrumb sweep ==")
        # TODO(template): list every resource the write lifecycles create and
        # delete the stackql-smoke-* ones, most expensive first, e.g.
        # rows, err = self.q(f"SELECT id, name FROM {PROVIDER}.keys.keys")
        # if err:
        #     print(f"  WARN key sweep list failed: {err[:120]}")
        # else:
        #     for r in rows:
        #         if str(r.get("name", "")).startswith(SMOKE_PREFIX):
        #             print(f"  sweeping key {r['name']}")
        #             self.q(f"DELETE FROM {PROVIDER}.keys.keys WHERE key_id = '{r['id']}'")
        print("  (no sweep defined)")

    # -------------------------------------------------------------- read path
    def read_smokes(self) -> None:
        print("== read smokes ==")
        self.step("show services", f"SHOW SERVICES IN {PROVIDER}", expect_rows=True)
        # TODO(template): the estate inventory, the posture set, the flagship
        # read, one read per service - the queries the docs lead with.
        # self.step("estate inventory", f"SELECT id, name, state, region FROM {PROVIDER}.services.services")

    # ------------------------------------------------------------- write path
    def write_lifecycles(self) -> None:
        name = self.name
        print(f"== write lifecycles ({name}) ==")
        # TODO(template): cheap, self-cleaning: INSERT -> SELECT -> UPDATE ->
        # SELECT -> DELETE -> SELECT (gone) of a secret / key / small object;
        # a config toggle-and-restore (UPDATE sends every value as a string -
        # this is the coercion probe); the flagship round trip; every EXEC the
        # docs show. Use try/finally so the DELETE always runs.
        # self.step("key INSERT", f"INSERT INTO {PROVIDER}.keys.keys (name) SELECT '{name}'")
        # ...
        # self.step("key DELETE", f"DELETE FROM {PROVIDER}.keys.keys WHERE key_id = '{kid}'")

    def gated_lifecycle(self) -> None:
        name = self.name
        print(f"== gated lifecycle ({name}) - billable, keep the window short ==")
        # TODO(template): the expensive create / wait / stop / delete, always
        # inside try/finally, polling with wait_for. Delete the method and the
        # Makefile target if the provider has no such lifecycle.

    # ---------------------------------------------------------------- summary
    def summary(self) -> int:
        print("\n== summary ==")
        counts = {"PASS": 0, "FAIL": 0}
        for name, status, note in self.results:
            counts[status] = counts.get(status, 0) + 1
            if status != "PASS":
                print(f"  {status:5s} {name}  [{note[:110]}]")
        registry = "public" if self.args.live else "local"
        print(f"  {counts['PASS']} passed, {counts['FAIL']} failed; {self.requests} statements, "
              f"paced at {INTER_REQUEST_DELAY_S}s (registry: {registry})")
        if len(self.results) <= 1:
            print("  FAIL  the smoke suite defines no provider-specific steps yet (TODO)")
            return 1
        return 1 if counts["FAIL"] else 0


def main() -> int:
    ap = argparse.ArgumentParser(description=f"{PROVIDER} provider smoke test")
    ap.add_argument("--live", action="store_true",
                    help="run against the published provider in the stackql registry (default: the local provider-dev/openapi file registry)")
    ap.add_argument("--cleanup-only", action="store_true", help="sweep stackql-smoke-* breadcrumbs and exit")
    ap.add_argument("--read-only", action="store_true", help="read smokes only")
    ap.add_argument("--with-gated-lifecycle", action="store_true",
                    help="also run the expensive create/delete lifecycle (off by default)")
    args = ap.parse_args()

    smoke = Smoke(args)
    print(f"{PROVIDER} smoke test  registry={'public' if args.live else 'local'}  name={smoke.name}  stackql={smoke.sq.version}")
    smoke.cleanup_breadcrumbs()
    if args.cleanup_only:
        return 0
    smoke.read_smokes()
    if not args.read_only:
        smoke.write_lifecycles()
        if args.with_gated_lifecycle:
            smoke.gated_lifecycle()
    return smoke.summary()


if __name__ == "__main__":
    sys.exit(main())
