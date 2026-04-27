// Haven Vision — sections 2: product (live app), business model, market

function ProductSection() {
  const [view, setView] = React.useState('home');
  return (
    <Section id="product" eyebrow="The product · live" title={<>Sage is <It>real</It>. Try her right here.</>}>
      <div style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.6, color: 'rgba(58,36,32,0.7)', maxWidth: 720, marginBottom: 56, fontWeight: 300 }}>
        This isn't a screenshot. The iframe below is the live Haven Beta — Sage runs on Claude, your messages persist, and every screen below the chrome is shipping code. Investors and partners can break it.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 50, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['home', 'Morning home', 'Sage card · match card · date brief — the daily surface'],
              ['sage', 'Live Sage chat', 'Real conversation. She remembers your growth edge and uses your words.'],
              ['match', 'The match', 'One person at a time. Photo · why-her-for-you · her note · date brief.'],
              ['date-brief', 'Date brief', 'The morning of. What you share, what to ask, what not to fix.'],
              ['profile', 'What Sage knows', 'Your file, in your own words. Plus what she\'s noticed.'],
              ['eng-handoff', 'Architecture', 'How it\'s built — for the engineers in the room.'],
            ].map(([id, label, sub]) => (
              <div key={id} onClick={() => { setView(id); document.getElementById('beta-frame').src = `haven-beta.html#/${id}`; }} style={{
                padding: '18px 22px', borderRadius: 14, cursor: 'pointer',
                background: view === id ? '#3a2420' : '#fff',
                color: view === id ? '#FBF3E8' : '#3a2420',
                border: `1px solid ${view === id ? '#3a2420' : 'rgba(58,36,32,0.08)'}`,
                transition: 'all 0.2s',
              }}>
                <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.65, lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: '18px 22px', background: 'rgba(244,160,136,0.12)', borderRadius: 14, border: '1px solid rgba(244,160,136,0.25)' }}>
            <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#D87560', marginBottom: 6 }}>Try it →</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#3a2420', lineHeight: 1.5 }}>Click "Live Sage chat" and write something hard. She'll meet you there.</div>
          </div>
        </div>
        <div style={{ position: 'sticky', top: 100, justifySelf: 'end' }}>
          <iframe id="beta-frame" src={`haven-beta.html#/${view}`} style={{
            width: 480, height: 920, border: 'none', borderRadius: 28,
            boxShadow: '0 30px 80px rgba(58,36,32,0.18)',
          }} />
          <div style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.4)', marginTop: 14, textAlign: 'center' }}>
            ↑ Live. Persistent. Click around.
          </div>
        </div>
      </div>
    </Section>
  );
}

