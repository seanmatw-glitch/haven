// Haven Vision — section components

function Section({ id, eyebrow, title, children, dark, narrow, style = {} }) {
  return (
    <section id={id} style={{
      padding: '120px 0',
      background: dark ? '#1f1310' : 'transparent',
      color: dark ? '#FBF3E8' : '#3a2420',
      position: 'relative',
      ...style,
    }}>
      <div style={{ maxWidth: narrow ? 760 : 1180, margin: '0 auto', padding: '0 32px' }}>
        {eyebrow && (
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: dark ? 'rgba(251,243,232,0.5)' : 'rgba(58,36,32,0.5)', marginBottom: 18 }}>{eyebrow}</div>
        )}
        {title && (
          <h2 style={{
            fontFamily: 'Inter', fontWeight: 200, fontSize: 64, lineHeight: 1.05,
            letterSpacing: '-0.035em', margin: '0 0 48px', maxWidth: 880,
            color: dark ? '#FBF3E8' : '#3a2420',
          }}>{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}

function It({ children, color }) {
  return <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, color: color || 'inherit' }}>{children}</em>;
}

function Stat({ value, label, sub, color = '#D87560' }) {
  return (
    <div>
      <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 64, letterSpacing: '-0.04em', lineHeight: 1, color, marginBottom: 8 }}>{value}</div>
      <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{label}</div>
      {sub && <div style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.6, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

function Card({ children, dark, style = {} }) {
  return (
    <div style={{
      background: dark ? 'rgba(251,243,232,0.04)' : '#fff',
      border: dark ? '1px solid rgba(251,243,232,0.08)' : '1px solid rgba(58,36,32,0.06)',
      borderRadius: 18, padding: '28px 30px',
      boxShadow: dark ? 'none' : '0 1px 2px rgba(58,36,32,0.03)',
      ...style,
    }}>{children}</div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#FBF3E8' }}>
      {/* bloom */}
      <div style={{ position: 'absolute', inset: '-15%',
        background: `radial-gradient(ellipse 50% 45% at 25% 30%, #F4A088 0%, transparent 60%),
                     radial-gradient(ellipse 55% 50% at 80% 25%, #E8C38A 0%, transparent 60%),
                     radial-gradient(ellipse 60% 55% at 70% 85%, #EEA99B 0%, transparent 60%)`,
        opacity: 0.55, filter: 'blur(40px)', zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180, margin: '0 auto', padding: '40px 32px 100px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: '#3a2420' }}>Haven</div>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)' }}>Vision · v0.4 · Confidential</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>
          <div style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)', marginBottom: 28 }}>The case for Haven · April 2026</div>
          <h1 style={{
            fontFamily: 'Inter', fontWeight: 200, fontSize: 92, lineHeight: 0.98,
            letterSpacing: '-0.04em', margin: '0 0 30px', maxWidth: 1000, color: '#3a2420',
          }}>
            A dating app for people who have done <It>their own work</It> — and the matchmaker who already knows them.
          </h1>
          <div style={{ fontFamily: 'Inter', fontSize: 19, lineHeight: 1.55, color: 'rgba(58,36,32,0.7)', maxWidth: 660, fontWeight: 300, marginBottom: 48 }}>
            We verify therapy. We pair you with a matchmaker named Sage who actually knows you. You meet one person at a time. We're raising a $14M Series A to bring this to 10 cities.
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#problem" style={{
              padding: '16px 24px', borderRadius: 100, background: '#3a2420', color: '#FBF3E8',
              fontFamily: 'Inter', fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.01em',
            }}>Read the case →</a>
            <a href="#product" style={{
              padding: '16px 24px', borderRadius: 100, background: 'transparent',
              color: '#3a2420', fontFamily: 'Inter', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', border: '1px solid rgba(58,36,32,0.2)',
            }}>Try the live app</a>
            <a href="#ask" style={{
              padding: '16px 24px', borderRadius: 100, background: 'transparent',
              color: '#3a2420', fontFamily: 'Inter', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', border: '1px solid rgba(58,36,32,0.2)',
            }}>The ask</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, paddingTop: 64, borderTop: '1px solid rgba(58,36,32,0.1)' }}>
          <Stat value="2,412" label="Beta members" sub="NYC · LA · London" />
          <Stat value="68%" label="6-mo retention" sub="vs. 22% category avg." />
          <Stat value="$99/mo" label="Atelier tier" sub="Average revenue per user" />
          <Stat value="14:1" label="LTV : CAC" sub="Word-of-mouth driven" />
        </div>
      </div>
    </section>
  );
}

