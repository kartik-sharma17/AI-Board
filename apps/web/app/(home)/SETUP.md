# Setup

This pass adds motion, so there's one new dependency:

```bash
npm install framer-motion
```

That's it — everything else (fonts, Tailwind v4 tokens) was already wired up in the previous pass.

## What's animated now

- **Hero** — headline/CTA fade up in sequence on load, three color blobs (violet / coral / sky) drift slowly behind the fold, sticky notes and cursor tags bob gently, the "Sketched by AI" badge pulses.
- **Logo strip** — infinite marquee, pauses on hover.
- **Feature cards / use-case cards / step cards** — fade up in a stagger as they scroll into view, lift slightly on hover.
- **How it works** — a rainbow progress line draws itself across the five steps on scroll.
- **Stats** — numbers count up from 0 when they enter the viewport.
- **CTA banner** — slow shifting gradient (violet → sky → coral).
- **Nav links / footer social icons** — each gets its own accent color on hover instead of one flat color.

All of it respects `prefers-reduced-motion` (see `globals.css`) and only plays once per element — nothing re-triggers on every scroll pass.
