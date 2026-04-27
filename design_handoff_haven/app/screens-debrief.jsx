// Haven — Post-date: second-date texting, Maya's mirror view, founders letter

// — second-date: Sage helps compose the next text —
function Screen_NextText() {
  return (
    <Phone>
      <Bloom tone="coral" intensity={0.7} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={30} thinking={true} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>36 hours after · writing to Maya</div>
          </div>
        </div>

        <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>The follow-up</Mono>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            Don't wait three days. <It>That rule is for other people.</It>
          </H1>
          <Body size={13} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            She'll be hoping to hear from you by tonight. Here's a draft. Make it yours.
          </Body>

          {/* the draft */}
          <div style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.9)', borderRadius: 20, padding: 20, marginBottom: 14, boxShadow: '0 8px 32px rgba(180,90,70,0.1)' }}>
            <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>To Maya · tonight</div>
            <div style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.55, color: HAVEN.cocoa }}>
              Last night stayed with me. The part about your dad in the garden — thank you for telling me that. <span style={{ background: 'rgba(244,160,136,0.3)', padding: '0 3px', borderRadius: 3 }}>I'd like to see you again, if you'd like that too.</span> No pressure on when.
            </div>
          </div>

          <Mono style={{ marginBottom: 10 }}>Why I wrote it this way</Mono>
          <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(14px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 16, padding: 14, marginBottom: 18 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, lineHeight: 1.55, color: HAVEN.cocoa }}>
              I named the specific moment — the garden — because it tells her you were actually there. I asked, instead of assuming. I gave her room to take her time.
            </div>
          </div>

          <Mono style={{ marginBottom: 10 }}>Alternate tones</Mono>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
            {[
              { l: 'Shorter', s: 'direct' },
              { l: 'Warmer', s: 'more feeling' },
              { l: 'Playful', s: 'callback joke' },
            ].map((t, i) => (
              <div key={i} style={{ flex: 1, padding: '10px 8px', background: 'rgba(255,255,255,0.55)', border: `1px solid ${HAVEN.divider}`, borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.cocoa, marginBottom: 2 }}>{t.l}</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 10, color: HAVEN.textMuted }}>{t.s}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingBottom: 24, display: 'flex', gap: 10 }}>
            <Btn style={{ flex: 2 }}>Send as-is</Btn>
            <Btn primary={false} style={{ flex: 1 }}>Edit</Btn>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// — Maya's mirror: what Sage showed her about you —
