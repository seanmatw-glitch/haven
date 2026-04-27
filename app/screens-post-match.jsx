// Haven App — After the date: Sage debrief, pattern noticing, the quiet week

function Screen_AfterDate() {
  return (
    <Phone>
      <Bloom tone="dusk" intensity={0.75} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={30} thinking={true} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>The morning after</div>
          </div>
        </div>

        <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>About last night</Mono>
          <H1 size={30} style={{ marginBottom: 10, lineHeight: 1.15 }}>
            So. How did it <It>actually</It> go?
          </H1>
          <Body size={13} style={{ marginBottom: 20, color: HAVEN.textDim }}>
            The true answer, not the polite one. It only shapes what I bring you next.
          </Body>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
            {[
              { l: 'Something happened. I want to see her again.', s: 'felt real', sel: true },
              { l: 'It was lovely. I\'m not sure yet.', s: 'no spark, no friction' },
              { l: 'Good on paper. Quiet in the chest.', s: 'know this feeling' },
              { l: 'Something was off. I\'ll tell you.', s: 'worth naming' },
            ].map((o, i) => (
              <FeltOption key={i} label={o.l} sublabel={o.s} selected={o.sel} />
            ))}
          </div>

          <Mono style={{ marginBottom: 10 }}>A small thing Sage noticed</Mono>
          <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 18, padding: 18, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: HAVEN.cocoa }}>
              Maya wrote to me this morning. She used the word "patient" about you. I think you landed.
            </div>
            <Body size={11} color={HAVEN.textMuted} style={{ marginTop: 10 }}>
              She doesn't know I'm telling you.
            </Body>
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn style={{ flex: 2 }}>Tell Sage more</Btn>
            <Btn primary={false} style={{ flex: 1 }}>Later</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_PatternNotice() {
  return (
    <Phone>
      <Bloom tone="honey" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={30} thinking={true} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Week 6 · something I want to say</div>
          </div>
        </div>

        <div style={{ padding: '18px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 14 }}>A pattern, gently</Mono>
          <H1 size={26} style={{ marginBottom: 14, lineHeight: 1.25 }}>
            Can I say something I've been <It>sitting on</It>?
          </H1>

          <div style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 22, padding: 20, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, lineHeight: 1.55, color: HAVEN.cocoa }}>
              You've passed on three women in a row who told you something tender in the first exchange. You picked the one who kept things light.
            </div>
            <div style={{ marginTop: 14, height: 1, background: HAVEN.divider }} />
            <Body size={13} color={HAVEN.textDim} style={{ marginTop: 12, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, lineHeight: 1.5 }}>
              I'm not drawing a conclusion. I'm asking you to notice it with me.
            </Body>
          </div>

          <Mono style={{ marginBottom: 10 }}>Who you said yes to</Mono>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
            {[
              { src: 'app/photos/elena.jpg', n: 'Priya', note: 'passed' },
              { src: 'app/photos/portrait-2.jpg', n: 'Fae', note: 'passed' },
              { src: 'app/photos/portrait-3.jpg', n: 'Rin', note: 'passed' },
              { src: 'app/photos/maya.jpg', n: 'Maya', note: 'yes' },
            ].map((p, i) => (
              <div key={i} style={{ flex: 1, position: 'relative', aspectRatio: '3/4', borderRadius: 12, overflow: 'hidden', backgroundImage: `url(${p.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: p.note === 'passed' ? 0.55 : 1 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(40,20,15,0.75))' }} />
                <div style={{ position: 'absolute', bottom: 6, left: 8, right: 8, color: HAVEN.cream }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13 }}>{p.n}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 8, opacity: 0.9, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
            {[
              'That\'s true. I didn\'t see it.',
              'That\'s not it — let me tell you what is.',
              'I want to think about it. Ask me later.',
            ].map((t, i) => (
              <div key={i} style={{ padding: '13px 16px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(14px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 14, fontFamily: 'Inter', fontSize: 14, color: HAVEN.cocoa }}>{t}</div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24 }}>
            <Body size={11} color={HAVEN.textMuted} style={{ textAlign: 'center' }}>
              I only say things like this once a month, at most.
            </Body>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_Pause() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.45} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '40px 28px', height: 'calc(100% - 48px)', display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 16 }}>You paused with Sage</Mono>
          <H1 size={32} style={{ marginBottom: 16, lineHeight: 1.15 }}>
            The house is <It>still here</It>.
          </H1>
          <Body size={14} style={{ marginBottom: 28, color: HAVEN.textDim, maxWidth: 320 }}>
            I'll stop introducing anyone. I won't text unless you text first. Come back when you want — a week, a season, a year.
          </Body>

          <div style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 20, padding: 20, marginBottom: 18 }}>
            <Mono style={{ marginBottom: 10 }}>What's held for you</Mono>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Your profile', 'Paused, not deleted'],
                ['Your conversation with me', 'Yours, always'],
                ['Billing', 'Stopped. No charge during pause.'],
                ['Maya', 'I\'ll tell her you stepped back. Not why.'],
              ].map(([l, s], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 8, borderBottom: i < 3 ? `1px solid ${HAVEN.divider}` : 'none' }}>
                  <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>{l}</div>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: HAVEN.textMuted }}>{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: 16, background: 'rgba(244,160,136,0.1)', border: '1px solid rgba(244,160,136,0.3)', borderRadius: 16, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: HAVEN.cocoa, lineHeight: 1.5 }}>
              Rest is part of the work. I'll be here.
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
            <Btn primary={false} style={{ flex: 1 }}>Change your mind</Btn>
            <Btn style={{ flex: 1 }}>Okay, Sage</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_AfterDate, Screen_PatternNotice, Screen_Pause });
