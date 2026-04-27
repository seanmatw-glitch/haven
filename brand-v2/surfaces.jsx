// Haven v2 — "Her" aesthetic: soft diffuse glow, coral/peach, sans-dominant

// Soft glow orb — diffuse, iridescent, no grain
function GlowOrb({ size = 300, hues = ['coral', 'peach', 'lavender'], style = {} }) {
  const map = {
    coral: '#F4A088',
    peach: '#F6C8A8',
    lavender: '#D4B8D8',
    blush: '#EEA99B',
    cream: '#F9EFE2',
    honey: '#E8C38A',
    rose: '#E89890',
    sky: '#B8C8E0',
  };
  return (
    <div style={{
      position: 'relative', width: size, height: size, borderRadius: '50%',
      background: `
        radial-gradient(circle at 35% 30%, ${map[hues[0]]} 0%, transparent 55%),
        radial-gradient(circle at 70% 40%, ${map[hues[1] || hues[0]]} 0%, transparent 50%),
        radial-gradient(circle at 50% 75%, ${map[hues[2] || hues[0]]} 0%, transparent 55%)
      `,
      filter: 'blur(0.5px)',
      boxShadow: `0 0 ${size * 0.4}px ${map[hues[0]]}55, 0 0 ${size * 0.8}px ${map[hues[1] || hues[0]]}33`,
      ...style,
    }} />
  );
}

// Soft chromatic bloom backdrop — Her-style warmth
function BloomBg({ tone = 'coral', intensity = 1, children, style = {} }) {
  const palettes = {
    coral:  { a: '#F4A088', b: '#F6C8A8', c: '#F9EFE2', d: '#EEA99B' },
    dusk:   { a: '#E89890', b: '#D4B8D8', c: '#F6C8A8', d: '#C9A5B8' },
    honey:  { a: '#E8C38A', b: '#F4A088', c: '#F9EFE2', d: '#EEB88A' },
    cream:  { a: '#F9EFE2', b: '#F2D8BC', c: '#EEC8A8', d: '#E8B098' },
    deep:   { a: '#3a2420', b: '#2a1818', c: '#4a2c28', d: '#5a3230' },
  };
  const p = palettes[tone] || palettes.coral;
  const dark = tone === 'deep';
  return (
    <div style={{
      position: 'relative', overflow: 'hidden', isolation: 'isolate',
      background: p.c, ...style,
    }}>
      <div style={{
        position: 'absolute', inset: '-20%',
        background: `
          radial-gradient(ellipse 55% 50% at 20% 25%, ${p.a} 0%, transparent 60%),
          radial-gradient(ellipse 60% 55% at 85% 30%, ${p.b} 0%, transparent 60%),
          radial-gradient(ellipse 65% 60% at 70% 85%, ${p.d} 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 15% 80%, ${p.a} 0%, transparent 55%)
        `,
        opacity: intensity,
        filter: 'blur(30px)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>{children}</div>
    </div>
  );
}

// Sage as soft peach halo (Her would never do a grainy psychedelic orb — softer)
function SageHalo({ size = 80, thinking = true, style = {} }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <style>{`
        @keyframes halo-pulse { 0%,100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.06); opacity: 1; } }
        @keyframes halo-shimmer { 0%,100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.3); opacity: 0.65; } }
      `}</style>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 50%, #D87560 100%)',
        animation: thinking ? 'halo-pulse 4s ease-in-out infinite' : 'none',
        boxShadow: 'inset -3px -5px 10px rgba(120,50,40,0.2), inset 3px 3px 8px rgba(255,240,220,0.4)',
      }} />
      <div style={{
        position: 'absolute', inset: -size * 0.4, borderRadius: '50%',
        background: 'radial-gradient(circle, #F4A08866 0%, #F6C8A844 40%, transparent 70%)',
        animation: thinking ? 'halo-shimmer 4s ease-in-out infinite' : 'none',
        pointerEvents: 'none',
        filter: 'blur(8px)',
      }} />
    </div>
  );
}

// Placeholder for v2
function HerPhoto({ label = 'photo', tone = 'coral', style = {}, children }) {
  const bgs = {
    coral: 'linear-gradient(135deg, #F2D8BC 0%, #EEB88A 50%, #E89890 100%)',
    dusk: 'linear-gradient(135deg, #D4B8D8 0%, #EEA99B 100%)',
    cream: 'linear-gradient(135deg, #F9EFE2 0%, #F2D8BC 100%)',
  };
  return (
    <div style={{
      position: 'relative', background: bgs[tone] || bgs.coral,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"DM Mono", "JetBrains Mono", monospace', fontSize: 10,
      color: 'rgba(90,50,40,0.6)', letterSpacing: '0.08em',
      overflow: 'hidden', ...style,
    }}>
      {children || <span>[{label}]</span>}
    </div>
  );
}

Object.assign(window, { GlowOrb, BloomBg, SageHalo, HerPhoto });
