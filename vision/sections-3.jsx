// Haven Vision — sections 3: roadmap, team, ask + close

function RoadmapSection() {
  const phases = [
    {
      q: 'Now · Q2 \'26',
      title: 'Beta · 2,412 members',
      color: '#D87560',
      items: ['Sage running on Claude · live', 'Therapy verification — 3 partners', 'NYC, LA, London', '68% 6-mo retention'],
    },
    {
      q: 'Q3 \'26',
      title: 'Open the gates carefully',
      color: '#E89890',
      items: ['Waitlist → 8,000 members', 'iOS app (current is web)', 'Partner: BetterHelp deeplink onboarding', 'Sage v2 · multi-modal voice'],
    },
    {
      q: 'Q1 \'27',
      title: '10 cities',
      color: '#3a2420',
      items: ['Boston, Austin, Chicago, Toronto, Berlin, Paris, SF', '25,000 members', 'Therapist directory · 200+ partners', 'Public press launch'],
    },
    {
      q: 'Q4 \'27',
      title: 'The full thesis',
      color: '#3a2420',
      items: ['80,000 members · $20M ARR', 'Couples therapy partnership · Lasting / Paired', 'Series B', 'Sage as platform — "the AI that knows you" beyond dating'],
    },
  ];
  return (
    <Section id="roadmap" eyebrow="Roadmap" title={<>Slow. Careful. <It>Inevitable.</It></>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {phases.map((p, i) => (
          <div key={p.q} style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: p.color }} />
              <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: p.color }}>{p.q}</div>
            </div>
            <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 22, color: '#3a2420', marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{p.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {p.items.map(t => (
                <li key={t} style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(58,36,32,0.7)', lineHeight: 1.5, paddingLeft: 14, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 9, width: 5, height: 1, background: 'rgba(58,36,32,0.3)' }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TeamSection() {
  const team = [
    {
      name: 'Anaya Lyra',
      role: 'Co-founder · CEO',
      bio: 'Former product at Hinge (2019–2023). Watched the swipe-loop break a generation.',
      prev: ['Hinge', 'Stanford d.school', 'IDEO'],
    },
    {
      name: 'Naveen Iyer',
      role: 'Co-founder · CTO',
      bio: 'Built early voice tooling at Anthropic. Sage is his fourth LLM agent — the first he\'d let his sister use.',
      prev: ['Anthropic', 'Replit', 'MIT CSAIL'],
    },
    {
      name: 'Dr. Ren Mehta, LCSW',
      role: 'Head of Clinical',
      bio: 'NYU-trained clinician. Designed Sage\'s therapeutic guardrails. Practices in Brooklyn.',
      prev: ['NYU Langone', 'Private practice', '14 years experience'],
    },
    {
      name: 'Elena Park',
      role: 'Head of Brand',
      bio: 'Former creative director at Aesop. Visual system, voice, the way Haven feels in the hand.',
      prev: ['Aesop', 'Pentagram', 'RCA'],
    },
  ];
  return (
    <Section id="team" eyebrow="Founders" title="The four of us, plus eleven engineers and clinicians.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {team.map(p => (
          <Card key={p.name}>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div style={{
                width: 88, height: 88, borderRadius: 44, flexShrink: 0,
                background: `linear-gradient(135deg, #F4A088, #E89890)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                fontSize: 36, color: '#fff', letterSpacing: '-0.02em',
              }}>{p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Inter', fontSize: 18, fontWeight: 500, color: '#3a2420', marginBottom: 2 }}>{p.name}</div>
                <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D87560', marginBottom: 12 }}>{p.role}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(58,36,32,0.72)', lineHeight: 1.55, marginBottom: 14 }}>{p.bio}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.prev.map(t => (
                    <span key={t} style={{
                      fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '4px 10px', borderRadius: 100,
                      background: 'rgba(58,36,32,0.05)', color: 'rgba(58,36,32,0.65)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: 40, padding: '28px 32px', background: 'rgba(244,160,136,0.08)', borderRadius: 18, border: '1px solid rgba(244,160,136,0.2)' }}>
        <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D87560', marginBottom: 10 }}>Advisors</div>
        <div style={{ fontFamily: 'Inter', fontSize: 15, color: '#3a2420', lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 500 }}>Esther Perel</strong> · couples therapy · &nbsp;
          <strong style={{ fontWeight: 500 }}>Whitney Wolfe Herd</strong> · founder, Bumble · &nbsp;
          <strong style={{ fontWeight: 500 }}>Adam Grant</strong> · organizational psych · &nbsp;
          <strong style={{ fontWeight: 500 }}>Dr. Becky Kennedy</strong> · attachment
        </div>
      </div>
    </Section>
  );
}

function AskSection() {
  return (
    <Section id="ask" dark eyebrow="The ask" title={<>$14M Series A. <It color="#F4A088">Lead seeking.</It></>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.7, color: 'rgba(251,243,232,0.78)', fontWeight: 300, marginBottom: 36 }}>
            We're raising a <span style={{ color: '#F4A088' }}>$14M Series A at $72M post</span>. The round funds 24 months: ten cities, 80,000 members, the iOS app, Sage v2, and the team to support all of it. Closing in May.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['$5.6M · 40%', 'Engineering — Sage v2, iOS, scale infra', 9],
              ['$3.5M · 25%', 'Member care — concierge matchmakers, clinical', 6],
              ['$2.8M · 20%', 'Brand — content, partnerships, slow press launch', 4],
              ['$1.4M · 10%', 'Therapy partner integrations & API', 3],
              ['$0.7M · 5%', 'Reserve', 1],
            ].map(([l, d, c]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 24, paddingBottom: 14, borderBottom: '1px solid rgba(251,243,232,0.08)' }}>
                <div style={{ width: 130, fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.06em', color: '#F4A088', fontWeight: 500 }}>{l}</div>
                <div style={{ flex: 1, fontFamily: 'Inter', fontSize: 14, color: 'rgba(251,243,232,0.78)', lineHeight: 1.5 }}>{d}</div>
                <div style={{ width: 80, fontFamily: 'DM Mono', fontSize: 10, color: 'rgba(251,243,232,0.5)' }}>{c} hires</div>
              </div>
            ))}
          </div>
        </div>
        <Card dark>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(251,243,232,0.5)', marginBottom: 14 }}>Round details</div>
          {[
            ['Raise', '$14M'],
            ['Post', '$72M'],
            ['Lead check', '$6–8M'],
            ['Existing cap table', 'Founders 64% · Seed (a16z, BBG) 18%'],
            ['Seed round', '$6.2M · Mar \'24'],
            ['Burn (current)', '$340K/mo'],
            ['Runway', '23 months unled'],
            ['Closing', 'May 30, 2026'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid rgba(251,243,232,0.08)' }}>
              <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(251,243,232,0.65)' }}>{k}</div>
              <div style={{ fontFamily: 'DM Mono', fontSize: 12, color: '#FBF3E8', fontWeight: 500 }}>{v}</div>
            </div>
          ))}
          <a href="mailto:invest@haven.love" style={{
            display: 'block', marginTop: 20, padding: '16px 20px', textAlign: 'center',
            background: '#F4A088', color: '#1f1310', fontFamily: 'Inter', fontWeight: 500,
            fontSize: 14, borderRadius: 100, textDecoration: 'none',
          }}>invest@haven.love →</a>
        </Card>
      </div>
    </Section>
  );
}

function CloseSection() {
  return (
    <section style={{ padding: '160px 0 100px', background: '#FBF3E8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '-10%',
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F4A088 0%, transparent 65%)`,
        opacity: 0.4, filter: 'blur(60px)', zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <div style={{
          fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
          fontSize: 64, lineHeight: 1.2, color: '#3a2420', marginBottom: 32, letterSpacing: '-0.02em',
        }}>
          Haven is for the people<br />who want it to work.
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 17, color: 'rgba(58,36,32,0.65)', lineHeight: 1.6, fontWeight: 300, marginBottom: 56, maxWidth: 600, margin: '0 auto 56px' }}>
          We're building the smallest possible thing that could matter — and growing it slowly enough that it stays the thing it is.
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#product" style={{ padding: '16px 24px', borderRadius: 100, background: '#3a2420', color: '#FBF3E8', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Try the live app</a>
          <a href="mailto:invest@haven.love" style={{ padding: '16px 24px', borderRadius: 100, border: '1px solid rgba(58,36,32,0.2)', color: '#3a2420', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>invest@haven.love</a>
        </div>
        <div style={{ marginTop: 100, paddingTop: 36, borderTop: '1px solid rgba(58,36,32,0.1)', display: 'flex', justifyContent: 'space-between', fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.4)' }}>
          <div>Haven · Brooklyn, NY</div>
          <div>haven.love</div>
          <div>Confidential — April 2026</div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RoadmapSection, TeamSection, AskSection, CloseSection });
