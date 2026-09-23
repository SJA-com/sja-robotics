import WaitlistButton from "./WaitlistButton";
import StatusBadge, { type Status } from "./StatusBadge";

type ModeFeature = { text: string; planned?: boolean };

const modes: {
  name: string;
  tagline: string;
  icon: string;
  color: string;
  bg: string;
  features: ModeFeature[];
}[] = [
  {
    name: "Health Mode",
    tagline: "Your personal health Rafiq",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    features: [
      { text: "Symptom guidance and general health advice" },
      { text: "Remembers your conditions, allergies and medications" },
      { text: "A health profile you can view, edit or erase" },
      { text: "Connecting you with doctors", planned: true },
    ],
  },
  {
    name: "Security Mode",
    tagline: "Home-safety guidance, on call",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "text-amber-300",
    bg: "bg-amber-300/10",
    features: [
      { text: "Home-security advice and safety checklists" },
      { text: "Smart-home monitoring", planned: true },
      { text: "Real-time alerts for unusual activity", planned: true },
      { text: "Camera & sensor integration", planned: true },
    ],
  },
  {
    name: "Assistant Mode",
    tagline: "Your organised right hand",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    features: [
      { text: "Keeps a task list you can view and edit" },
      { text: "Drafts emails and messages, helps with research" },
      { text: "Reminders & push notifications", planned: true },
      { text: "Ordering online & sending emails for you", planned: true },
    ],
  },
  {
    name: "Emergency Mode",
    tagline: "Stays calm so you don't have to",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    color: "text-red-500",
    bg: "bg-red-500/10",
    features: [
      { text: "First aid guidance step by step" },
      { text: "Calm, clear instructions in Arabic or English" },
      { text: "Contacting emergency services automatically", planned: true },
      { text: "Alerting your chosen contacts", planned: true },
    ],
  },
  {
    name: "Companion Mode",
    tagline: "Your Rafiq — just talk",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    features: [
      { text: "Just talk — about anything" },
      { text: "Remembers the facts you share until you erase them" },
      { text: "No re-explaining who you are every time" },
      { text: "Replies in your language and mirrors your dialect" },
    ],
  },
];

