// Haven — Brand campaign posters & OOH

// — OOH: subway / billboard wild postings —
function Screen_OOH_Series() {
  const posters = [
    { tone: 'coral', headline: 'Slow,\non purpose.', sub: 'Haven — a dating concierge for people in therapy.', accent: '#D87560' },
    { tone: 'dusk', headline: 'You did\nthe work.\nBring it.', sub: 'Meet someone who did theirs, too.', accent: '#C9A5B8' },
    { tone: 'honey', headline: 'One\nperson,\nat a time.', sub: 'No feed. No swipe. No performance.', accent: '#E8A860' },
  ];
  return (
    <div style={{ width: 1600, padding: 60, background: '#1e1210', display: 'flex', gap: 32, alignItems: 'flex-start', fontFamily: 'Inter' }}>
      {posters.map((p, i) => (
        <div key={i} style={{ flex: 1 }}>
          {/* the poster */}
          <div style={{ aspectRatio: '3/4', borderRadius: 6, overflow: 'hidden', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
            <Bloom tone={p.tone} intensity={0.95} style={{ width: '100%', height: '100%' }}>
              <div style={{ padding: 48, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 36, color: HAVEN.cocoa }}>Haven</div>
                  <Halo size={40} thinking={false} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 96, lineHeight: 0.92, letterSpacing: '-0.04em', color: HAVEN.cocoa, whiteSpace: 'pre-line', marginBottom: 24 }}>
                    {p.headline.split('\n').map((line, j) => (
                      <div key={j}>{line.includes(',') || line.includes('.') ? <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400 }}>{line}</em> : line}</div>
                    ))}
                  </div>
                  <div style={{ height: 1, background: HAVEN.cocoa, opacity: 0.3, marginBottom: 18 }} />
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: HAVEN.cocoa, lineHeight: 1.4, marginBottom: 24, maxWidth: 320 }}>
                    {p.sub}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, color: HAVEN.cocoa, letterSpacing: '0.14em', textTransform: 'uppercase' }}>haven.love</div>
                    <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.cocoa, opacity: 0.5, letterSpacing: '0.12em' }}>0{i+1} / 03</div>
                  </div>
                </div>
              </div>
            </Bloom>
          </div>
          <div style={{ marginTop: 14, fontFamily: '"DM Mono", monospace', fontSize: 10, color: '#8a7a72', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            {['Subway · 48×72', 'Bus shelter · 48×67', 'Wild posting · 24×36'][i]}
          </div>
        </div>
      ))}
    </div>
  );
}

// — Instagram: launch announcement grid —
function Screen_InstagramGrid() {
  const cells = [
    { k: 'hero', tone: 'coral' },
    { k: 'quote', tone: 'dusk' },
    { k: 'photo', img: 'app/photos/elena.jpg' },
    { k: 'texture', tone: 'honey' },
    { k: 'sage', tone: 'morning' },
    { k: 'photo', img: 'app/photos/morning.jpg' },
    { k: 'stat', tone: 'cream' },
    { k: 'photo', img: 'app/photos/maya.jpg' },
    { k: 'cta', tone: 'coral' },
  ];
  return (
    <div style={{ width: 1080, padding: 50, background: '#0f0806', fontFamily: 'Inter' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, color: '#FBF3E8' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #F4A088, #D4B8D8)', padding: 3 }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0f0806', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: '#FBF3E8' }}>h</div>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}>haven.love</div>
          <div style={{ fontFamily: 'Inter', fontSize: 12, opacity: 0.55 }}>2,412 posts · 48.3k followers</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        {cells.map((c, i) => (
          <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
            {c.k === 'photo' && (
              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(0.3) brightness(0.9)' }} />
            )}
            {c.k === 'hero' && (
              <Bloom tone={c.tone} intensity={1} style={{ width: '100%', height: '100%' }}>
                <div style={{ padding: 30, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 42, lineHeight: 0.95, letterSpacing: '-0.03em', color: HAVEN.cocoa }}>
                    Meet someone<br />who did <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>their</em><br />own work, too.
                  </div>
                </div>
              </Bloom>
            )}
            {c.k === 'quote' && (
              <Bloom tone={c.tone} intensity={0.9} style={{ width: '100%', height: '100%' }}>
                <div style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 24, lineHeight: 1.3, color: HAVEN.cocoa }}>
                    "The app stopped feeling like shopping, and started feeling like listening."
                  </div>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 16 }}>— Leila, member</div>
                </div>
              </Bloom>
            )}
            {c.k === 'sage' && (
              <Bloom tone={c.tone} intensity={0.9} style={{ width: '100%', height: '100%' }}>
                <div style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                  <Halo size={100} thinking={true} />
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, textAlign: 'center' }}>Meet Sage.</div>
                </div>
              </Bloom>
            )}
            {c.k === 'texture' && (
              <Bloom tone={c.tone} intensity={1} style={{ width: '100%', height: '100%' }} />
            )}
            {c.k === 'stat' && (
              <Bloom tone={c.tone} intensity={0.7} style={{ width: '100%', height: '100%' }}>
                <div style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 96, color: HAVEN.cocoa, lineHeight: 1, letterSpacing: '-0.04em' }}>100%</div>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: HAVEN.cocoa, marginTop: 8, lineHeight: 1.4 }}>of members are verified in therapy.</div>
                </div>
              </Bloom>
            )}
            {c.k === 'cta' && (
              <Bloom tone={c.tone} intensity={0.95} style={{ width: '100%', height: '100%' }}>
                <div style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.cocoa, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.7 }}>Now · NYC · LA · London</div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 38, lineHeight: 1, letterSpacing: '-0.03em', color: HAVEN.cocoa, marginBottom: 16 }}>Request<br/>access.</div>
                    <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 18, color: HAVEN.cocoa }}>haven.love ↗</div>
                  </div>
                </div>
              </Bloom>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// — Press kit / media page —
