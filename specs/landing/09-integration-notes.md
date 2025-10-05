# Integration Notes — shadcn, Tailwind, Motion

## Tailwind
Follow Next.js official guide to install Tailwind, add `content` globs to include `app/**/*.{ts,tsx}`, and import `globals.css` in `app/layout.tsx`.

## shadcn/ui
Run `pnpm dlx shadcn@latest init` (or `npx`) and generate:
`button input label textarea select card badge dialog toast sheet separator`

Keep components in `components/ui` and leverage `cn` utility for class merging.

## Framer Motion
Use client components for animated elements. Create simple helpers:
- `FadeIn` (viewport.once, slight y translate, opacity)
- `StaggerContainer` for section children

Respect prefers-reduced-motion.
