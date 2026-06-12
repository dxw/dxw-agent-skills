---
layout: layouts/doc.njk
title: Getting Started
permalink: "/getting-started/index.html"
---

## Prerequisites

Before installing dependencies or running the site, make sure these tools are available.

### 1. Install Node.js 24.x

This project requires Node 24 (see `.nvmrc` and `package.json` engines).

If you use `nvm`:

```bash
cd site
nvm install
nvm use
```

If you do not use `nvm`, install Node 24 with your preferred package manager and confirm `node --version` returns `v24.x`.

### 2. Enable Corepack and Yarn

Yarn is pinned via the `packageManager` field in `package.json`. Enable Corepack so the correct Yarn version is used automatically.

```bash
corepack enable
corepack prepare yarn@stable --activate
```

### 3. Verify your toolchain

```bash
node --version
yarn --version
```

Expected versions:

1. Node: `v24.x` (required by `.nvmrc` and `package.json` engines)
2. Yarn: `4.x` (managed via Corepack and `packageManager`)

## Workflows

### 1. First-time setup

Run this once after cloning the repository:

```bash
cd site
yarn install
```

### 2. Local development

```bash
cd site
yarn dev
```

The dev command builds Sass, generates the search index, and starts an Eleventy dev server.

### 3. Production build

```bash
cd site
yarn build
```

Build output is written to `_site/`.

## Validate skill metadata

```bash
cd site
yarn validate:skills
```

## Success checklist

Use this to confirm your environment is working end to end:

1. `yarn dev` starts without errors and serves the site locally.
2. `yarn build` completes and generates output in `_site/`.
3. `yarn validate:skills` finishes with no frontmatter validation errors.

## Common setup issues

### Node version is too old

If commands fail with an engines error, switch to Node 24 and reinstall dependencies.

```bash
cd site
nvm use
yarn install
```

### Yarn is not found or wrong major version

Re-enable Corepack and activate Yarn, then check the version.

```bash
corepack enable
corepack prepare yarn@stable --activate
yarn --version
```

### Clean reinstall after dependency issues

If startup fails after dependency changes, remove installed artifacts and reinstall.

```bash
cd site
rm -rf node_modules .yarn/install-state.gz
yarn install
```
