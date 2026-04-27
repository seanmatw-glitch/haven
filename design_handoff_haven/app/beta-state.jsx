// Haven Beta — persistent state store
// Single source of truth, backed by localStorage. Pub/sub via React hooks.

const HAVEN_STORE_KEY = 'haven.beta.v1';

const DEFAULT_STATE = {
  // onboarding flag — gates the home tab
  onboarded: false,
  // user identity (set during onboarding)
  user: {
    name: '',
    pronouns: '',
    age: null,
    city: '',
    therapistVerified: false,
    therapistPractice: '',
    photo: null, // path or 'placeholder'
  },
  // what Sage has learned (collected through onboarding + ongoing chat)
  sage: {
    growthEdge: '',          // "the thing you're working on"
    historyOf: '',           // pattern they fall into
    careValue: '',           // single word — patient / curious / steady...
    onHardDays: '',          // freeform
    notesFromSage: [],       // running observations Sage records
    lastSeen: null,          // timestamp
  },
  // current match (one at a time)
  match: {
    status: 'pending', // pending | introducing | active | paused | passed
    name: '',
    age: null,
    city: '',
    pronouns: '',
    photo: '',
    sharedThread: '',  // why-her-for-you line
    bothSaid: '',      // shared word
    herNote: '',       // her message back
    introducedAt: null,
    plannedDate: null, // date string
    plannedDateContext: '',
  },
  // chat with Sage (canonical thread)
  sageThread: [], // {role: 'sage'|'me', text, time, kind?}
  // app meta
  meta: {
    cohort: 'Beta · Wave 1',
    onboardingDay: 1,    // 1, 2, or 3
    onboardingProgress: 0, // 0..1
    notifications: { dailyTexts: true, matchAlerts: true, debrief: true },
    paused: false,
    seenReleaseNotes: false,
  },
};

function loadState() {
  try {
    const raw = localStorage.getItem(HAVEN_STORE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    // shallow merge defaults so new keys appear after schema changes
    return {
      ...DEFAULT_STATE,
      ...parsed,
      user: { ...DEFAULT_STATE.user, ...(parsed.user || {}) },
      sage: { ...DEFAULT_STATE.sage, ...(parsed.sage || {}) },
      match: { ...DEFAULT_STATE.match, ...(parsed.match || {}) },
      meta: { ...DEFAULT_STATE.meta, ...(parsed.meta || {}) },
      sageThread: parsed.sageThread || [],
    };
  } catch (e) {
    console.warn('haven: state load failed, using defaults', e);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState(s) {
  try {
    localStorage.setItem(HAVEN_STORE_KEY, JSON.stringify(s));
  } catch (e) {
    console.warn('haven: state save failed', e);
  }
}

// ─── Store ────────────────────────────────────────────────────────────────
const listeners = new Set();
let _state = loadState();

const havenStore = {
  get: () => _state,
  set: (updater) => {
    const next = typeof updater === 'function' ? updater(_state) : updater;
    _state = next;
    saveState(_state);
    listeners.forEach((fn) => fn(_state));
  },
  subscribe: (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  reset: () => {
    _state = structuredClone(DEFAULT_STATE);
    saveState(_state);
    listeners.forEach((fn) => fn(_state));
  },
  // convenience setters
  patchUser: (patch) => havenStore.set((s) => ({ ...s, user: { ...s.user, ...patch } })),
  patchSage: (patch) => havenStore.set((s) => ({ ...s, sage: { ...s.sage, ...patch } })),
  patchMatch: (patch) => havenStore.set((s) => ({ ...s, match: { ...s.match, ...patch } })),
  patchMeta: (patch) => havenStore.set((s) => ({ ...s, meta: { ...s.meta, ...patch } })),
  appendSage: (msg) => havenStore.set((s) => ({ ...s, sageThread: [...s.sageThread, { time: new Date().toISOString(), ...msg }] })),
  recordSageNote: (note) => havenStore.set((s) => ({ ...s, sage: { ...s.sage, notesFromSage: [...s.sage.notesFromSage, { time: new Date().toISOString(), text: note }] } })),
};

// React hook
function useHaven() {
  const [state, setState] = React.useState(_state);
  React.useEffect(() => havenStore.subscribe(setState), []);
  return state;
}

// Demo data — used to seed an "active match" state for showcase mode.
// Beta-grade: lets investors/partners see the full app w/o doing onboarding.
const DEMO_SEED = {
  onboarded: true,
  user: {
    name: 'You',
    pronouns: 'he/him',
    age: 32,
    city: 'Brooklyn, NY',
    therapistVerified: true,
    therapistPractice: 'Alma · Dr. R. Park',
    photo: 'app/photos/you.jpg',
  },
  sage: {
    growthEdge: 'I move toward people quickly. I want to learn to stay through the part that\u2019s slower.',
    historyOf: 'choosing partners who needed rescuing',
    careValue: 'patient',
    onHardDays: 'I go quiet. I don\u2019t mean to disappear, but I do.',
    notesFromSage: [
      { time: '2026-04-22T14:30:00Z', text: 'You\u2019ve used the word "patient" three times this week.' },
      { time: '2026-04-23T08:15:00Z', text: 'When Maya asked what you do on hard days, you gave her the charming answer.' },
    ],
    lastSeen: new Date().toISOString(),
  },
  match: {
    status: 'active',
    name: 'Maya',
    age: 31,
    city: 'Brooklyn, NY',
    pronouns: 'she/her',
    photo: 'app/photos/maya.jpg',
    sharedThread: 'You both said "patient" when she asked what you were working toward.',
    bothSaid: 'patient',
    herNote: 'I read what you wrote about going quiet. I do that too. I won\u2019t mistake it for distance.',
    introducedAt: '2026-04-21T19:00:00Z',
    plannedDate: 'Thursday, 7:30 pm',
    plannedDateContext: 'Llama Inn · 50 Withers St, Williamsburg',
  },
  sageThread: [
    { role: 'sage', text: 'Did Maya\u2019s note sit with you the way I hoped?', time: '2026-04-23T08:30:00Z' },
    { role: 'me',   text: 'yeah. the line about her dad caught me.', time: '2026-04-23T08:32:00Z' },
    { role: 'sage', text: 'I thought it might. You\u2019ve used the word "patient" three times this week — I think you recognize it in her.', time: '2026-04-23T08:33:00Z' },
    { role: 'sage', text: 'Morning. I want to ask you something before Thursday.', time: '2026-04-25T07:42:00Z' },
    { role: 'sage', text: 'When Maya asked what you do on hard days — you gave her the answer you usually give. It was charming. It wasn\u2019t the true one.', time: '2026-04-25T07:43:00Z' },
    { role: 'sage', text: 'You don\u2019t have to tell her the true one yet. But I wanted you to know I noticed.', time: '2026-04-25T07:44:00Z' },
  ],
  meta: { cohort: 'Beta · Wave 1', onboardingDay: 3, onboardingProgress: 1, notifications: { dailyTexts: true, matchAlerts: true, debrief: true }, paused: false, seenReleaseNotes: false },
};

function seedDemo() {
  havenStore.set(() => structuredClone(DEMO_SEED));
}

Object.assign(window, { havenStore, useHaven, seedDemo, DEMO_SEED, DEFAULT_STATE });
