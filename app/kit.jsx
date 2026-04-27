// Haven App — core UI kit, shared across all screens

const HAVEN = {
  cream: '#FBF3E8',
  oat: '#F2E4D0',
  cocoa: '#3a2420',
  coral: '#F4A088',
  coralDeep: '#D87560',
  peach: '#F6C8A8',
  blush: '#EEA99B',
  honey: '#E8C38A',
  lilac: '#D4B8D8',
  textDim: '#6a4f3c',
  textMuted: '#8a6a58',
  divider: '#E8D8C0',
};

// Bloom background — reused from v2 brand system
function Bloom({ tone = 'coral', intensity = 1, children, style = {} }) {
  const palettes = {
    coral:  { a: '#F4A088', b: '#F6C8A8', c: '#FBF3E8', d: '#EEA99B' },
    dusk:   { a: '#E89890', b: '#D4B8D8', c: '#F9EFE2', d: '#C9A5B8' },
    honey:  { a: '#E8C38A', b: '#F4A088', c: '#FBF3E8', d: '#EEB88A' },
    cream:  { a: '#F9EFE2', b: '#F2D8BC', c: '#FBF3E8', d: '#F6C8A8' },
    morning:{ a: '#FBE0C8', b: '#F6C8A8', c: '#FBF3E8', d: '#F2D8BC' },
  };
  const p = palettes[tone] || palettes.coral;
  return (
    <div style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate', background: p.c, ...style }}>
      <div style={{
        position: 'absolute', inset: '-25%',
        background: `
          radial-gradient(ellipse 55% 50% at 20% 25%, ${p.a} 0%, transparent 60%),
          radial-gradient(ellipse 60% 55% at 85% 30%, ${p.b} 0%, transparent 60%),
          radial-gradient(ellipse 65% 60% at 70% 85%, ${p.d} 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 15% 80%, ${p.a} 0%, transparent 55%)`,
        opacity: intensity, filter: 'blur(36px)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>{children}</div>
    </div>
  );
}

function Halo({ size = 60, thinking = true, style = {} }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}>
      <style>{`
        @keyframes hv-pulse { 0%,100% { transform: scale(1); opacity: 0.92; } 50% { transform: scale(1.06); opacity: 1; } }
        @keyframes hv-shimmer { 0%,100% { transform: scale(1); opacity: 0.35; } 50% { transform: scale(1.35); opacity: 0.6; } }
      `}</style>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 52%, #D87560 100%)',
        animation: thinking ? 'hv-pulse 4s ease-in-out infinite' : 'none',
        boxShadow: 'inset -3px -5px 10px rgba(120,50,40,0.2), inset 3px 3px 8px rgba(255,240,220,0.45)',
      }} />
      <div style={{
        position: 'absolute', inset: -size * 0.35, borderRadius: '50%',
        background: 'radial-gradient(circle, #F4A08866 0%, #F6C8A844 40%, transparent 70%)',
        animation: thinking ? 'hv-shimmer 4s ease-in-out infinite' : 'none',
        pointerEvents: 'none', filter: 'blur(6px)',
      }} />
    </div>
  );
}

function StatusBar({ time = '7:42', dark = false, style = {} }) {
  const c = dark ? '#FBF3E8' : '#3a2420';
  return (
    <div style={{ height: 48, padding: '14px 32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: c, ...style }}>
      <span>{time}</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="2.5" height="4" rx="0.5" fill={c}/><rect x="4" y="4" width="2.5" height="6" rx="0.5" fill={c}/><rect x="8" y="2" width="2.5" height="8" rx="0.5" fill={c}/><rect x="12" y="0" width="2.5" height="10" rx="0.5" fill={c}/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="19" height="10" rx="2.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="14" height="7" rx="1.5" fill={c}/></svg>
      </span>
    </div>
  );
}

function Phone({ children, style = {}, tone = 'cream' }) {
  return (
    <div style={{
      width: 380, height: 820, borderRadius: 54,
      background: '#2a1a18', padding: 7,
      boxShadow: '0 40px 100px rgba(90,50,40,0.22), 0 0 0 1px rgba(90,50,40,0.1)',
      ...style,
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 48, overflow: 'hidden', position: 'relative', background: HAVEN[tone] || HAVEN.cream }}>
        {children}
      </div>
    </div>
  );
}

// Italic-accented text — use for Sage's tender words
function It({ children, color }) {
  return <em style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 400, fontStyle: 'italic', color: color || 'inherit' }}>{children}</em>;
}

function H1({ children, size = 38, style = {} }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: size, lineHeight: 1.05, letterSpacing: '-0.035em', color: HAVEN.cocoa, ...style }}>{children}</div>
  );
}

function Body({ children, size = 15, color = HAVEN.textDim, style = {} }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: size, lineHeight: 1.6, color, ...style }}>{children}</div>
  );
}

function Mono({ children, style = {} }) {
  return (
    <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: HAVEN.textMuted, ...style }}>{children}</div>
  );
}

function Btn({ children, primary = true, style = {} }) {
  return (
    <div style={{
      padding: '16px 22px', textAlign: 'center', borderRadius: 100,
      fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, cursor: 'pointer',
      background: primary ? HAVEN.cocoa : 'transparent',
      color: primary ? HAVEN.cream : HAVEN.textDim,
      border: primary ? 'none' : `1px solid rgba(58,36,32,0.18)`,
      ...style,
    }}>{children}</div>
  );
}

function PhotoBox({ label = 'photo', tone = 'coral', style = {}, children }) {
  const bgs = {
    coral: 'linear-gradient(135deg, #F2D8BC 0%, #EEB88A 50%, #E89890 100%)',
    dusk: 'linear-gradient(135deg, #D4B8D8 0%, #EEA99B 100%)',
    warm: 'linear-gradient(135deg, #F9EFE2 0%, #F2D8BC 50%, #EEB88A 100%)',
    honey: 'linear-gradient(135deg, #F6D8A8 0%, #E8B878 100%)',
    evening: 'linear-gradient(135deg, #EEA99B 0%, #C98888 50%, #8E6870 100%)',
  };
  return (
    <div style={{
      position: 'relative', background: bgs[tone] || bgs.coral,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.08em',
      color: 'rgba(58,36,32,0.55)', overflow: 'hidden', padding: 12, ...style,
    }}>
      {children || <span>[{label}]</span>}
    </div>
  );
}

Object.assign(window, { HAVEN, Bloom, Halo, StatusBar, Phone, It, H1, Body, Mono, Btn, PhotoBox });
