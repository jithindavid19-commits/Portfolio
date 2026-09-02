# Asset manifest

Drop files at these **exact paths and filenames** and they appear on the live
site automatically — no code changes needed. Until a file exists, that spot
shows a styled placeholder plate instead of a broken image.

Already in place:
- `/public/JITHIN_GEORGE_CV.pdf` ✅
- `photography/portrait.jpg` ✅ (About section headshot)
- `photography/travel-01.jpg` ✅ (Thailand longtail boats)
- `photography/nature-01.jpg` ✅ (Scottish highlands stream)
- `photography/city-01.jpg` ✅ (Liverpool, sunset)
- `photography/city-02.jpg` ✅ (Edinburgh, twilight)
- `photography/music-01.jpg` ✅ (festival crowd + stage lighting)
- `photography/music-02.jpg` ✅ (festival laser show)
- `social/content-grid.jpg` ✅ (Instagram reel/content grid, with view counts)
- `music/djing-poster.jpg` ✅ (real DJ photo — Pent Houzz — shown with a
  "Video coming soon" badge until `music/djing.mp4` lands)
- `campaigns/eleve-assignment.pdf` ✅ (full eleve × Airtel Xstream Box deck)
- `campaigns/magnifly-assignment.pdf` ✅ (full Magnifly × Shiamak Davar deck)

## Photography — Creative section (editorial gallery)
6 real photos are wired in (see above). To add more, drop a file at
`photography/<label>-0N.jpg` and add a matching entry to
`photography.categories` in `lib/data.ts`.

Any orientation works — the gallery crops to fit. Highest resolution version
you have (min. 1600px on the long edge) for a crisp full-bleed look.

## "How I Think" — take-home strategy assignments
Both real decks are in (see above), and both PDFs download from the site.
These are interview case studies, not executed campaigns (see `lib/data.ts`
for the honest framing) — eleve × Airtel Xstream Box, and Magnifly ×
Shiamak Davar Dance Academy, complete with real creator shortlists,
engagement rates and budget tables pulled straight from the decks.

If you'd rather show slide images instead of/alongside the PDF, add entries
like `{ type: "image", label: "...", path: "/assets/campaigns/eleve-01.jpg" }`
to that study's `assets` array in `lib/data.ts` and drop the matching file here.

## Proof of Work — reel grid + Instagram insights
Account-insights numbers are already live as native stat tiles (see
`lib/data.ts` → `instagramInsights`), shown alongside the reel/content grid.
Nothing pending here.

## Music / DJing
- `music/djing.mp4` — the DJ video, still pending. Keep it web-optimised
  (H.264, under ~30MB) so it loads fast; the player uses native browser
  controls. Until it's added, the real DJ photo (`djing-poster.jpg`) shows
  instead with a "Video coming soon" badge.

---

Image format: JPG or PNG, sRGB. If you only have HEIC/Canva exports, export
as JPG at 80–90% quality before dropping them in — keeps load times fast.
