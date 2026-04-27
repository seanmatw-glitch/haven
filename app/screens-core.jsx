// Haven App — Home, Match, Date brief, Profile

function Screen_Home() {
  return (
    <Phone>
      <Bloom tone="morning" style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '18px 24px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono>Tuesday, Apr 23</Mono>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: HAVEN.oat, border: `1px solid ${HAVEN.divider}` }} />
        </div>

        <div style={{ padding: '20px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <Halo size={44} thinking={true} />
            <Mono style={{ textTransform: 'none', letterSpacing: '0.04em' }}>Sage · 7:42 am</Mono>
          </div>
          <H1 size={30} style={{ marginBottom: 16, lineHeight: 1.2 }}>
            Good morning. Someone has been on my mind for you — <It>a writer, patient</It>, the kind who notices things.
          </H1>
        </div>

        <div style={{ padding: '20px 24px 0', flex: 1 }}>
          <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(18px)', borderRadius: 24, padding: 20, border: `1px solid rgba(255,255,255,0.8)` }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
              <div style={{ width: 80, height: 80, borderRadius: 16, backgroundImage: 'url(app/photos/maya.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 8px 20px rgba(90,50,40,0.18)' }} />
              <div>
                <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 26, color: HAVEN.cocoa, letterSpacing: '-0.02em' }}>
                  <It>Maya</It>, 34
                </div>
                <Body size={12} color={HAVEN.textMuted} style={{ marginTop: 2 }}>Brooklyn · writer · 5'7"</Body>
              </div>
            </div>
            <Body size={14} style={{ marginBottom: 16, color: HAVEN.cocoa }}>
              She writes obituaries for a living and keeps a list of things that made her laugh that day.
            </Body>
            <Btn>Read about her →</Btn>
          </div>
        </div>

        <div style={{ padding: '20px 24px 14px' }}>
          <Mono style={{ marginBottom: 10 }}>This week with Sage</Mono>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, padding: 14, borderRadius: 16, background: 'rgba(255,255,255,0.55)', border: `1px solid ${HAVEN.divider}` }}>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Check-in</div>
              <Body size={13} color={HAVEN.cocoa}>Sunday at 10 am</Body>
            </div>
            <div style={{ flex: 1, padding: 14, borderRadius: 16, background: 'rgba(255,255,255,0.55)', border: `1px solid ${HAVEN.divider}` }}>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Intros left</div>
              <Body size={13} color={HAVEN.cocoa}>2 of 3</Body>
            </div>
          </div>
        </div>

        <div style={{ padding: '8px 24px 18px', display: 'flex', justifyContent: 'space-around', borderTop: `1px solid ${HAVEN.divider}`, background: 'rgba(251,243,232,0.75)', backdropFilter: 'blur(14px)' }}>
          {[['Home', true], ['Sage', false], ['Plans', false], ['You', false]].map(([l, sel], i) => (
            <div key={i} style={{ padding: '10px 4px', fontFamily: 'Inter', fontSize: 11, fontWeight: sel ? 500 : 400, color: sel ? HAVEN.coralDeep : HAVEN.textMuted }}>{l}</div>
          ))}
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_Match() {
  return (
    <Phone>
      <Bloom tone="dusk" intensity={0.9} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '10px 20px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>← Home</div>
          <Mono>Intro · 0034</Mono>
        </div>

        <div style={{ padding: '0 24px' }}>
          <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 20, backgroundImage: 'url(app/photos/maya.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 20px 50px rgba(90,50,40,0.25)' }} />
        </div>

        <div style={{ padding: '24px 24px 0', flex: 1, overflow: 'hidden' }}>
          <H1 size={44} style={{ marginBottom: 14, lineHeight: 0.95 }}>
            <It>Maya</It>, 34
          </H1>
          <Body size={14} style={{ marginBottom: 18 }}>
            Writer · Brooklyn · also in therapy · reads three books a month, mostly fiction
          </Body>

          <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(14px)', borderRadius: 20, padding: 18, marginBottom: 18, border: `1px solid rgba(255,255,255,0.7)` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Halo size={16} thinking={false} />
              <Mono style={{ textTransform: 'none', letterSpacing: '0.04em' }}>Why her, for you</Mono>
            </div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, lineHeight: 1.45, color: HAVEN.cocoa }}>
              You both said "patient" when I asked what you're working toward. She listens the way you described wanting to be listened to.
            </div>
          </div>
        </div>

        <div style={{ padding: '14px 24px 28px', display: 'flex', gap: 10 }}>
          <Btn style={{ flex: 1 }}>Yes, please</Btn>
          <Btn primary={false}>Not now</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_Intro() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.5} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '10px 20px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${HAVEN.divider}` }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>← Back</div>
          <Mono>Mutual yes · draft an opener</Mono>
        </div>

        <div style={{ padding: '28px 24px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <Halo size={30} thinking={false} />
            <Mono style={{ textTransform: 'none', letterSpacing: '0.04em' }}>Sage · drafted for you</Mono>
          </div>

          <div style={{ padding: 20, background: 'rgba(244,160,136,0.1)', border: `1px solid rgba(244,160,136,0.35)`, borderRadius: 20 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 20, lineHeight: 1.5, color: HAVEN.cocoa }}>
              Maya — I heard you keep a list of things that made you laugh. That is an act of faith I'd like to hear more about. — Ben
            </div>
          </div>

          <Body size={12} color={HAVEN.textMuted} style={{ marginTop: 14, textAlign: 'center' }}>
            You can send as-is, edit, or ask me to try again.
          </Body>
        </div>

        <div style={{ padding: '20px 24px', flex: 1 }}>
          <Mono style={{ marginBottom: 12 }}>Her thread, after you send</Mono>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SMSBubble from="me">Maya — I heard you keep a list of things that made you laugh…</SMSBubble>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 12 }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #D4B8D8, #EEA99B)' }} />
              <div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.textMuted, fontStyle: 'italic' }}>Maya is typing…</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '14px 24px 28px', display: 'flex', gap: 10 }}>
          <Btn style={{ flex: 1 }}>Send as written</Btn>
          <Btn primary={false}>Edit</Btn>
          <Btn primary={false} style={{ padding: '16px 18px' }}>↻</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_CheckIn() {
  return (
    <Phone>
      <Bloom tone="honey" style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '44px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 18 }}>Sunday · with Sage</Mono>
          <H1 size={40} style={{ lineHeight: 1.05 }}>
            How was your week,<br /><It>really?</It>
          </H1>
          <Body size={14} style={{ marginTop: 16, maxWidth: 280 }}>
            Whatever you pick shapes what I bring you next week. It stays between us.
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto', marginBottom: 28 }}>
            {[
              'Heavy. I need a quiet one.',
              'Steady — keep Thursday on.',
              'I want to be surprised.',
              'Let\'s pause for a week.',
            ].map((t, i) => (
              <div key={i} style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.7)', borderRadius: 18, fontFamily: 'Inter', fontWeight: 400, fontSize: 15, color: HAVEN.cocoa }}>{t}</div>
            ))}
          </div>

          <Btn primary={false}>Write to Sage instead</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_Profile() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.5} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '16px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono>Your portrait</Mono>
          <Mono>Edit</Mono>
        </div>

        <div style={{ padding: '28px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 26 }}>
            <div style={{ width: 80, height: 80, borderRadius: 20, backgroundImage: 'url(app/photos/you.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 8px 20px rgba(90,50,40,0.18)' }} />
            <div>
              <H1 size={28}>Ben, <It>36</It></H1>
              <Body size={12} color={HAVEN.textMuted} style={{ marginTop: 4 }}>Member since March 2026</Body>
            </div>
          </div>

          <Mono style={{ marginBottom: 10 }}>Sage's notes on you</Mono>
          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(14px)', borderRadius: 18, padding: 18, marginBottom: 20, border: `1px solid ${HAVEN.divider}` }}>
            <Body size={14} color={HAVEN.cocoa} style={{ fontStyle: 'italic', fontFamily: '"Instrument Serif", serif', fontSize: 17 }}>
              "A careful listener. Drawn to people who've done their own work. Says 'patient' a lot. Reads fiction before bed."
            </Body>
          </div>

          <Mono style={{ marginBottom: 10 }}>People Sage has brought you</Mono>
          <div style={{ display: 'flex', gap: 8, marginBottom: 22, overflow: 'hidden' }}>
            {[
              { src: 'app/photos/maya.jpg', name: 'Maya', note: 'talking' },
              { src: 'app/photos/elena.jpg', name: 'Elena', note: 'one date' },
              { src: 'app/photos/ren.jpg', name: 'Ren', note: 'passed' },
            ].map((p, i) => (
              <div key={i} style={{ flex: 1, borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '3/4', backgroundImage: `url(${p.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(40,20,15,0.75))' }} />
                <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, color: HAVEN.cream }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, lineHeight: 1 }}>{p.name}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 9, opacity: 0.85, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>

          <Mono style={{ marginBottom: 10 }}>Verification</Mono>
          <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 18, padding: '14px 18px', marginBottom: 20, border: `1px solid ${HAVEN.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: HAVEN.cocoa }}>Therapy-engaged</div>
              <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 2 }}>Renews September 2026</Body>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: HAVEN.coralDeep, color: HAVEN.cream, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
          </div>

          <Mono style={{ marginBottom: 10 }}>Plan</Mono>
          <div style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 18, padding: '14px 18px', border: `1px solid ${HAVEN.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: HAVEN.cocoa }}>Core · $29/mo</div>
              <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 2 }}>1–3 introductions a week</Body>
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.coralDeep }}>Upgrade →</div>
          </div>
        </div>

        <div style={{ padding: '8px 24px 18px', marginTop: 'auto', display: 'flex', justifyContent: 'space-around', borderTop: `1px solid ${HAVEN.divider}`, background: 'rgba(251,243,232,0.75)', backdropFilter: 'blur(14px)' }}>
          {[['Home', false], ['Sage', false], ['Plans', false], ['You', true]].map(([l, sel], i) => (
            <div key={i} style={{ padding: '10px 4px', fontFamily: 'Inter', fontSize: 11, fontWeight: sel ? 500 : 400, color: sel ? HAVEN.coralDeep : HAVEN.textMuted }}>{l}</div>
          ))}
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_Home, Screen_Match, Screen_Intro, Screen_CheckIn, Screen_Profile });
