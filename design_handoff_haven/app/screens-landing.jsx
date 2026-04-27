// Haven — Landing page (web marketing surface)

function Screen_Landing() {
  return (
    <div style={{ width: 1440, minHeight: 1800, background: HAVEN.cream, color: HAVEN.cocoa, fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      {/* HERO */}
      <Bloom tone="coral" intensity={0.9} style={{ position: 'relative' }}>
        {/* nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 64px' }}>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: HAVEN.cocoa }}>Haven</div>
          <div style={{ display: 'flex', gap: 36, fontFamily: 'Inter', fontSize: 14, color: HAVEN.cocoa }}>
            <span>How it works</span>
            <span>For therapists</span>
            <span>Pricing</span>
            <span>Sign in</span>
          </div>
          <div style={{ padding: '10px 22px', border: `1px solid ${HAVEN.cocoa}`, borderRadius: 100, fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>Request access</div>
        </div>

        {/* hero split */}
        <div style={{ display: 'flex', padding: '40px 64px 120px', gap: 80, alignItems: 'center' }}>
          <div style={{ flex: 1.3 }}>
            <Mono style={{ marginBottom: 24 }}>A home for people doing the work</Mono>
            <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.04em', color: HAVEN.cocoa, marginBottom: 28 }}>
              Meet someone<br />
              who has done <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic' }}>their</em><br />
              own work, too.
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.55, color: HAVEN.textDim, maxWidth: 520, marginBottom: 40 }}>
              Haven is a matchmaker for people already in therapy. Sage — our concierge — spends three days getting to know you, then brings you one person at a time.
            </div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ padding: '18px 32px', background: HAVEN.cocoa, color: HAVEN.cream, borderRadius: 100, fontFamily: 'Inter', fontSize: 15, fontWeight: 500 }}>Request access →</div>
              <div style={{ fontFamily: 'Inter', fontSize: 14, color: HAVEN.textDim }}>or <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>read how it works</em></div>
            </div>
            <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 40 }}>
              Therapy-verified · 2,400 active members · NYC · LA · London
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 420, height: 560, borderRadius: 28, overflow: 'hidden', position: 'relative', boxShadow: '0 40px 100px rgba(90,50,40,0.25)', backgroundImage: 'url(app/photos/elena.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(40,20,15,0.55))' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28, color: HAVEN.cream }}>
                <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 10 }}>Sage · why her, for you</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, lineHeight: 1.35 }}>You both said "patient" when I asked what you were working toward.</div>
              </div>
            </div>
          </div>
        </div>
      </Bloom>

      {/* TRUST STRIP */}
      <div style={{ padding: '60px 64px', borderTop: `1px solid ${HAVEN.divider}`, borderBottom: `1px solid ${HAVEN.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Mono>Therapy partners</Mono>
        <div style={{ display: 'flex', gap: 60, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.textDim }}>
          <span>BetterHelp</span>
          <span>Talkspace</span>
          <span>Alma</span>
          <span>Headway</span>
          <span>Two Chairs</span>
          <span>Octave</span>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ padding: '120px 64px' }}>
        <Mono style={{ marginBottom: 20 }}>How Haven works</Mono>
        <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.03em', color: HAVEN.cocoa, marginBottom: 70, maxWidth: 800 }}>
          Slow on purpose. <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>Careful on purpose.</em>
        </div>

        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { n: '01', t: 'Three days with Sage', s: 'She texts. You talk. No feed, no swiping. She learns how you move around another person.', img: 'app/photos/morning.jpg' },
            { n: '02', t: 'We verify your therapy', s: 'OAuth with your platform, or your therapist confirms in one sentence. Nobody gets in on a receipt.', img: 'app/photos/window.jpg' },
            { n: '03', t: 'One person, when she\'s ready', s: 'Sage introduces one match at a time. She tells you why her, for you. You say yes, or not yet.', img: 'app/photos/maya.jpg' },
          ].map((step, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 18, overflow: 'hidden', marginBottom: 24, backgroundImage: `url(${step.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: HAVEN.coralDeep, marginBottom: 10 }}>{step.n}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 26, fontWeight: 300, letterSpacing: '-0.02em', color: HAVEN.cocoa, marginBottom: 10, lineHeight: 1.15 }}>{step.t}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.55, color: HAVEN.textDim }}>{step.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MANIFESTO / PULL QUOTE */}
      <Bloom tone="dusk" intensity={0.7}>
        <div style={{ padding: '140px 120px', textAlign: 'center' }}>
          <Mono style={{ marginBottom: 30 }}>Why Haven, honestly</Mono>
          <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 48, lineHeight: 1.2, letterSpacing: '-0.025em', color: HAVEN.cocoa, marginBottom: 30, maxWidth: 1100, margin: '0 auto 30px' }}>
            The apps rewarded the performance of dating. Therapy rewarded the work of being honest. Haven is for people who want the second thing, and believe it makes them <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>better company.</em>
          </div>
          <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.12em', color: HAVEN.textMuted, textTransform: 'uppercase' }}>— the founders</div>
        </div>
      </Bloom>

      {/* PRICING */}
      <div style={{ padding: '120px 64px' }}>
        <Mono style={{ marginBottom: 20 }}>Pricing</Mono>
        <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 60, maxWidth: 700 }}>
          Two tiers. <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>Neither is free.</em>
        </div>

        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ flex: 1, padding: 40, background: 'rgba(255,255,255,0.6)', border: `1px solid ${HAVEN.divider}`, borderRadius: 24 }}>
            <Mono style={{ marginBottom: 14 }}>Core</Mono>
            <div style={{ fontFamily: 'Inter', fontSize: 52, fontWeight: 200, marginBottom: 8 }}>$29<span style={{ fontSize: 18, color: HAVEN.textMuted }}> / month</span></div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: HAVEN.textDim, marginBottom: 28 }}>Sage introduces 1–3 people a week.</div>
            {['Three-day onboarding with Sage', 'Therapy-verified matches only', 'Weekly check-in', 'Date briefs + morning-after debriefs', 'Pause anytime, no questions'].map((l, i) => (
              <div key={i} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : `1px solid ${HAVEN.divider}`, fontFamily: 'Inter', fontSize: 14, color: HAVEN.cocoa }}>{l}</div>
            ))}
          </div>
          <div style={{ flex: 1, padding: 40, background: HAVEN.cocoa, color: HAVEN.cream, borderRadius: 24, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 20, right: 20, padding: '5px 12px', background: HAVEN.coralDeep, borderRadius: 100, fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Concierge</div>
            <Mono style={{ marginBottom: 14, color: HAVEN.peach }}>Atelier</Mono>
            <div style={{ fontFamily: 'Inter', fontSize: 52, fontWeight: 200, marginBottom: 8 }}>$99<span style={{ fontSize: 18, color: 'rgba(251,243,232,0.5)' }}> / month</span></div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: HAVEN.peach, marginBottom: 28 }}>A real human, with Sage.</div>
            {['Everything in Core', 'Paired with a human matchmaker', 'Monthly 30-min call with your matchmaker', 'Hand-drafted profile narrative', 'Priority for long-distance intros', 'Reservation help for first dates'].map((l, i) => (
              <div key={i} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : `1px solid rgba(251,243,232,0.12)`, fontFamily: 'Inter', fontSize: 14, color: HAVEN.cream }}>{l}</div>
            ))}
          </div>
        </div>

        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 17, color: HAVEN.textMuted, textAlign: 'center', marginTop: 40 }}>
          If Haven isn't right for you in the first 30 days, we refund you and refer you to a therapist in your area.
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '100px 64px 140px', borderTop: `1px solid ${HAVEN.divider}` }}>
        <Mono style={{ marginBottom: 20 }}>Questions people ask</Mono>
        <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 48, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 50 }}>
          A few things, answered <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>plainly.</em>
        </div>
        {[
          ['Do you tell my therapist anything about my dating life?', 'Never. We ask them one yes/no question during verification. That is the entire relationship.'],
          ['What if I stop therapy?', 'You can pause. When you\'re back in therapy, you\'re back in Haven — same profile, same Sage.'],
          ['Is Sage a person, or AI?', 'The voice is a written persona. The questions are authored by our team — clinicians and writers. The matchmaking for Atelier is a real human.'],
          ['How slow is "slow"?', 'You\'ll typically meet one person a week on Core. Some weeks, none. Some weeks, Sage thinks she\'s found something unusual and waits a few more days to confirm.'],
          ['I\'m not in therapy but I want in.', 'Browse our therapist directory — it\'s a short, curated list of people taking new clients. Start with one of them, come back in a few months.'],
        ].map(([q, a], i) => (
          <div key={i} style={{ padding: '28px 0', borderTop: `1px solid ${HAVEN.divider}`, display: 'flex', gap: 60 }}>
            <div style={{ flex: 1, fontFamily: 'Inter', fontSize: 20, fontWeight: 300, color: HAVEN.cocoa }}>{q}</div>
            <div style={{ flex: 1.3, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: HAVEN.textDim, lineHeight: 1.55 }}>{a}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ padding: '60px 64px', background: HAVEN.cocoa, color: HAVEN.cream, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 40, color: HAVEN.cream, marginBottom: 20 }}>Haven</div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 16, color: HAVEN.peach, maxWidth: 400, lineHeight: 1.5 }}>A home for people doing the work.</div>
        </div>
        <div style={{ display: 'flex', gap: 60, fontFamily: 'Inter', fontSize: 12, color: 'rgba(251,243,232,0.6)', letterSpacing: '0.04em' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ color: HAVEN.cream }}>For members</span><span>How it works</span><span>Pricing</span><span>Privacy</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ color: HAVEN.cream }}>For therapists</span><span>Refer a client</span><span>Directory</span><span>Partner inquiries</span></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ color: HAVEN.cream }}>Haven</span><span>Manifesto</span><span>Press</span><span>Jobs</span></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen_Landing });