function Screen_MayaMirror() {
  return (
    <Phone>
      <Bloom tone="honey" intensity={0.65} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '14px 22px 10px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Halo size={30} />
          <div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>Maya's view · the same morning</div>
          </div>
        </div>

        <div style={{ padding: '14px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Mono style={{ marginBottom: 12 }}>What Sage told Maya about you</Mono>
          <H1 size={22} style={{ marginBottom: 8, lineHeight: 1.3 }}>
            The introduction was <It>symmetric.</It> Here's what she saw of you.
          </H1>
          <Body size={12} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            We don't hide our matchmaking. You can see the mirror.
          </Body>

          {/* your card in maya's app */}
          <div style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 22, padding: 18, marginBottom: 16 }}>
            <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
              <div style={{ width: 72, height: 90, borderRadius: 12, overflow: 'hidden', backgroundImage: 'url(app/photos/morning.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>For Maya · your match</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, lineHeight: 1.15, marginBottom: 4 }}>Daniel, 34</div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textDim }}>Architect · Brooklyn · 4 yrs with his therapist</div>
              </div>
            </div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, lineHeight: 1.55, color: HAVEN.cocoa, paddingTop: 14, borderTop: `1px solid ${HAVEN.divider}` }}>
              He told me he's finally learning to be patient with other people's weather. You both said "patient" when I asked what you were working toward.
            </div>
          </div>

          <Mono style={{ marginBottom: 10 }}>What she wrote back to me</Mono>
          <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(14px)', border: `1px solid ${HAVEN.divider}`, borderRadius: 16, padding: 16, marginBottom: 16 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: HAVEN.cocoa, marginBottom: 10 }}>
              He was the first person in a long time who asked me a question and actually waited for the answer. I want to see him again.
            </div>
            <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Maya · 7:42 am</div>
          </div>

          <div style={{ padding: 14, background: 'rgba(250,220,180,0.2)', border: '1px solid rgba(244,180,100,0.3)', borderRadius: 14, marginTop: 'auto', marginBottom: 24 }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: HAVEN.cocoa, lineHeight: 1.5 }}>
              I'm showing you this with her permission. Haven only works if it's honest in both directions.
            </div>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

// — founders letter / about page on web —
function Screen_FoundersLetter() {
  return (
    <div style={{ width: 1440, minHeight: 1400, background: HAVEN.cream, color: HAVEN.cocoa, fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      {/* nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 64px', borderBottom: `1px solid ${HAVEN.divider}` }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28 }}>Haven</div>
        <div style={{ display: 'flex', gap: 36, fontFamily: 'Inter', fontSize: 14 }}>
          <span>How it works</span><span style={{ textDecoration: 'underline', textUnderlineOffset: 6 }}>Why</span><span>For therapists</span><span>Pricing</span>
        </div>
        <div style={{ padding: '10px 22px', border: `1px solid ${HAVEN.cocoa}`, borderRadius: 100, fontFamily: 'Inter', fontSize: 13 }}>Request access</div>
      </div>

      <Bloom tone="dusk" intensity={0.5}>
        <div style={{ padding: '100px 200px 40px', maxWidth: 1100, margin: '0 auto' }}>
          <Mono style={{ marginBottom: 30 }}>A letter from the founders</Mono>
          <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 68, lineHeight: 1.05, letterSpacing: '-0.035em', marginBottom: 60 }}>
            We built Haven because <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>the other apps</em> were making our friends worse at love.
          </div>
        </div>
      </Bloom>

      <div style={{ padding: '0 200px 120px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start', marginBottom: 60 }}>
          <div style={{ flex: 1, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.55, color: HAVEN.cocoa }}>
            A friend of ours — four years in therapy, the kind of person who can say the true thing in a room of people saying the polite thing — deleted the apps and cried.
          </div>
          <div style={{ flex: 1, fontFamily: 'Inter', fontWeight: 300, fontSize: 16, lineHeight: 1.75, color: HAVEN.cocoa }}>
            She said: <em>"I've done so much work. And then I open Hinge and I can feel myself performing. I can feel myself getting worse."</em> We heard a version of this from ten other people that month. The work and the market were moving in opposite directions.
          </div>
        </div>

        <div style={{ height: 1, background: HAVEN.divider, margin: '40px 0' }} />

        <Mono style={{ marginBottom: 24 }}>Our three bets</Mono>
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { n: '01', t: 'Small pond', s: 'Therapy is a gate, not a gimmick. The people who want to be here are enough.' },
            { n: '02', t: 'One at a time', s: 'The feed taught us to compare. Sage brings you one person and asks you to really look.' },
            { n: '03', t: 'A human in the loop', s: 'We refuse to automate the one moment that matters — the introduction itself.' },
          ].map((b, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: HAVEN.coralDeep, marginBottom: 16 }}>{b.n}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 300, letterSpacing: '-0.02em', marginBottom: 10 }}>{b.t}</div>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, lineHeight: 1.6, color: HAVEN.textDim }}>{b.s}</div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: HAVEN.divider, margin: '60px 0' }} />

        {/* signatures */}
        <div style={{ display: 'flex', gap: 40 }}>
          {[
            { name: 'Leila Osman', role: 'Co-founder · formerly a therapist', img: 'app/photos/elena.jpg' },
            { name: 'Jun Park', role: 'Co-founder · formerly a writer', img: 'app/photos/portrait-2.jpg' },
          ].map((p, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', gap: 18, alignItems: 'center' }}>
              <div style={{ width: 70, height: 70, borderRadius: '50%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 24, color: HAVEN.cocoa, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.textMuted, letterSpacing: '0.04em' }}>{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pull quote footer */}
      <Bloom tone="coral" intensity={0.5}>
        <div style={{ padding: '100px 200px', textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 40, lineHeight: 1.3, color: HAVEN.cocoa, marginBottom: 30 }}>
            "The goal isn't to help you find someone faster. It's to make sure that when you do, you recognize them."
          </div>
          <Mono>— house philosophy</Mono>
        </div>
      </Bloom>
    </div>
  );
}

Object.assign(window, { Screen_NextText, Screen_MayaMirror, Screen_FoundersLetter });
