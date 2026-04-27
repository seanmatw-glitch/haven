// Haven App — Therapist partner portal (web-ish, still on phone for continuity)

function Screen_TherapistInvite() {
  return (
    <Phone>
      <Bloom tone="cream" intensity={0.4} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '20px 24px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Mono>For therapists</Mono>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, marginTop: 4 }}>Haven</div>
          </div>
          <div style={{ padding: '6px 12px', border: `1px solid ${HAVEN.divider}`, borderRadius: 100, fontFamily: 'Inter', fontSize: 11, color: HAVEN.textDim }}>Dr. Park</div>
        </div>

        <div style={{ padding: '18px 24px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <H1 size={28} style={{ marginBottom: 12, lineHeight: 1.2 }}>
            Invite a client who's <It>ready</It>.
          </H1>
          <Body size={13} style={{ marginBottom: 22, color: HAVEN.textDim }}>
            You know when someone has done the work to hold another person carefully. When you're ready to say so, give them a code.
          </Body>

          {/* invite code card */}
          <div style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', borderRadius: 20, padding: 20, marginBottom: 18 }}>
            <Mono style={{ marginBottom: 10 }}>Your invite code</Mono>
            <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 22, letterSpacing: '0.2em', color: HAVEN.cocoa, marginBottom: 14 }}>PARK · 3428</div>
            <Body size={12} color={HAVEN.textMuted}>
              Share this with a client. They enter it during verification. Their identity stays private to you — we only know they were referred.
            </Body>
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              <Btn style={{ flex: 1, padding: '10px 14px', fontSize: 12 }}>Copy code</Btn>
              <Btn primary={false} style={{ flex: 1, padding: '10px 14px', fontSize: 12 }}>Email client</Btn>
            </div>
          </div>

          <Mono style={{ marginBottom: 10 }}>Clients you've referred</Mono>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            {[
              { initials: 'B.R.', status: 'Active · 2 introductions', since: 'Mar 2026', dot: HAVEN.coralDeep },
              { initials: 'M.S.', status: 'In intake with Sage', since: 'Apr 2026', dot: HAVEN.honey },
              { initials: 'J.L.', status: 'Paused by member', since: 'Feb 2026', dot: HAVEN.textMuted },
            ].map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.55)', border: `1px solid ${HAVEN.divider}`, borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: HAVEN.oat, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.cocoa }}>{c.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>{c.status}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, marginTop: 2 }}>Referred {c.since}</div>
                  </div>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.dot }} />
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(244,160,136,0.08)', border: '1px solid rgba(244,160,136,0.25)', borderRadius: 14, padding: 14, marginBottom: 18 }}>
            <Body size={12} color={HAVEN.textDim} style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14 }}>
              We never tell you what your client tells Sage. This is a referral, not a window.
            </Body>
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

function Screen_TherapistDirectory() {
  // Member-facing: "find a therapist" — a curated warm directory, not a marketplace
  return (
    <Phone>
      <Bloom tone="morning" intensity={0.6} style={{ height: '100%' }}>
        <StatusBar />
        <div style={{ padding: '16px 24px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa }}>← Profile</div>
          <Mono>Not yet in therapy?</Mono>
        </div>

        <div style={{ padding: '14px 24px 0', flex: 1, overflow: 'hidden' }}>
          <H1 size={26} style={{ marginBottom: 10, lineHeight: 1.2 }}>
            Therapists we <It>know</It>, ready for someone like you.
          </H1>
          <Body size={13} style={{ marginBottom: 18, color: HAVEN.textDim }}>
            Small list, hand-picked. They agreed to take Haven referrals. Insurance + sliding scale notes on each.
          </Body>

          {/* filters */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
            {['Remote', 'NYC', 'Attachment work', 'Sliding scale', 'LGBTQ+'].map((t, i) => (
              <div key={i} style={{ padding: '6px 12px', background: i === 0 ? HAVEN.cocoa : 'rgba(255,255,255,0.6)', color: i === 0 ? HAVEN.cream : HAVEN.textDim, border: i === 0 ? 'none' : `1px solid ${HAVEN.divider}`, borderRadius: 100, fontFamily: 'Inter', fontSize: 11 }}>{t}</div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { name: 'Ana Kessler, LCSW', focus: 'Attachment, grief, adult ADHD', note: '"Clients describe her as calm and unhurried."', avail: 'Waitlist · 3 weeks', photo: 'app/photos/portrait-2.jpg' },
              { name: 'Julian Moss, LMFT', focus: 'Couples dissolution, identity', note: '"Direct, with a dry sense of humor."', avail: 'Taking new clients', photo: 'app/photos/portrait-3.jpg' },
              { name: 'Dr. Leah Bento', focus: 'Relational, somatic', note: '"Works slowly, with a lot of silence."', avail: 'Sliding scale open', photo: 'app/photos/you.jpg' },
            ].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 18, padding: 14, display: 'flex', gap: 12 }}>
                <div style={{ width: 60, height: 80, borderRadius: 12, flexShrink: 0, backgroundImage: `url(${t.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>{t.name}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted, marginTop: 2 }}>{t.focus}</div>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: HAVEN.cocoa, marginTop: 8, lineHeight: 1.35 }}>{t.note}</div>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: HAVEN.coralDeep, marginTop: 8 }}>{t.avail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bloom>
    </Phone>
  );
}

Object.assign(window, { Screen_TherapistInvite, Screen_TherapistDirectory });
