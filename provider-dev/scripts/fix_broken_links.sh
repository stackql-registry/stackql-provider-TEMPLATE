# fix relative broken links in generated markdown files
sed -i 's|(#tag/Domain-Records)|https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/|g' "provider-dev/openapi/src/digitalocean/v00.00.00000/services/compute.yaml"
