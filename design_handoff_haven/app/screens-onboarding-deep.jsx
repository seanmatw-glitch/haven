// Haven App — Expanded onboarding: voice note, free text, sliders, Sage-reacting moments
// Designed to make Sage feel like a person, not a form.

// === VOICE NOTE INTRO (Sage sends you a real voice message) ===
function Screen_VoiceIntro() {
  return (
    <Phone>
      <Bloom tone="coral" intensity={0.9} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={30} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 1 · she recorded this for you</div>
          </div>
        </div>

        <div style={{ padding: '24px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>Before we start</Mono>
          <H1 size={28} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            I'd rather <It>say it</It> than type it.
          </H1>
          <Body size={13} style={{ marginBottom: 22, color: HAVEN.textDim }}>
            Forty seconds. Tap to listen — I think it'll land better as a voice.
          </Body>

          {/* Voice note bubble */}
          <div style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.9)', borderRadius: 24, padding: 20, marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: HAVEN.cocoa, color: HAVEN.cream, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>▶</div>
              <div style={{ flex: 1 }}>
                {/* Waveform */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 32 }}>
                  {Array.from({ length: 38 }).map((_, i) => {
                    const h = 4 + Math.abs(Math.sin(i * 0.9) * 18) + (i % 3) * 4;
                    const played = i < 12;
                    return <div key={i} style={{ flex: 1, height: h, borderRadius: 2, background: played ? HAVEN.coralDeep : 'rgba(58,36,32,0.25)' }} />;
                  })}
                </div>
                <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, marginTop: 6, letterSpacing: '0.08em' }}>0:12 / 0:42</div>
              </div>
            </div>
          </div>

          {/* Transcript whisper */}
          <div style={{ padding: 16, background: 'rgba(244,160,136,0.1)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 16, marginBottom: 18 }}>
            <Mono style={{ marginBottom: 8 }}>What she's saying</Mono>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: HAVEN.cocoa }}>
              "Hi. I'm Sage. I'm going to ask you some things over the next few days — not a form, just a few honest questions. Take your time. I'll take mine."
            </div>
          </div>

          <Body size={11} color={HAVEN.textMuted} style={{ marginBottom: 18 }}>
            Voice is a version of me — the team behind Haven writes my questions. What you tell me stays with me.
          </Body>

          <div style={{ marginTop: 'auto', paddingBottom: 24 }}>
            <Btn>Okay, let's start</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === WHAT SHOULD I CALL YOU (free text, Sage reacts) ===
function Screen_WhatToCallYou() {
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 1 · 1 of 9</div>
          </div>
        </div>

        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>A small thing first</Mono>
          <H1 size={32} style={{ marginBottom: 12, lineHeight: 1.15 }}>
            What should I <It>call you</It>?
          </H1>
          <Body size={14} style={{ marginBottom: 22, color: HAVEN.textDim }}>
            Not what's on your license. What a person who loves you would say.
          </Body>

          {/* Text input */}
          <div style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(244,160,136,0.4)', borderRadius: 18, padding: 18, marginBottom: 16 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: HAVEN.cocoa, minHeight: 36 }}>
              Benji
            </div>
            <div style={{ marginTop: 12, height: 1, background: HAVEN.divider }} />
            <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 10 }}>
              Your mom calls you this. Nobody else does.
            </Body>
          </div>

          {/* Sage reacts */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, flexShrink: 0, paddingTop: 4 }}><Halo size={22} thinking={true} /></div>
            <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 16, borderBottomLeftRadius: 4, padding: '12px 16px' }}>
              <Body size={13} color={HAVEN.cocoa} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, lineHeight: 1.45 }}>
                Okay. Benji, then. I'll only use it when it's just us.
              </Body>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn style={{ flex: 1 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === ATTACHMENT SCENARIO (scenario + felt response) ===
function Screen_AttachmentScenario() {
  return (
    <Phone>
      <Bloom tone="dusk" intensity={0.85} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Halo size={28} thinking={false} />
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 1 · 3 of 9</div>
            </div>
          </div>
          <Mono>Skip</Mono>
        </div>

        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}>
            <div style={{ width: '33%', height: '100%', background: HAVEN.coralDeep, borderRadius: 2 }} />
          </div>
        </div>

        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>A scenario, Benji</Mono>
          <H1 size={23} style={{ marginBottom: 10, lineHeight: 1.25 }}>
            You're three months in. They cancel plans on a hard day, <It>last minute, no good reason</It>.
          </H1>
          <Body size={13} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            What's the first thing that happens in your chest?
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <FeltOption label="I assume it's me. I go quiet." sublabel="anxious, internal" />
            <FeltOption label="I check in — 'you okay?' — and mean it." sublabel="warm, curious" selected={true} />
            <FeltOption label="I note it. Say nothing. Wait to see if it's a pattern." sublabel="observant, guarded" />
            <FeltOption label="I feel annoyed. I'd rather just say so." sublabel="direct, hot" />
            <FeltOption label="Relief, honestly. I needed the night." sublabel="avoidant, aware of it" />
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 18, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn>
            <Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === LONELINESS SLIDER ===
function Screen_LonelinessDial() {
  const pct = 38; // a bit toward "a friend of mine"
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.6} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 2 · 5 of 9</div>
          </div>
        </div>

        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}>
            <div style={{ width: '55%', height: '100%', background: HAVEN.coralDeep, borderRadius: 2 }} />
          </div>
        </div>

        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>Being alone</Mono>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            Where is your relationship with <It>alone</It> these days?
          </H1>
          <Body size={13} style={{ marginBottom: 30, color: HAVEN.textDim }}>
            Not static. Just — where, today?
          </Body>

          {/* Slider */}
          <div style={{ marginBottom: 24, padding: '10px 0' }}>
            <div style={{ position: 'relative', height: 46 }}>
              {/* track */}
              <div style={{ position: 'absolute', top: 22, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #B89890, #F4A088, #F6D8A8)', borderRadius: 2 }} />
              {/* played */}
              <div style={{ position: 'absolute', top: 22, left: 0, width: `${pct}%`, height: 3, background: HAVEN.cocoa, borderRadius: 2 }} />
              {/* knob */}
              <div style={{ position: 'absolute', top: 10, left: `calc(${pct}% - 14px)`, width: 28, height: 28, borderRadius: '50%', background: HAVEN.cream, border: `2px solid ${HAVEN.cocoa}`, boxShadow: '0 4px 14px rgba(90,50,40,0.2)' }} />
              {/* tick labels */}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18 }}>
              <div style={{ maxWidth: 140 }}>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: HAVEN.cocoa }}>It's heavy.</div>
                <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 2 }}>I don't like being alone.</Body>
              </div>
              <div style={{ maxWidth: 140, textAlign: 'right' }}>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: HAVEN.cocoa }}>A friend of mine.</div>
                <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 2 }}>I go there on purpose.</Body>
              </div>
            </div>
          </div>

          {/* Sage soft read */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 24, flexShrink: 0, paddingTop: 4 }}><Halo size={22} thinking={false} /></div>
            <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 16, borderBottomLeftRadius: 4, padding: '12px 16px' }}>
              <Body size={13} color={HAVEN.cocoa} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, lineHeight: 1.45 }}>
                Somewhere in the middle — sometimes a friend, sometimes heavy. Noted. I won't match you with someone who hates their own company.
              </Body>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 16, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn>
            <Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === MOST YOURSELF (free text, Sage reads it back) ===
