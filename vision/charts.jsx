// Haven Vision — chart primitives

function FunnelChart({ steps }) {
  const max = Math.max(...steps.map(s => s.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {steps.map((s, i) => {
        const w = (s.value / max) * 100;
        return (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 110, fontFamily: 'Inter', fontSize: 12, color: 'rgba(58,36,32,0.7)' }}>{s.label}</div>
            <div style={{ flex: 1, height: 22, background: 'rgba(58,36,32,0.04)', borderRadius: 4, position: 'relative' }}>
              <div style={{
                height: '100%', width: `${w}%`,
                background: `linear-gradient(90deg, #D87560, ${i === steps.length - 1 ? '#3a2420' : '#E89890'})`,
                borderRadius: 4,
              }} />
            </div>
            <div style={{ width: 56, fontFamily: 'DM Mono', fontSize: 11, color: '#3a2420', fontWeight: 500, textAlign: 'right' }}>{s.value}</div>
          </div>
        );
      })}
    </div>
  );
}

function LineChart({ data, height = 160, color = '#D87560', labels = false }) {
  const max = Math.max(...data.map(d => d.value));
  const w = 460;
  const padX = 16;
  const stepX = (w - padX * 2) / (data.length - 1);
  const points = data.map((d, i) => ({
    x: padX + i * stepX,
    y: height - 30 - (d.value / max) * (height - 60),
    value: d.value,
    label: d.label,
    highlight: d.highlight,
  }));
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const area = `${path} L ${points[points.length-1].x} ${height-20} L ${padX} ${height-20} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="lc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#lc-area)" />
      <path d={path} fill="none" stroke={color} strokeWidth="2" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.highlight ? 5 : 3} fill={p.highlight ? color : '#fff'} stroke={color} strokeWidth="2" />
          {labels && (
            <text x={p.x} y={height - 6} fontFamily="DM Mono" fontSize="9" fill="rgba(58,36,32,0.5)" textAnchor="middle">{p.label}</text>
          )}
          {p.highlight && (
            <text x={p.x} y={p.y - 12} fontFamily="DM Mono" fontSize="11" fill={color} fontWeight="500" textAnchor="middle">${p.value}K</text>
          )}
        </g>
      ))}
    </svg>
  );
}

function CohortGrid({ rows }) {
  const maxLen = Math.max(...rows.map(r => r.values.length));
  const months = Array.from({ length: maxLen }, (_, i) => `M${i}`);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: `90px repeat(${maxLen}, 1fr)`, gap: 4, marginBottom: 6 }}>
        <div />
        {months.map(m => (
          <div key={m} style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(251,243,232,0.4)', textAlign: 'center' }}>{m}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {rows.map(r => (
          <div key={r.cohort} style={{ display: 'grid', gridTemplateColumns: `90px repeat(${maxLen}, 1fr)`, gap: 4 }}>
            <div style={{ fontFamily: 'DM Mono', fontSize: 10, color: 'rgba(251,243,232,0.65)', display: 'flex', alignItems: 'center' }}>{r.cohort}</div>
            {Array.from({ length: maxLen }, (_, i) => {
              const v = r.values[i];
              if (v == null) return <div key={i} style={{ height: 36, background: 'rgba(251,243,232,0.02)', borderRadius: 4 }} />;
              const intensity = (v - 60) / 40; // 60-100 normalized
              const bg = `rgba(244, 160, 136, ${0.15 + intensity * 0.55})`;
              return (
                <div key={i} style={{
                  height: 36, background: bg, borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'DM Mono', fontSize: 11, color: '#FBF3E8', fontWeight: 500,
                }}>{v}</div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { FunnelChart, LineChart, CohortGrid });
