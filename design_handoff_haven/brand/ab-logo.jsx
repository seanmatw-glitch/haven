// Haven — logo artboard + app icon artboard

function AB_Logo() {
  return (
    <div style={{ background: 'var(--cream)', padding: 64, height: '100%', boxSizing: 'border-box', color: 'var(--ember)', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 18 }}>04 — Wordmark · Lead Direction</div>
      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 14 }}>A signet, not a badge.</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6b5d4b', maxWidth: 560, lineHeight: 1.6, marginBottom: 52 }}>
        Fraunces italic, SOFT 100, optical-sized at display. The descender on the 'v' and the soft terminal carry the warmth; the letterform refuses to shout.
      </div>

      <div style={{ padding: '72px 48px', background: '#ece4d4', borderRadius: 4, marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontVariationSettings: '"SOFT" 100', fontSize: 240, lineHeight: 0.9, letterSpacing: '-0.045em', color: 'var(--ember)' }}>Haven</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div style={{ background: '#1F1714', color: 'var(--cream)', padding: '42px 24px', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 72, lineHeight: 0.9, letterSpacing: '-0.045em' }}>Haven</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', opacity: 0.5, textTransform: 'uppercase' }}>Primary · reversed</div>
        </div>
        <div style={{ background: 'var(--cream)', padding: '42px 24px', borderRadius: 4, border: '1px solid #e0d4c0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 400, fontSize: 40, letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--ember)', paddingLeft: '0.42em' }}>Haven</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a7a60', textTransform: 'uppercase' }}>Editorial · caps</div>
        </div>
        <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ padding: '42px 24px', borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 72, lineHeight: 0.9, letterSpacing: '-0.045em', color: 'var(--cream)' }}>Haven</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#F5EFE699', textTransform: 'uppercase' }}>On aura</div>
        </AuraBg>
      </div>

      <div style={{ marginTop: 44 }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 18 }}>Supporting marks</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div style={{ background: '#ece4d4', padding: 32, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <MonogramArch size={120} ink="var(--ember)" />
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a7a60', textTransform: 'uppercase' }}>Monogram · arch</div>
          </div>
          <div style={{ background: '#1F1714', padding: 32, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <SunriseMark size={120} ink="#D4A574" />
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#c9b89a', textTransform: 'uppercase' }}>Sunrise · symbolic</div>
          </div>
          <AuraBg hues={['amber', 'rose']} dark={false} style={{ padding: 32, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #E8A159, #C14A2E 60%, #3D2E3F 100%)', boxShadow: '0 0 40px rgba(212,165,116,0.5)' }} />
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#1F1714aa', textTransform: 'uppercase' }}>Aura · app icon</div>
          </AuraBg>
        </div>
      </div>
    </div>
  );
}

function AB_AppIcon() {
  const icons = [
    { name: 'Haven', hues: ['#E8A159', '#C14A2E', '#3D2E3F'] },
    { name: 'Mail', bg: '#f5f5f7', fg: '#007aff', glyph: '✉' },
    { name: 'Messages', bg: 'linear-gradient(180deg,#53d769,#2abf4a)', glyph: '💬' },
    { name: 'Photos', bg: '#fff', glyph: '❋' },
  ];
  return (
    <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ width: '100%', height: '100%', color: 'var(--cream)' }}>
      <div style={{ padding: 64, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 18 }}>05 — App Icon</div>
        <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 12 }}>Glowing from<br />the home screen.</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: 0.8, maxWidth: 520, lineHeight: 1.6, marginBottom: 48 }}>
          The aura — not a heart, not a letterform. A luminous presence you can spot in a grid of flat dating apps.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 48 }}>
          {[
            { bg: 'radial-gradient(circle at 32% 30%, #E8A159 0%, #C14A2E 55%, #3D2E3F 100%)', label: 'amber · ember' },
            { bg: 'radial-gradient(circle at 35% 35%, #D17A6A 0%, #5A3E5F 60%, #1F1714 100%)', label: 'rose · plum' },
            { bg: 'radial-gradient(circle at 30% 30%, #E8A159 0%, #D17A6A 40%, #2B3FC4 85%, #0c0608 100%)', label: 'full aura' },
            { bg: '#F5EFE6', inner: 'radial-gradient(circle at 38% 38%, #E8A159, #C14A2E 70%, #3D2E3F 100%)', label: 'cream ground' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 140, height: 140, borderRadius: 32, background: t.bg, boxShadow: '0 18px 44px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
                {t.inner && <div style={{ position: 'absolute', inset: 30, borderRadius: '50%', background: t.inner }} />}
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', opacity: 0.65, textTransform: 'uppercase' }}>{t.label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 14 }}>On a home screen</div>
        <div style={{ background: '#0c0608', padding: 24, borderRadius: 20, border: '1px solid rgba(245,239,230,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 22 }}>
            {['Messages', 'Mail', 'Maps', 'Photos', 'Calendar', 'Haven', 'Safari', 'Notes', 'Music', 'Weather', 'Wallet', 'Camera'].map((n, i) => {
              const isHaven = n === 'Haven';
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: 14,
                    background: isHaven
                      ? 'radial-gradient(circle at 32% 30%, #E8A159 0%, #C14A2E 55%, #3D2E3F 100%)'
                      : `oklch(${40 + i * 4}% 0.1 ${i * 40})`,
                    boxShadow: isHaven ? '0 4px 18px rgba(212,165,116,0.4)' : 'none',
                  }} />
                  <div style={{ fontFamily: '-apple-system, Inter, sans-serif', fontSize: 10, color: '#fff', opacity: 0.85 }}>{n}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AuraBg>
  );
}

Object.assign(window, { AB_Logo, AB_AppIcon });