function Screen_MostYourself() {
  return (
    <Phone>
      <Bloom tone="honey" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 2 · 6 of 9</div>
          </div>
        </div>

        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}>
            <div style={{ width: '66%', height: '100%', background: HAVEN.coralDeep, borderRadius: 2 }} />
          </div>
        </div>

        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>In your own words</Mono>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            When do you feel <It>most yourself</It>?
          </H1>
          <Body size={13} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            A specific moment is better than a list. Three sentences is plenty.
          </Body>

          {/* Text field with written answer */}
          <div style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 18, padding: 18, marginBottom: 16, minHeight: 140 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 17, lineHeight: 1.55, color: HAVEN.cocoa }}>
              Sunday mornings when it's just me and the record player before anyone's awake. I can feel my own size again. Nothing urgent is allowed to matter for two hours.
            </div>
            <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.1em' }}>32 / 300 words</div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.coralDeep }}>Or voice note →</div>
            </div>
          </div>

          {/* Sage mirrors */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 24, flexShrink: 0, paddingTop: 4 }}><Halo size={22} thinking={false} /></div>
            <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 16, borderBottomLeftRadius: 4, padding: '12px 16px' }}>
              <Body size={13} color={HAVEN.cocoa} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, lineHeight: 1.45 }}>
                "Nothing urgent is allowed to matter for two hours." I'm going to keep that. I think I'll know the right person by whether they get it.
              </Body>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 10, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn>
            <Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === SAGE ADMITS UNCERTAINTY ===
