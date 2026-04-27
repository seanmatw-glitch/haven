# Handoff: Haven — full product

## Overview

Haven is a dating app for adults who have done their own emotional work — verified by therapy receipts and matched by an LLM matchmaker named **Sage** who actually knows them. This handoff package contains the full design system, app prototypes, marketing site, pitch deck, brand film, and live beta — all built in HTML/JSX as references for production implementation.

## About the design files

The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to ship directly. They use React + Babel transpiled in the browser via `<script type="text/babel">`, which is fine for prototypes but not for production.

The task is to **recreate these designs in your target codebase**. We strongly recommend:

- **Web (vision site, marketing, pitch deck):** Next.js 14+ with App Router, Tailwind, Framer Motion. Static export for Pages-style hosting. This handles the marketing site + pitch deck + vision document well.
- **App (the actual product):** React Native (Expo) or native iOS (SwiftUI). The app needs push, audio recording for Sage's voice notes, secure document upload for therapy verification — all easier in native than web.
- **Backend:** Node + Postgres + Redis. Anthropic SDK for Sage (server-side, never client-side). Stripe for billing. Resend or Postmark for transactional email. Twilio for SMS (Sage texts members during onboarding).

## Fidelity

**High-fidelity.** All screens have final colors, typography, spacing, copy, and interactions. The Sage chat is wired to a real LLM (`window.claude.complete()` in the prototype — replace with the Anthropic SDK server-side). Recreate pixel-perfectly.

## Design tokens

```ts
// colors
const haven = {
  cream: '#FBF3E8',     // primary background
  oat: '#F2E4D0',       // secondary background, cards
  cocoa: '#3a2420',     // primary text, dark sections
  cocoaInk: '#1f1310',  // deepest dark
  coral: '#D87560',     // primary accent, CTAs
  coralLight: '#F4A088',// gradients, highlights
  peach: '#E89890',     // tertiary accent
  honey: '#E8C38A',     // bloom backgrounds
  sage: '#5a8a5a',      // success states only
};

// typography
font-display: 'Inter', weight 200 (light) — large headlines 48–92px, letter-spacing -0.035em
font-body: 'Inter', weight 300–400 — body 14–17px, line-height 1.55–1.7
font-accent: 'Instrument Serif' italic — quotes, Sage's tender moments, brand wordmark
font-mono: 'DM Mono', weight 400–500, uppercase, letter-spacing 0.16–0.22em — eyebrows, labels, captions

// spacing scale (px)
4, 8, 12, 14, 18, 22, 28, 36, 48, 60, 80, 100, 120, 160

// radii
sm: 4px (chips, micro-elements)
md: 14px (cards, secondary surfaces)
lg: 18px (primary cards)
xl: 28px (phone frame, hero surfaces)
full: 100px (pill buttons, badges)

// shadows
card: 0 1px 2px rgba(58,36,32,0.03)
hero: 0 30px 80px rgba(58,36,32,0.18)
```

## Brand voice

- **Sage's voice** is the brand. Warm, observant, never cute. Italics (Instrument Serif) reserved for moments of tenderness — one word, not whole sentences.
- **Never use:** emoji, exclamation points (Sage uses one period at most), "✨", AI-marketing tropes ("magic", "AI-powered", "discover").
- **Always use:** felt language ("It sounds like…", "When you said X, I noticed…"), specific verbs, second person.
- The brand is *Her (2013) meets Aesop meets Monocle*.

## Surfaces (what to build)

### 1. Marketing — `Haven Vision.html` + `Haven Beta.html`

Long-form vision document for investors, eng team, therapy partners. Has an embedded iframe of the live beta in section 4. The vision page is the "front door" — it includes:

