# dxw Agent Skills 🤖

A repository of AI agent skills for dxw projects.

---

## Documentation site

The documentation site lives in the `/site/` folder and is built with [Eleventy](https://www.11ty.dev/). It requires Node.js >=24.0.0.

This repo uses [Yarn workspaces](https://yarnpkg.com/features/workspaces), so all commands are run from the repo root.

### Install dependencies

```bash
yarn install
```

### Run locally

```bash
yarn workspace site dev
```

This cleans the output directory, compiles Sass, builds the search index, then starts the Eleventy dev server and a Sass watcher in parallel. The site will be available at `http://localhost:8080` by default.

### Build for production

```bash
yarn workspace site build
```

This cleans the output directory, compiles Sass, builds the search index, and runs a full Eleventy build. Output is written to `site/_site/`.