const capabilities = [
  {
    name: "Reasoning & Analysis",
    description:
      "Problem solving, logical analysis and strategic planning — Fari works through questions step by step with you",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "Coding & Technical",
    description:
      "Writes, debugs, and explains code — from Python to Rust, frontend to backend, beginner to architect",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "Creative & Writing",
    description:
      "Stories, content, ideas, essays, marketing copy, poetry — written in your voice and your language",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    name: "Knowledge & Research",
    description:
      "Facts, explanations and research-style answers — plus reading the images and PDFs you share. Real-time web search is on the roadmap",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
];

// Every message is classified into one of these routes and answered with a
// specialised prompt. This is live today on efficient open models.
const routes = [
  { name: "Coding", role: "Code, debugging, technical", color: "text-emerald-300", border: "border-emerald-400/15", bg: "bg-emerald-400/5" },
  { name: "Reasoning", role: "Analysis, maths, planning", color: "text-violet-300", border: "border-violet-400/15", bg: "bg-violet-400/5" },
  { name: "Creative", role: "Writing, ideas, storytelling", color: "text-rose-300", border: "border-rose-400/15", bg: "bg-rose-400/5" },
  { name: "Research", role: "Facts, explanations, study", color: "text-sky-300", border: "border-sky-400/15", bg: "bg-sky-400/5" },
  { name: "Multimodal", role: "Images & PDFs you share", color: "text-blue-300", border: "border-blue-400/15", bg: "bg-blue-400/5" },
  { name: "Conversation", role: "Everyday chat & support", color: "text-orange-300", border: "border-orange-400/15", bg: "bg-orange-400/5" },
];

// Candidate providers for the provider-agnostic model layer — roadmap only.
const plannedProviders = ["Claude", "ChatGPT", "DeepSeek", "Gemini", "ElevenLabs voice"];

const sjaLayer: { name: string; status: Status }[] = [
  { name: "Permanent Memory", status: "Live" },
  { name: "5 Specialized Modes", status: "Live" },
  { name: "Arabic-first Language", status: "Live" },
  { name: "Personality Engine", status: "Live" },
  { name: "Privacy & Data Ownership", status: "Live" },
  { name: "Atiana Integration", status: "Planned" },
];

const differentiators = [
  {
    text: "Multilingual",
    detail: "Arabic + English first, more languages coming",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    text: "Permanent memory",
    detail: "remembers what matters — you stay in control",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    text: "5 specialized modes",
    detail: "not just a generic chatbot",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    text: "Voice + Chat",
    detail: "your choice always",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  },
  {
    text: "Built for the world",
    detail: "culturally aware, available on the web",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    text: "Privacy first",
    detail: "view, edit, export or erase your data",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    text: "Will power Atiana",
    detail: "the future humanoid robot by SJA",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
];

// Honest status table: what the live beta does today vs. the roadmap.
const statusRows: { feature: string; today: string; status: Status }[] = [
  { feature: "Smart routing", today: "Each message is classified (coding, reasoning, creative, research, multimodal, conversation) and answered with a specialised prompt", status: "Live" },
  { feature: "5 specialized modes", today: "Companion, Health, Assistant, Security, Emergency", status: "Live" },
  { feature: "Permanent memory + task list", today: "Facts and tasks stored per user — view, edit, export or erase any time", status: "Live" },
  { feature: "Arabic-first", today: "Replies in the language of your latest message, mirrors your dialect, full RTL interface", status: "Live" },
  { feature: "Voice + Chat", today: "Talk or type — voice in and out through your browser", status: "Live" },
  { feature: "Images & PDFs", today: "Reads the photos and documents you share", status: "Live" },
  { feature: "Reminders & notifications", today: "Push reminders for your tasks", status: "Planned" },
  { feature: "Real-time web search", today: "Live answers from the web", status: "Planned" },
  { feature: "Additional AI providers", today: "Frontier models (e.g. Claude, ChatGPT, DeepSeek, Gemini) added per route", status: "Planned" },
  { feature: "Natural neural voice", today: "Premium voices (e.g. ElevenLabs)", status: "Planned" },
  { feature: "Actions on your behalf", today: "Ordering online, sending emails", status: "Planned" },
  { feature: "Smart home & cameras", today: "Monitoring and alerts from your devices", status: "Planned" },
  { feature: "Emergency contacts & services", today: "Automatic alerts when you need help", status: "Planned" },
  { feature: "Powers a robot", today: "Fari as the brain of Atiana", status: "Planned" },
];

const pricing = [
  {
    name: "Personal",
    price: "$9.99",
    period: "/month",
    description: "Fari all to yourself — your personal Rafiq",
    highlight: false,
  },
  {
    name: "Family",
    price: "$19.99",
    period: "/month",
    description: "Up to 5 family members — each with their own Fari",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$299",
    period: " one-time",
    description: "Pay once — Fari is yours for life",
    highlight: false,
  },
];

export default function Fari() {
  return (
    <section className="py-24 relative bg-fari overflow-hidden">
      {/* Premium dark background with gold accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/4 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-600/4 rounded-full blur-[100px]" />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-amber-400/8 to-transparent" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-amber-400/8 to-transparent" />
        {/* Corner ornaments */}
        <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-amber-400/15 rounded-tl-lg" />
        <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-amber-400/15 rounded-tr-lg" />
        <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-amber-400/15 rounded-bl-lg" />
        <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-amber-400/15 rounded-br-lg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════
            SECTION HEADER
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-20">
          <p className="text-amber-400 text-xs font-mono mb-2 tracking-wider uppercase">
            Product 02
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              FARI
            </span>
          </h2>
          <p className="text-amber-400/60 text-sm font-mono mb-5 tracking-wide">
            Futuristic Artificial Reasoning Intelligence
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-3">
            Every Kind of Help. One Companion. Your Life.
          </p>
          <span className="inline-flex px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-mono tracking-wider mb-6">
            COMING SOON
          </span>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            SJA&apos;s multilingual AI companion — starting with Arabic and English,
            with more languages to follow. Not a generic assistant. Fari is
            your Rafiq (companion) for life — with specialized modes, permanent
            memory, and a warm personality that feels like a trusted friend.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            ONE COMPANION FOR EVERY KIND OF HELP
            ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              One Companion for{" "}
              <span className="text-amber-400">Every Kind of Help</span>
            </h3>
            <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Fari recognises what kind of help you need — coding, reasoning,
              creative, research, images and documents, or just conversation —
              and answers with an approach built for that request. Today she
              runs on efficient open models; her model layer is
              provider-agnostic, so more providers can be added over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {capabilities.map((cap) => (
              <div
                key={cap.name}
                className="rounded-xl bg-[#0a0c14] border border-amber-400/10 p-6 hover:border-amber-400/25 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${cap.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                >
                  <svg
                    className={`w-6 h-6 ${cap.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={cap.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-base font-bold mb-2">{cap.name}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bold statement */}
          <div className="text-center">
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto italic leading-relaxed">
              &ldquo;Fari isn&apos;t trying to be another general-purpose
              chatbot — she is built to be{" "}
              <span className="text-amber-400 font-semibold not-italic">
                the companion that knows you
              </span>
              , in your language.&rdquo;
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ARCHITECTURE — HOW FARI WORKS
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-[#0a0c14] border border-amber-400/15 p-8 sm:p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              How Fari{" "}
              <span className="text-amber-400">Works</span>
            </h3>
            <p className="text-foreground/50 text-sm max-w-xl mx-auto">
              You don&apos;t need to choose between AIs. Fari reads each message,
              routes it to a specialised approach, and answers — on a model
              layer that isn&apos;t tied to any single provider.
            </p>
          </div>

          {/* Architecture visual */}
          <div className="max-w-3xl mx-auto">
            {/* FARI — top node */}
            <div className="flex justify-center mb-6">
              <div className="rounded-xl bg-gradient-to-r from-amber-400/15 to-amber-500/10 border-2 border-amber-400/30 px-8 py-4 text-center shadow-[0_0_40px_rgba(251,191,36,0.08)]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    FARI
                  </span>
                </div>
                <p className="text-[10px] font-mono text-amber-400/50 tracking-wider">
                  USER-FACING COMPANION
                </p>
              </div>
            </div>

            {/* Vertical connector line */}
            <div className="flex justify-center mb-1">
              <div className="w-px h-6 bg-gradient-to-b from-amber-400/40 to-amber-400/20" />
            </div>

            {/* Routing Engine */}
            <div className="flex justify-center items-center gap-2 mb-1">
              <div className="rounded-lg bg-amber-400/5 border border-amber-400/15 px-5 py-2">
                <p className="text-xs font-mono text-amber-400/70 tracking-wider flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  INTELLIGENT ROUTING ENGINE
                </p>
              </div>
              <StatusBadge status="Live" />
            </div>

            {/* Branching lines */}
            <div className="flex justify-center mb-1">
              <div className="w-px h-4 bg-amber-400/20" />
            </div>

            {/* Specialised routes (live) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {routes.map((route) => (
                <div
                  key={route.name}
                  className={`rounded-lg ${route.bg} border ${route.border} px-4 py-3 text-center hover:border-opacity-40 transition-colors`}
                >
                  {/* Connector dot */}
                  <div className={`w-1.5 h-1.5 rounded-full ${route.bg} border ${route.border} mx-auto mb-2`} />
                  <p className={`text-sm font-bold ${route.color} mb-0.5`}>
                    {route.name}
                  </p>
                  <p className="text-[10px] text-foreground/40 leading-tight">
                    {route.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Branching lines */}
            <div className="flex justify-center mb-1">
              <div className="w-px h-4 bg-amber-400/20" />
            </div>

            {/* Model layer — today vs. roadmap */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-lg bg-amber-400/5 border border-amber-400/15 px-4 py-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-amber-300">
                    Today: efficient open models
                  </p>
                  <StatusBadge status="Live" />
                </div>
                <p className="text-[11px] text-foreground/45 leading-snug">
                  Low-cost open models (such as Qwen and Gemma) power every
                  route, each with its own specialised prompt.
                </p>
              </div>
              <div className="rounded-lg bg-foreground/[0.02] border border-dashed border-amber-400/15 px-4 py-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-foreground/70">
                    Roadmap: more providers
                  </p>
                  <StatusBadge status="Planned" />
                </div>
                <p className="text-[11px] text-foreground/45 leading-snug mb-2">
                  Provider-agnostic by design — candidates to add per route:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {plannedProviders.map((p) => (
                    <span
                      key={p}
                      className="px-2 py-0.5 rounded-md border border-foreground/10 text-[10px] text-foreground/45"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom SJA Layer */}
            <div className="rounded-xl bg-gradient-to-r from-amber-400/8 to-amber-500/5 border border-amber-400/20 p-6">
              <div className="text-center mb-4">
                <p className="text-sm font-bold text-amber-400 mb-0.5">
                  Custom SJA Layer
                </p>
                <p className="text-[10px] font-mono text-foreground/40 tracking-wider">
                  WHAT MAKES FARI UNIQUELY FARI
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sjaLayer.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center gap-2 rounded-md bg-[#0a0c14] border border-amber-400/8 px-3 py-2"
                  >
                    <svg
                      className="w-3 h-3 text-amber-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xs text-foreground/60 flex-1">
                      {feature.name}
                    </span>
                    <StatusBadge status={feature.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pitch line */}
          <p className="text-center text-foreground/50 text-sm mt-8 max-w-lg mx-auto">
            Because the model layer is provider-agnostic, Fari is designed to
            adopt better models as they arrive. Your memory, modes and
            experience stay the same — only better.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            LIVE VS. NEXT
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-[#0a0c14] border border-amber-400/15 p-6 sm:p-10 mb-20 overflow-x-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            What&apos;s Live vs.{" "}
            <span className="text-amber-400">What&apos;s Next</span>
          </h3>
          <p className="text-foreground/50 text-sm text-center mb-8 max-w-lg mx-auto">
            The Fari demo is live in beta. Here&apos;s exactly what works today
            — and what&apos;s on the roadmap.
          </p>
          <div className="min-w-[500px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-400/10">
                  <th className="text-left text-sm font-semibold text-foreground/70 py-3 pr-4">
                    Feature
                  </th>
                  <th className="text-left text-sm font-medium text-foreground/40 py-3 px-3">
                    What it does
                  </th>
                  <th className="text-center text-sm font-bold text-amber-400 py-3 pl-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {statusRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-amber-400/5 hover:bg-amber-400/[0.02] transition-colors"
                  >
                    <td className="text-sm font-medium text-foreground/70 py-3.5 pr-4">
                      {row.feature}
                    </td>
                    <td className="text-xs py-3.5 px-3 text-foreground/45 leading-relaxed">
                      {row.today}
                    </td>
                    <td className="text-center py-3.5 pl-3">
                      <StatusBadge status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            5 MODES
            ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            5 Specialized{" "}
            <span className="text-amber-400">Modes</span>
          </h3>
          <p className="text-foreground/50 text-sm text-center mb-10 max-w-lg mx-auto">
            Not just a chatbot — Fari transforms into what you need, when you
            need it. All five modes are live in the beta; items marked Planned
            are on the roadmap.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((mode, i) => (
              <div
                key={mode.name}
                className={`rounded-xl bg-[#0a0c14] border border-amber-400/10 p-7 hover:border-amber-400/30 transition-all ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${mode.bg} flex items-center justify-center`}
                  >
                    <svg
                      className={`w-6 h-6 ${mode.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={mode.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{mode.name}</h4>
                    <p className="text-amber-400/50 text-xs font-mono">
                      {mode.tagline}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {mode.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-2 text-sm"
                    >
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          feature.planned ? "text-foreground/30" : "text-amber-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            feature.planned
                              ? "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              : "M5 13l4 4L19 7"
                          }
                        />
                      </svg>
                      <span
                        className={
                          feature.planned ? "text-foreground/40" : "text-foreground/60"
                        }
                      >
                        {feature.text}
                      </span>
                      {feature.planned && <StatusBadge status="Planned" />}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            DIFFERENTIATORS
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-[#0a0c14] border border-amber-400/15 p-8 sm:p-12 mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            What Makes Fari{" "}
            <span className="text-amber-400">Different</span>
          </h3>
          <p className="text-foreground/50 text-sm text-center mb-10 max-w-lg mx-auto">
            Built from the ground up to be truly personal — not a translation of
            something generic
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-lg bg-surface border border-amber-400/8 px-4 py-4 hover:border-amber-400/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4.5 h-4.5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground/90">
                    {item.text}
                  </div>
                  <p className="text-xs text-foreground/45">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PRICING
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Choose Your{" "}
            <span className="text-amber-400">Plan</span>
          </h3>
          <p className="text-foreground/50 text-sm">
            Start personal. Grow with family. Or commit for life.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 text-center transition-all ${
                plan.highlight
                  ? "border-2 border-amber-400/30 bg-[#0a0c14] shadow-[0_0_40px_rgba(251,191,36,0.06)]"
                  : "bg-[#0a0c14] border border-amber-400/10 hover:border-amber-400/20"
              }`}
            >
              <p className="text-amber-400 text-sm font-mono mb-2 tracking-wider uppercase">
                {plan.name}
              </p>
              <div className="mb-3">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-foreground/50 text-sm">{plan.period}</span>
              </div>
              <p className="text-foreground/50 text-sm">{plan.description}</p>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            CTA
            ═══════════════════════════════════════════ */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <WaitlistButton product="Fari" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(251,191,36,0.25)]">
              Join Waitlist
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </WaitlistButton>
            <a
              href="https://robotics.sjapathway.com/fari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-amber-400/40 text-amber-400 font-semibold hover:bg-amber-400/10 transition-colors"
            >
              Try Demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            FARI POWERS EVERYTHING
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-[#07090f] border-2 border-amber-400/20 p-8 sm:p-12 mb-12 shadow-[0_0_60px_rgba(251,191,36,0.04)]">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">
              One Brain.{" "}
              <span className="text-amber-400">Four Forms.</span>
            </h3>
            <p className="text-foreground/50 text-sm max-w-lg mx-auto">
              Fari is designed to be the intelligence behind every SJA product
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Fari on Devices */}
            <div className="rounded-xl bg-[#0a0c14] border border-amber-400/15 p-7 hover:border-amber-400/30 transition-all group text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-shadow">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-1">Fari on Your Devices</h4>
              <p className="text-amber-400/50 text-xs font-mono mb-2">
                PERSONAL COMPANION
              </p>
              <div className="flex justify-center mb-3">
                <StatusBadge status="Live" />
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Your personal AI companion — voice + chat, permanent memory,
                5 modes, Arabic + English. Live in beta today
              </p>
            </div>

            {/* Fari inside Atiana */}
            <div className="rounded-xl bg-[#0a0c14] border border-emerald-400/15 p-7 hover:border-emerald-400/30 transition-all group text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_40px_rgba(52,211,153,0.25)] transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-1">Fari inside Atiana</h4>
              <p className="text-emerald-400/50 text-xs font-mono mb-2">
                HUMANOID ROBOT
              </p>
              <div className="flex justify-center mb-3">
                <StatusBadge status="Planned" />
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Will be the brain of SJA&apos;s humanoid robot — built to think,
                speak, decide and act autonomously
              </p>
            </div>

            {/* Fari inside Sueen */}
            <div className="rounded-xl bg-[#0a0c14] border border-sky-400/15 p-7 hover:border-sky-400/30 transition-all group text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(56,189,248,0.15)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-1">Fari inside Sueen</h4>
              <p className="text-sky-400/50 text-xs font-mono mb-2">
                HOUSEHOLD DRONE
              </p>
              <div className="flex justify-center mb-3">
                <StatusBadge status="Planned" />
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Will power the household drone — navigation, face recognition,
                voice commands, object handling
              </p>
            </div>

            {/* SAM — powered by Fari */}
            <div className="rounded-xl bg-[#0a0c14] border border-violet-400/15 p-7 hover:border-violet-400/30 transition-all group text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-sky-500 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-1">SAM — Smart Automated Manager</h4>
              <p className="text-violet-400/50 text-xs font-mono mb-2">
                SMART HOME AI
              </p>
              <div className="flex justify-center mb-3">
                <StatusBadge status="Planned" />
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed">
                Your Gen Z smart home AI — to be powered by Fari
              </p>
            </div>
          </div>

          {/* Tagline + CTA */}
          <div className="text-center">
            <p className="text-lg sm:text-xl font-semibold text-foreground/80 mb-6">
              Fari —{" "}
              <span className="text-amber-400">One Intelligence</span>. Every
              Device. Your World.
            </p>
            <WaitlistButton product="Fari" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(251,191,36,0.25)]">
              Join Waitlist
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </WaitlistButton>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CLOSING
            ═══════════════════════════════════════════ */}
        <div className="rounded-2xl bg-[#0a0c14] border border-amber-400/15 p-8 sm:p-10 text-center">
          <p className="text-lg sm:text-xl font-semibold text-foreground/90 mb-3 leading-relaxed">
            Fari is not just an AI — she is your{" "}
            <span className="text-amber-400">companion for life</span>.
            <br />
            <span className="text-foreground/60">
              Powered by SJA. Built for you.
            </span>
          </p>
          <p className="text-foreground/40 text-sm">
            The Fari demo is live in beta; the full product is in development.
            Fari will power Atiana — SJA&apos;s humanoid robot — when it
            launches.
          </p>
        </div>
      </div>
    </section>
  );
}
