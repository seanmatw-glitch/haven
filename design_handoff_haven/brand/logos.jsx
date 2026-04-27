// Haven — logo explorations

function WordmarkHaven({ size = 120, color = 'var(--ember)', italic = false }) {
  return (
    <div style={{
      fontFamily: '"Fraunces", serif',
      fontOpticalSizing: 'auto',
      fontVariationSettings: '"SOFT" 100, "WONK" 0',
      fontWeight: 400,
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: size,
      lineHeight: 0.9,
      letterSpacing: '-0.035em',
      color,
    }}>Haven</div>
  );
}

function WordmarkAlt({ size = 120, color = 'var(--ember)' }) {
  // all-lowercase, wonky, slightly soft
  return (
    <div style={{
      fontFamily: '"Fraunces", serif',
      fontVariationSettings: '"SOFT" 100, "WONK" 1',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: size,
      lineHeight: 0.9,
      letterSpacing: '-0.045em',
      color,
    }}>haven</div>
  );
}

function WordmarkSpaced({ size = 36, color = 'var(--ember)' }) {
  return (
    <div style={{
      fontFamily: '"Fraunces", serif',
      fontWeight: 500,
      fontSize: size,
      letterSpacing: '0.42em',
      textTransform: 'uppercase',
      color,
      paddingLeft: '0.42em',
    }}>Haven</div>
  );
}

// Monogram — H as doorway/arch
function MonogramArch({ size = 120, ink = 'var(--ember)', bg = 'transparent' }) {
  const s = size;
  const stroke = s * 0.11;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {bg !== 'transparent' && <rect width="100" height="100" rx="22" fill={bg} />}
      {/* two verticals */}
      <rect x={20} y={22} width={stroke * 0.9} height={56} rx={stroke * 0.2} fill={ink} />
      <rect x={79 - stroke * 0.9} y={22} width={stroke * 0.9} height={56} rx={stroke * 0.2} fill={ink} />
      {/* arch connecting them */}
      <path
        d={`M 20 50 Q 50 34 ${79 - stroke * 0.9 + stroke * 0.45} 50`}
        stroke={ink}
        strokeWidth={stroke * 0.9}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Symbolic — sunrise arc
function SunriseMark({ size = 120, ink = 'var(--amber)', bg = 'transparent' }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {bg !== 'transparent' && <rect width="100" height="100" rx="22" fill={bg} />}
      <defs>
        <radialGradient id={`sun-${s}`} cx="50%" cy="72%" r="55%">
          <stop offset="0%" stopColor={ink} stopOpacity="1" />
          <stop offset="60%" stopColor={ink} stopOpacity="0.55" />
          <stop offset="100%" stopColor={ink} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="72" r="30" fill={`url(#sun-${s})`} />
      <path d="M 18 72 L 82 72" stroke="var(--ember)" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

// The Aura — the key brand expression, a soft grainy orb
function Aura({ size = 400, hues = ['amber', 'rose', 'plum', 'electric'], grain = true, style = {} }) {
  const map = {
    amber: '#E8A159',
    rose: '#D17A6A',
    plum: '#5A3E5F',
    electric: '#2B3FC4',
    sage: '#7A8471',
    ember: '#1F1714',
    cream: '#F5EFE6',
  };
  const id = React.useId().replace(/:/g, '');
  return (
    <div style={{
      position: 'relative', width: size, height: size, borderRadius: '50%',
      overflow: 'hidden', isolation: 'isolate', ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: `
          radial-gradient(circle at 30% 30%, ${map[hues[0]]} 0%, transparent 55%),
          radial-gradient(circle at 75% 35%, ${map[hues[1] || hues[0]]} 0%, transparent 50%),
          radial-gradient(circle at 60% 80%, ${map[hues[2] || hues[0]]} 0%, transparent 55%),
          radial-gradient(circle at 20% 75%, ${map[hues[3] || hues[0]]} 0%, transparent 50%),
          #0c0608
        `,
        filter: 'blur(0px) saturate(1.1)',
      }} />
      {grain && (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: 'overlay', opacity: 0.55 }}>
          <filter id={`n${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={id.length} />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.7 0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#n${id})`} />
        </svg>
      )}
    </div>
  );
}

Object.assign(window, { WordmarkHaven, WordmarkAlt, WordmarkSpaced, MonogramArch, SunriseMark, Aura });
