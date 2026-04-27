// Haven — marketing + UI surfaces

// ─── Placeholder photo tile (monospace caption, subtle striped bg) ───
function PhotoPlaceholder({ label = 'photo', style = {}, tone = 'warm', children }) {
  const bg = tone === 'warm'
    ? 'repeating-linear-gradient(135deg, #E8DCC8 0 18px, #DFD0B8 18px 36px)'
    : 'repeating-linear-gradient(135deg, #2A1F1A 0 18px, #231915 18px 36px)';
  const fg = tone === 'warm' ? '#8a7a60' : '#c9b89a';
  return (
    <div style={{
      position: 'relative', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 10, color: fg, letterSpacing: '0.05em',
      overflow: 'hidden', ...style,
    }}>
      {children || <span style={{ textTransform: 'lowercase' }}>[{label}]</span>}
    </div>
  );
}

// ─── Grainy aura backdrop (full bleed) ───
function AuraBg({ hues = ['amber', 'rose', 'plum', 'electric'], intensity = 1, dark = true, grain = true, children, style = {} }) {
  const map = {
    amber: '#E8A159', rose: '#D17A6A', plum: '#5A3E5F',
    electric: '#2B3FC4', sage: '#7A8471', ember: '#1F1714', cream: '#F5EFE6',
    tan: '#C9B79A',
  };
  const id = React.useId().replace(/:/g, '');
  const base = dark ? '#0c0608' : '#F5EFE6';
  return (
    <div style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate', background: base, ...style }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 25% 30%, ${map[hues[0]]}${dark ? 'ee' : 'aa'} 0%, transparent 55%),
          radial-gradient(ellipse 60% 55% at 80% 35%, ${map[hues[1] || hues[0]]}${dark ? 'dd' : 'aa'} 0%, transparent 55%),
          radial-gradient(ellipse 65% 60% at 65% 85%, ${map[hues[2] || hues[0]]}${dark ? 'dd' : '99'} 0%, transparent 55%),
          radial-gradient(ellipse 55% 55% at 15% 80%, ${map[hues[3] || hues[0]]}${dark ? 'cc' : '88'} 0%, transparent 55%)
        `,
        opacity: intensity,
      }} />
      {grain && (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'overlay', opacity: 0.45, pointerEvents: 'none' }}>
          <filter id={`ng${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={id.length} />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#ng${id})`} />
        </svg>
      )}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>{children}</div>
    </div>
  );
}

// ─── Sage's breathing orb ───
function SageOrb({ size = 80, thinking = true, style = {} }) {
  return (
    <div style={{
      position: 'relative', width: size, height: size, ...style,
    }}>
      <style>{`
        @keyframes sage-breathe {
          0%,100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes sage-halo {
          0%,100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.25); opacity: 0.55; }
        }
      `}</style>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: 'radial-gradient(circle at 45% 40%, #a8b39a 0%, #7A8471 45%, #3d4638 100%)',
        animation: thinking ? 'sage-breathe 3.5s ease-in-out infinite' : 'none',
        boxShadow: 'inset -4px -6px 12px rgba(0,0,0,0.4), inset 4px 4px 10px rgba(255,255,255,0.15)',
      }} />
      <div style={{
        position: 'absolute', inset: -size * 0.25, borderRadius: '50%',
        background: 'radial-gradient(circle, #7A847155 0%, transparent 60%)',
        animation: thinking ? 'sage-halo 3.5s ease-in-out infinite' : 'none',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

Object.assign(window, { PhotoPlaceholder, AuraBg, SageOrb });
