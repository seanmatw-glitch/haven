// Haven — artboards for the design canvas

// ═══════════════════════════════════════════════════════════════
// COVER
// ═══════════════════════════════════════════════════════════════
function AB_Cover() {
  return (
    <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark={true} style={{ width: '100%', height: '100%', color: 'var(--cream)' }}>
      <div style={{ padding: 80, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75 }}>
          <span>Haven — Brand System v0.1</span>
          <span>2026 / New York</span>
        </div>
        <div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontVariationSettings: '"SOFT" 100', fontSize: 220, lineHeight: 0.88, letterSpacing: '-0.045em', marginBottom: 28 }}>
            Haven
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontSize: 32, lineHeight: 1.35, maxWidth: 780, opacity: 0.92 }}>
            A matchmaker that knows you — <em style={{ fontStyle: 'italic' }}>quietly, patiently</em>,<br />
            the way a friend might.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.65 }}>
          <span>Warm · Intentional · Luminous</span>
          <span>01 / 12</span>
        </div>
      </div>
    </AuraBg>
  );
}

// ═══════════════════════════════════════════════════════════════
// COLOR SYSTEM
// ═══════════════════════════════════════════════════════════════
function Swatch({ name, hex, value, textOn = 'dark', note }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{
        aspectRatio: '1 / 1.15', background: hex, borderRadius: 4,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)',
        padding: 16, display: 'flex', alignItems: 'flex-end',
        color: textOn === 'dark' ? '#1F1714' : '#F5EFE6',
        fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.08em',
      }}>{hex.toUpperCase()}</div>
      <div>
        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, fontWeight: 500, color: 'var(--ember)' }}>{name}</div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#6b5d4b', letterSpacing: '0.05em', marginTop: 2 }}>{value}</div>
        {note && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#8a7a60', marginTop: 6, lineHeight: 1.45 }}>{note}</div>}
      </div>
    </div>
  );
}

function AB_Color() {
  return (
    <div style={{ background: 'var(--cream)', padding: 72, height: '100%', boxSizing: 'border-box', color: 'var(--ember)' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 18 }}>02 — Color</div>
      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 72, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 10 }}>Golden hour,<br />in a warm room.</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6b5d4b', maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
        Never pure black or white. Warm → warmer gradients only. Saturated color lives in the brand's aura layer; UI surfaces stay in the cream/ember family.
      </div>

      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 16 }}>Foundation</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 48 }}>
        <Swatch name="Haven Cream" hex="#F5EFE6" value="oklch(94.5% .015 80)" textOn="dark" note="Primary surface. Warm off-white, never paper." />
        <Swatch name="Deep Ember" hex="#1F1714" value="oklch(18% .012 45)" textOn="light" note="Text, dark-mode ground. Warm near-black." />
        <Swatch name="Signal Amber" hex="#D4A574" value="oklch(77% .09 75)" textOn="dark" note="The glow. CTAs, Sage's presence, highlights." />
      </div>

      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 16 }}>Aura — Saturated, grainy, atmospheric</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginBottom: 48 }}>
        <Swatch name="Dusk Rose" hex="#C98B7A" value="oklch(68% .06 36)" textOn="dark" />
        <Swatch name="Sage Green" hex="#7A8471" value="oklch(55% .025 135)" textOn="light" />
        <Swatch name="Ink Plum" hex="#3D2E3F" value="oklch(28% .02 330)" textOn="light" />
        <Swatch name="Aura Electric" hex="#2B3FC4" value="oklch(40% .19 270)" textOn="light" note="Brand only. Never UI." />
        <Swatch name="Signal Ember" hex="#C14A2E" value="oklch(55% .16 38)" textOn="light" note="Muted terracotta — errors, never hard red." />
      </div>

      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 16 }}>The Aura — how saturated color actually shows up</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <AuraBg hues={['amber','rose','plum','electric']} dark style={{ aspectRatio: '1.3/1', borderRadius: 4 }}>
          <div style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#F5EFE6cc', letterSpacing: '0.08em' }}>dusk · primary</div>
        </AuraBg>
        <AuraBg hues={['amber','rose','amber','rose']} dark style={{ aspectRatio: '1.3/1', borderRadius: 4 }}>
          <div style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#F5EFE6cc', letterSpacing: '0.08em' }}>tender</div>
        </AuraBg>
        <AuraBg hues={['plum','electric','plum','rose']} dark style={{ aspectRatio: '1.3/1', borderRadius: 4 }}>
          <div style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#F5EFE6cc', letterSpacing: '0.08em' }}>late</div>
        </AuraBg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TYPE SPECIMEN
// ═══════════════════════════════════════════════════════════════
function AB_Type() {
  return (
    <div style={{ background: 'var(--cream)', padding: 72, height: '100%', boxSizing: 'border-box', color: 'var(--ember)' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 18 }}>03 — Typography</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, marginBottom: 64 }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 16 }}>Display — Fraunces</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontVariationSettings: '"SOFT" 100', fontSize: 144, lineHeight: 0.85, letterSpacing: '-0.04em' }}>Aa</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8a7a60', marginTop: 16, lineHeight: 1.7 }}>
            300 italic · 400 · 500 · variable SOFT/WONK<br />
            opsz 144 · wght 300 · ital 1 · SOFT 100
          </div>
        </div>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 16 }}>UI — Inter</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 144, lineHeight: 0.85, letterSpacing: '-0.04em' }}>Aa</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#8a7a60', marginTop: 16, lineHeight: 1.7 }}>
            400 · 500 · 600 · tabular numerals<br />
            feature "cv11", "ss01" — humanist terminals
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: '#e0d4c0', marginBottom: 48 }} />

      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: 900, marginBottom: 36 }}>
        "Someone has been on my mind for you."
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8a7a60', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 48 }}>— Sage, 7:42 am</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>H1 / Hero — 88 / 0.95</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ember)' }}>Let's take<br />our time<br />with this.</div>
        </div>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>Body — Inter 16/1.6</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.65, color: '#3a2f28' }}>
            Sage texts you once or twice a week. No feed, no swipe, no dopamine loop. When someone arrives, they arrive with a reason — and the time to notice it.
          </div>
        </div>
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>Mono — JetBrains 11</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, lineHeight: 1.7, color: '#6b5d4b', letterSpacing: '0.04em' }}>
            TIMESTAMP · 07:42 AM<br />
            LOCATION · BROOKLYN, NY<br />
            MATCH INDEX · 0034<br />
            SAGE CONFIDENCE · HIGH
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AB_Cover, AB_Color, AB_Type });