function BusinessModelSection() {
  const projData = [
    { label: 'Q2', value: 28 }, { label: 'Q3', value: 42 }, { label: 'Q4', value: 71 },
    { label: 'Q1\'27', value: 118 }, { label: 'Q2', value: 184 }, { label: 'Q3', value: 268 },
    { label: 'Q4', value: 372, highlight: true },
  ];
  return (
    <Section id="business" eyebrow="Business model" title={<>One member at a time. <It>Slow growth, deep retention.</It></>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 60 }}>
        {[
          ['Atelier', '$99/mo', 'Sage + 1 match every 6–8 weeks. The default tier.', '#D87560'],
          ['Concierge', '$340/mo', 'Sage + a human matchmaker. NYC, LA, London.', '#3a2420'],
          ['Pause', '$0', 'Step away. Sage stays. File preserved.', 'rgba(58,36,32,0.4)'],
        ].map(([n, p, d, c]) => (
          <Card key={n}>
            <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: c, marginBottom: 12 }}>{n}</div>
            <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 48, color: '#3a2420', letterSpacing: '-0.03em', marginBottom: 12 }}>{p}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(58,36,32,0.7)', lineHeight: 1.55 }}>{d}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Card>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)', marginBottom: 14 }}>ARR projection (000s)</div>
          <LineChart data={projData} height={180} color="#D87560" labels />
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(58,36,32,0.65)', marginTop: 18, lineHeight: 1.55 }}>
            <span style={{ color: '#D87560', fontWeight: 500 }}>$372K MRR by Q4 '27.</span> Conservative — assumes 40% Atelier, 8% Concierge, the rest pause/free. No paid ads.
          </div>
        </Card>
        <Card>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)', marginBottom: 14 }}>Unit economics · per Atelier member</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['Average revenue (24mo)', '$2,376', '#D87560'],
              ['Sage compute (Claude)', '−$104', 'rgba(58,36,32,0.5)'],
              ['Therapy verification API', '−$48', 'rgba(58,36,32,0.5)'],
              ['Member care (concierge load)', '−$220', 'rgba(58,36,32,0.5)'],
              ['CAC (referral-led)', '−$165', 'rgba(58,36,32,0.5)'],
              ['Contribution margin', '$1,839 · 77%', '#5a8a5a'],
            ].map(([l, v, c]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(58,36,32,0.06)', paddingBottom: 10 }}>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#3a2420' }}>{l}</div>
                <div style={{ fontFamily: 'DM Mono', fontSize: 12, color: c, fontWeight: 500, letterSpacing: '0.04em' }}>{v}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function MarketSection() {
  return (
    <Section id="market" eyebrow="Market" title={<>A small, <It>devoted</It> market is the right market.</>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
            {[
              ['TAM', '18M', 'US adults 28–42 in active therapy', '#D87560'],
              ['SAM', '6.2M', 'Single, urban, household income $80K+', '#E89890'],
              ['SOM (5yr)', '180K', 'Members at $99–340/mo across 10 cities', '#3a2420'],
            ].map(([k, v, d, c]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'baseline', gap: 24, paddingBottom: 18, borderBottom: '1px solid rgba(58,36,32,0.08)' }}>
                <div style={{ width: 80, fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)' }}>{k}</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 56, color: c, letterSpacing: '-0.03em', minWidth: 160 }}>{v}</div>
                <div style={{ flex: 1, fontFamily: 'Inter', fontSize: 14, color: 'rgba(58,36,32,0.7)', lineHeight: 1.55 }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.4, color: '#3a2420', maxWidth: 540 }}>
            We don't need millions of users. We need 180,000 of them, paying $99 a month, staying for years. That's a $200M+ ARR business.
          </div>
        </div>
        <Card>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)', marginBottom: 14 }}>Competitive position</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['Hinge / Bumble', 'Mass market · scale model', 240],
              ['Tawkify · Three Day Rule', 'Concierge · $5K+ entry', 60],
              ['The League · Raya', 'Status / scarcity gating', 40],
              ['Haven', 'Verified inner work · Sage', 100],
            ].map(([n, d, w], i) => (
              <div key={n} style={{ borderBottom: '1px solid rgba(58,36,32,0.06)', paddingBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: i === 3 ? 500 : 400, color: i === 3 ? '#D87560' : '#3a2420' }}>{n}</div>
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: 'rgba(58,36,32,0.6)', marginBottom: 6 }}>{d}</div>
                <div style={{ height: 4, background: 'rgba(58,36,32,0.06)', borderRadius: 2 }}>
                  <div style={{ height: '100%', width: `${w/3}%`, background: i === 3 ? '#D87560' : 'rgba(58,36,32,0.4)', borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

function CohortSection() {
  return (
    <Section id="cohorts" dark eyebrow="Cohort retention · beta" title={<>The data is unusual. <It color="#F4A088">It keeps getting better.</It></>}>
      <div style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.6, color: 'rgba(251,243,232,0.7)', maxWidth: 720, marginBottom: 40, fontWeight: 300 }}>
        Most consumer apps lose 70%+ of users in the first 90 days. Haven cohorts are <span style={{ color: '#F4A088' }}>retaining better month over month</span> — because Sage is getting better at her job, and word-of-mouth members arrive pre-qualified.
      </div>
      <Card dark>
        <CohortGrid rows={[
          { cohort: 'Sep \'25', values: [100, 92, 84, 78, 74, 71, 68] },
          { cohort: 'Oct \'25', values: [100, 94, 87, 82, 79, 75] },
          { cohort: 'Nov \'25', values: [100, 95, 89, 84, 81] },
          { cohort: 'Dec \'25', values: [100, 96, 91, 87] },
          { cohort: 'Jan \'26', values: [100, 97, 93] },
          { cohort: 'Feb \'26', values: [100, 98] },
        ]} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36, marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(251,243,232,0.08)' }}>
          <Stat value="68%" label="6-mo retention" sub="Sep '25 cohort" color="#F4A088" />
          <Stat value="2.4" label="Dates per match" sub="Median in beta" color="#F4A088" />
          <Stat value="17%" label="LTR rate" sub="Match → long-term relationship at 12mo" color="#F4A088" />
          <Stat value="74" label="NPS" sub="vs. Hinge: 38" color="#F4A088" />
        </div>
      </Card>
    </Section>
  );
}

Object.assign(window, { ProductSection, BusinessModelSection, MarketSection, CohortSection });
