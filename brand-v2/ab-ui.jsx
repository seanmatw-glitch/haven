// Haven v2 — logo + app icon + UI

function V2_Logo() {
  return (
    <div style={{ background: '#FBF3E8', padding: 72, height: '100%', boxSizing: 'border-box', color: '#3a2420', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>04 — Wordmark</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 56, lineHeight: 1, letterSpacing: '-0.035em', marginBottom: 14 }}>
        Light, almost <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>breathy</em>.
      </div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#6a4f3c', maxWidth: 540, lineHeight: 1.6, marginBottom: 48 }}>
        Inter at weight 300, tight tracking, lowercase-friendly. The wordmark recedes so the app's warmth can come forward. A soft halo keeps it alive.
      </div>

      <div style={{ padding: '80px 48px', background: '#F2E4D0', borderRadius: 24, marginBottom: 28, display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 40% 60% at 50% 50%, #F4A08855 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200, fontSize: 260, lineHeight: 0.9, letterSpacing: '-0.055em', color: '#3a2420', position: 'relative', zIndex: 1 }}>haven</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <div style={{ background: '#3a2420', color: '#FBF3E8', padding: '48px 24px', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 68, lineHeight: 0.9, letterSpacing: '-0.04em' }}>haven</div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', opacity: 0.5, textTransform: 'uppercase' }}>Reversed · cocoa</div>
        </div>
        <BloomBg tone="coral" style={{ padding: '48px 24px', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 68, lineHeight: 0.9, letterSpacing: '-0.04em', color: '#3a2420' }}>haven</div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#3a242099', textTransform: 'uppercase' }}>On bloom</div>
        </BloomBg>
        <div style={{ background: '#FBF3E8', padding: '48px 24px', borderRadius: 20, border: '1px solid #E8D8C0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <GlowOrb size={56} hues={['coral', 'peach']} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 46, letterSpacing: '-0.03em', color: '#3a2420' }}>haven</div>
          </div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a6a58', textTransform: 'uppercase' }}>Lockup · with glow</div>
        </div>
      </div>
    </div>
  );
}

function V2_AppIcon() {
  const icons = [
    { name: 'Messages', bg: 'linear-gradient(180deg,#6dd98c,#36b84e)' },
    { name: 'Mail', bg: 'linear-gradient(180deg,#68d4ff,#0080ff)' },
    { name: 'Maps', bg: 'linear-gradient(180deg,#e8f0ff,#b8d4ff)' },
    { name: 'Photos', bg: '#fff' },
    { name: 'Calendar', bg: '#fff' },
  ];
  return (
    <BloomBg tone="cream" style={{ width: '100%', height: '100%' }}>
      <div style={{ padding: 72, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 18 }}>05 — App Icon</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 56, lineHeight: 1, letterSpacing: '-0.035em', color: '#3a2420', marginBottom: 14 }}>
          A warm <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>little sun</em>.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6a4f3c', maxWidth: 520, lineHeight: 1.6, marginBottom: 56 }}>
          A soft coral gradient on oat. No glyph, no letterform. The glow is the mark.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginBottom: 48 }}>
          {[
            { bg: 'radial-gradient(circle at 38% 35%, #FBE0C8 0%, #F4A088 50%, #D87560 100%)', label: 'coral glow' },
            { bg: 'radial-gradient(circle at 40% 35%, #F9EFE2 0%, #F6C8A8 55%, #E89890 100%)', label: 'peach' },
            { bg: 'radial-gradient(circle at 35% 35%, #FBE0C8 0%, #F4A088 40%, #D4B8D8 100%)', label: 'dusk · lilac' },
            { bg: '#FBF3E8', inner: 'radial-gradient(circle at 38% 35%, #FBE0C8 0%, #F4A088 50%, #D87560 100%)', label: 'inset' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 150, height: 150, borderRadius: 36, background: t.bg, boxShadow: '0 20px 50px rgba(244,160,136,0.4), inset 0 1px 0 rgba(255,255,255,0.4)', position: 'relative', overflow: 'hidden' }}>
                {t.inner && <div style={{ position: 'absolute', inset: 28, borderRadius: '50%', background: t.inner }} />}
              </div>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a6a58', textTransform: 'uppercase' }}>{t.label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>On a home screen — iOS, beige wallpaper</div>
        <BloomBg tone="cream" style={{ padding: 32, borderRadius: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 24 }}>
            {['Messages', 'Mail', 'Maps', 'Photos', 'Calendar', 'haven', 'Safari', 'Notes', 'Music', 'Weather', 'Wallet', 'Camera'].map((n, i) => {
              const isHaven = n === 'haven';
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 15,
                    background: isHaven
                      ? 'radial-gradient(circle at 38% 35%, #FBE0C8 0%, #F4A088 50%, #D87560 100%)'
                      : `oklch(${55 + i * 3}% 0.08 ${i * 40 + 30})`,
                    boxShadow: isHaven ? '0 6px 20px rgba(244,160,136,0.5)' : '0 2px 4px rgba(0,0,0,0.08)',
                  }} />
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#3a2420', opacity: 0.9 }}>{n}</div>
                </div>
              );
            })}
          </div>
        </BloomBg>
      </div>
    </BloomBg>
  );
}

