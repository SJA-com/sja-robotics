// Single source of truth for the product lineup, grouped by division.
// Used by the home-page Divisions overview, the /products/ page and the footer,
// so names, taglines and links can't drift apart.

import type { Status } from "@/components/StatusBadge";

const SITE = "https://robotics.sjapathway.com";

export type Product = {
  slug: string;
  name: string;
  /** What the name stands for (or a short descriptor when it isn't an acronym). */
  fullForm: string;
  tagline: string;
  description: string;
  status: Status;
  /** Extra timing note shown next to the status, e.g. "Coming 2027". */
  eta?: string;
  /** Live demo / app, when there is one. */
  demo?: string;
  /** Where to read more on this site: a product page or the product's section of its division page. */
  href: string;
  /** Heroicons outline path. */
  icon: string;
};

export type Division = {
  id: "sja-ai" | "sja-autonomous";
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  /** Tailwind classes for the division's accent colour. */
  tone: {
    text: string;
    border: string;
    bg: string;
    gradient: string;
  };
  products: Product[];
};

export const divisions: Division[] = [
  {
    id: "sja-ai",
    name: "SJA AI",
    tagline: "Artificial Intelligence",
    description:
      "Building AI products — voice agents, personal companions and smart-home intelligence — designed to power every product across SJA Robotics.",
    href: "/divisions/sja-ai",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    tone: {
      text: "text-accent-3",
      border: "border-accent-3/30",
      bg: "bg-accent-3/10",
      gradient: "from-accent-2 to-accent-3",
    },
    products: [
      {
        slug: "mous",
        name: "MOUS",
        fullForm: "Multilingual Omnipresent Unified System",
        tagline: "Give your business a voice",
        description:
          "An AI receptionist for WhatsApp and phone calls that answers in your customers' own Arabic dialect — set up in five minutes with no code.",
        status: "Live in demo",
        demo: `${SITE}/mous/?demo=1`,
        href: "/divisions/sja-ai/#mous",
        icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      },
      {
        slug: "fari",
        name: "Fari",
        fullForm: "Futuristic Artificial Reasoning Intelligence",
        tagline: "Our core AI engine",
        description:
          "Arabic-first reasoning, permanent memory and specialised modes — try it as a personal companion. Powers MOUS today and Atiana tomorrow.",
        status: "Live in demo",
        demo: `${SITE}/fari/`,
        href: "/divisions/sja-ai/#fari",
        icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      },
      {
        slug: "sam",
        name: "SAM",
        fullForm: "Smart Automated Manager",
        tagline: "Smart home & security — so you don't have to",
        description:
          "Home intelligence that manages devices, routines and security for you, built on the same Fari engine.",
        status: "In development",
        eta: "Coming 2027",
        demo: `${SITE}/sam/`,
        href: "/divisions/sja-ai/#sam",
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      },
    ],
  },
  {
    id: "sja-autonomous",
    name: "SJA Autonomous",
    tagline: "Physical Robots & Drones",
    description:
      "Engineering autonomous machines that operate in the real world — from household robots and rescue drones to military-grade defense systems built for any environment.",
    href: "/divisions/sja-autonomous",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    tone: {
      text: "text-emerald-300",
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/10",
      gradient: "from-emerald-400 to-teal-500",
    },
    products: [
      {
        slug: "atiana",
        name: "Atiana Robot",
        fullForm: "Automated Technology for Intelligent Assistance, Navigation, and Action",
        tagline: "Flagship AI assistant robot",
        description:
          "A next-generation multitasker for homes, hospitals and high-security settings, powered by Fari.",
        status: "In development",
        demo: `${SITE}/atiana/`,
        href: "/products/atiana/",
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      },
      {
        slug: "sueen",
        name: "Sueen Drone",
        fullForm: "Smart Utility Efficient Errand Navigator",
        tagline: "Household delivery drone",
        description:
          "A smart indoor drone that navigates your home, recognises people and delivers everyday items where they're needed.",
        status: "In development",
        eta: "Coming 2027",
        demo: `${SITE}/sueen/`,
        href: "/products/sueen/",
        icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
      },
    ],
  },
];

export const allProducts: Product[] = divisions.flatMap((d) => d.products);

export function productCount(d: Division) {
  return `${d.products.length} Product${d.products.length === 1 ? "" : "s"}`;
}
