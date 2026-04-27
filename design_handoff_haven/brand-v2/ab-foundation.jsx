// Haven v2 — "Her" artboards

// ═══════════════════════════════════════════════════════════════
// COVER
// ═══════════════════════════════════════════════════════════════
function V2_Cover() {
  return (
    <BloomBg tone="coral" style={{ width: '100%', height: '100%' }}>
      <div style={{ padding: 96, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', color: '#3a2420' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: '"DM Mono", monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
          <span>Haven · Brand v2</span>
          <span>Her, re-read · 2026</span>
        </div>

        <div style={{ display: 'flex', gap: 96, alignItems: 'center' }}>
          <GlowOrb size={380} hues={['coral', 'peach', 'lavender']} />
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 160, lineHeight: 0.9, letterSpacing: '-0.05em', marginBottom: 28, color: '#3a2420' }}>Haven</div>
            <div style={{ fontFamily: '"Instrument Serif", "Fraunces", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 32, lineHeight: 1.3, maxWidth: 560, color: '#5a3424', opacity: 0.85 }}>
              The quiet of a well-designed room. A friend texting at the right moment. <em>Something is watching out for you.</em>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.55 }}>
          <span>Soft · Warm · Present</span>
          <span>01 / 10</span>
        </div>
      </div>
    </BloomBg>
  );
}

// ═══════════════════════════════════════════════════════════════
// COLOR
// ═══════════════════════════════════════════════════════════════
function V2_Swatch({ name, hex, note }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ aspectRatio: '1 / 1.1', background: hex, borderRadius: 20, boxShadow: `0 10px 30px ${hex}55, inset 0 0 0 1px rgba(0,0,0,0.03)` }} />
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 500, color: '#3a2420' }}>{name}</div>
        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#8a6a58', letterSpacing: '0.04em', marginTop: 2 }}>{hex.toUpperCase()}</div>
        {note && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8a6a58', marginTop: 6, lineHeight: 1.5 }}>{note}</div>}
      </div>
    </div>
  );
}

function V2_Color() {
  return (
    <div style={{ background: '#FBF3E8', padding: 80, height: '100%', boxSizing: 'border-box', color: '#3a2420' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>02 — Color</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 72, lineHeight: 0.95, letterSpacing: '-0.035em', marginBottom: 12, maxWidth: 900 }}>
        Warm, almost <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400 }}>edible</em> — never clinical.
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6a4f3c', maxWidth: 620, lineHeight: 1.65, marginBottom: 56 }}>
        Think a sun-filled Brooklyn apartment at 4pm. Coral, peach, honey-cream. Glow instead of saturation. Color shows up as atmosphere, not as flags.
      </div>

      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>Ground tones</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 56 }}>
        <V2_Swatch name="Haven Cream" hex="#FBF3E8" note="Primary surface. Warm, softly alive." />
        <V2_Swatch name="Oat" hex="#F2E4D0" note="Card surfaces, soft divisions." />
        <V2_Swatch name="Clay" hex="#C9A088" note="Mid-tone, photography frames." />
        <V2_Swatch name="Cocoa" hex="#3a2420" note="Text. Never pure black." />
      </div>

      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>Glow palette — brand's emotional spine</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, marginBottom: 56 }}>
        <V2_Swatch name="Coral" hex="#F4A088" note="Sage, CTAs, the glow color." />
        <V2_Swatch name="Peach" hex="#F6C8A8" note="Soft highlights, halos." />
        <V2_Swatch name="Blush" hex="#EEA99B" note="Human moments — match reveals." />
        <V2_Swatch name="Honey" hex="#E8C38A" note="Warm accents." />
        <V2_Swatch name="Lilac Dust" hex="#D4B8D8" note="The psychedelic whisper." />
      </div>

      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>Atmosphere — how color actually appears</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <BloomBg tone="coral" style={{ aspectRatio: '1.4/1', borderRadius: 20 }}>
          <div style={{ position: 'absolute', bottom: 16, left: 20, fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#3a2420aa', letterSpacing: '0.08em' }}>coral · primary</div>
        </BloomBg>
        <BloomBg tone="dusk" style={{ aspectRatio: '1.4/1', borderRadius: 20 }}>
          <div style={{ position: 'absolute', bottom: 16, left: 20, fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#3a2420aa', letterSpacing: '0.08em' }}>dusk</div>
        </BloomBg>
        <BloomBg tone="honey" style={{ aspectRatio: '1.4/1', borderRadius: 20 }}>
          <div style={{ position: 'absolute', bottom: 16, left: 20, fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#3a2420aa', letterSpacing: '0.08em' }}>honey</div>
        </BloomBg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TYPE
// ═══════════════════════════════════════════════════════════════
function V2_Type() {
  return (
    <div style={{ background: '#FBF3E8', padding: 80, height: '100%', boxSizing: 'border-box', color: '#3a2420' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>03 — Typography</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 72 }}>
        <div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 16 }}>UI + Display — Inter (light)</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 160, lineHeight: 0.85, letterSpacing: '-0.05em' }}>Aa</div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#8a6a58', marginTop: 18, lineHeight: 1.7 }}>300 · 400 · 500<br />Used everywhere. Light weights read warm at scale.</div>
        </div>
        <div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 16 }}>Accent — Instrument Serif italic</div>
          <div style={{ fontFamily: '"Instrument Serif", "Fraunces", serif', fontStyle: 'italic', fontWeight: 400, fontSize: 160, lineHeight: 0.85, letterSpacing: '-0.02em' }}>Aa</div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#8a6a58', marginTop: 18, lineHeight: 1.7 }}>Italic, used sparingly.<br />For Sage's moments of tenderness — a word, a phrase.</div>
        </div>
      </div>

      <div style={{ height: 1, background: '#E8D8C0', marginBottom: 56 }} />

      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 80, lineHeight: 1, letterSpacing: '-0.035em', maxWidth: 1100, marginBottom: 28 }}>
        I think you should meet <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>Maya</em> — she'd make you laugh.
      </div>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, color: '#8a6a58', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 56 }}>Inter 300 · Instrument Serif italic · 80 / 1.0</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
        <div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>H1 — Inter 56/1.05</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.035em' }}>Let's take<br />our time<br />with this.</div>
        </div>
        <div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>Body — Inter 16/1.65</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: '#4a3a30' }}>
            Sage writes to you once or twice a week. No feed, no swipe. When someone arrives, they arrive with a reason — and enough time to notice it.
          </div>
        </div>
        <div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>Mono · labels — DM Mono 11</div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, lineHeight: 1.7, color: '#6a4f3c', letterSpacing: '0.04em' }}>
            TUE · 07:42 AM<br />
            BROOKLYN, NY<br />
            INTRODUCTION · 0034<br />
            SAGE · WARM
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { V2_Cover, V2_Color, V2_Type });