function Screen_SageUncertain() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.5} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={true} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 2 · pausing</div>
          </div>
        </div>

        <div style={{ padding: '30px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>She's thinking</Mono>
          <H1 size={28} style={{ marginBottom: 18, lineHeight: 1.2 }}>
            Can I ask you that one again?
          </H1>

          <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 20, padding: 20, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, color: HAVEN.cocoa }}>
              I asked how you fight. You answered like someone who has practiced the answer. I'm not sure I heard <em>you</em> yet — and it's the one I care about most.
            </div>
            <div style={{ marginTop: 14, height: 1, background: HAVEN.divider }} />
            <Body size={12} color={HAVEN.textMuted} style={{ marginTop: 12, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14 }}>
              Would you sit with it tonight and come back to me? No rush.
            </Body>
          </div>

          <div style={{ padding: 16, background: 'rgba(244,160,136,0.1)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 16, marginBottom: 18 }}>
            <Mono style={{ marginBottom: 8 }}>What this means</Mono>
            <Body size={12} color={HAVEN.textDim}>
              I'd rather take another day than match you on an answer I don't believe. I'll check back in the morning.
            </Body>
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn style={{ flex: 1 }}>Okay, I'll sit with it</Btn>
            <Btn primary={false}>Answer now</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === HOW YOU RECEIVE LOVE — multi-slider ===
function Screen_ReceiveLove() {
  const dims = [
    { label: 'Words', sub: 'Being told what I am to you', val: 72 },
    { label: 'Touch', sub: 'Hand on shoulder, foot under blanket', val: 58 },
    { label: 'Time', sub: 'Unhurried presence, the full hour', val: 88 },
    { label: 'Acts', sub: 'The errand they ran without being asked', val: 40 },
    { label: 'Space', sub: 'Being left alone without it meaning less', val: 66 },
  ];
  return (
    <Phone>
      <Bloom tone="coral" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 3 · 8 of 9</div>
          </div>
        </div>

        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}>
            <div style={{ width: '88%', height: '100%', background: HAVEN.coralDeep, borderRadius: 2 }} />
          </div>
        </div>

        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>How love lands for you</Mono>
          <H1 size={23} style={{ marginBottom: 10, lineHeight: 1.25 }}>
            Where do you <It>feel it</It> when someone loves you well?
          </H1>
          <Body size={12} style={{ marginBottom: 22, color: HAVEN.textDim }}>
            Drag each one. Not what you say you want — what actually lands.
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {dims.map((d, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <div>
                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>{d.label}</span>
                    <span style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: HAVEN.textMuted, marginLeft: 8 }}>{d.sub}</span>
                  </div>
                  <span style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textDim }}>{d.val}</span>
                </div>
                <div style={{ position: 'relative', height: 16 }}>
                  <div style={{ position: 'absolute', top: 7, left: 0, right: 0, height: 2, background: 'rgba(58,36,32,0.12)', borderRadius: 1 }} />
                  <div style={{ position: 'absolute', top: 7, left: 0, width: `${d.val}%`, height: 2, background: HAVEN.coralDeep, borderRadius: 1 }} />
                  <div style={{ position: 'absolute', top: 3, left: `calc(${d.val}% - 5px)`, width: 10, height: 10, borderRadius: '50%', background: HAVEN.cocoa }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 20, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn>
            <Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === REST OVERNIGHT (Sage sets expectations, not instant) ===
function Screen_RestOvernight() {
  return (
    <Phone>
      <Bloom tone="dusk" intensity={0.8} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '40px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ marginBottom: 30 }}><Halo size={110} thinking={true} /></div>
          <Mono style={{ marginBottom: 16 }}>That's enough for today</Mono>
          <H1 size={32} style={{ marginBottom: 18, lineHeight: 1.15 }}>
            Let it <It>rest overnight</It>.
          </H1>
          <Body size={14} style={{ marginBottom: 24, color: HAVEN.textDim, maxWidth: 300 }}>
            I'll sit with what you told me. I'll text you in the morning with the next one — not five questions deep, just one.
          </Body>

          <div style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 18, padding: 16, marginBottom: 24 }}>
            <Mono style={{ marginBottom: 6 }}>Next from Sage</Mono>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: HAVEN.cocoa }}>Tomorrow · around 7:40 am</div>
          </div>

          <Btn primary={false}>Close the app</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

// === FeltOption helper (shared) ===
function FeltOption({ label, sublabel, selected = false, style = {} }) {
  return (
    <div style={{
      padding: '16px 18px',
      background: selected ? 'rgba(244,160,136,0.18)' : 'rgba(255,255,255,0.62)',
      backdropFilter: 'blur(14px)',
      border: `1px solid ${selected ? 'rgba(244,160,136,0.55)' : 'rgba(255,255,255,0.75)'}`,
      borderRadius: 18,
      ...style,
    }}>
      <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 15, color: HAVEN.cocoa, lineHeight: 1.35 }}>{label}</div>
      {sublabel && <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: HAVEN.textMuted, marginTop: 4 }}>{sublabel}</div>}
    </div>
  );
}

