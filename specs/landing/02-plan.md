# Technical Implementation Plan — Villas.co.th Landing (HOW)

## Stack
- **Next.js (App Router)** — new `create-next-app` TypeScript project.
- **Tailwind CSS** for utility-first styling.
- **shadcn/ui** for accessible, composable components.
- **Framer Motion** for micro‑interactions & section reveals.
- **Lucide** icons; **next-themes** for dark mode toggle (optional).

## Packages
- `tailwindcss` + `postcss` + `autoprefixer`
- `framer-motion`
- `class-variance-authority`, `tailwind-merge` (via shadcn/ui template)
- `lucide-react`
- `zod` (form validation), `react-hook-form` (via shadcn/ui)

## Setup Notes
- Run shadcn init and generate: button, input, label, textarea, select, card, badge, dialog, toast, sheet.
- Create `components/ui` via shadcn generator; keep components server‑safe by using client islands for motion.
- Use a `content/` folder (MD/MDX or JSON) for editable copy.

## Pages & Routes
- `/` Landing (single page sections)
- `/privacy`, `/terms` (stub content)
- `/thank-you` (post‑form submission)

## Analytics / Consent
- Basic page view (placeholder hook), cookie banner (non‑blocking).

## Deployment
- Vercel or Netlify; set correct headers & caching. Images via next/image.

## Performance
- Limit JS on landing; prefer CSS for simple effects. Lazy‑load non-critical assets.