// ─── UI screens, Her-style ───
function V2_Phone({ children, style = {} }) {
  return (
    <div style={{
      width: 360, height: 780, borderRadius: 52,
      background: '#EEE3D0', padding: 8,
      boxShadow: '0 40px 100px rgba(90,50,40,0.18), 0 0 0 1px rgba(90,50,40,0.08)',
      ...style,
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 44, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

function V2_Status({ time = '7:42', dark = false }) {
  const c = dark ? '#FBF3E8' : '#3a2420';
  return (
    <div style={{ height: 48, padding: '14px 32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: c }}>
      <span>{time}</span>
      <span style={{ fontSize: 11, opacity: 0.7 }}>●●●●</span>
    </div>
  );
}

// Sage chat — Her style, one big message, lots of air
function V2_UI_Sage() {
  return (
    <V2_Phone>
      <BloomBg tone="cream" style={{ height: '100%' }}>
        <V2_Status />
        <div style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <SageHalo size={28} thinking={false} />
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#3a2420', fontWeight: 500 }}>Sage</div>
        </div>

        <div style={{ padding: '36px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#a88870', textAlign: 'center' }}>Tuesday · 7:42 am</div>

          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 26, lineHeight: 1.4, color: '#3a2420', letterSpacing: '-0.015em' }}>
            Good morning. Someone has been on my mind for you — <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>a writer, patient</em>, the kind who notices things.
          </div>

          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 24, lineHeight: 1.45, color: '#3a2420', letterSpacing: '-0.015em' }}>
            I'd like you to meet her Thursday, if you have the evening.
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <SageHalo size={16} thinking={true} />
            <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#8a6a58' }}>Sage is with you</div>
          </div>
        </div>

        <div style={{ padding: '16px 24px 32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)', borderRadius: 28, padding: '14px 20px', fontFamily: 'Inter', fontSize: 14, color: '#a88870', display: 'flex', justifyContent: 'space-between', border: '1px solid rgba(244,160,136,0.25)' }}>
            <span>Write to Sage…</span>
            <span style={{ color: '#F4A088' }}>↑</span>
          </div>
        </div>
      </BloomBg>
    </V2_Phone>
  );
}

// Match reveal — soft, editorial, low chrome
function V2_UI_Match() {
  return (
    <V2_Phone>
      <BloomBg tone="coral" style={{ height: '100%' }}>
        <V2_Status />
        <div style={{ padding: 32, height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6a4f3c', marginBottom: 28 }}>Thursday · an introduction</div>

          <HerPhoto tone="dusk" label="editorial portrait · golden hour" style={{ width: '100%', height: 320, borderRadius: 24, marginBottom: 32, boxShadow: '0 20px 50px rgba(90,50,40,0.15)' }} />

          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 44, lineHeight: 1, letterSpacing: '-0.035em', color: '#3a2420', marginBottom: 20 }}>
            Meet <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>Maya</em>.
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.6, color: '#4a3a30', marginBottom: 'auto' }}>
            She writes obituaries for a living. You'll like the way she listens.
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            <div style={{ flex: 1, background: '#3a2420', color: '#FBF3E8', padding: '18px 0', textAlign: 'center', borderRadius: 100, fontFamily: 'Inter', fontSize: 14, fontWeight: 500 }}>Yes, please</div>
            <div style={{ padding: '18px 22px', border: '1px solid rgba(58,36,32,0.2)', color: '#6a4f3c', borderRadius: 100, fontFamily: 'Inter', fontSize: 14 }}>Not now</div>
          </div>
        </div>
      </BloomBg>
    </V2_Phone>
  );
}

// Check-in — single question
function V2_UI_CheckIn() {
  return (
    <V2_Phone>
      <BloomBg tone="honey" style={{ height: '100%' }}>
        <V2_Status />
        <div style={{ padding: '48px 32px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6a4f3c', marginBottom: 20 }}>Sunday — with Sage</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 42, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#3a2420' }}>
            How was your week,<br /><em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>really?</em>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'auto', marginBottom: 32 }}>
            {[
              'Heavy. I need a quiet one.',
              'Steady — keep Thursday on.',
              'I want to be surprised.',
              'Let\'s pause for a week.',
            ].map((t, i) => (
              <div key={i} style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 18, fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 16, color: '#3a2420' }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </BloomBg>
    </V2_Phone>
  );
}

// Thinking / empty
function V2_UI_Thinking() {
  return (
    <V2_Phone>
      <BloomBg tone="cream" style={{ height: '100%' }}>
        <V2_Status />
        <div style={{ flex: 1, height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44, padding: 40, textAlign: 'center' }}>
          <SageHalo size={160} thinking={true} />
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 34, lineHeight: 1.1, letterSpacing: '-0.025em', color: '#3a2420', marginBottom: 18 }}>
              Sage is <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>thinking</em>.
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.65, color: '#6a4f3c', maxWidth: 260 }}>
              Your next introduction usually arrives by Wednesday morning. There's no rush.
            </div>
          </div>
        </div>
      </BloomBg>
    </V2_Phone>
  );
}

function V2_UI() {
  return (
    <div style={{ background: '#F2E4D0', padding: 56, height: '100%', boxSizing: 'border-box', color: '#3a2420', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>06 — UI Surfaces</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 48, lineHeight: 1, letterSpacing: '-0.035em', marginBottom: 40 }}>
        One thought per screen. <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>Never more.</em>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, justifyItems: 'center' }}>
        <div><V2_UI_Sage /><div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginTop: 18, textAlign: 'center' }}>Sage · morning</div></div>
        <div><V2_UI_Match /><div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginTop: 18, textAlign: 'center' }}>Match</div></div>
        <div><V2_UI_CheckIn /><div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginTop: 18, textAlign: 'center' }}>Check-in</div></div>
        <div><V2_UI_Thinking /><div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginTop: 18, textAlign: 'center' }}>Thinking</div></div>
      </div>
    </div>
  );
}

Object.assign(window, { V2_Logo, V2_AppIcon, V2_UI });
