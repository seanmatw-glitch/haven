// Haven App — Date brief, morning-of prep Sage sends before a meeting

function Screen_DateBrief() {
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.8} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>← Plans</div>
          <Mono>Tonight · 7pm</Mono>
        </div>

        <div style={{ padding: '10px 24px 0', flex: 1, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <Halo size={32} thinking={false} />
            <Mono style={{ textTransform: 'none', letterSpacing: '0.04em' }}>Sage · morning of</Mono>
          </div>

          <H1 size={32} style={{ marginBottom: 8, lineHeight: 1.1 }}>
            A few things <It>before tonight</It>.
          </H1>
          <Body size={13} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            I thought about what Maya told me this week. Here's what I'd hold lightly in your head.
          </Body>

          {/* hero photo */}
          <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 18, overflow: 'hidden', marginBottom: 18, backgroundImage: 'url(app/photos/window.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(40,20,15,0.55))' }} />
            <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14, color: HAVEN.cream }}>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20, lineHeight: 1.1 }}>Cafe Mogador</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85, marginTop: 3 }}>7 pm · East village · booked under your name</div>
            </div>
          </div>

          {/* Prep cards */}
          <Mono style={{ marginBottom: 10 }}>A gentle prep</Mono>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
            {[
              { icon: '·', t: 'Her dad is in treatment', s: 'Not a secret, just fresh. She mentioned it Tuesday.' },
              { icon: '·', t: 'She runs a little late and hates it', s: 'If she apologizes twice, you\'ve already told her it\'s fine.' },
              { icon: '·', t: 'She reads poetry out loud sometimes', s: 'If she does — let her. Don\'t perform back.' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 16, padding: '14px 16px' }}>
                <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa, marginBottom: 4 }}>{c.t}</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: HAVEN.textDim, lineHeight: 1.4 }}>{c.s}</div>
              </div>
            ))}
          </div>

          <Mono style={{ marginBottom: 10 }}>Something to ask, if the silence goes long</Mono>
          <div style={{ padding: 18, background: 'rgba(244,160,136,0.12)', border: '1px solid rgba(244,160,136,0.35)', borderRadius: 18, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: HAVEN.cocoa }}>
              What have you been rereading lately?
            </div>
            <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 8 }}>
              She brought up <em>A Lover's Discourse</em> twice. This gives her somewhere to go.
            </Body>
          </div>

          <div style={{ padding: 14, background: 'rgba(255,255,255,0.55)', border: `1px solid ${HAVEN.divider}`, borderRadius: 14, marginBottom: 20 }}>
            <Body size={12} color={HAVEN.textDim} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14 }}>
              Go softly. You don't have to impress her — I already told her you wouldn't try to.
            </Body>
          </div>

          <div style={{ display: 'flex', gap: 10, paddingBottom: 24 }}>
            <Btn style={{ flex: 1 }}>I've got it</Btn>
            <Btn primary={false}>Text Sage</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_DateBrief });
