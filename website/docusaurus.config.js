import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig, withStructuredData } from './.shared-config/index.js';
import { providerName, providerTitle, llmsTxtHeader } from './provider.js';

// withStructuredData: JSON-LD via @stackql/docusaurus-plugin-structured-data
// (the shared config README, "Structured data"). The landing page's front
// matter carries softwareApplication: true (headerContent1.txt).
const config = withStructuredData(createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster), consistent
    // with the other provider microsites.
    future: {
      v4: true,
      faster: true,
    },
  },
}), { providerName, providerTitle });

// Date-stamp every doc page ("Last updated on ..."). The pages are
// regenerated and committed on every provider refresh, so the stamp is the
// regeneration date. (withStructuredData sets it too; kept explicit.)
config.presets[0][1].docs.showLastUpdateTime = true;

// Answer engine optimisation: llms.txt / llms-full.txt, Markdown companion
// files for the docs and the Ask AI button, via
// @stackql/docusaurus-plugin-aeo. The shared config does not wire it.
config.plugins = [
  ...(config.plugins || []),
  [
    '@stackql/docusaurus-plugin-aeo',
    {
      llmsTxt: {
        header: llmsTxtHeader,
        instanceSections: {
          'docusaurus-plugin-content-docs@default': { title: 'Documentation', order: 1 },
        },
      },
    },
  ],
  // The stackql-deploy template menu on resource pages, beside the Ask AI
  // button at the right of the breadcrumb row (desktop only). It provides
  // the breadcrumb row and renders the AEO plugin's Ask AI button in it, so
  // it is listed after that plugin (the build fails otherwise).
  '@stackql/docusaurus-plugin-stackql-deploy-template',
];

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY)
// instead of the shared config's hotlinked main-site wordmark -
// self-contained assets, no cross-origin fetch. global.css swaps in the
// -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

// URL form. Keep the Docusaurus default (pages emitted as <route>/index.html)
// regardless of the shared config's trailingSlash setting, so GitHub Pages
// serves both /services/x/y and /services/x/y/. A trailingSlash: false site
// emits <route>.html instead, which returns 404 for the trailing-slash URL.
delete config.trailingSlash;

export default config;
