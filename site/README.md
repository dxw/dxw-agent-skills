# Skills Documentation Site

This folder contains an Eleventy (11ty) static documentation site for agent skills defined in `../.agents/skills`.

## Requirements

- Node.js 22 LTS (see `.nvmrc`)
- Yarn 4 (managed via Corepack and pinned in `package.json`)

## Commands

- `yarn dev`: Run local dev server.
- `yarn build`: Build static site to `_site`.
- `yarn lint`: Run linting, formatting checks, and skill metadata validation.
- `yarn format`: Auto-format project files.
- `yarn test`: Run smoke test.

## Styling with Sass

- Source Sass files live in `src/_scss`.
- `yarn sass:build` compiles `src/_scss/main.scss` to `src/assets/css/main.css`.
- `yarn dev` runs a Sass watcher and Eleventy server in parallel.
- `yarn build` compiles Sass before generating the static site.

## Skill Metadata

Skills are discovered from `../.agents/skills/*/SKILL.md`.

Frontmatter is expected to contain:

- `title`
- `summary`
- `category`
- `tags`
- `owner`
- `status`
- `last_reviewed`

Use `yarn validate:skills` to enforce this metadata.
