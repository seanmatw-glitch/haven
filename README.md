# Haven

> A dating app for people who have done their own work — and the matchmaker who already knows them.

This repo contains the full Haven design system and prototypes:

- **[Vision document](./haven-vision.html)** — the long-form case for Haven (start here)
- **[Live beta](./haven-beta.html)** — the interactive app, with Sage running on Claude
- **[App canvas](./haven-app.html)** — all 30+ screens laid out side-by-side
- **[Pitch deck](./haven-pitch.html)** — 12-slide investor deck
- **[Business plan](./haven-business-plan.html)** — full long-form plan (downloadable / printable)
- **[Brand film](./haven-brand-film.html)** — 30-second animated anthem
- **[Brand system v2](./haven-brand-v2.html)** — the chosen brand direction (Her-meets-Apple)
- **[Brand system v1](./haven-brand.html)** — original exploration

## Run locally

No build step. Any static server works:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:8000/haven-vision.html`.

## Deploy on GitHub Pages

1. Push to `main`
2. Repo → **Settings** → **Pages** → Source: **Deploy from branch** → `main` / `(root)`
3. Live in ~60s at `https://<your-username>.github.io/haven/haven-vision.html`

For a custom domain (e.g. `vision.haven.love`):
- Add a `CNAME` file containing `vision.haven.love`
- Point a CNAME DNS record at `<your-username>.github.io`
- Enable HTTPS in Pages settings

## Stack notes

- **No build.** HTML + JSX-via-Babel-in-browser. Fine for prototypes; recreate in Next.js/React for production.
- **Sage** runs on `window.claude.complete()` in the prototype sandbox. In production, replace with the Anthropic SDK called server-side.
- **Photos** are placeholder Unsplash stock. License or member-upload for production.
- **Fonts** are loaded from Google Fonts: Inter, Instrument Serif, DM Mono.

## File map

```
├── haven-vision.html       ← long-form vision document (the front door)
├── haven-beta.html         ← live interactive app
├── haven-app.html          ← static design canvas (all screens)
├── haven-pitch.html        ← 12-slide investor deck
├── haven-brand-film.html   ← animated anthem
├── haven-brand-v2.html     ← brand system (chosen)
├── haven-brand.html        ← brand system (v1)
│
├── vision/                 ← vision document sections
├── app/                    ← app screens + photos
├── brand/  brand-v2/       ← brand system canvases
│
├── animations.jsx          ← Stage/Sprite animation engine
├── deck-stage.js           ← slide-deck web component
├── design-canvas.jsx       ← pan/zoom presentation canvas
├── ios-frame.jsx           ← iPhone frame component
└── tweaks-panel.jsx        ← in-design tweak controls
```

See [`design_handoff_haven/README.md`](./design_handoff_haven/README.md) for the full developer handoff.

## Contact

Anaya Lyra · Naveen Iyer · `build@haven.love`
