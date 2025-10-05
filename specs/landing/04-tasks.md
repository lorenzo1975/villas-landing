# Task Breakdown — From Plan to Implementation

## Bootstrap
- [ ] Init: `npx create-next-app@latest villas-landing --ts --eslint --app`
- [ ] Add Tailwind: follow Next.js guide; create `tailwind.config` and globals.
- [ ] Install shadcn/ui & generate base components.
- [ ] Install framer-motion and set up simple `FadeIn` and `Stagger` utilities.

## Structure
- [ ] `app/(site)/page.tsx` — sections mounted in order.
- [ ] `components/sections/*` — Hero, HowItWorks, AudienceGrid, Trust, Roadmap, Join, Press, Footer.
- [ ] `content/*` — copy in JSON/MDX for all sections.
- [ ] `lib/analytics.ts`, `components/cookie-consent.tsx` (stub).

## UI
- [ ] Typography scale and container paddings.
- [ ] Cards (shadcn Card) for personas & trust items.
- [ ] CTA buttons + iconography.
- [ ] Lead forms with zod validation.

## Motion
- [ ] Reveal on scroll for each section.
- [ ] Gentle parallax or gradient shimmer in hero.
- [ ] Reduce motion for prefers‑reduced‑motion.

## QA & Launch
- [ ] Lighthouse ≥ 95 on P, BP; A11y checks pass.
- [ ] Metadata: title/description/OG image placeholder.
- [ ] Deploy + smoke test; set up custom domain when ready.