// ─── Problem ────────────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <Section id="problem" eyebrow="The problem" title={<>Dating apps optimized for swipes. <It>Adults</It> stopped swiping.</>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 60 }}>
        <div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 40, lineHeight: 1.2, color: '#3a2420', marginBottom: 24 }}>
            "I've been on Hinge for four years. I'm in therapy. The men I match with… are not."
          </div>
          <div style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.55)' }}>— Beta member, 34, Brooklyn</div>
        </div>
        <Card>
          <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, marginBottom: 18 }}>The funnel that sold us nothing</div>
          <FunnelChart steps={[
            { label: 'Swipes / week', value: 240 },
            { label: 'Matches', value: 38 },
            { label: 'Reply', value: 12 },
            { label: 'Meet', value: 1.4 },
            { label: 'Second date', value: 0.4 },
          ]} />
          <div style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.45)', marginTop: 18, lineHeight: 1.6 }}>
            Pew Research, 2025 · adults 28–42
          </div>
        </Card>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          ['52%', 'of adults 28–42 have left dating apps in the last 18 months', 'Match Group internal, leaked Q4 2025'],
          ['18M', 'Americans currently in active therapy. Most are single.', 'SAMHSA, 2025'],
          ['$8.4B', 'global online dating market — flat for three years', 'Statista, 2026'],
        ].map(([v, l, src]) => (
          <Card key={l}>
            <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 56, color: '#D87560', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 12 }}>{v}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.55, color: '#3a2420', marginBottom: 12 }}>{l}</div>
            <div style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(58,36,32,0.45)' }}>{src}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ─── Vision / Manifesto ─────────────────────────────────────────────────
function VisionSection() {
  return (
    <Section id="vision" dark eyebrow="What we believe" narrow title={<>The next generation of consumer software won't be measured in <It>engagement</It> — it'll be measured in lives that go right.</>}>
      <div style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.7, color: 'rgba(251,243,232,0.78)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <p style={{ margin: 0 }}>The dating apps that ate the last decade were built on swipe loops, push notifications, and a model of love as scarcity. They worked. They also broke a generation's relationship with intimacy.</p>
        <p style={{ margin: 0 }}>We started Haven because the people we love — our friends, our siblings, ourselves — kept telling us the same thing: <It color="#F4A088">"I've done the work. I want to meet someone who has too."</It></p>
        <p style={{ margin: 0 }}>The work is therapy. The work is a journal. The work is breaking up with the wrong person and choosing not to call them at 2am. The work is rare, and it's beautiful, and it deserves a partner who recognizes it.</p>
        <p style={{ margin: 0 }}>Haven is built around a single idea: <It color="#F4A088">someone should know you before they introduce you.</It> Sage — our LLM matchmaker, designed by therapists — does. She remembers the words you use. She notices what you don't say. And when she introduces you to someone, it's because she sees how their story belongs near yours.</p>
        <p style={{ margin: 0 }}>This is software in service of long love. We're going to build it carefully, slowly, and only for the people who want it.</p>
      </div>
      <div style={{ marginTop: 64, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: '#F4A088' }}>
        — A. Lyra & N. Iyer, founders
      </div>
    </Section>
  );
}

Object.assign(window, { Section, It, Stat, Card, Hero, ProblemSection, VisionSection });