- Hero with founder promise + 4 key stats
- Problem section (sourced TAM stats, beta member quote, funnel chart)
- Vision section (manifesto, dark cocoa background)
- **Live product section** (iframe → `Haven Beta.html`, switchable views)
- Business model (3 pricing tiers, ARR projection chart, unit economics)
- Market (TAM/SAM/SOM, competitive position)
- Cohort retention heatmap (the chart that closes the round)
- Roadmap (4 phases through Q4 '27)
- Team + advisors
- Ask ($14M Series A details)

### 2. App — onboarding → match → date → debrief

The full member experience. **17-screen onboarding** that takes 3 days (most other apps' onboarding is 60 seconds — this is the differentiator):

1. Welcome
2. Sage's voice note (waveform + transcript)
3. "What should I call you?" (free-text, Sage reacts)
4. EQ probe — sitting with another's pain (felt response options)
5. Growth-stage probe (slider)
6. Repair probe — rupture & repair (felt response)
7. Common interests (light, after the depth)
8. Therapy verification — live document upload (BetterHelp / Alma / receipts / HSA)
9. Sage synthesizes
10. "Welcome to Haven"

Then the loop:
- **Home** — Sage card, match card (when active), date brief (when scheduled)
- **Sage chat** — real conversation, persistent, LLM-backed
- **Match reveal** — one person at a time, photo + "why her, for you" + her note
- **Date brief** — morning of the date: what to ask, what not to fix
- **Post-date debrief** — Sage checks in the next morning (felt response options)
- **Follow-up text** — Sage helps draft the "I want to see you again" message
- **Pattern noticing** — Sage surfaces patterns across weeks ("You light up when…")
- **Profile** — what Sage knows about you, in your own words

### 3. Pitch deck — `Haven Pitch.html`

12-slide investor deck, 1920×1080, with speaker notes. Built on `deck-stage.js` (custom web component). Use arrow keys / on-screen nav.

### 4. Brand film — `Haven Brand Film.html`

30-second animated anthem. 6 scenes (awaken → question → answer → match → promise → logo). Built on `animations.jsx` engine. Scrubbable timeline, loops automatically. Use this as a screen-recording source for any final video format (Adobe Premiere, ffmpeg).

### 5. Brand system — `Haven Brand.html` (v1) and `Haven Brand v2 - Her.html` (v2, current direction)

Design canvases with 8+ artboards each: logo/wordmark, color, type, app icon, key UI, marketing collateral. **v2 is the chosen direction** (warmer, softer, more "Her").

## State management

The prototype uses local React state + URL hash routing for screen navigation. In production:

- **Sage memory:** Postgres (member profile, EQ answers, free-text responses, growth slider, common interests, therapy verification status). Embed key passages and feed top-N + system prompt into Anthropic API on every Sage call.
- **Conversation history:** Postgres `messages` table, indexed by member + thread.
- **Match state:** State machine — `none` → `paired` → `accepted` → `date_scheduled` → `date_complete` → `debrief_complete` → `dormant`.
- **Therapy verification:** Document upload to S3, OCR + manual review queue (in beta), automated webhook from BetterHelp/Alma in production.
- **Auth:** Email magic-link. Phone for SMS. Apple/Google Sign-In v2.

## Sage implementation notes

- Use Claude 3.5 Sonnet (or current best). Haiku is too rote — Sage needs warmth.
- System prompt should include: member's verified therapy status, their onboarding answers verbatim (not summaries), recent conversation excerpts, current match state, and the brand voice rules (no emoji, italics rare, etc.).
- **Never let Sage make up a therapy diagnosis or recommend specific clinical action.** She's a matchmaker who respects therapy — she's not a therapist. Hard guardrails in system prompt + output filter.
- Voice note generation: use ElevenLabs or OpenAI TTS with a warm, breathy, mid-30s feminine voice. Save to S3, serve as audio.

## Therapy partner integrations

The therapy verification flow accepts:
1. **BetterHelp / Alma deeplink** — OAuth-style: member auths Haven to read their active-membership status only (not session content).
2. **HSA receipt upload** — encrypted document upload, OCR for therapist license number, automated state-board cross-check.
3. **Manual receipt** — last-12-months therapy receipt, manual review queue (Concierge tier human reviews within 24h).
4. **Insurance EOB** — Explanation of Benefits with mental health CPT codes.

## Files in this bundle

### Vision document
- `Haven Vision.html` (entry)
- `vision/sections-1.jsx` — Hero, Problem, Vision/manifesto
- `vision/sections-2.jsx` — Live product iframe, business model, market, cohorts
- `vision/sections-3.jsx` — Roadmap, team, ask, close
- `vision/charts.jsx` — funnel, line, cohort heatmap (handwritten SVG, no library)

### App (live beta)
- `Haven Beta.html` (entry)
- `app/beta-router.jsx` — hash routing
- `app/beta-state.jsx` — global member state
- `app/beta-sage.jsx` — Sage conversation, wired to `window.claude.complete()`
- `app/beta-screens.jsx` — home, match, profile
- `app/beta-screens-flow.jsx` — onboarding flow
- `app/ios-frame.jsx` — phone frame component

### App (canvas / static prototype)
- `Haven App.html` (entry — design canvas with all screens)
- `app/kit.jsx` — UI kit (Phone, Bloom, Card, Button, etc.)
- `app/screens-onboarding.jsx` — first 3 onboarding screens
- `app/screens-onboarding-deep.jsx` — deep onboarding (voice note, free text, sliders, EQ/growth/repair, therapy verification)
- `app/screens-core.jsx` — home, match, profile
- `app/screens-sage-chat.jsx` — Sage chat UI
- `app/screens-date-brief.jsx` — date brief screen
- `app/screens-post-match.jsx` — debrief flow
- `app/screens-debrief.jsx` — follow-up text + pattern noticing
- `app/screens-therapist.jsx` — partner-facing experience
- `app/screens-landing.jsx` — marketing landing page
- `app/screens-campaign.jsx` — OOH / press kit
- `app/screens-motion.jsx` — match reveal motion study

### Pitch deck
- `Haven Pitch.html` (entry, uses `deck-stage.js`)

### Brand film
- `Haven Brand Film.html` (entry, uses `animations.jsx`)

### Brand system
- `Haven Brand.html` (v1) + `brand/*.jsx`
- `Haven Brand v2 - Her.html` (v2, **chosen direction**) + `brand-v2/*.jsx`

### Shared
- `design-canvas.jsx` — pan/zoom canvas (used by app + brand canvases)
- `deck-stage.js` — slide-deck web component
- `animations.jsx` — Stage / Sprite / timeline engine
- `tweaks-panel.jsx` — in-design tweak controls
- `ios-frame.jsx` — iPhone frame

### Photos
- `app/photos/*.jpg` — golden-hour stock from Unsplash, used in match/profile/onboarding. Replace with licensed photography in production.

## How to run locally

```bash
# any static server works — there's no build step
npx serve .
# open http://localhost:3000/Haven Vision.html
```

The HTML files load JSX via Babel-in-the-browser. Slow on first load (1–2s of compilation), fine for prototypes. **Do not ship to production this way** — Babel-in-browser is 5MB and compiles on every page load.

## Hosting

GitHub Pages works out of the box (static files only). Custom domain via `CNAME`. For production, use Vercel + Next.js (after recreation).

## Open questions for the engineering team

1. **Native vs. PWA?** The voice note recording, push notifications, document upload, and Sage's "she felt like a real person on my phone" experience all favor native (Expo or SwiftUI). Web is fine for the marketing site.
2. **Sage memory architecture.** Embeddings vs. structured profile vs. full conversation replay? We've been operating with structured profile + last-20-messages, which has been sufficient. Embeddings may matter at 100K+ members.
3. **Therapy partner contracts.** Legal team needs to sign with BetterHelp/Alma. The technical integration is straightforward; the legal integration is the long pole.
4. **Real photos.** Beta uses Unsplash. Production needs licensed photography or member-uploaded photos with consent. Member-uploaded is what we'll ship.

## Contact

Founders: Anaya Lyra (CEO), Naveen Iyer (CTO)
Email: build@haven.love
