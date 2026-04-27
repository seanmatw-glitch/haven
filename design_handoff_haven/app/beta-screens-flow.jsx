// Haven Beta — sage chat (live), match, date brief, onboarding flow

// ─── Live Sage chat screen ──────────────────────────────────────────────
function SMSBubble({ from, children, time, isLast }) {
  const isMe = from === 'me';
  return (
    <div style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start', margin: '2px 0' }}>
      <div style={{ maxWidth: '78%', display: 'flex', flexDirection: 'column', alignItems: isMe ? 'flex-end' : 'flex-start' }}>
        <div style={{
          padding: '10px 14px', borderRadius: 22,
          fontFamily: 'Inter', fontSize: 15, lineHeight: 1.4,
          background: isMe ? HAVEN.cocoa : 'rgba(255,255,255,0.78)',
          color: isMe ? HAVEN.cream : HAVEN.cocoa,
          boxShadow: isMe ? 'none' : '0 1px 2px rgba(120,80,60,0.08)',
          borderBottomRightRadius: isMe ? 6 : 22,
          borderBottomLeftRadius: isMe ? 22 : 6,
          whiteSpace: 'pre-wrap',
        }}>{children}</div>
        {time && <div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, marginTop: 3, padding: '0 6px' }}>{time}</div>}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '2px 0' }}>
      <div style={{
        padding: '12px 16px', borderRadius: 22, borderBottomLeftRadius: 6,
        background: 'rgba(255,255,255,0.78)',
        boxShadow: '0 1px 2px rgba(120,80,60,0.08)',
        display: 'flex', gap: 4, alignItems: 'center',
      }}>
        <style>{`@keyframes hv-dot { 0%,80%,100% { opacity: 0.3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }`}</style>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%', background: HAVEN.coralDeep,
            animation: `hv-dot 1.2s ease-in-out infinite`, animationDelay: `${i * 0.15}s`,
          }} />
        ))}
      </div>
    </div>
  );
}

function fmtTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'pm' : 'am';
  const hh = h % 12 || 12;
  return `${hh}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function dayLabel(iso, prevIso) {
  if (!iso) return null;
  const d = new Date(iso);
  const prev = prevIso ? new Date(prevIso) : null;
  if (prev && d.toDateString() === prev.toDateString()) return null;
  const today = new Date();
  const yesterday = new Date(today.getTime() - 86400000);
  if (d.toDateString() === today.toDateString()) return 'Today';
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday';
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

function SageScreen() {
  const state = useHaven();
  const [draft, setDraft] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [state.sageThread.length, pending]);

  const send = async () => {
    const text = draft.trim();
    if (!text || pending) return;
    setDraft('');
    havenStore.appendSage({ role: 'me', text });
    setPending(true);
    const reply = await sageReply(text);
    const parts = splitSageReply(reply);
    for (let i = 0; i < parts.length; i++) {
      await new Promise((r) => setTimeout(r, 600 + i * 400));
      havenStore.appendSage({ role: 'sage', text: parts[i] });
    }
    setPending(false);
  };

  return (
    <Bloom tone="morning" intensity={0.4} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppHeader
        left={<BackBtn />}
        title=""
        right={<div style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, color: HAVEN.textMuted, letterSpacing: '0.14em', textTransform: 'uppercase' }}>live</div>}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 22px 14px' }}>
        <Halo size={32} thinking={pending} />
        <div>
          <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22, color: HAVEN.cocoa, lineHeight: 1 }}>Sage</div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: HAVEN.textMuted }}>{pending ? 'thinking…' : 'here with you'}</div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '8px 16px 12px', display: 'flex', flexDirection: 'column' }}>
        {state.sageThread.map((m, i) => {
          const prev = state.sageThread[i - 1];
          const day = dayLabel(m.time, prev?.time);
          const showTime = i === 0 || (prev && new Date(m.time) - new Date(prev.time) > 1000 * 60 * 30);
          return (
            <React.Fragment key={i}>
              {day && <Mono style={{ textAlign: 'center', margin: '12px 0 4px' }}>{day}{showTime ? ' · ' + fmtTime(m.time) : ''}</Mono>}
              <SMSBubble from={m.role}>{m.text}</SMSBubble>
            </React.Fragment>
          );
        })}
        {pending && <TypingIndicator />}
        {state.sageThread.length === 0 && (
          <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <Halo size={70} thinking={true} style={{ margin: '0 auto 18px' }} />
            <Body color={HAVEN.textDim} style={{ fontSize: 14 }}>
              Sage is here. Tell her what's on your mind, or wait — she'll write first when she has something to say.
            </Body>
          </div>
        )}
      </div>

      <div style={{ padding: '10px 14px 18px', borderTop: `1px solid ${HAVEN.divider}`, background: 'rgba(251,243,232,0.85)', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, background: '#fff', borderRadius: 22, padding: '4px 4px 4px 16px', boxShadow: '0 1px 3px rgba(120,80,60,0.06)' }}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder={pending ? 'Sage is writing…' : 'Message Sage'}
            disabled={pending}
            style={{
              flex: 1, border: 'none', outline: 'none', resize: 'none',
              fontFamily: 'Inter', fontSize: 15, lineHeight: 1.4,
              padding: '10px 0', background: 'transparent', color: HAVEN.cocoa,
              maxHeight: 100, minHeight: 22,
            }}
            rows={1}
          />
          <div onClick={send} style={{
            width: 34, height: 34, borderRadius: '50%',
            background: draft.trim() && !pending ? HAVEN.cocoa : HAVEN.divider,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cream} strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </div>
        </div>
      </div>
    </Bloom>
  );
}

// ─── Match screen (current match + their note + scheduled date) ─────────
function MatchScreen() {
  const { match } = useHaven();
  if (match.status !== 'active') {
    return <MatchPendingScreen />;
  }
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn />} title="" right={<div style={{ fontFamily: 'Inter', fontSize: 12, color: HAVEN.textMuted }}>Introduced 4d ago</div>} />
      <ScrollArea style={{ padding: '0 22px' }}>
        {/* Photo */}
        <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', height: 380, marginBottom: 22, boxShadow: '0 20px 50px rgba(120,70,50,0.15)' }}>
          <img src={match.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent 0%, rgba(20,10,8,0.7) 100%)',
            padding: '60px 22px 22px',
            color: HAVEN.cream,
          }}>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 38, lineHeight: 1 }}>{match.name}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, opacity: 0.85, marginTop: 4 }}>{match.age} · {match.city}</div>
          </div>
        </div>

        {/* Why her, for you */}
        <Mono style={{ marginBottom: 8 }}>Why her · for you</Mono>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 24, lineHeight: 1.35, color: HAVEN.cocoa, marginBottom: 24 }}>
          {match.sharedThread}
        </div>

        {/* Her note */}
        <div style={{ background: '#fff', borderRadius: 18, padding: '18px 20px', marginBottom: 20, boxShadow: '0 2px 8px rgba(120,70,50,0.06)' }}>
          <Mono style={{ marginBottom: 10 }}>Her note to you</Mono>
          <div style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.55, color: HAVEN.cocoa }}>
            "{match.herNote}"
          </div>
        </div>

        {/* Date card */}
        {match.plannedDate && (
          <div style={{ background: HAVEN.cocoa, borderRadius: 18, padding: '20px 22px', marginBottom: 20, color: HAVEN.cream }}>
            <Mono style={{ color: 'rgba(251,243,232,0.55)', marginBottom: 8 }}>You're meeting</Mono>
            <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.1 }}>{match.plannedDate}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 13, opacity: 0.75, marginTop: 6 }}>{match.plannedDateContext}</div>
            <div onClick={() => navigate('#/date-brief')} style={{
              marginTop: 16, padding: '12px 18px', borderRadius: 100,
              background: 'rgba(251,243,232,0.12)', textAlign: 'center', cursor: 'pointer',
              fontFamily: 'Inter', fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
            }}>
              Open your brief →
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div style={{ padding: '8px 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div onClick={() => navigate('#/sage')} style={{ padding: '14px', textAlign: 'center', fontFamily: 'Inter', fontSize: 13, color: HAVEN.textDim, cursor: 'pointer' }}>
            Talk to Sage about Maya →
          </div>
        </div>
      </ScrollArea>
      <TabBar active="match" />
    </div>
  );
}

function MatchPendingScreen() {
  return (
    <Bloom tone="morning" intensity={0.5} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppHeader left={<BackBtn />} title="" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 40px', textAlign: 'center' }}>
        <Halo size={80} thinking={true} style={{ marginBottom: 32 }} />
        <H1 size={32} style={{ marginBottom: 16 }}>We're <It>looking</It> for the right person.</H1>
        <Body style={{ marginBottom: 28, fontSize: 14 }}>
          Three matchmakers are reading your file. They'll tell you when they've found someone whose story belongs near yours — usually within 7–10 days.
        </Body>
        <Mono>You'll know first.</Mono>
      </div>
      <TabBar active="match" />
    </Bloom>
  );
}

// ─── Date brief ─────────────────────────────────────────────────────────
function DateBriefScreen() {
  const { match, user, sage } = useHaven();
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: HAVEN.cream }}>
      <AppHeader left={<BackBtn to="#/match" />} title="Your brief" />
      <ScrollArea style={{ padding: '0 22px' }}>
        <Mono style={{ marginBottom: 6 }}>Thursday · 7:30 pm</Mono>
        <H1 size={28} style={{ marginBottom: 4 }}>Llama Inn</H1>
        <Body style={{ fontSize: 13, marginBottom: 22 }}>50 Withers St · 14 min walk</Body>

        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 20px', marginBottom: 16 }}>
          <Mono style={{ marginBottom: 10 }}>Before you go</Mono>
          <Body style={{ fontSize: 14, marginBottom: 14 }}>
            Maya gets to a place 10 minutes early. She'll be there before you. Don't apologize for being on time — she'll like that you are.
          </Body>
          <Body style={{ fontSize: 14 }}>
            She mentioned her dad's been in treatment. If it comes up, <It>witness it</It>. Don't try to fix it for her.
          </Body>
        </div>

        <div style={{ background: '#fff', borderRadius: 16, padding: '18px 20px', marginBottom: 16 }}>
          <Mono style={{ marginBottom: 10 }}>What you have in common</Mono>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['You both said "patient"', 'She wants to learn it. You\'re trying to extend it past a few months.'],
              ['Both eldest siblings', 'You\'ve both been the one who held it together.'],
              ['She reads non-fiction; you read poetry', 'Ask what she\'s reading. She\'ll have a real answer.'],
            ].map(([t, b]) => (
              <div key={t}>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: HAVEN.cocoa, marginBottom: 2 }}>{t}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: HAVEN.textDim, lineHeight: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#3a2420', borderRadius: 16, padding: '18px 20px', marginBottom: 24, color: HAVEN.cream }}>
          <Mono style={{ color: 'rgba(251,243,232,0.6)', marginBottom: 10 }}>From Sage · don't show her this</Mono>
          <Body style={{ fontSize: 14, color: HAVEN.cream, lineHeight: 1.55 }}>
            You'll be tempted to be charming. Try to be slow instead. If you don't know what to say, ask her something <It color={HAVEN.coral}>specific</It>. That's the move.
          </Body>
        </div>

        <Mono style={{ textAlign: 'center', padding: 16 }}>We'll text you Friday morning.</Mono>
      </ScrollArea>
    </div>
  );
}

// ─── Onboarding (functional, 6 steps that actually save) ────────────────
const ONBOARDING_STEPS = [
  { kind: 'welcome' },
  { kind: 'name' },
  { kind: 'basics' },
  { kind: 'therapist' },
  { kind: 'growth-edge' },
  { kind: 'history' },
  { kind: 'care-value' },
  { kind: 'on-hard-days' },
  { kind: 'sage-intro' },
  { kind: 'complete' },
];

function OnboardingScreen({ stepIdx = 0 }) {
  const idx = parseInt(stepIdx, 10) || 0;
  const step = ONBOARDING_STEPS[idx];
  const total = ONBOARDING_STEPS.length;
  const next = () => {
    if (idx + 1 >= total) {
      havenStore.set((s) => ({ ...s, onboarded: true, meta: { ...s.meta, onboardingProgress: 1 } }));
      navigate('#/home');
    } else {
      havenStore.patchMeta({ onboardingProgress: (idx + 1) / total });
      navigate(`#/onboarding/${idx + 1}`);
    }
  };
  const back = () => {
    if (idx === 0) navigate('#/welcome');
    else navigate(`#/onboarding/${idx - 1}`);
  };
  return (
    <Bloom tone={idx < 2 ? 'morning' : idx < 5 ? 'coral' : idx < 8 ? 'dusk' : 'honey'} intensity={0.55} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '14px 22px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div onClick={back} style={{ cursor: 'pointer', padding: 4 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={HAVEN.cocoa} strokeWidth="1.6"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div style={{ flex: 1, height: 3, background: 'rgba(58,36,32,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${((idx + 1) / total) * 100}%`, background: HAVEN.coralDeep, transition: 'width 0.4s ease' }} />
        </div>
        <Mono>{idx + 1} / {total}</Mono>
      </div>
      <OnboardingStep kind={step.kind} onNext={next} idx={idx} />
    </Bloom>
  );
}

function OnboardingStep({ kind, onNext, idx }) {
  const state = useHaven();
  const [local, setLocal] = React.useState({});

  if (kind === 'welcome') return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 32px 40px', textAlign: 'center' }}>
      <div>
        <Halo size={84} thinking={true} style={{ margin: '0 auto 32px' }} />
        <H1 size={34} style={{ marginBottom: 14 }}>Hello. I'm <It>Sage</It>.</H1>
        <Body style={{ fontSize: 15, maxWidth: 280, margin: '0 auto' }}>
          Over the next three days, I'm going to ask you some things. Take your time. There are no right answers — only true ones.
        </Body>
      </div>
      <Btn onClick={onNext}>Begin</Btn>
    </div>
  );

  if (kind === 'name') return (
    <OnboardingPrompt
      label="What should I call you?"
      hint="Your first name, or what people who love you call you."
      value={state.user.name}
      onChange={(v) => havenStore.patchUser({ name: v })}
      placeholder="Your name"
      onNext={() => state.user.name.trim() && onNext()}
    />
  );

  if (kind === 'basics') return (
    <OnboardingMulti
      title="A few facts."
      hint="The matchmakers need these. Sage doesn't care."
      fields={[
        { key: 'age', label: 'Age', placeholder: '32', type: 'number', value: state.user.age || '', onChange: (v) => havenStore.patchUser({ age: parseInt(v, 10) || null }) },
        { key: 'pronouns', label: 'Pronouns', placeholder: 'she/her', value: state.user.pronouns, onChange: (v) => havenStore.patchUser({ pronouns: v }) },
        { key: 'city', label: 'City', placeholder: 'Brooklyn, NY', value: state.user.city, onChange: (v) => havenStore.patchUser({ city: v }) },
      ]}
      onNext={onNext}
    />
  );

  if (kind === 'therapist') return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 32px 32px' }}>
      <Mono style={{ marginBottom: 10 }}>Verification</Mono>
      <H1 size={30} style={{ marginBottom: 14 }}>Where do you <It>do your work?</It></H1>
      <Body style={{ marginBottom: 26, fontSize: 14 }}>
        Haven verifies that you're in active therapy. We never see notes — only that the relationship is real.
      </Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
        {['BetterHelp', 'Alma', 'Talkspace', 'SonderMind', 'Headway', 'Open Path', 'Other / private practice'].map((p) => {
          const selected = state.user.therapistPractice === p;
          return (
            <div key={p} onClick={() => havenStore.patchUser({ therapistPractice: p, therapistVerified: true })} style={{
              padding: '14px 18px', borderRadius: 14,
              background: selected ? HAVEN.cocoa : 'rgba(255,255,255,0.6)',
              color: selected ? HAVEN.cream : HAVEN.cocoa,
              fontFamily: 'Inter', fontSize: 14, fontWeight: 500,
              cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              border: `1px solid ${selected ? HAVEN.cocoa : 'rgba(58,36,32,0.08)'}`,
            }}>
              <span>{p}</span>
              {selected && <span style={{ fontFamily: '"DM Mono", monospace', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7 }}>connected</span>}
            </div>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      <Btn onClick={() => state.user.therapistPractice && onNext()} style={{ opacity: state.user.therapistPractice ? 1 : 0.4 }}>
        Continue
      </Btn>
    </div>
  );

  if (kind === 'growth-edge') return (
    <OnboardingPrompt
      label="What are you working on?"
      hint="In therapy. The thing you keep coming back to. Use your own words."
      value={state.sage.growthEdge}
      onChange={(v) => havenStore.patchSage({ growthEdge: v })}
      placeholder="The thing you're working on..."
      multiline={true}
      onNext={onNext}
    />
  );

  if (kind === 'history') return (
    <OnboardingPrompt
      label="What's the pattern you fall into?"
      hint="Be specific. The shape of it, not the diagnosis."
      value={state.sage.historyOf}
      onChange={(v) => havenStore.patchSage({ historyOf: v })}
      placeholder="I tend to..."
      multiline={true}
      onNext={onNext}
    />
  );

  if (kind === 'care-value') {
    const opts = ['patient', 'curious', 'steady', 'honest', 'tender', 'attentive', 'available', 'spacious'];
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 32px 32px' }}>
        <Mono style={{ marginBottom: 10 }}>One word</Mono>
        <H1 size={30} style={{ marginBottom: 12 }}>What does <It>good love</It> feel like to you?</H1>
        <Body style={{ marginBottom: 22, fontSize: 14 }}>One word. The one you keep returning to.</Body>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
          {opts.map((w) => {
            const selected = state.sage.careValue === w;
            return (
              <div key={w} onClick={() => havenStore.patchSage({ careValue: w })} style={{
                padding: '12px 20px', borderRadius: 100,
                background: selected ? HAVEN.cocoa : 'rgba(255,255,255,0.6)',
                color: selected ? HAVEN.cream : HAVEN.cocoa,
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 22,
                cursor: 'pointer', border: `1px solid ${selected ? HAVEN.cocoa : 'rgba(58,36,32,0.1)'}`,
              }}>{w}</div>
            );
          })}
        </div>
        <div style={{ flex: 1 }} />
        <Btn onClick={() => state.sage.careValue && onNext()} style={{ opacity: state.sage.careValue ? 1 : 0.4 }}>Continue</Btn>
      </div>
    );
  }

  if (kind === 'on-hard-days') return (
    <OnboardingPrompt
      label="What do you do on hard days?"
      hint="Not what you wish you did. What you actually do."
      value={state.sage.onHardDays}
      onChange={(v) => havenStore.patchSage({ onHardDays: v })}
      placeholder="On hard days I..."
      multiline={true}
      onNext={onNext}
    />
  );

  if (kind === 'sage-intro') return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px 32px 32px' }}>
      <div>
        <Halo size={64} thinking={true} style={{ marginBottom: 24 }} />
        <Mono style={{ marginBottom: 10 }}>From Sage</Mono>
        <H1 size={28} style={{ marginBottom: 16 }}>I have what I <It>need</It>, {state.user.name || 'friend'}.</H1>
        <Body style={{ fontSize: 14, lineHeight: 1.65 }}>
          The matchmakers will read your file with me. We'll find someone whose story belongs near yours — usually within 7–10 days.
          {'\n\n'}I'll text you in the mornings. Sometimes with a question, sometimes just to sit with you. You can text me anytime, too.
        </Body>
      </div>
      <Btn onClick={onNext}>Okay</Btn>
    </div>
  );

  if (kind === 'complete') return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '60px 32px 32px', textAlign: 'center' }}>
      <div>
        <div style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontSize: 90, color: HAVEN.cocoa, lineHeight: 1, marginBottom: 14 }}>Welcome.</div>
        <Body style={{ fontSize: 14, maxWidth: 280, margin: '0 auto' }}>
          You're in. Take a breath.
        </Body>
      </div>
      <Btn onClick={onNext}>Open Haven</Btn>
    </div>
  );

  return null;
}

function OnboardingPrompt({ label, hint, value, onChange, placeholder, multiline, onNext }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 32px 32px' }}>
      <Mono style={{ marginBottom: 10 }}>{multiline ? 'In your words' : 'Tell me'}</Mono>
      <H1 size={30} style={{ marginBottom: 14 }}>{label}</H1>
      <Body style={{ marginBottom: 22, fontSize: 14 }}>{hint}</Body>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          style={{
            border: 'none', outline: 'none', resize: 'none',
            background: 'rgba(255,255,255,0.65)', borderRadius: 14, padding: 16,
            fontFamily: 'Inter', fontSize: 16, lineHeight: 1.5, color: HAVEN.cocoa,
          }}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            border: 'none', outline: 'none',
            background: 'rgba(255,255,255,0.65)', borderRadius: 14, padding: 16,
            fontFamily: 'Inter', fontSize: 18, color: HAVEN.cocoa,
          }}
        />
      )}
      <div style={{ flex: 1 }} />
      <Btn onClick={() => value && value.trim() && onNext()} style={{ opacity: value && value.trim() ? 1 : 0.4 }}>Continue</Btn>
    </div>
  );
}

function OnboardingMulti({ title, hint, fields, onNext }) {
  const allFilled = fields.every((f) => String(f.value || '').trim());
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 32px 32px' }}>
      <Mono style={{ marginBottom: 10 }}>About you</Mono>
      <H1 size={30} style={{ marginBottom: 12 }}>{title}</H1>
      <Body style={{ marginBottom: 22, fontSize: 14 }}>{hint}</Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {fields.map((f) => (
          <div key={f.key}>
            <Mono style={{ marginBottom: 6 }}>{f.label}</Mono>
            <input
              type={f.type || 'text'}
              value={f.value}
              onChange={(e) => f.onChange(e.target.value)}
              placeholder={f.placeholder}
              style={{
                width: '100%', boxSizing: 'border-box',
                border: 'none', outline: 'none',
                background: 'rgba(255,255,255,0.65)', borderRadius: 12, padding: 14,
                fontFamily: 'Inter', fontSize: 16, color: HAVEN.cocoa,
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <Btn onClick={() => allFilled && onNext()} style={{ opacity: allFilled ? 1 : 0.4 }}>Continue</Btn>
    </div>
  );
}

Object.assign(window, {
  SageScreen, MatchScreen, MatchPendingScreen, DateBriefScreen, OnboardingScreen,
  SMSBubble, TypingIndicator, fmtTime, dayLabel,
});
