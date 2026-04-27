// Haven App — Full Sage chat, the ongoing relationship

function Screen_SageChat() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.5} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 20px 12px', borderBottom: `1px solid ${HAVEN.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Halo size={34} thinking={true} />
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Here · thinking about your Tuesday</div>
            </div>
          </div>
          <Mono>⋯</Mono>
        </div>

        <div style={{ padding: '18px 18px 10px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, overflow: 'hidden' }}>
          <Mono style={{ textAlign: 'center', marginBottom: 2 }}>Yesterday</Mono>

          <SMSBubble from="sage">Did Maya's note sit with you the way I hoped?</SMSBubble>
          <SMSBubble from="me">yeah. the line about her dad caught me.</SMSBubble>
          <SMSBubble from="sage">I thought it might. You've used the word "patient" three times this week — I think you recognize it in her.</SMSBubble>

          <Mono style={{ textAlign: 'center', margin: '8px 0 2px' }}>Today · 7:42 am</Mono>

          <SMSBubble from="sage">Morning. I want to ask you something before Thursday.</SMSBubble>
          <SMSBubble from="sage">When Maya asked what you do on hard days — you gave her the answer you usually give. It was charming. It wasn't the true one.</SMSBubble>
          <SMSBubble from="sage" time="7:44 am">You don't have to tell her the true one yet. But I wanted you to know I noticed.</SMSBubble>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 8, paddingTop: 4 }}>
            <div style={{ width: 20, height: 20 }}><Halo size={18} thinking={true} /></div>
            <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, fontStyle: 'italic' }}>Sage is composing…</div>
          </div>
        </div>

        {/* quick replies */}
        <div style={{ padding: '10px 18px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['that\'s fair', 'I want to talk about this', 'not today, Sage', 'what would you have said?'].map((t, i) => (
            <div key={i} style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 100, fontFamily: 'Inter', fontSize: 12, color: HAVEN.cocoa }}>{t}</div>
          ))}
        </div>

        <div style={{ padding: '10px 18px 26px' }}>
          <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 28, padding: '14px 20px', fontFamily: 'Inter', fontSize: 14, color: HAVEN.textDim, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: HAVEN.textMuted }}>Write to Sage…</span>
            <span style={{ color: HAVEN.coralDeep, fontSize: 16 }}>↑</span>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_SageChat });