// === EQ — sitting with someone ===
function Screen_OnboardingEQ() {
  return (
    <Phone>
      <Bloom tone="dusk" intensity={0.75} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Halo size={28} thinking={false} />
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 1 · 4 of 9</div>
            </div>
          </div>
          <Mono>Skip</Mono>
        </div>
        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}><div style={{ width: '44%', height: '100%', background: HAVEN.coralDeep }} /></div>
        </div>
        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>A small scenario</Mono>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>Someone you love says <It>"I'm fine"</It> — but you can tell they aren't.</H1>
          <Body size={14} style={{ marginBottom: 22, color: HAVEN.textDim }}>What do you usually do? There's no right answer. I'm listening for how you move around another person.</Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FeltOption label="Give them space. I trust they'll come to me." sublabel="steady, patient" />
            <FeltOption label="Name it — gently. 'You seem heavy. I'm here.'" sublabel="warm, direct" selected={true} />
            <FeltOption label="Try to fix it. Ask what happened, what I can do." sublabel="practical, active" />
            <FeltOption label="Sit close. Not ask. Just be near." sublabel="quiet, physical" />
            <FeltOption label="Honestly? I shut down a little. I'm working on it." sublabel="self-aware, in-progress" />
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 20, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn><Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === Rupture & repair ===
function Screen_OnboardingRepair() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.55} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Halo size={28} thinking={false} />
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 2 · 7 of 9</div>
            </div>
          </div>
          <Mono>Skip</Mono>
        </div>
        <div style={{ padding: '0 22px', marginBottom: 6 }}>
          <div style={{ height: 3, background: 'rgba(58,36,32,0.08)', borderRadius: 2 }}><div style={{ width: '77%', height: '100%', background: HAVEN.coralDeep }} /></div>
        </div>
        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>A harder one</Mono>
          <H1 size={26} style={{ marginBottom: 12, lineHeight: 1.2 }}>Think of a time you <It>hurt someone</It> you cared about.</H1>
          <Body size={14} style={{ marginBottom: 20, color: HAVEN.textDim }}>Not a dramatic one — a small one. What did you do next?</Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FeltOption label="Apologized as soon as I noticed." sublabel="quick to name it" />
            <FeltOption label="Sat with it. Came back with something specific to say." sublabel="thoughtful, a little slow" selected={true} />
            <FeltOption label="Tried to repair through action — a gesture, a change." sublabel="shows, doesn't tell" />
            <FeltOption label="Got defensive first. Apologized later, with more honesty." sublabel="honest about the mess" />
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 20, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn><Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === Growth stage ===
function Screen_OnboardingGrowth() {
  return (
    <Phone>
      <Bloom tone="honey" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 3 · 9 of 9</div>
          </div>
        </div>
        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>About your work on yourself</Mono>
          <H1 size={28} style={{ marginBottom: 10, lineHeight: 1.2 }}>Where are you with the thing you're <It>working on</It>?</H1>
          <Body size={13} style={{ marginBottom: 22, color: HAVEN.textDim }}>Most people are in therapy for <em>something</em>. Not asking what — asking how close you are.</Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <FeltOption label="Still in the middle of it. It's loud." sublabel="actively in it" />
            <FeltOption label="I can see the shape of it now. I have language." sublabel="in the naming" selected={true} />
            <FeltOption label="I know what it is. Now practicing the other way." sublabel="in the doing" />
            <FeltOption label="It's quieter. I'm ready to let someone close again." sublabel="in the integration" />
          </div>
          <div style={{ padding: 14, marginTop: 18, background: 'rgba(255,255,255,0.5)', borderRadius: 14, border: `1px solid ${HAVEN.divider}` }}>
            <Body size={12} color={HAVEN.textMuted} style={{ fontStyle: 'italic', fontFamily: '"Instrument Serif", serif', fontSize: 14 }}>
              I'll match you with someone in a similar chapter. Not the same story — a similar chapter.
            </Body>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 20, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn><Btn style={{ flex: 2 }}>Continue</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === COMMON INTERESTS — zoom out after the deep work ===
function Screen_CommonInterests() {
  const picked = new Set([0, 2, 5, 7, 9, 12, 14]);
  const tags = [
    'Reading fiction', 'Long walks', 'Cooking badly', 'Therapy talk', 'Live music',
    'Running', 'Plants', 'Sunday mornings', 'Bookstores', 'Old films',
    'Pilates', 'Wine', 'Poetry', 'Hiking', 'Vinyl',
    'Journaling', 'Travel', 'Climbing', 'Making things', 'Gardens',
    'Meditation', 'Ceramics', 'Coffee shops', 'Weekend away', 'Dinner parties',
  ];
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.6} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '12px 22px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Halo size={28} thinking={false} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Day 3 · zooming out</div>
          </div>
        </div>
        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>Lighter for a minute</Mono>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            Now — what do you actually <It>do</It> with your time?
          </H1>
          <Body size={13} style={{ marginBottom: 20, color: HAVEN.textDim }}>
            The deep stuff matters. So does whether you want to spend Saturday the same way. Pick 5–8.
          </Body>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((t, i) => {
              const sel = picked.has(i);
              return (
                <div key={i} style={{
                  padding: '9px 14px',
                  background: sel ? HAVEN.cocoa : 'rgba(255,255,255,0.65)',
                  color: sel ? HAVEN.cream : HAVEN.cocoa,
                  border: sel ? 'none' : `1px solid ${HAVEN.divider}`,
                  borderRadius: 100,
                  fontFamily: 'Inter', fontSize: 13, fontWeight: 400,
                }}>{t}</div>
              );
            })}
          </div>
          <div style={{ marginTop: 20, padding: 14, background: 'rgba(244,160,136,0.1)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 14 }}>
            <Body size={12} color={HAVEN.textDim} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14 }}>
              A shared Sunday morning matters as much as a shared attachment style. Don't overthink it.
            </Body>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 16, paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Back</Btn>
            <Btn style={{ flex: 2 }}>Continue · 7 picked</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === LIVE THERAPY AUTHENTICATION — real, not a receipt ===
function Screen_TherapyAuth() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.5} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '16px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono>Authenticate your therapy</Mono>
          <Mono>Step 1 of 1</Mono>
        </div>
        <div style={{ padding: '22px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <H1 size={28} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            We verify with your <It>therapy</It>, not your word.
          </H1>
          <Body size={13} style={{ marginBottom: 22, color: HAVEN.textDim }}>
            Every Haven member is confirmed by a real provider or platform. Pick the one that applies — we connect directly, encrypted, never read notes.
          </Body>

          <Mono style={{ marginBottom: 10 }}>Connect your platform</Mono>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {[
              { t: 'BetterHelp', s: 'Sign in — we verify active sessions', sel: true },
              { t: 'Talkspace', s: 'OAuth · subscription confirmation' },
              { t: 'Alma', s: 'Client portal sign-in' },
              { t: 'Headway', s: 'Invoice + active match' },
              { t: 'Grow Therapy', s: 'Connect account' },
              { t: 'Two Chairs · Real · Octave', s: 'Membership platforms' },
            ].map((p, i) => (
              <div key={i} style={{
                padding: '14px 16px',
                background: p.sel ? 'rgba(244,160,136,0.15)' : 'rgba(255,255,255,0.62)',
                border: `1px solid ${p.sel ? 'rgba(244,160,136,0.45)' : 'rgba(255,255,255,0.8)'}`,
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 13, color: HAVEN.cocoa }}>{p.t}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, marginTop: 2 }}>{p.s}</div>
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.coralDeep }}>Connect →</div>
              </div>
            ))}
          </div>

          <Mono style={{ marginBottom: 10 }}>Or your therapist authenticates you</Mono>
          <div style={{ background: 'rgba(255,255,255,0.7)', border: `1px solid ${HAVEN.divider}`, borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <Body size={12} color={HAVEN.textDim} style={{ marginBottom: 12 }}>
              We email them one question: <em>"Is this person actively engaged in therapy with you?"</em> They reply yes or no. Nothing else. We never ask again.
            </Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ padding: '10px 12px', background: HAVEN.oat, borderRadius: 10, fontFamily: 'Inter', fontSize: 12, color: HAVEN.cocoa }}>dr.park@parktherapy.com</div>
              <div style={{ padding: '10px 12px', background: HAVEN.oat, borderRadius: 10, fontFamily: 'Inter', fontSize: 12, color: HAVEN.textMuted }}>Their name (for the email)</div>
            </div>
          </div>

          <div style={{ padding: 14, background: 'rgba(244,160,136,0.08)', border: '1px solid rgba(244,160,136,0.25)', borderRadius: 14, marginBottom: 18 }}>
            <Body size={12} color={HAVEN.textDim} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, lineHeight: 1.45 }}>
              Receipts can be faked. A person cannot. Everyone here got past this door — which is why it feels different inside.
            </Body>
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn style={{ flex: 2 }}>Connect BetterHelp</Btn>
            <Btn primary={false} style={{ flex: 1 }}>Ask my therapist</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// === THERAPIST REPLIES — confirmation state ===
