# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts App Router pages/layout; route UX stays self-contained.
- `src/components` groups reusable UI, forms, and layout primitives by feature folder (`layout/`, `ui/`).
- `src/sections` defines landing sections composed in `app/page.tsx`; add new sections here for reuse.
- `src/lib` centralizes analytics, feature flags, content helpers, and Zod form schemas.
- `content/` stores JSON copy fed into sections, while `public/` holds static assets; specs for intent live under `specs/`.

## Content & Configuration Tips
- Update `content/*.json` before JSX so copy diffs stay clean.
- Toggle experiments in `src/lib/feature-flags.ts` instead of inline conditionals.
- Adjust shared tokens via `tailwind.config.ts` or `app/globals.css` to keep them consistent.

## Build, Test, and Development Commands
- `npm install` respects the bundled lockfile.
- `npm run dev` starts Next.js + Turbopack with Tailwind HMR.
- `npm run build` verifies the production bundle before merging config-heavy changes.
- `npm run start` serves the optimized build for pre-release QA.
- `npm run lint` runs the Next.js + TypeScript rules; resolve warnings ahead of review.
- `npm run test` executes Vitest (jsdom); `npm run test:watch` is for local loops and drops reports in `coverage/`.

## Coding Style & Naming Conventions
- Strict TypeScript is enforced; surface types explicitly on exported utilities.
- Keep two-space indentation and camelCase/PascalCase naming already in use.
- Import via the `@/` alias; only reach for relative paths within a feature folder.
- Favor Tailwind utilities and shadcn/ui primitives; limit custom CSS to `globals.css`.

## Testing Guidelines
- Vitest + Testing Library cover units and DOM flows; maintain the configured 80% line coverage.
- Co-locate `*.test.ts(x)` with implementation files and keep imports aligned with runtime aliases.
- Extend `vitest.setup.ts` for shared helpers, rely on jest-dom matchers, and mock feature flags or fetches lightly.
- Cross-check automated output against `specs/landing/*.md` and document any manual scenarios in PRs.

## Commit & Pull Request Guidelines
- Follow the conventional commit prefixes in history (`feat:`, `refactor:`, etc.) scoped to the affected surface.
- Keep commits focused and include copy updates alongside the consuming components.
- PRs should link spec tasks, summarize UI deltas, attach screenshots, and list manual QA notes for reviewers.
