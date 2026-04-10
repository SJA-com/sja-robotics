/* ─── Voice Agent Data ─── */

const voiceUseCases = [
  {
    industry: "Restaurant",
    description: "AI takes reservations by phone",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    industry: "Clinic",
    description: "AI books appointments",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    industry: "Real Estate",
    description: "AI answers property enquiries 24/7",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    industry: "E-commerce",
    description: "AI handles customer support calls",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

const voiceFeatures = [
  "Custom voice",
  "Custom personality",
  "Multiple languages",
  "24/7 availability",
  "Call analytics dashboard",
];

const voicePricing = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started with AI voice",
    highlight: false,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "For growing businesses that need advanced voice capabilities",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale deployments",
    highlight: false,
  },
];

/* ─── Companion Data ─── */

const companionFeatures = [
  {
    title: "Permanent memory",
    description:
      "Remembers your preferences, history, goals, context — always",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    title: "Voice + Chat",
    description: "Talk or type, your choice",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "Any device",
    description: "Phone, tablet, laptop — seamless across all",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Truly personal",
    description: "Feels like YOUR AI — not a shared product",
    icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "Gets smarter",
    description: "Learns you more deeply over time",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    title: "Private",
    description: "Your data belongs to you — only",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

const companionPricing = [
  {
    name: "Personal",
    price: "$9.99",
    period: "/month",
    description: "Your own AI companion that grows with you every day",
    highlight: false,
  },
  {
    name: "Family",
    price: "$19.99",
    period: "/month",
    description:
      "A personal companion for every family member — each one unique",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$299",
    period: " one-time",
    description: "Pay once, keep your companion forever — the best value",
    highlight: false,
  },
];

/* ─── AI Capabilities ─── */

// AI Capabilities — commented out (uncomment when needed)
// const aiCapabilities = [
//   {
//     name: "AI Research & Development",
//     description:
//       "Fundamental research pushing the boundaries of what artificial intelligence can achieve — from novel architectures to breakthrough training methods.",
//     icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
//   },
//   {
//     name: "Machine Learning Models",
//     description:
//       "Custom-trained models optimized for SJA products — from edge-device inference to large-scale cloud deployments.",
//     icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
//   },
//   {
//     name: "Natural Language Processing",
//     description:
//       "Advanced language understanding that powers voice agents, companion AI, and conversational interfaces across all SJA products.",
//     icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
//   },
//   {
//     name: "Computer Vision & Perception",
//     description:
//       "Real-time visual understanding for robotics, security systems, and health monitoring — from object detection to scene comprehension.",
//     icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
//   },
//   {
//     name: "AI Factory Auditor",
//     description:
//       "Intelligent quality control and compliance monitoring for manufacturing environments — automated inspections, defect detection, and real-time reporting.",
//     icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
//   },
// ];

/* ─── Imports ─── */

import Faiya from "./Faiya";

/* ─── Component ─── */

export default function DivisionAI() {
  return (
    <section id="sja-ai" className="py-24 relative bg-hextech overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-2/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-3/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-2/6 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-accent-3/10 to-transparent" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-accent-2/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Division Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-2/10 text-accent-2 text-xs font-mono mb-4 tracking-wider">
            DIVISION 02
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            SJA <span className="text-accent-2">AI</span>
          </h2>
          <p className="text-accent-2/70 text-sm font-mono mb-4">
            Artificial Intelligence
          </p>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Pioneering artificial intelligence research, building machine
            learning models, and developing intelligent software solutions that
            power every product across SJA Robotics.
          </p>
        </div>

        {/* ─── PRODUCT DIRECTORY ─── */}
        <div className="rounded-2xl bg-surface border border-border p-8 sm:p-10 mb-24">
          <h3 className="text-xl font-bold mb-6 text-center">
            Products Under{" "}
            <span className="text-accent-2">SJA AI</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "SJA Voice Agent",
                tagline: "AI phone agents for businesses",
                badge: "Coming Soon",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              },
              {
                name: "SJA Companion",
                tagline: "Personal AI that remembers you forever",
                badge: "Coming Soon",
                icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                name: "Faiya",
                tagline: "Bilingual Arabic-English AI companion",
                badge: "Coming Soon",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              // Commented out — uncomment when needed
              // {
              //   name: "AI Factory Auditor",
              //   tagline: "Automated quality control for manufacturing",
              //   badge: "Coming Soon",
              //   icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              // },
              // {
              //   name: "AI Research & Development",
              //   tagline: "Fundamental AI research and breakthroughs",
              //   badge: "Coming Soon",
              //   icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              // },
              // {
              //   name: "Machine Learning Models",
              //   tagline: "Custom models for edge and cloud",
              //   badge: "Coming Soon",
              //   icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
              // },
              // {
              //   name: "NLP & Computer Vision",
              //   tagline: "Language understanding and visual perception",
              //   badge: "Coming Soon",
              //   icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              // },
            ].map((product) => (
              <div
                key={product.name}
                className="flex items-center gap-4 rounded-lg bg-surface-2 border border-border px-5 py-4 hover:border-accent-2/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-2/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={product.icon}
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-bold truncate">
                      {product.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-accent-2/10 text-accent-2 text-[9px] font-mono tracking-wider shrink-0">
                      {product.badge.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 truncate">
                    {product.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── PRODUCT 1: SJA VOICE AGENT ─── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <p className="text-accent-2 text-xs font-mono mb-2 tracking-wider uppercase">
              Product 01
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              SJA <span className="text-accent-2">Voice Agent</span>
            </h3>
            <p className="text-accent-2/60 text-sm font-mono mb-4">
              Give Your Business a Voice
            </p>
            <span className="inline-flex px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-[10px] font-mono tracking-wider mb-4">
              COMING SOON
            </span>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Any business can deploy their own AI voice agent in minutes — no
              coding needed
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {voiceUseCases.map((useCase) => (
              <div
                key={useCase.industry}
                className="rounded-xl bg-surface border border-border p-6 hover:border-accent-2/30 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${useCase.bg} flex items-center justify-center mb-4`}
                >
                  <svg
                    className={`w-6 h-6 ${useCase.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={useCase.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-1">{useCase.industry}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12 mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-3">
                Key <span className="text-accent-2">Features</span>
              </h4>
              <p className="text-foreground/60 text-sm max-w-xl mx-auto">
                Everything your business needs to deliver an exceptional voice
                experience
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {voiceFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-lg bg-surface-2 border border-border px-5 py-3 hover:border-accent-2/30 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-accent-2 shrink-0"
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
                  <span className="text-sm font-medium text-foreground/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-2">
              Simple <span className="text-accent-2">Pricing</span>
            </h4>
            <p className="text-foreground/60 text-sm">
              Choose the plan that fits your business
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {voicePricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-7 text-center transition-all ${
                  plan.highlight
                    ? "gradient-border bg-surface"
                    : "bg-surface border border-border hover:border-accent-2/30"
                }`}
              >
                <p className="text-accent-2 text-sm font-mono mb-2 tracking-wider uppercase">
                  {plan.name}
                </p>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-foreground/50 text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-foreground/50 text-sm">{plan.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold hover:opacity-90 transition-opacity glow-accent mb-3">
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
            </button>
            <p className="text-foreground/40 text-sm">
              Launching soon — be among the first businesses to deploy
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-accent-2/50" />
          <div className="w-2 h-2 rounded-full bg-accent-3/50" />
          <div className="w-2 h-2 rounded-full bg-accent-2/50" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>

        {/* ─── PRODUCT 2: SJA COMPANION ─── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <p className="text-accent-2 text-xs font-mono mb-2 tracking-wider uppercase">
              Product 02
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              SJA <span className="text-accent-2">Companion</span>
            </h3>
            <p className="text-accent-2/60 text-sm font-mono mb-4">
              Your Personal AI — For Life
            </p>
            <span className="inline-flex px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-[10px] font-mono tracking-wider mb-4">
              COMING SOON
            </span>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              A voice and chat AI companion that remembers everything about you —
              forever. No re-explaining. No starting over.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {companionFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-surface border border-border p-6 hover:border-accent-2/30 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}
                >
                  <svg
                    className={`w-6 h-6 ${feature.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="gradient-border rounded-2xl bg-surface p-8 sm:p-10 mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-2/10 text-accent-2 text-xs font-mono mb-4 tracking-wider">
              WHAT MAKES US DIFFERENT
            </div>
            <p className="text-xl sm:text-2xl font-semibold mb-3">
              Unlike ChatGPT or Claude —{" "}
              <span className="text-accent-2">SJA Companion</span> is
              exclusively yours
            </p>
            <p className="text-foreground/50 text-sm max-w-xl mx-auto">
              Other AI assistants reset every conversation. SJA Companion builds
              a lasting understanding of who you are, what you need, and how you
              think — so every interaction feels like talking to someone who truly
              knows you.
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-2">
              Plans That Grow{" "}
              <span className="text-accent-2">With You</span>
            </h4>
            <p className="text-foreground/60 text-sm">
              Start personal. Expand to family. Or commit for life.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {companionPricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-7 text-center transition-all ${
                  plan.highlight
                    ? "gradient-border bg-surface"
                    : "bg-surface border border-border hover:border-accent-2/30"
                }`}
              >
                <p className="text-accent-2 text-sm font-mono mb-2 tracking-wider uppercase">
                  {plan.name}
                </p>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-foreground/50 text-sm">
                    {plan.period}
                  </span>
                </div>
                <p className="text-foreground/50 text-sm">{plan.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold hover:opacity-90 transition-opacity glow-accent">
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
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-accent-2/50 text-accent-2 font-semibold hover:bg-accent-2/10 transition-colors">
                Request Early Access
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-foreground/40 text-sm">
              Currently in development with our AI team
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="w-2 h-2 rounded-full bg-accent-2/50" />
          <div className="w-2 h-2 rounded-full bg-accent-3/50" />
          <div className="w-2 h-2 rounded-full bg-accent-2/50" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* ─── PRODUCT 3: FAIYA — Full-width breakout section ─── */}
      <Faiya />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── AI CAPABILITIES — commented out (uncomment when needed) ─── */}
        {/*
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Core AI <span className="text-accent-2">Capabilities</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiCapabilities.map((cap) => (
              <div
                key={cap.name}
                className="rounded-xl bg-surface border border-border p-6 hover:border-accent-2/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-2 to-accent-3 flex items-center justify-center opacity-80">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <span className="px-2 py-0.5 rounded-full bg-accent-2/10 text-accent-2 text-[10px] font-mono tracking-wider">
                    COMING SOON
                  </span>
                </div>
                <h4 className="text-base font-bold mb-2">{cap.name}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-2 to-accent-3 text-white font-semibold hover:opacity-90 transition-opacity glow-accent mb-3">
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
            </button>
            <p className="text-foreground/40 text-sm">
              Be part of the SJA AI ecosystem
            </p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