function Screen_TherapyAuthPending() {
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.75} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '40px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ marginBottom: 24 }}><Halo size={90} thinking={true} /></div>
          <Mono style={{ marginBottom: 14 }}>Waiting on Dr. Park</Mono>
          <H1 size={28} style={{ marginBottom: 14, lineHeight: 1.15 }}>
            We sent her <It>one sentence</It>.
          </H1>
          <Body size={13} style={{ marginBottom: 22, color: HAVEN.textDim, maxWidth: 300 }}>
            Most therapists reply within a day. We'll text you when she does. Nothing on your end.
          </Body>

          <div style={{ width: '100%', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 16, padding: 16, marginBottom: 20, textAlign: 'left' }}>
            <Mono style={{ marginBottom: 8 }}>What we asked her</Mono>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: HAVEN.cocoa, lineHeight: 1.5 }}>
              "Hi Dr. Park — a prospective Haven member, Ben, listed you as their therapist. Can you confirm they're actively engaged with you? One-click yes or no, nothing more."
            </div>
          </div>

          <div style={{ width: '100%', padding: 12, background: 'rgba(244,160,136,0.1)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 12, marginBottom: 'auto' }}>
            <Body size={11} color={HAVEN.textDim}>
              She'll never see your match, your Sage conversations, or anything else. Ever.
            </Body>
          </div>

          <Btn primary={false} style={{ marginTop: 20 }}>I'll wait</Btn>
        </div>
      </Bloom>
    </Phone>
  );
}

