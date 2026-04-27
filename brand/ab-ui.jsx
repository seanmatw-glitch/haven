// Haven — UI artboards (Sage chat, match reveal, check-in, thinking)

// Phone shell (lightweight — no full ios_frame, we want soft edges matching the brand)
function Phone({ children, style = {} }) {
  return (
    <div style={{
      width: 360, height: 780, borderRadius: 48,
      background: '#0a0608', padding: 8,
      boxShadow: '0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(245,239,230,0.08)',
      ...style,
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 40, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

function Status({ dark = false, time = '7:42' }) {
  const c = dark ? '#F5EFE6' : '#1F1714';
  return (
    <div style={{ height: 48, padding: '14px 28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: '-apple-system, Inter', fontSize: 14, fontWeight: 600, color: c }}>
      <span>{time}</span>
      <span style={{ display: 'flex', gap: 6, opacity: 0.85 }}>
        <span style={{ fontSize: 11 }}>●●●</span>
        <span style={{ fontSize: 11 }}>◉</span>
      </span>
    </div>
  );
}

// ─── 1. Sage onboarding message (in-app chat) ───
function UI_SageChat() {
  return (
    <Phone>
      <div style={{ background: 'var(--cream)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Status />
        <div style={{ padding: '8px 24px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e8decb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <SageOrb size={32} thinking={false} />
            <div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, color: 'var(--ember)' }}>Sage</div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#8a7a60', letterSpacing: '0.04em' }}>Your matchmaker</div>
            </div>
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#8a7a60' }}>⋯</div>
        </div>

        <div style={{ flex: 1, padding: '28px 22px', display: 'flex', flexDirection: 'column', gap: 20, overflow: 'hidden' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a89578', textAlign: 'center' }}>Tuesday · 7:42 am</div>

          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 22, lineHeight: 1.45, color: 'var(--ember)', letterSpacing: '-0.015em', padding: '18px 20px', background: 'linear-gradient(180deg, #faf5ec 0%, #f5ecd9 100%)', borderRadius: 18, borderBottomLeftRadius: 4, boxShadow: '0 0 0 1px rgba(212,165,116,0.25), 0 1px 0 rgba(212,165,116,0.15)' }}>
            Good morning. Someone has been on my mind for you — a writer, patient, the kind who notices things.
          </div>

          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.5, color: 'var(--ember)', padding: '16px 20px', background: 'linear-gradient(180deg, #faf5ec 0%, #f5ecd9 100%)', borderRadius: 18, borderBottomLeftRadius: 4, boxShadow: '0 0 0 1px rgba(212,165,116,0.25)' }}>
            I'd like you to meet her on Thursday, if you have the evening.
          </div>

          <div style={{ alignSelf: 'flex-end', fontFamily: 'Inter', fontSize: 15, color: 'var(--cream)', padding: '12px 18px', background: 'var(--ember)', borderRadius: 18, borderBottomRightRadius: 4, maxWidth: '75%' }}>
            Tell me more about her
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto' }}>
            <SageOrb size={18} thinking={true} />
            <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#8a7a60', fontStyle: 'italic' }}>Sage is thinking…</div>
          </div>
        </div>

        <div style={{ padding: '14px 22px 28px', borderTop: '1px solid #e8decb' }}>
          <div style={{ background: '#faf5ec', borderRadius: 24, padding: '12px 18px', fontFamily: 'Inter', fontSize: 14, color: '#a89578', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Write to Sage…</span>
            <span style={{ color: '#D4A574' }}>↑</span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─── 2. Match reveal ───
function UI_Match() {
  return (
    <Phone>
      <div style={{ background: 'var(--cream)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Status dark />
        <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ height: 320, position: 'relative', marginTop: -48, paddingTop: 48 }}>
          <div style={{ position: 'absolute', top: 68, left: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5EFE6', opacity: 0.8 }}>← Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5EFE6', opacity: 0.6 }}>01 · Thu 8pm</div>
          </div>
          <PhotoPlaceholder tone="dark" label="editorial portrait · golden hour" style={{ position: 'absolute', top: 120, left: '50%', transform: 'translateX(-50%)', width: 200, height: 240, borderRadius: 4, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />
        </AuraBg>

        <div style={{ padding: '28px 28px 0', flex: 1, background: 'var(--cream)', marginTop: -24, borderRadius: '24px 24px 0 0', position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>I think you should meet —</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--ember)', marginBottom: 18 }}>Maya, 34</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 15, lineHeight: 1.55, color: '#3a2f28', marginBottom: 20 }}>
            She writes obituaries for a living and keeps a list of things that made her laugh that day. You'll like the way she listens.
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
            {['Brooklyn', 'Writer', 'Emotionally literate', '5\'7"'].map(t => (
              <div key={t} style={{ fontFamily: 'Inter', fontSize: 11, padding: '6px 12px', background: '#ece4d4', borderRadius: 100, color: '#3a2f28' }}>{t}</div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10, position: 'absolute', bottom: 28, left: 28, right: 28 }}>
            <div style={{ flex: 1, background: 'var(--ember)', color: 'var(--cream)', padding: '16px 0', textAlign: 'center', borderRadius: 100, fontFamily: 'Inter', fontSize: 14, fontWeight: 500 }}>Yes, introduce us</div>
            <div style={{ padding: '16px 20px', background: 'transparent', border: '1px solid #d9cdb5', color: '#6b5d4b', borderRadius: 100, fontFamily: 'Inter', fontSize: 14 }}>Not now</div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─── 3. Weekly check-in ───
function UI_CheckIn() {
  return (
    <Phone>
      <AuraBg hues={['amber', 'rose', 'amber', 'rose']} intensity={0.75} dark style={{ height: '100%', color: 'var(--cream)' }}>
        <Status dark />
        <div style={{ padding: '40px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 16 }}>Sunday · check-in</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 44, lineHeight: 1.02, letterSpacing: '-0.025em', marginBottom: 32 }}>
            How was your<br />week, really?
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto', marginBottom: 40 }}>
            {[
              'Heavy. I need a quiet one.',
              'Steady — keep Thursday on.',
              'I want to be surprised.',
              'Let\'s pause for a week.',
            ].map((t, i) => (
              <div key={i} style={{ padding: '18px 22px', background: 'rgba(245,239,230,0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(245,239,230,0.15)', borderRadius: 16, fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontSize: 17, color: 'var(--cream)' }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </AuraBg>
    </Phone>
  );
}

// ─── 4. Sage is thinking (empty state) ───
function UI_Thinking() {
  return (
    <Phone>
      <div style={{ background: 'var(--cream)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center' }}>
        <Status />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36 }}>
          <SageOrb size={140} thinking={true} />
          <div>
            <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--ember)', marginBottom: 16 }}>
              Sage is thinking.
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.6, color: '#6b5d4b', maxWidth: 260 }}>
              Your next introduction usually arrives by Wednesday morning. There's no rush.
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

function AB_UI() {
  return (
    <div style={{ background: '#ece4d4', padding: 48, height: '100%', boxSizing: 'border-box', color: 'var(--ember)', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>06 — UI Surfaces</div>
      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 44, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 36 }}>Cards feel like paper. Sage feels like light.</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, justifyItems: 'center' }}>
        <div><UI_SageChat /><div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginTop: 20, textAlign: 'center' }}>Sage · in-app</div></div>
        <div><UI_Match /><div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginTop: 20, textAlign: 'center' }}>Match proposal</div></div>
        <div><UI_CheckIn /><div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginTop: 20, textAlign: 'center' }}>Weekly check-in</div></div>
        <div><UI_Thinking /><div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginTop: 20, textAlign: 'center' }}>Thinking · empty</div></div>
      </div>
    </div>
  );
}

Object.assign(window, { AB_UI });
