# Jithin George — Portfolio

A dark, cinematic, editorial personal portfolio built for UK Digital Marketing /
Influencer Marketing / Social Media / Content Marketing roles.

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, with Framer Motion for
scroll-triggered reveals and micro-interactions, and Lenis for smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding real photos, campaign screenshots, the DJ video and CV

The site already renders correctly with elegant placeholder plates for every
missing asset. Drop the real files at the exact paths listed in
[`public/assets/README.md`](public/assets/README.md) and they appear
automatically — no code changes required.

## Structure

- `app/` — root layout, page, metadata, sitemap/robots
- `components/layout/` — nav, custom cursor, smooth scroll, loader, footer
- `components/sections/` — one file per homepage section
- `components/ui/` — reusable primitives (magnetic button, scroll reveals, image/video fallback frames)
- `lib/data.ts` — every piece of copy and data on the site, sourced from Jithin's CV and existing portfolio
- `public/assets/` — where real media assets go (see manifest above)

## Content accuracy

All experience, dates and figures in `lib/data.ts` are taken directly from
Jithin's CV and existing Canva portfolio — nothing is invented. Update that
file (not individual components) to change copy.
