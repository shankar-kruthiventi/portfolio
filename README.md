# Sankara Rao Kruthiventi · Portfolio

> ## 🌐 Live at **[sankarbuilds.io](https://sankarbuilds.io)**
>
> This repository is the source of the site hosted at <https://sankarbuilds.io>.

The personal portfolio of Sankara Rao Kruthiventi, Senior Full-Stack Engineer. It is a single-page site built with React, TypeScript and Vite.

## Features

- **Sections:** introduction, impact, experience and contact
- **Light and dark themes** built on CSS variables. Dark is the default, and the visitor's choice is saved in the browser.
- **Reduced motion:** respects the `prefers-reduced-motion` setting
- **Résumé download** as a PDF

## Tech stack

| Area       | Tools                                  |
| ---------- | -------------------------------------- |
| UI         | React 19, TypeScript (strict)          |
| Build      | Vite 7                                 |
| Styling    | Plain CSS with CSS variables           |
| Testing    | Vitest, Testing Library, jsdom         |
| Code style | ESLint, Prettier                       |
| Hosting    | Cloudflare (see `wrangler.jsonc`)      |

## Run it locally

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 20.19 or later in the 20.x line, or 22.12 or later
- [pnpm](https://pnpm.io/) 10 (`npm install -g pnpm@10`)

### Install and start

```bash
git clone https://github.com/shankar-kruthiventi/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open the address that Vite prints in the terminal, normally <http://localhost:5173>.

### Production build

```bash
pnpm build
pnpm preview
```

`pnpm build` type-checks the app and writes the static site to `dist/`. `pnpm preview` serves that build locally, normally at <http://localhost:4173>.

## Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Starts the development server             |
| `pnpm build`     | Type-checks the app and builds to `dist/` |
| `pnpm preview`   | Serves the production build locally       |
| `pnpm lint`      | Runs ESLint                               |
| `pnpm typecheck` | Type-checks the app and tool config       |
| `pnpm test`      | Runs the tests once                       |
| `pnpm format`    | Formats the files with Prettier           |

## Project structure

```text
├── docs/            Content source and design references
├── public/          Static files (favicon, résumé)
├── src/
│   ├── components/  Shared UI, such as the header and theme toggle
│   ├── data/        Typed site content
│   ├── hooks/       React hooks
│   ├── sections/    Page sections
│   ├── styles/      Theme tokens and global CSS
│   └── test/        Test setup
├── index.html       HTML entry point
└── wrangler.jsonc   Cloudflare hosting configuration
```

## Deployment

The production site is served at [sankarbuilds.io](https://sankarbuilds.io) through Cloudflare. [`wrangler.jsonc`](wrangler.jsonc) serves the contents of `dist/` as static assets, with single-page-application fallback for unknown paths.
