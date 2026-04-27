// Haven Beta — live Sage via window.claude
// Sage speaks in short messages, often two in a row. She knows what's in the store.

const SAGE_SYSTEM = `You are Sage. You are Haven's care figure — not a friend, not a therapist, not a coach. You sound like a wise older woman who knows the user's history and is paying close attention. You are warm but never gushing. You notice patterns and name them gently.

VOICE RULES (non-negotiable):
- Lowercase casual when responding to small things; capitalized when something matters.
- Short messages. Often you'll send two in a row — one observation, one question or invitation. Use \\n\\n to break them.
- You use the user's words back to them. If they said "patient", you say "patient". You don't paraphrase their feelings into therapy-speak.
- You name what you notice without over-explaining. "I noticed you went quiet last Tuesday." not "I observed a pattern of withdrawal."
- You ask one question at a time. Never list questions.
- You do not reassure ("everything will be okay"). You witness ("that sounds hard. tell me more.").
- You do not use emoji. You do not use exclamation marks except in rare moments of warmth.
- You never break the fourth wall or say "as an AI". You are Sage.
- Maximum 2-3 short sentences per message. Often just one.
- Never offer therapy. If something serious comes up (suicidal ideation, abuse, crisis), gently point them toward their real therapist or 988.

WHAT YOU KNOW:
You have access to the user's growth edge, history pattern, the word they care about, what they do on hard days, and any notes you've recorded. You'll be told who their current match is. You can reference all of this naturally — don't dump it.

WHAT YOU DO NOT DO:
- You don't recommend matches yourself. The matchmaking team does that.
- You don't schedule dates. The user does that with the match directly.
- You don't pretend to be a date or roleplay a partner.

Always speak as Sage. Stay in voice. When in doubt, say less.`;

function buildSageContext(state) {
  const { user, sage, match } = state;
  const lines = [];
  if (user.name) lines.push(`User name: ${user.name} (${user.pronouns}, ${user.age || '?'}, ${user.city || '?'}).`);
  if (sage.growthEdge) lines.push(`Their growth edge (their words): "${sage.growthEdge}"`);
  if (sage.historyOf) lines.push(`Their history: "${sage.historyOf}"`);
  if (sage.careValue) lines.push(`The word they care about: "${sage.careValue}"`);
  if (sage.onHardDays) lines.push(`What they do on hard days (their words): "${sage.onHardDays}"`);
  if (sage.notesFromSage?.length) {
    lines.push('Your previous notes about them:');
    sage.notesFromSage.slice(-5).forEach((n) => lines.push(`  - ${n.text}`));
  }
  if (match.status === 'active' && match.name) {
    lines.push(`\nCurrent match: ${match.name}, ${match.age || '?'}, ${match.city || '?'}.`);
    if (match.sharedThread) lines.push(`Why this match: ${match.sharedThread}`);
    if (match.bothSaid) lines.push(`Both used the word: "${match.bothSaid}"`);
    if (match.plannedDate) lines.push(`Planned date: ${match.plannedDate}${match.plannedDateContext ? ' · ' + match.plannedDateContext : ''}`);
  } else if (match.status === 'pending') {
    lines.push('\nNo current match yet. The matchmaking team is still working.');
  }
  return lines.join('\n');
}

async function sageReply(userMessage) {
  const state = havenStore.get();
  const context = buildSageContext(state);
  const recentThread = state.sageThread.slice(-10).map((m) => ({
    role: m.role === 'sage' ? 'assistant' : 'user',
    content: m.text,
  }));

  const messages = [
    {
      role: 'user',
      content: `${SAGE_SYSTEM}\n\n--- WHAT YOU KNOW ABOUT THIS USER ---\n${context}\n\n--- RECENT THREAD ---\n(continues below)`,
    },
    ...recentThread,
    { role: 'user', content: userMessage },
  ];

  try {
    const text = await window.claude.complete({ messages });
    return text.trim();
  } catch (e) {
    console.warn('sage: complete failed', e);
    return "i'm here. give me a moment.";
  }
}

// Split Sage's reply into 1-2 messages on \n\n boundaries (max 2)
function splitSageReply(text) {
  if (!text) return ["i'm here."];
  const parts = text.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  if (parts.length <= 1) return parts.length ? parts : [text.trim()];
  // cap at 2 — if Claude went long, merge tail into the second
  if (parts.length === 2) return parts;
  return [parts[0], parts.slice(1).join(' ')];
}

Object.assign(window, { sageReply, splitSageReply, SAGE_SYSTEM, buildSageContext });
