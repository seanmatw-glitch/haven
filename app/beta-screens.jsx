// Haven Beta — welcome, home, profile, settings, system screens

// ─── Welcome (pre-onboarding) ───────────────────────────────────────────
function WelcomeScreen() {
  return (
    <Bloom tone="morning" intensity={0.7} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '70px 32px 36px', textAlign: 'center' }}>
        <div>
          <Halo size={68} style={{ margin: '0 auto 28px' }} />
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 72, color: HAVEN.cocoa, lineHeight: 1, marginBottom: 18 }}>Haven</div>
          <Body style={{ fontSize: 15, maxWidth: 270, margin: '0 auto' }}>
            For people who have done some of the work, looking for someone who has done some of theirs.
          </Body>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Btn onClick={() => navigate('#/onboarding/0')}>Begin onboarding</Btn>
          <div onClick={() => { seedDemo(); navigate('#/home'); }} style={{
            padding: '14px', textAlign: 'center', cursor: 'pointer',
            fontFamily: 'Inter', fontSize: 13, color: HAVEN.textDim, letterSpacing: '0.01em',
          }}>
            Or — <It>tour the app as a member →</It>
          </div>
          <div onClick={() => navigate('#/release-notes')} style={{ marginTop: 8, fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: HAVEN.textMuted, cursor: 'pointer' }}>
            Beta · Wave 1 · v0.4.2 →
          </div>
        </div>
      </div>
    </Bloom>
  );
}

// ─── Home (main feed) ───────────────────────────────────────────────────
function HomeScreen() {
  const state = useHaven();
  const lastSage = state.sageThread.slice().reverse().find((m) => m.role === 'sage');
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 5) return 'Late night';
    if (h < 12) return 'Morning';
    if (h < 18) return 'Afternoon';
    return 'Evening';
  })();
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <div style={{ padding: '14px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Mono>{state.meta.cohort}</Mono>
        <div onClick={() => navigate('#/notifications')} style={{ cursor: 'pointer', padding: 4 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cocoa} strokeWidth="1.5"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></svg>
        </div>
      </div>

      <ScrollArea style={{ padding: '8px 22px' }}>
        <div style={{ padding: '12px 0 18px' }}>
          <H1 size={32} style={{ marginBottom: 4 }}>{greeting}, <It>{state.user.name || 'friend'}</It>.</H1>
          <Body style={{ fontSize: 14 }}>
            {state.match.status === 'active'
              ? `Thursday with ${state.match.name} is in two days.`
              : 'The matchmakers are reading your file.'}
          </Body>
        </div>

        {/* Sage card */}
        <div onClick={() => navigate('#/sage')} style={{
          background: '#fff', borderRadius: 22, padding: '20px 22px', marginBottom: 14,
          boxShadow: '0 2px 10px rgba(120,70,50,0.05)', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <Halo size={36} thinking={true} />
            <div>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, lineHeight: 1 }}>Sage</div>
              <Mono style={{ marginTop: 2 }}>{lastSage ? fmtTime(lastSage.time) : 'whenever you want'}</Mono>
            </div>
          </div>
          <Body style={{ fontSize: 14, color: HAVEN.cocoa, lineHeight: 1.5 }}>
            {lastSage ? `"${lastSage.text}"` : "I'm here when you want to talk. No pressure."}
          </Body>
          <div style={{ marginTop: 14, fontFamily: 'Inter', fontSize: 12, color: HAVEN.textDim }}>Open thread →</div>
        </div>

        {/* Match card */}
        {state.match.status === 'active' ? (
          <div onClick={() => navigate('#/match')} style={{
            borderRadius: 22, overflow: 'hidden', marginBottom: 14, position: 'relative', cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(120,70,50,0.12)', height: 200,
          }}>
            <img src={state.match.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(20,10,8,0.75) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', color: HAVEN.cream }}>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 6 }}>Your match</div>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 32, lineHeight: 1 }}>{state.match.name}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, opacity: 0.8, marginTop: 4 }}>Thursday · 7:30 pm</div>
            </div>
          </div>
        ) : (
          <div onClick={() => navigate('#/match')} style={{
            background: '#fff', borderRadius: 22, padding: '24px 22px', marginBottom: 14, cursor: 'pointer',
            display: 'flex', gap: 14, alignItems: 'center',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'radial-gradient(circle at 42% 38%, #FBE0C8 0%, #F4A088 52%, #D87560 100%)',
              opacity: 0.4, filter: 'blur(2px)',
            }} />
            <div style={{ flex: 1 }}>
              <Mono style={{ marginBottom: 4 }}>Your match</Mono>
              <Body style={{ fontSize: 14, color: HAVEN.cocoa }}>The matchmakers are looking. Usually 7–10 days.</Body>
            </div>
          </div>
        )}

        {/* Date brief shortcut */}
        {state.match.plannedDate && (
          <div onClick={() => navigate('#/date-brief')} style={{
            background: HAVEN.cocoa, color: HAVEN.cream, borderRadius: 18, padding: '16px 20px', marginBottom: 14, cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 4 }}>Date brief ready</div>
              <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500 }}>{state.match.plannedDate}</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cream} strokeWidth="1.6"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        )}

        {/* Quick actions row */}
        <div style={{ display: 'flex', gap: 10, marginTop: 6, marginBottom: 6 }}>
          {[
            { label: 'Pause', to: '#/pause' },
            { label: 'Help', to: '#/help' },
            { label: 'Settings', to: '#/settings' },
          ].map((q) => (
            <div key={q.label} onClick={() => navigate(q.to)} style={{
              flex: 1, padding: '12px', textAlign: 'center', borderRadius: 14,
              background: 'rgba(255,255,255,0.55)', cursor: 'pointer',
              fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa,
            }}>{q.label}</div>
          ))}
        </div>

        <div style={{ padding: '20px 0 8px', textAlign: 'center' }}>
          <Mono>Haven · for the work that loves back</Mono>
        </div>
      </ScrollArea>
      <TabBar active="home" />
    </div>
  );
}

