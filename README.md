# Phantom Velocity — Dealership (Next.js + Tailwind)

A McLaren-inspired luxury dealership mock built with Next.js (App Router), Tailwind CSS, and a 3D spinner using @react-three/fiber.

## Quickstart

```bash
pnpm i   # or: npm i  OR  yarn
pnpm dev # or: npm run dev
```

Then open http://localhost:3000

## Features
- Glassmorphism hero with responsive layout (mobile-first)
- Inventory cards with faux specs
- Appointment form (demo — logs to console & shows toast)
- **3D Spinner**: simple stylized "car" model rotating via react-three-fiber + drei
- Accessible and mobile-friendly (sticky header, larger tap targets, responsive type & spacing)

## AI Renders (optional enhancement)
You can drop AI-generated car images into `/public/renders/` and replace each SVG silhouette block in `app/page.tsx` with an `<Image>` from `next/image`. Suggested prompts:
- "Ultra-sleek electric hypercar studio render, carbon fiber body, dramatic rim lighting, black background, 3/4 front view, photorealistic"
- "Track-ready exotic car render, neon purple accents, cinematic lighting, glossy reflections"

Example snippet to replace a card image:
```tsx
import Image from "next/image";
// ...
<div className="relative h-56">
  <Image src="/renders/spectre.png" alt="Phantom Spectre" fill className="object-cover" priority />
</div>
```

## Production Notes
- Tailwind design tokens live in `tailwind.config.js`.
- Keep page weight low: lazy-load heavy components; the 3D Canvas is small and non-zoom to reduce CPU.
- For a real lead form, connect to an API route at `app/api/leads/route.ts` and post the form data.
