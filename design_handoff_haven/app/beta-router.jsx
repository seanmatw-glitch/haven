// Haven Beta — hash router + screen registry
// Routes: #/welcome, #/onboarding/:step, #/home, #/sage, #/match, #/match/intro,
//         #/date-brief, #/profile, #/settings, #/notifications, #/pause, #/help,
//         #/release-notes, #/eng-handoff

function useRoute() {
  const [route, setRoute] = React.useState(window.location.hash || '#/welcome');
  React.useEffect(() => {
    const onChange = () => setRoute(window.location.hash || '#/welcome');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function navigate(path) {
  if (!path.startsWith('#')) path = '#' + path;
  window.location.hash = path;
}

function parseRoute(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  return { name: parts[0] || 'welcome', params: parts.slice(1) };
}

// ─── Tab bar ─────────────────────────────────────────────────────────────
function TabBar({ active }) {
  const tabs = [
    { id: 'home',  label: 'Home',  icon: 'home' },
    { id: 'match', label: 'Maya',  icon: 'match' },
    { id: 'sage',  label: 'Sage',  icon: 'halo' },
    { id: 'profile', label: 'You', icon: 'you' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 28, paddingTop: 12,
      background: 'rgba(251,243,232,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: `1px solid ${HAVEN.divider}`,
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
    }}>
      {tabs.map((t) => {
        const isActive = active === t.id;
        const route = t.id === 'match' ? '#/match' : `#/${t.id}`;
        return (
          <div key={t.id} onClick={() => navigate(route)}
               style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '4px 16px' }}>
            <TabIcon kind={t.icon} active={isActive} />
            <div style={{
              fontFamily: 'Inter', fontSize: 10, fontWeight: 500,
              color: isActive ? HAVEN.cocoa : HAVEN.textMuted,
              letterSpacing: '0.02em',
            }}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function TabIcon({ kind, active }) {
  const c = active ? HAVEN.cocoa : HAVEN.textMuted;
  if (kind === 'halo') {
    return <div style={{ width: 22, height: 22, borderRadius: '50%',
      background: active
        ? 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 52%, #D87560 100%)'
        : 'radial-gradient(circle at 42% 38%, #F2D8BC 0%, #DCBFA8 100%)',
      opacity: active ? 1 : 0.5,
    }}/>;
  }
  if (kind === 'home') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><path d="M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V11z"/></svg>
  );
  if (kind === 'match') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><circle cx="12" cy="9" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
  );
  if (kind === 'you') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/></svg>
  );
  return null;
}

// ─── Header (small, used on most app screens) ────────────────────────────
function AppHeader({ title, left, right, dim = false }) {
  return (
    <div style={{
      padding: '8px 22px 14px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', minHeight: 44,
    }}>
      <div style={{ width: 64, display: 'flex', alignItems: 'center' }}>{left}</div>
      <div style={{
        fontFamily: 'Inter', fontWeight: 500, fontSize: 15,
        color: dim ? HAVEN.textDim : HAVEN.cocoa, letterSpacing: '-0.01em',
      }}>{title}</div>
      <div style={{ width: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{right}</div>
    </div>
  );
}

function BackBtn({ to = '#/home' }) {
  return (
    <div onClick={() => navigate(to)} style={{ cursor: 'pointer', padding: 4, marginLeft: -4 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cocoa} strokeWidth="1.6"><path d="M15 18l-6-6 6-6"/></svg>
    </div>
  );
}

// ─── Scrollable content area ─────────────────────────────────────────────
function ScrollArea({ children, style = {}, padBottom = 100 }) {
  return (
    <div style={{
      flex: 1, overflowY: 'auto', overflowX: 'hidden',
      paddingBottom: padBottom, ...style,
    }}>{children}</div>
  );
}

Object.assign(window, { useRoute, navigate, parseRoute, TabBar, AppHeader, BackBtn, ScrollArea });
