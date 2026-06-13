# AGENTS.md

## Cursor Cloud specific instructions

### What this project is
Vexilian is a single planned product: a premium Latvian-language hospitality
landing page + lead-audit funnel. The repo currently contains the **design
foundation** (React/TSX primitives in `src/components/foundation/` and CSS
design tokens in `src/styles/vexilian-foundation.css`) plus planning docs in
`docs/`. The final marketing landing page is not built yet.

A minimal **Vite + React + TypeScript** dev environment wraps this foundation.
`src/App.tsx` is a development showcase harness that renders the foundation
primitives so they can be viewed in a browser — it is **not** the final
landing page. Treat the `docs/` doctrine as the source of truth when building
real pages (write copy in Latvian; follow the creative direction).

### Commands (see `package.json` scripts)
- Dev server: `npm run dev` (Vite, serves on `0.0.0.0:5173`).
- Lint: `npm run lint` (ESLint flat config, typescript-eslint).
- Type-check only: `npm run typecheck`.
- Build: `npm run build` (runs `tsc -b` then `vite build`).
- Preview a production build: `npm run preview` (serves on `0.0.0.0:4173`).

### Non-obvious notes
- The dev server is intentionally bound to `0.0.0.0` in `vite.config.ts` so it
  is reachable inside the Cloud Agent VM; use `http://localhost:5173/`.
- CSS is imported as a side effect in `src/main.tsx`. TypeScript only resolves
  the `*.css` import because of the `/// <reference types="vite/client" />`
  line in `src/vite-env.d.ts`; do not remove it or `tsc -b` will fail.
- The existing foundation files (`src/components/foundation/*`,
  `src/styles/vexilian-foundation.css`) are the canonical design system. Prefer
  extending/composing them over rewriting.
- The design tokens reference licensed fonts ("Open Sauce", "Berthold Akzidenz
  Grotesk") that are not bundled; browsers fall back to system sans-serif,
  which is expected in this environment.
