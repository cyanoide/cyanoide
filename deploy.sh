#!/usr/bin/env bash
set -e

# Build
npm run build

# Go into dist
cd dist

# Init a fresh repo in dist and force push to gh-pages
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy"
git remote add origin https://github.com/cyanoide/cyanoide.git
git push -f origin gh-pages

cd ..