function Screen_PressKit() {
  return (
    <div style={{ width: 1440, minHeight: 1600, background: HAVEN.cream, color: HAVEN.cocoa, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 64px', borderBottom: `1px solid ${HAVEN.divider}` }}>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28 }}>Haven</div>
        <div style={{ display: 'flex', gap: 36, fontFamily: 'Inter', fontSize: 14 }}>
          <span>How it works</span><span>Why</span><span>For therapists</span><span style={{ textDecoration: 'underline', textUnderlineOffset: 6 }}>Press</span>
        </div>
        <div style={{ padding: '10px 22px', border: `1px solid ${HAVEN.cocoa}`, borderRadius: 100, fontFamily: 'Inter', fontSize: 13 }}>Request access</div>
      </div>

      <div style={{ padding: '100px 64px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <Mono style={{ marginBottom: 24 }}>For journalists</Mono>
        <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 72, lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: 40 }}>
          A press kit, for <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>the story you're telling.</em>
        </div>
        <div style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.6, color: HAVEN.textDim, maxWidth: 680, marginBottom: 20 }}>
          Founder quotes, product screenshots at full resolution, brand assets, and the full press release. Everything is free to use — with attribution.
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{ padding: '14px 26px', background: HAVEN.cocoa, color: HAVEN.cream, borderRadius: 100, fontFamily: 'Inter', fontSize: 14 }}>Download press kit · 48 MB</div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 15, color: HAVEN.textMuted }}>press@haven.love</div>
        </div>
      </div>

      {/* quick facts */}
      <div style={{ padding: '0 64px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ height: 1, background: HAVEN.divider, marginBottom: 50 }} />
        <Mono style={{ marginBottom: 30 }}>Quick facts</Mono>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            ['Founded', '2024'],
            ['Based', 'Brooklyn, NY'],
            ['Team', '11 people'],
            ['Members', '2,412'],
            ['Cities', 'NYC · LA · London'],
            ['Therapy-verified', '100%'],
            ['Raised', '$6.2M seed'],
            ['Led by', 'Sequoia, Maven'],
          ].map(([k, v], i) => (
            <div key={i}>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{k}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 26, fontWeight: 300, letterSpacing: '-0.02em' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* coverage */}
      <div style={{ padding: '0 64px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ height: 1, background: HAVEN.divider, marginBottom: 50 }} />
        <Mono style={{ marginBottom: 30 }}>Early coverage</Mono>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { src: 'The New York Times', t: '"The dating app that asks you to slow down."', d: 'March 2025' },
            { src: 'The Cut', t: '"Haven is trying to make matchmaking feel like a friend, not a feed."', d: 'February 2025' },
            { src: 'The Atlantic', t: '"What if dating apps had ethics?"', d: 'January 2025' },
            { src: 'Dezeen', t: '"A warm, confident identity system that refuses the category\'s gradients and neon."', d: 'January 2025' },
          ].map((c, i) => (
            <div key={i} style={{ padding: '28px 0', borderTop: `1px solid ${HAVEN.divider}`, display: 'flex', gap: 40, alignItems: 'baseline' }}>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, width: 200, flexShrink: 0 }}>{c.src}</div>
              <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 22, lineHeight: 1.35, letterSpacing: '-0.015em', flex: 1 }}>{c.t}</div>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* downloads */}
      <Bloom tone="morning" intensity={0.6}>
        <div style={{ padding: '80px 64px', maxWidth: 1200, margin: '0 auto' }}>
          <Mono style={{ marginBottom: 30 }}>Download</Mono>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { t: 'Brand assets', s: 'Wordmark, halo mark, color system. SVG + PNG.', size: '4.2 MB' },
              { t: 'Product screenshots', s: 'Onboarding, match, chat. Full-res PNG.', size: '28 MB' },
              { t: 'Founder portraits', s: 'Leila Osman, Jun Park. High-res, uncompressed.', size: '16 MB' },
            ].map((d, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.85)', borderRadius: 18, padding: 26 }}>
                <div style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 400, marginBottom: 8, letterSpacing: '-0.01em' }}>{d.t}</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, color: HAVEN.textDim, lineHeight: 1.5, marginBottom: 20 }}>{d.s}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: `1px solid ${HAVEN.divider}`, paddingTop: 12 }}>
                  <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.1em' }}>{d.size} · .zip</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.coralDeep }}>Download ↓</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bloom>
    </div>
  );
}

Object.assign(window, { Screen_OOH_Series, Screen_InstagramGrid, Screen_PressKit });