// ─── Profile (you) ──────────────────────────────────────────────────────
function ProfileScreen() {
  const state = useHaven();
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader title="You" right={<div onClick={() => navigate('#/settings')} style={{ cursor: 'pointer', padding: 4 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cocoa} strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19 12c0 .8-.1 1.5-.3 2.2l2 1.6-2 3.4-2.4-1c-1.1.9-2.3 1.5-3.7 1.8L12 22h-4l-.5-2c-1.4-.3-2.6-.9-3.7-1.8l-2.4 1-2-3.4 2-1.6c-.1-.7-.2-1.4-.2-2.2s.1-1.5.3-2.2l-2-1.6 2-3.4 2.4 1c1.1-.9 2.3-1.5 3.7-1.8L8 2h4l.5 2c1.4.3 2.6.9 3.7 1.8l2.4-1 2 3.4-2 1.6c.1.7.2 1.4.2 2.2z"/></svg>
      </div>} />
      <ScrollArea style={{ padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0 24px' }}>
          {state.user.photo ? (
            <img src={state.user.photo} alt="" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #F2D8BC 0%, #EEB88A 100%)' }} />
          )}
          <div>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 32, color: HAVEN.cocoa, lineHeight: 1 }}>{state.user.name || 'Anonymous'}</div>
            <Body style={{ fontSize: 13, marginTop: 4 }}>{state.user.age ? `${state.user.age} · ` : ''}{state.user.city || 'No city'}</Body>
          </div>
        </div>

        {/* Verification */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '16px 18px', marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <Mono>Therapy verification</Mono>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#5a8a5a' }} />
              <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#5a8a5a', fontWeight: 500 }}>Verified</span>
            </div>
          </div>
          <Body style={{ fontSize: 14, color: HAVEN.cocoa }}>{state.user.therapistPractice || 'Connect a practice'}</Body>
        </div>

        {/* What Sage knows */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 20px', marginBottom: 14 }}>
          <Mono style={{ marginBottom: 12 }}>What Sage knows about you</Mono>
          <SageKnows label="Working on" value={state.sage.growthEdge} />
          <SageKnows label="History of" value={state.sage.historyOf} />
          <SageKnows label="The word you care about" value={state.sage.careValue} />
          <SageKnows label="On hard days" value={state.sage.onHardDays} last />
        </div>

        {/* Sage's notes */}
        {state.sage.notesFromSage?.length > 0 && (
          <div style={{ background: '#fff', borderRadius: 16, padding: '18px 20px', marginBottom: 14 }}>
            <Mono style={{ marginBottom: 12 }}>What Sage has noticed</Mono>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {state.sage.notesFromSage.slice().reverse().map((n, i) => (
                <div key={i} style={{ paddingLeft: 12, borderLeft: `2px solid ${HAVEN.coral}` }}>
                  <div style={{ fontFamily: 'Inter', fontSize: 14, color: HAVEN.cocoa, lineHeight: 1.5, fontStyle: 'italic' }}>"{n.text}"</div>
                  <Mono style={{ marginTop: 4 }}>{new Date(n.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Mono>
                </div>
              ))}
            </div>
          </div>
        )}

        <div onClick={() => { if (confirm('Reset all data and start fresh?')) { havenStore.reset(); navigate('#/welcome'); } }} style={{
          padding: '14px', textAlign: 'center', cursor: 'pointer',
          fontFamily: 'Inter', fontSize: 12, color: HAVEN.textMuted, marginTop: 10,
        }}>
          Reset onboarding
        </div>
      </ScrollArea>
      <TabBar active="profile" />
    </div>
  );
}

function SageKnows({ label, value, last }) {
  return (
    <div style={{ paddingBottom: last ? 0 : 12, marginBottom: last ? 0 : 12, borderBottom: last ? 'none' : `1px solid ${HAVEN.divider}` }}>
      <Mono style={{ marginBottom: 4 }}>{label}</Mono>
      <Body style={{ fontSize: 14, color: HAVEN.cocoa }}>{value || <span style={{ color: HAVEN.textMuted, fontStyle: 'italic' }}>not yet</span>}</Body>
    </div>
  );
}

// ─── Settings ───────────────────────────────────────────────────────────
function SettingsScreen() {
  const state = useHaven();
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn to="#/profile" />} title="Settings" />
      <ScrollArea style={{ padding: '0 22px' }}>
        <SettingsSection title="Notifications">
          <SettingsToggle label="Daily texts from Sage" value={state.meta.notifications.dailyTexts}
            onChange={(v) => havenStore.patchMeta({ notifications: { ...state.meta.notifications, dailyTexts: v } })} />
          <SettingsToggle label="Match alerts" value={state.meta.notifications.matchAlerts}
            onChange={(v) => havenStore.patchMeta({ notifications: { ...state.meta.notifications, matchAlerts: v } })} />
          <SettingsToggle label="Post-date debrief reminders" value={state.meta.notifications.debrief}
            onChange={(v) => havenStore.patchMeta({ notifications: { ...state.meta.notifications, debrief: v } })} last />
        </SettingsSection>

        <SettingsSection title="Membership">
          <SettingsRow label="Plan" value="Atelier · $99/mo" />
          <SettingsRow label="Renews" value="May 12" />
          <SettingsRow label="Manage" value="→" onClick={() => alert('Stripe portal opens here in production.')} last />
        </SettingsSection>

        <SettingsSection title="Take a break">
          <div onClick={() => navigate('#/pause')} style={{ padding: '14px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Body style={{ fontSize: 15, color: HAVEN.cocoa }}>Pause Haven</Body>
              <Mono style={{ marginTop: 4 }}>You can step away. We won't introduce anyone while you're paused.</Mono>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={HAVEN.textMuted} strokeWidth="1.6"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </SettingsSection>

        <SettingsSection title="Beta">
          <SettingsRow label="Version" value="0.4.2 · Wave 1" />
          <SettingsRow label="Release notes" value="→" onClick={() => navigate('#/release-notes')} />
          <SettingsRow label="Engineering handoff" value="→" onClick={() => navigate('#/eng-handoff')} last />
        </SettingsSection>

        <div style={{ padding: '20px 0', textAlign: 'center' }}>
          <Mono>haven.love · made with care in nyc</Mono>
        </div>
      </ScrollArea>
    </div>
  );
}

function SettingsSection({ title, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <Mono style={{ marginBottom: 8, padding: '0 4px' }}>{title}</Mono>
      <div style={{ background: '#fff', borderRadius: 16, padding: '4px 18px' }}>
        {children}
      </div>
    </div>
  );
}

function SettingsRow({ label, value, onClick, last }) {
  return (
    <div onClick={onClick} style={{
      padding: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: last ? 'none' : `1px solid ${HAVEN.divider}`,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <Body style={{ fontSize: 15, color: HAVEN.cocoa }}>{label}</Body>
      <Body style={{ fontSize: 14, color: HAVEN.textMuted }}>{value}</Body>
    </div>
  );
}

function SettingsToggle({ label, value, onChange, last }) {
  return (
    <div style={{
      padding: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderBottom: last ? 'none' : `1px solid ${HAVEN.divider}`,
    }}>
      <Body style={{ fontSize: 15, color: HAVEN.cocoa }}>{label}</Body>
      <div onClick={() => onChange(!value)} style={{
        width: 44, height: 26, borderRadius: 14, padding: 2,
        background: value ? HAVEN.cocoa : '#d6c8b8', cursor: 'pointer',
        transition: 'background 0.2s',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%', background: '#fff',
          transform: `translateX(${value ? 18 : 0}px)`,
          transition: 'transform 0.2s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        }} />
      </div>
    </div>
  );
}

// ─── Notifications ──────────────────────────────────────────────────────
function NotificationsScreen() {
  const state = useHaven();
  const items = [
    state.match.status === 'active' && {
      title: `${state.match.name} replied to your note.`,
      body: `"${state.match.herNote.slice(0, 80)}..."`,
      time: '2h ago', kind: 'match',
    },
    state.match.plannedDate && {
      title: `Date brief is ready.`,
      body: `Thursday at ${state.match.plannedDate}. Open it the morning of.`,
      time: 'yesterday', kind: 'brief',
    },
    {
      title: 'A morning text from Sage.',
      body: state.sageThread.find((m) => m.role === 'sage')?.text || "I'll write when I have something to say.",
      time: 'this morning', kind: 'sage',
    },
  ].filter(Boolean);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn />} title="" />
      <div style={{ padding: '0 22px 8px' }}>
        <H1 size={32} style={{ marginBottom: 4 }}>Notifications</H1>
        <Body style={{ fontSize: 13 }}>{items.length === 0 ? 'All quiet.' : `${items.length} this week.`}</Body>
      </div>
      <ScrollArea style={{ padding: '14px 22px' }}>
        {items.map((n, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '16px 18px', marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                {n.kind === 'sage' && <Halo size={20} thinking={false} />}
                {n.kind === 'match' && <div style={{ width: 8, height: 8, borderRadius: '50%', background: HAVEN.coralDeep }}/>}
                {n.kind === 'brief' && <div style={{ width: 8, height: 8, borderRadius: '50%', background: HAVEN.honey }}/>}
                <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: HAVEN.cocoa }}>{n.title}</div>
              </div>
              <Mono>{n.time}</Mono>
            </div>
            <Body style={{ fontSize: 13, lineHeight: 1.55, paddingLeft: 18 }}>{n.body}</Body>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

// ─── Pause ──────────────────────────────────────────────────────────────
function PauseScreen() {
  const state = useHaven();
  return (
    <Bloom tone="dusk" intensity={0.5} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppHeader left={<BackBtn to="#/settings" />} title="" />
      <div style={{ flex: 1, padding: '20px 32px 32px', display: 'flex', flexDirection: 'column' }}>
        <Mono style={{ marginBottom: 10 }}>Take a break</Mono>
        <H1 size={34} style={{ marginBottom: 16 }}>Step <It>away</It> for as long as you need.</H1>
        <Body style={{ fontSize: 14, marginBottom: 30 }}>
          We won't introduce anyone while you're paused. Sage will still be here if you want her. Come back when you're ready — your file stays.
        </Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Pause for 1 week', 7],
            ['Pause for 1 month', 30],
            ['Pause indefinitely', null],
          ].map(([label]) => (
            <div key={label} onClick={() => { havenStore.patchMeta({ paused: true }); alert('Paused. Sage will text you when you come back.'); navigate('#/home'); }} style={{
              padding: '16px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.7)', cursor: 'pointer',
              fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: HAVEN.cocoa,
            }}>{label}</div>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div onClick={() => { if (confirm('Cancel your membership? Your file will be deleted in 30 days.')) navigate('#/home'); }} style={{
          padding: '14px', textAlign: 'center', cursor: 'pointer',
          fontFamily: 'Inter', fontSize: 13, color: HAVEN.textMuted,
        }}>
          Cancel membership →
        </div>
      </div>
    </Bloom>
  );
}

// ─── Help ───────────────────────────────────────────────────────────────
function HelpScreen() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn />} title="Help" />
      <ScrollArea style={{ padding: '0 22px' }}>
        <H1 size={28} style={{ marginBottom: 18 }}>How can we <It>help?</It></H1>

        {[
          ['Talk to a real human', 'A care manager replies within 4 hours, 7am–10pm ET.', 'concierge@haven.love'],
          ['Report a concern', 'Something a match said or did. We read every report within an hour.', 'safety@haven.love'],
          ['Crisis support', "If you're in crisis, please reach out to someone right now. Call or text 988.", '988'],
          ['Press', 'For partnership and press inquiries.', 'press@haven.love'],
        ].map(([title, body, contact]) => (
          <div key={title} style={{ background: '#fff', borderRadius: 16, padding: '16px 18px', marginBottom: 10 }}>
            <Mono style={{ marginBottom: 6 }}>{title}</Mono>
            <Body style={{ fontSize: 13, marginBottom: 10 }}>{body}</Body>
            <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.coralDeep, fontWeight: 500 }}>{contact}</div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

// ─── Release notes ──────────────────────────────────────────────────────
function ReleaseNotesScreen() {
  const notes = [
    {
      version: '0.4.2', date: 'Apr 25', title: 'Sage goes live',
      shipped: ['Live conversation with Sage (Claude-backed)', 'Sage remembers your growth edge, history, and the word you care about', 'Persistent thread — your messages stay'],
      coming: ['Voice notes to Sage', 'Sage-initiated mornings (push)', 'Match-context awareness (Sage reads the room)'],
    },
    {
      version: '0.4.0', date: 'Apr 18', title: 'Functional onboarding',
      shipped: ['Three-day onboarding flow', 'Therapy verification (BetterHelp, Alma, +5)', 'Real text input — your answers save'],
      coming: ['Voice onboarding', 'Therapist co-sign'],
    },
    {
      version: '0.3.0', date: 'Apr 11', title: 'Match reveal',
      shipped: ['Match screen with photo, why-her, her note', 'Date brief — morning-of prep', 'Tab navigation'],
      coming: ['Post-date debrief', 'Multiple match queue (off — one at a time stays)'],
    },
  ];
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn to="#/welcome" />} title="What's new" />
      <ScrollArea style={{ padding: '0 22px' }}>
        <Mono style={{ marginBottom: 8 }}>Beta · Wave 1</Mono>
        <H1 size={32} style={{ marginBottom: 6 }}>Building Haven, <It>slowly</It>.</H1>
        <Body style={{ fontSize: 13, marginBottom: 28 }}>
          We ship in small, considered steps. Here's what's real, and what's coming.
        </Body>
        {notes.map((n) => (
          <div key={n.version} style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, color: HAVEN.cocoa }}>{n.title}</div>
              <Mono>v{n.version} · {n.date}</Mono>
            </div>
            <Mono style={{ marginBottom: 8 }}>Shipped</Mono>
            {n.shipped.map((s) => (
              <div key={s} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: HAVEN.coralDeep, marginTop: 8, flexShrink: 0 }} />
                <Body style={{ fontSize: 14 }}>{s}</Body>
              </div>
            ))}
            <Mono style={{ marginTop: 14, marginBottom: 8 }}>Coming next</Mono>
            {n.coming.map((s) => (
              <div key={s} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start', opacity: 0.6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', border: `1.5px solid ${HAVEN.textMuted}`, marginTop: 7, flexShrink: 0 }} />
                <Body style={{ fontSize: 14 }}>{s}</Body>
              </div>
            ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

// ─── Engineering handoff (in-app surface for the eng audience) ─────────
function EngHandoffScreen() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn to="#/settings" />} title="Engineering" />
      <ScrollArea style={{ padding: '0 22px' }}>
        <Mono style={{ marginBottom: 8 }}>Internal · v0.4.2</Mono>
        <H1 size={28} style={{ marginBottom: 18 }}>Architecture</H1>

        <HandoffSection title="State">
          <HandoffRow k="Store" v="havenStore — pub/sub over localStorage" />
          <HandoffRow k="Schema" v="user · sage · match · sageThread · meta" />
          <HandoffRow k="Persistence" v="localStorage key 'haven.beta.v1'" last />
        </HandoffSection>

        <HandoffSection title="Routing">
          <HandoffRow k="Pattern" v="Hash-based (#/welcome, #/sage, ...)" />
          <HandoffRow k="Top-level" v="welcome · onboarding · home · sage · match · profile" />
          <HandoffRow k="System" v="settings · notifications · pause · help · release-notes" last />
        </HandoffSection>

        <HandoffSection title="Sage (LLM layer)">
          <HandoffRow k="Model" v="claude-haiku-4-5 (host-provided window.claude)" />
          <HandoffRow k="System prompt" v="Frozen; sage-voice rules" />
          <HandoffRow k="Context" v="user.* + sage.* + match.* injected per turn" />
          <HandoffRow k="Memory" v="Last 10 thread messages + sage notes (summarized)" last />
        </HandoffSection>

        <HandoffSection title="Production migration">
          <HandoffRow k="Auth" v="Stytch · email + therapist verification" />
          <HandoffRow k="DB" v="Postgres · Drizzle ORM" />
          <HandoffRow k="LLM proxy" v="Server-side; rotating keys; rate-limited per user" />
          <HandoffRow k="Therapy verification" v="Direct OAuth w/ partner platforms (6 signed)" />
          <HandoffRow k="Matchmaking" v="Human-in-loop · internal admin tool" last />
        </HandoffSection>

        <HandoffSection title="Open questions">
          <HandoffRow k="Memory model" v="Embedding store vs. Sage-summarized notes — testing both" />
          <HandoffRow k="Push" v="iOS push for morning Sage texts — APNs vs. FCM via Expo" />
          <HandoffRow k="Voice" v="Whisper for voice notes; ElevenLabs Sage voice (Q3)" last />
        </HandoffSection>

        <div style={{ background: HAVEN.cocoa, color: HAVEN.cream, borderRadius: 16, padding: '18px 20px', marginBottom: 20 }}>
          <Mono style={{ color: 'rgba(251,243,232,0.55)', marginBottom: 8 }}>Where this prototype lives</Mono>
          <Body style={{ fontSize: 13, color: HAVEN.cream, lineHeight: 1.55 }}>
            React 18 + Babel standalone, no bundler. Single-page app, hash routes. <br/>
            Production target: Next.js 15 (app router) + tRPC + Postgres on Vercel.
          </Body>
        </div>

        <Mono style={{ textAlign: 'center', padding: '12px 0 20px' }}>eng@haven.love</Mono>
      </ScrollArea>
    </div>
  );
}

function HandoffSection({ title, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <Mono style={{ marginBottom: 8 }}>{title}</Mono>
      <div style={{ background: '#fff', borderRadius: 14, padding: '4px 16px' }}>
        {children}
      </div>
    </div>
  );
}

function HandoffRow({ k, v, last }) {
  return (
    <div style={{ padding: '12px 0', borderBottom: last ? 'none' : `1px solid ${HAVEN.divider}` }}>
      <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 10, color: HAVEN.coralDeep, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
      <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.cocoa, lineHeight: 1.5 }}>{v}</div>
    </div>
  );
}

Object.assign(window, {
  WelcomeScreen, HomeScreen, ProfileScreen, SettingsScreen,
  NotificationsScreen, PauseScreen, HelpScreen, ReleaseNotesScreen, EngHandoffScreen,
});
