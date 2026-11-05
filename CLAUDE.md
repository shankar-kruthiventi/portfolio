# Portfolio (React 19 + TypeScript + Vite)

## Commands
- `pnpm dev` / `pnpm build` / `pnpm lint` / `pnpm typecheck` / `pnpm test`
- Run typecheck + lint before saying a task is done.

## Stack & conventions
- Function components, TS strict, no `any`. CSS variables for theming.
- Motion: Framer Motion; respect `prefers-reduced-motion`.
- Folder layout: `src/components`, `src/sections`, `src/data` (typed content), `src/hooks`.

## Content rules
- All copy and metrics come from `docs/content.md`. Never invent numbers or employers.
- Case studies follow Context → Engineering → Outcome.

## Design rules
- Light and dark themes via CSS variables; both must pass WCAG AA contrast.
- Verify against screenshots in `docs/design/` at 390px and 1440px.

## Do not
- Add dependencies without asking. Touch `docs/`. Commit directly to main.