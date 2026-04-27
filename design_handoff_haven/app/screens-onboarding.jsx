// Haven App — Onboarding (Sage, SMS-style, 2-3 days)

function Screen_Welcome() {
  return (
    <Phone>
      <Bloom tone="morning" style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, textAlign: 'center', gap: 40 }}>
          <Halo size={140} thinking={true} />
          <div>
            <H1 size={42} style={{ marginBottom: 20 }}>Hello. I'm <It>Sage</It>.</H1>
            <Body size={16} style={{ maxWidth: 280 }}>
              I'm a matchmaker. I'll text you over the next few days to understand who you are. Then I'll bring you someone — carefully.
            </Body>
          </div>
          <div style={{ width: '100%', marginTop: 'auto' }}>
            <Btn>Begin</Btn>
            <Body size={12} color={HAVEN.textMuted} style={{ textAlign: 'center', marginTop: 16 }}>
              Takes about 10 minutes a day, for 3 days.
            </Body>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

function SMSBubble({ from = 'sage', children, time }) {
  const isSage = from === 'sage';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isSage ? 'flex-start' : 'flex-end', gap: 4, maxWidth: '85%', alignSelf: isSage ? 'flex-start' : 'flex-end' }}>
      <div style={{
        padding: '12px 18px',
        borderRadius: 22,
        borderBottomLeftRadius: isSage ? 6 : 22,
        borderBottomRightRadius: isSage ? 22 : 6,
        background: isSage ? 'rgba(255,255,255,0.75)' : HAVEN.cocoa,
        color: isSage ? HAVEN.cocoa : HAVEN.cream,
        fontFamily: 'Inter, sans-serif',
        fontSize: 15,
        lineHeight: 1.45,
        fontWeight: isSage ? 300 : 400,
        backdropFilter: isSage ? 'blur(16px)' : 'none',
        boxShadow: isSage ? '0 2px 12px rgba(90,50,40,0.06)' : 'none',
      }}>{children}</div>
      {time && <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.08em', padding: '0 6px' }}>{time}</div>}
    </div>
  );
}

function Screen_Intake() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.6} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', borderBottom: `1px solid ${HAVEN.divider}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={32} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 2 of 3 · Getting to know you</div>
          </div>
        </div>

        <div style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1, overflow: 'hidden' }}>
          <Mono style={{ textAlign: 'center' }}>Today · 7:44 am</Mono>

          <SMSBubble from="sage">Good morning. I've been thinking about what you said last night — about wanting someone who could hold a silence.</SMSBubble>
          <SMSBubble from="sage" time="7:44 am">Can I ask you something a little harder today?</SMSBubble>

          <SMSBubble from="me" time="7:51 am">sure</SMSBubble>

          <SMSBubble from="sage">When was the last time someone really surprised you — in a way that made you trust them more, not less?</SMSBubble>
        </div>

        <div style={{ padding: '14px 22px 32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 28, padding: '14px 20px', fontFamily: 'Inter', fontSize: 14, color: HAVEN.textDim, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: HAVEN.textMuted }}>Write back…</span>
            <span style={{ color: HAVEN.coralDeep }}>↑</span>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_Verify() {
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: 32, height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 18 }}>One last step</Mono>
          <H1 size={36} style={{ marginBottom: 16 }}>
            Show me you're <It>doing the work</It>.
          </H1>
          <Body style={{ marginBottom: 28 }}>
            Haven is for people already in therapy or structured self-growth. One of these is enough — whichever is easiest.
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 'auto' }}>
            {[
              { t: 'Therapy receipt or superbill', s: 'PDF, photo, or screenshot', sel: true },
              { t: 'HSA / FSA statement', s: 'Line item showing therapy spend' },
              { t: 'BetterHelp · Talkspace · Alma · Headway', s: 'Connect your account' },
              { t: 'Your therapist invited you', s: 'Enter their code' },
            ].map((o, i) => (
              <div key={i} style={{
                padding: '16px 18px',
                background: o.sel ? 'rgba(244,160,136,0.15)' : 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(14px)',
                border: `1px solid ${o.sel ? 'rgba(244,160,136,0.5)' : 'rgba(255,255,255,0.7)'}`,
                borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>{o.t}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, marginTop: 3 }}>{o.s}</div>
                </div>
                {o.sel && <div style={{ width: 18, height: 18, borderRadius: '50%', background: HAVEN.coralDeep, color: HAVEN.cream, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>}
              </div>
            ))}
          </div>

          <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 20, marginBottom: 16 }}>
            We never contact your therapist. Documents are anonymized and deleted after verification.
          </Body>
          <Btn>Upload receipt</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_Welcome, Screen_Intake, Screen_Verify, SMSBubble });