// === SAGE SYNTHESIZES at the end ===
function Screen_OnboardingSynthesis() {
  return (
    <Phone>
      <Bloom tone="coral" intensity={0.95} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '40px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <Halo size={48} thinking={true} />
            <Mono style={{ textTransform: 'none', letterSpacing: '0.04em' }}>Sage is thinking…</Mono>
          </div>
          <Mono style={{ marginBottom: 14 }}>What I heard from you, Benji</Mono>
          <H1 size={23} style={{ marginBottom: 20, lineHeight: 1.3 }}>
            You're <It>in the naming</It>. You move toward hard feelings. Slow and honest over quick and smooth. You receive love through time more than words.
          </H1>
          <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 22, padding: 20, marginBottom: 14 }}>
            <Mono style={{ marginBottom: 10 }}>Who I'll look for</Mono>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: HAVEN.cocoa }}>
              Someone in their own naming-chapter. Warm, specific, not allergic to silence. Likely a reader. Protective of Sunday mornings.
            </div>
          </div>
          <Body size={12} color={HAVEN.textMuted} style={{ marginBottom: 18 }}>
            I'll need a few days. One person at a time, when I'm ready.
          </Body>
          <div style={{ marginTop: 'auto' }}><Btn>I trust you</Btn></div>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, {
  FeltOption,
  Screen_VoiceIntro,
  Screen_WhatToCallYou,
  Screen_AttachmentScenario,
  Screen_LonelinessDial,
  Screen_MostYourself,
  Screen_SageUncertain,
  Screen_ReceiveLove,
  Screen_RestOvernight,
  Screen_OnboardingEQ,
  Screen_OnboardingRepair,
  Screen_OnboardingGrowth,
  Screen_OnboardingSynthesis,
  Screen_CommonInterests,
  Screen_TherapyAuth,
  Screen_TherapyAuthPending,
});
