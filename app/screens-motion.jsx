// Haven — Match reveal motion study
// Scene: Sage is thinking → halo blooms → name & photo dissolve in → narrative settles

function Screen_MatchRevealMotion() {
  const [t, setT] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const DURATION = 7000;
  React.useEffect(() => {
    if (!playing) return;
    let raf, start;
    const tick = (now) => {
      if (!start) start = now;
      const elapsed = (now - start) % DURATION;
      setT(elapsed / DURATION);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const ease = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  // segments (0..1): 0-.15 Sage thinks, .15-.35 halo blooms, .35-.55 photo appears, .55-.75 name types, .75-1 narrative
  const seg = (a, b) => Math.max(0, Math.min(1, (t - a) / (b - a)));

  const thinking = seg(0, 0.15);
  const bloom = ease(seg(0.15, 0.4));
  const photoIn = ease(seg(0.35, 0.6));
  const nameIn = ease(seg(0.55, 0.78));
  const narrativeIn = ease(seg(0.75, 1));

  return (
    <div style={{ width: 440, height: 860, position: 'relative', overflow: 'hidden', background: HAVEN.cream }}>
      {/* bloom background intensity ramps up */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 + bloom * 0.7, transition: 'opacity 0.2s' }}>
        <Bloom tone="coral" intensity={1} style={{ width: '100%', height: '100%' }} />
      </div>

      <StatusBar />

      {/* sage badge & thinking text, fades out after halo blooms */}
      <div style={{ padding: '14px 22px 10px', display: 'flex', alignItems: 'center', gap: 12, opacity: 1 - bloom * 0.5, position: 'relative' }}>
        <Halo size={30} thinking={true} />
        <div>
          <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: HAVEN.cocoa }}>Sage</div>
          <div style={{ fontFamily: 'Inter', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.06em' }}>{t < 0.4 ? 'thinking...' : 'an introduction'}</div>
        </div>
      </div>

      {/* centerpiece — halo that blooms into photo */}
      <div style={{ position: 'absolute', top: 120, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        {/* giant halo that expands and fades */}
        <div style={{
          position: 'absolute', width: 120 + bloom * 260, height: 120 + bloom * 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 45%, #D87560 100%)',
          opacity: Math.max(0, 1 - photoIn * 1.4),
          filter: `blur(${bloom * 20}px)`,
          boxShadow: `0 0 ${60 + bloom * 80}px rgba(244,160,136,${0.5 + bloom * 0.3})`,
          transform: `scale(${1 + thinking * 0.08})`,
          transition: 'all 0.05s linear',
        }} />

        {/* photo that dissolves in as halo recedes */}
        <div style={{
          position: 'relative', width: 240, height: 300, borderRadius: 20,
          overflow: 'hidden',
          opacity: photoIn,
          transform: `scale(${0.92 + photoIn * 0.08}) translateY(${(1 - photoIn) * 10}px)`,
          backgroundImage: 'url(app/photos/maya.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
          boxShadow: `0 20px 50px rgba(180,90,70,${photoIn * 0.3})`,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(40,20,15,0.5))' }} />
        </div>
      </div>

      {/* name reveal — typewriter fade */}
      <div style={{ position: 'absolute', top: 445, left: 0, right: 0, textAlign: 'center', opacity: nameIn }}>
        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
          Her name is
        </div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 44, color: HAVEN.cocoa, letterSpacing: '-0.01em', transform: `translateY(${(1 - nameIn) * 8}px)` }}>
          {'Maya'.slice(0, Math.ceil(nameIn * 4))}<span style={{ opacity: nameIn < 1 ? 0.5 : 0 }}>|</span>
        </div>
      </div>

      {/* narrative card */}
      <div style={{
        position: 'absolute', bottom: 40, left: 24, right: 24,
        opacity: narrativeIn,
        transform: `translateY(${(1 - narrativeIn) * 16}px)`,
        background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.85)', borderRadius: 20, padding: 22,
      }}>
        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
          Why her, for you
        </div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 19, color: HAVEN.cocoa, lineHeight: 1.45 }}>
          You both said "patient" when I asked what you were working toward.
        </div>
      </div>

      {/* timeline scrubber */}
      <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: 8, alignItems: 'center', zIndex: 50 }}>
        <button onClick={() => setPlaying(!playing)} style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(58,36,32,0.85)', color: HAVEN.cream, border: 'none', fontSize: 11, cursor: 'pointer', fontFamily: 'Inter' }}>
          {playing ? '❚❚' : '▶'}
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(58,36,32,0.1)' }}>
        <div style={{ height: '100%', background: HAVEN.coralDeep, width: `${t * 100}%`, transition: 'width 0.05s linear' }} />
      </div>
    </div>
  );
}

// — scrubbable frame grid: show 4 keyframes of the transition for spec review —
function Screen_MatchRevealStoryboard() {
  const frames = [
    { t: 0.08, label: '0.5s · Sage thinking', sub: 'halo pulsing gently, idle' },
    { t: 0.30, label: '2.1s · the bloom', sub: 'halo expands, background saturates' },
    { t: 0.55, label: '3.9s · she arrives', sub: 'photo dissolves in, halo recedes' },
    { t: 0.92, label: '6.4s · the why', sub: 'narrative card rises from below' },
  ];

  const ease = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const seg = (t, a, b) => Math.max(0, Math.min(1, (t - a) / (b - a)));

  return (
    <div style={{ width: 1600, padding: 50, background: '#1e1210', fontFamily: 'Inter' }}>
      <div style={{ marginBottom: 30, color: '#FBF3E8' }}>
        <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 10 }}>Motion study · match reveal</div>
        <div style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: 44, letterSpacing: '-0.025em' }}>
          The introduction, <em style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}>in four beats.</em>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {frames.map((f, i) => {
          const t = f.t;
          const bloom = ease(seg(t, 0.15, 0.4));
          const photoIn = ease(seg(t, 0.35, 0.6));
          const nameIn = ease(seg(t, 0.55, 0.78));
          const narrativeIn = ease(seg(t, 0.75, 1));
          return (
            <div key={i} style={{ flex: 1 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '440/860', borderRadius: 18, overflow: 'hidden', background: HAVEN.cream, boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3 + bloom * 0.7 }}>
                  <Bloom tone="coral" intensity={1} style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{ position: 'absolute', top: '14%', left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35%' }}>
                  <div style={{
                    position: 'absolute', width: `${30 + bloom * 55}%`, aspectRatio: '1/1', borderRadius: '50%',
                    background: 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 45%, #D87560 100%)',
                    opacity: Math.max(0, 1 - photoIn * 1.4), filter: `blur(${bloom * 6}px)`,
                  }} />
                  <div style={{
                    position: 'relative', width: '55%', aspectRatio: '4/5', borderRadius: 14,
                    overflow: 'hidden', opacity: photoIn,
                    backgroundImage: 'url(app/photos/maya.jpg)', backgroundSize: 'cover',
                  }} />
                </div>

                <div style={{ position: 'absolute', top: '53%', left: 0, right: 0, textAlign: 'center', opacity: nameIn }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 28, color: HAVEN.cocoa }}>Maya</div>
                </div>

                <div style={{ position: 'absolute', bottom: '5%', left: '6%', right: '6%', opacity: narrativeIn, background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: 14 }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 13, color: HAVEN.cocoa, lineHeight: 1.4 }}>
                    You both said "patient" when I asked what you were working toward.
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 14, color: '#FBF3E8' }}>
                <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F4A088', marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 14, opacity: 0.8 }}>{f.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { Screen_MatchRevealMotion, Screen_MatchRevealStoryboard });
