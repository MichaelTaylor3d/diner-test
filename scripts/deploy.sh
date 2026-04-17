#!/usr/bin/env bash
# Build + sync + cache-invalidate. Requires AWS default profile.
set -euo pipefail

BUCKET="welcome-diner-3afbb108"
DIST_ID="E13SK9EO0YEJUS"
PROFILE="default"

echo "→ next build"
rm -rf out .next
npm run build

echo "→ s3 sync"
aws s3 sync out/ "s3://${BUCKET}/" --delete --profile "${PROFILE}"

echo "→ cloudfront invalidation"
aws cloudfront create-invalidation \
  --distribution-id "${DIST_ID}" \
  --paths "/*" \
  --profile "${PROFILE}" \
  --query 'Invalidation.Id' \
  --output text

echo "done → https://do7edupb3refa.cloudfront.net"
