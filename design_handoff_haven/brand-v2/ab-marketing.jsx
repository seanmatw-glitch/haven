// Haven v2 — marketing artboards, Her style

function V2_OOH() {
  return (
    <BloomBg tone="coral" style={{ width: '100%', height: '100%' }}>
      <div style={{ padding: 96, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#3a2420', position: 'relative' }}>
        <GlowOrb size={260} hues={['coral','peach','lavender']} style={{ position: 'absolute', top: 80, right: 80, opacity: 0.9 }} />

        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6 }}>07 — OOH · 46" × 60"</div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200, fontSize: 150, lineHeight: 0.95, letterSpacing: '-0.045em', marginBottom: 36 }}>
            Someone has<br />
            been on my mind<br />
            <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>for you</em>.
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 26, opacity: 0.75 }}>
            — Sage, your matchmaker.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 48, letterSpacing: '-0.04em' }}>haven</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, opacity: 0.7, textAlign: 'right', lineHeight: 1.6 }}>
            One to three real introductions a week.<br />
            <span style={{ color: '#D87560' }}>haven.co</span>
          </div>
        </div>
      </div>
    </BloomBg>
  );
}

function V2_Social() {
  return (
    <div style={{ background: '#F2E4D0', padding: 56, height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>08 — Social</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 40, lineHeight: 1, letterSpacing: '-0.03em', color: '#3a2420', marginBottom: 36 }}>
        Soft, on your <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>feed</em>.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.56fr', gap: 28, alignItems: 'flex-start' }}>
        <div>
          <BloomBg tone="coral" style={{ aspectRatio: '1 / 1', borderRadius: 24 }}>
            <div style={{ padding: 44, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#3a2420', position: 'relative' }}>
              <GlowOrb size={90} hues={['coral','peach']} style={{ position: 'absolute', top: 36, right: 36 }} />
              <div />
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 46, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
                Let's take<br />our time with <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>this</em>.
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 20, letterSpacing: '-0.02em' }}>haven</div>
            </div>
          </BloomBg>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a6a58', textTransform: 'uppercase', marginTop: 12 }}>Post · bloom</div>
        </div>

        <div>
          <div style={{ aspectRatio: '1 / 1', background: '#FBF3E8', borderRadius: 24, padding: 44, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#3a2420', border: '1px solid #E8D8C0' }}>
            <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a6a58' }}>No 003 · on patience</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 38, lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Three <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>real</em> introductions a week beats three hundred swipes.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: 11, color: '#8a6a58' }}>
              <span>haven</span>
              <span>haven.co</span>
            </div>
          </div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a6a58', textTransform: 'uppercase', marginTop: 12 }}>Post · editorial</div>
        </div>

        <div>
          <BloomBg tone="dusk" style={{ aspectRatio: '9/16', borderRadius: 24 }}>
            <div style={{ padding: 28, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#3a2420' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <SageHalo size={22} thinking={false} />
                <div style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.7 }}>sage · 7:42 am</div>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 30, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                I think you should meet <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic', color: '#D87560' }}>Maya</em>.
              </div>
              <div style={{ padding: '12px 0', borderTop: '1px solid rgba(58,36,32,0.2)', fontFamily: 'Inter', fontSize: 12, textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Join haven →
              </div>
            </div>
          </BloomBg>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a6a58', textTransform: 'uppercase', marginTop: 12 }}>Story</div>
        </div>
      </div>
    </div>
  );
}

function V2_Email() {
  return (
    <div style={{ background: '#F2E4D0', padding: 56, height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a6a58', marginBottom: 14 }}>09 — Email</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 40, lineHeight: 1, letterSpacing: '-0.03em', color: '#3a2420', marginBottom: 32 }}>
        The morning Sage <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>writes</em>.
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', background: '#FBF3E8', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(90,50,40,0.12)' }}>
        <div style={{ padding: '14px 32px', borderBottom: '1px solid #E8D8C0', display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: 12, color: '#8a6a58' }}>
          <span>sage@haven.co · 7:42 am</span>
          <span>to you</span>
        </div>

        <BloomBg tone="coral" style={{ height: 260 }}>
          <div style={{ padding: 44, height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 32, color: '#3a2420' }}>
            <GlowOrb size={140} hues={['coral','peach','blush']} />
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>An introduction</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.035em' }}>Meet <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>Maya</em>.</div>
            </div>
          </div>
        </BloomBg>

        <div style={{ padding: 44, color: '#3a2420' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: 1.55, marginBottom: 24 }}>
            Good morning — I've been thinking about who you might like to meet this week, and I keep coming back to her.
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: 1.55, marginBottom: 32 }}>
            She's a writer, patient with people, <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>quick with a laugh she doesn't perform</em>. You'll know what I mean when you read her.
          </div>
          <div style={{ display: 'inline-block', padding: '16px 28px', background: '#3a2420', color: '#FBF3E8', borderRadius: 100, fontFamily: 'Inter', fontSize: 14, fontWeight: 500 }}>Read about her →</div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: '#8a6a58', marginTop: 36 }}>— Sage</div>
        </div>

        <div style={{ padding: '20px 44px', borderTop: '1px solid #E8D8C0', fontFamily: 'Inter', fontSize: 10, color: '#a88870', letterSpacing: '0.04em', textAlign: 'center' }}>
          haven · an AI matchmaker · Brooklyn, NY
        </div>
      </div>
    </div>
  );
}

function V2_SageMoment() {
  return (
    <BloomBg tone="coral" style={{ width: '100%', height: '100%' }}>
      <div style={{ padding: 96, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#3a2420', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 48, left: 96, fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6 }}>10 — Sage, typeset</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
          <SageHalo size={60} thinking={true} />
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Sage · Thursday · 7:42 am</div>
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 200, fontSize: 92, lineHeight: 1.05, letterSpacing: '-0.04em', maxWidth: 1240, marginBottom: 56 }}>
          I think you should meet her —<br />
          she writes obituaries for a living,<br />
          and she <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>laughs</em> like someone<br />
          who knows the whole shape<br />
          of a life.
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.55 }}>
          Inter 200 · Instrument Serif italic · 92 / 1.05 · —0.04em
        </div>
      </div>
    </BloomBg>
  );
}

Object.assign(window, { V2_OOH, V2_Social, V2_Email, V2_SageMoment });
