// Haven — marketing artboards

function AB_OOH() {
  return (
    <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ width: '100%', height: '100%', color: 'var(--cream)' }}>
      <div style={{ padding: 88, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7 }}>07 — OOH · Subway · 46" × 60"</div>

        <div>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontVariationSettings: '"SOFT" 100', fontSize: 180, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: 32 }}>
            Someone<br />
            has been<br />
            on my mind<br />
            <em style={{ fontStyle: 'italic', color: '#E8A159' }}>for you.</em>
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontStyle: 'italic', fontWeight: 300, opacity: 0.85, maxWidth: 600 }}>
            — Sage, your matchmaker.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 64, letterSpacing: '-0.04em' }}>Haven</div>
          <div style={{ fontFamily: 'Inter', fontSize: 14, opacity: 0.75, textAlign: 'right', lineHeight: 1.5 }}>
            An AI matchmaker.<br />
            1–3 real introductions a week.<br />
            <span style={{ color: '#E8A159' }}>haven.co</span>
          </div>
        </div>
      </div>
    </AuraBg>
  );
}

function AB_Social() {
  return (
    <div style={{ background: '#ece4d4', padding: 48, height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>08 — Social · IG Post + Story</div>
      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 40, lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--ember)', marginBottom: 32 }}>Quiet, on your feed.</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.56fr', gap: 24, alignItems: 'flex-start' }}>
        {/* IG post 1 — aura */}
        <div>
          <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ aspectRatio: '1 / 1', borderRadius: 4, color: 'var(--cream)' }}>
            <div style={{ padding: 40, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 50, lineHeight: 0.98, letterSpacing: '-0.025em' }}>
                Let's take<br />our time<br />with this.
              </div>
              <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 22, letterSpacing: '-0.02em' }}>Haven</div>
            </div>
          </AuraBg>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a7a60', textTransform: 'uppercase', marginTop: 12 }}>Post · aura</div>
        </div>

        {/* IG post 2 — editorial */}
        <div>
          <div style={{ aspectRatio: '1 / 1', background: 'var(--cream)', borderRadius: 4, padding: 40, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #e0d4c0' }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8a7a60' }}>No 003 · on patience</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 38, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--ember)' }}>
              Three <em>real</em> introductions a week beats three hundred swipes.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: 11, color: '#8a7a60' }}>
              <span>Haven</span>
              <span>haven.co</span>
            </div>
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a7a60', textTransform: 'uppercase', marginTop: 12 }}>Post · editorial</div>
        </div>

        {/* IG story */}
        <div>
          <AuraBg hues={['rose', 'amber', 'rose', 'amber']} dark style={{ aspectRatio: '9/16', borderRadius: 4, color: 'var(--cream)' }}>
            <div style={{ padding: 28, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <SageOrb size={22} thinking={false} />
                <div style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.85 }}>sage · 7:42 am</div>
              </div>
              <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 30, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                I think you should meet <em style={{ color: '#E8A159' }}>Maya.</em>
              </div>
              <div style={{ padding: '14px 0', borderTop: '1px solid rgba(245,239,230,0.3)', fontFamily: 'Inter', fontSize: 13, textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Join Haven →
              </div>
            </div>
          </AuraBg>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.14em', color: '#8a7a60', textTransform: 'uppercase', marginTop: 12 }}>Story</div>
        </div>
      </div>
    </div>
  );
}

function AB_Email() {
  return (
    <div style={{ background: '#ece4d4', padding: 56, height: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7a60', marginBottom: 14 }}>09 — Email · Match Notification</div>
      <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 40, lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--ember)', marginBottom: 32 }}>The morning Sage writes.</div>

      <div style={{ maxWidth: 640, margin: '0 auto', background: 'var(--cream)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 40px rgba(31,23,20,0.12)' }}>
        <div style={{ padding: '14px 28px', borderBottom: '1px solid #e8decb', display: 'flex', justifyContent: 'space-between', fontFamily: 'Inter', fontSize: 12, color: '#8a7a60' }}>
          <span>Sage &lt;sage@haven.co&gt; · 7:42 AM</span>
          <span>to you</span>
        </div>

        <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ height: 240, color: 'var(--cream)' }}>
          <div style={{ padding: 40, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>An introduction</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontWeight: 300, fontStyle: 'italic', fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.03em' }}>Meet Maya.</div>
          </div>
        </AuraBg>

        <div style={{ padding: 40 }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.55, color: 'var(--ember)', marginBottom: 24 }}>
            Good morning — I've been thinking about who you might like to meet this week, and I keep coming back to her.
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontSize: 20, lineHeight: 1.55, color: 'var(--ember)', marginBottom: 32 }}>
            She's a writer, patient with people, quick with a laugh she doesn't perform. You'll know what I mean when you read her.
          </div>
          <div style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--ember)', color: 'var(--cream)', borderRadius: 100, fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '0.02em' }}>Read about her →</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontSize: 15, color: '#8a7a60', marginTop: 32 }}>— Sage</div>
        </div>

        <div style={{ padding: '20px 40px', borderTop: '1px solid #e8decb', fontFamily: 'Inter', fontSize: 10, color: '#a89578', letterSpacing: '0.04em', textAlign: 'center' }}>
          Haven · An AI matchmaker · Brooklyn, NY
        </div>
      </div>
    </div>
  );
}

// Sage typography moment — the hero
function AB_SageMoment() {
  return (
    <AuraBg hues={['amber', 'rose', 'plum', 'electric']} dark style={{ width: '100%', height: '100%', color: 'var(--cream)' }}>
      <div style={{ padding: 96, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 48, left: 96, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7 }}>10 — Sage, typeset</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 40 }}>
          <SageOrb size={54} thinking={true} />
          <div style={{ fontFamily: 'Inter', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.75 }}>Sage · Thursday · 7:42 am</div>
        </div>
        <div style={{ fontFamily: '"Fraunces", serif', fontStyle: 'italic', fontWeight: 300, fontVariationSettings: '"SOFT" 100', fontSize: 96, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 1200, marginBottom: 48 }}>
          I think you should meet her —<br />
          she writes obituaries for a<br />
          living, and she <em style={{ color: '#E8A159' }}>laughs</em> like<br />
          someone who knows the<br />
          whole shape of a life.
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
          Fraunces · 300 italic · 96 / 1.05 · SOFT 100 · —0.03em
        </div>
      </div>
    </AuraBg>
  );
}

Object.assign(window, { AB_OOH, AB_Social, AB_Email, AB_SageMoment });
