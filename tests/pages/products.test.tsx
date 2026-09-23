import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { usePathname } from "next/navigation";

import Atiana, { metadata as atianaMeta } from "@/app/products/atiana/page";
import Sueen, { metadata as sueenMeta } from "@/app/products/sueen/page";
import SmartBell, { metadata as bellMeta } from "@/app/products/smart-bell/page";
import SmartKitchen, {
  metadata as kitchenMeta,
} from "@/app/products/smart-kitchen/page";
import HomeSecurity, {
  metadata as securityMeta,
} from "@/app/products/home-security/page";
import HealthMonitoring, {
  metadata as healthMeta,
} from "@/app/products/health-monitoring/page";
import WeighingScale, {
  metadata as scaleMeta,
} from "@/app/products/weighing-scale/page";

type Case = {
  slug: string;
  Page: ComponentType;
  meta: Metadata;
  title: string;
  name: string;
  subtitle?: string;
  fullForm: string;
  features: string[];
  paragraphs: number;
  closingNote?: RegExp;
};

const cases: Case[] = [
  {
    slug: "atiana",
    Page: Atiana,
    meta: atianaMeta,
    title: "Atiana Robot | SJA Robotics",
    name: "Atiana Robot",
    subtitle: "A Next-Generation Multitasker",
    fullForm:
      "Automated Technology for Intelligent Assistance, Navigation, and Action",
    features: [
      "Household Assistance",
      "Medical Expertise",
      "Combat and Security",
      "Flight and Mobility",
      "Fire Resistance",
      "Self-Charging (Without Electricity)",
    ],
    paragraphs: 3,
    closingNote: /it's a revolution/,
  },
  {
    slug: "sueen",
    Page: Sueen,
    meta: sueenMeta,
    title: "Sueen | SJA Robotics",
    name: "Sueen",
    subtitle: "Next Generation Helper",
    fullForm: "Smart Utility Efficient Errand Navigator",
    features: [
      "Intelligent Navigation",
      "Object Recognition and Handling",
      "Face and Voice Recognition",
      "Voice Integration",
      "Safety and Stability",
      "Energy Efficiency",
    ],
    paragraphs: 2,
    closingNote: /Sueen redefines home assistance/,
  },
  {
    slug: "smart-bell",
    Page: SmartBell,
    meta: bellMeta,
    title: "AI-Driven Smart Bell | SJA Robotics",
    name: "AI-Driven Doorbell",
    subtitle: "Smart Bell",
    fullForm: "Intelligent Doorbell System",
    features: [
      "Voice Interaction",
      "Mobile Connectivity",
      "Facial Recognition",
      "Voice Verification",
      "Home Security Integration",
    ],
    paragraphs: 2,
  },
  {
    slug: "smart-kitchen",
    Page: SmartKitchen,
    meta: kitchenMeta,
    title: "Smart Kitchen Appliances | SJA Robotics",
    name: "Smart Kitchen Appliances",
    fullForm: "AI-Powered Kitchen Suite",
    features: [
      "Smart Fridge",
      "Voice-Controlled Oven",
      "Ingredient Tracking",
      "Hands-Free Operation",
    ],
    paragraphs: 2,
  },
  {
    slug: "home-security",
    Page: HomeSecurity,
    meta: securityMeta,
    title: "Home Security & Monitoring | SJA Robotics",
    name: "Home Security & Monitoring",
    fullForm: "AI-Powered Protection",
    features: [
      "Voice-Controlled Security",
      "Real-Time Alerts",
      "Pattern Recognition",
      "Entry & Exit Tracking",
    ],
    paragraphs: 2,
  },
  {
    slug: "health-monitoring",
    Page: HealthMonitoring,
    meta: healthMeta,
    title: "Personal Health Monitoring | SJA Robotics",
    name: "Personal Health Monitoring",
    fullForm: "AI Health Device Ecosystem",
    features: [
      "AI Blood Pressure Monitors",
      "Sleep Trackers",
      "Personal Health Assistants",
      "Medical Record Sync",
    ],
    paragraphs: 2,
  },
  {
    slug: "weighing-scale",
    Page: WeighingScale,
    meta: scaleMeta,
    title: "Voice-Automated Weighing Scale | SJA Robotics",
    name: "Voice-Automated Weighing Scale",
    fullForm: "Smart Health Monitoring",
    features: [
      "Voice-Based User Identification",
      "Weight Trends Over Time",
      "Smart Reminders",
      "Health App Connectivity",
    ],
    paragraphs: 2,
  },
];

describe.each(cases)("/products/$slug", (c) => {
  it("exports a title and description", () => {
    expect(c.meta.title).toBe(c.title);
    expect(typeof c.meta.description).toBe("string");
    expect((c.meta.description as string).length).toBeGreaterThan(20);
  });

  it("renders the product name as the only h1, with its full form", () => {
    vi.mocked(usePathname).mockReturnValue(`/products/${c.slug}`);
    render(<c.Page />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(c.name);
    expect(screen.getByText(c.fullForm)).toBeInTheDocument();
    if (c.subtitle) {
      expect(h1s[0].nextElementSibling).toHaveTextContent(c.subtitle);
    } else {
      expect(h1s[0].nextElementSibling).toBeNull();
    }
  });

  it("renders the overview paragraphs and all key features", () => {
    render(<c.Page />);
    const overview = screen.getByRole("heading", { name: "Overview" });
    expect(overview.nextElementSibling!.querySelectorAll("p")).toHaveLength(
      c.paragraphs
    );
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)
    ).toEqual(c.features);
  });

  it(c.closingNote ? "renders its closing note" : "has no closing note", () => {
    const { container } = render(<c.Page />);
    const italic = container.querySelector("p.italic");
    if (c.closingNote) {
      expect(italic).toHaveTextContent(c.closingNote);
    } else {
      expect(italic).toBeNull();
    }
  });

  it("shows the Robotics logo linking home and the site footer", () => {
    vi.mocked(usePathname).mockReturnValue(`/products/${c.slug}`);
    const { container } = render(<c.Page />);
    expect(screen.getAllByAltText("SJA Robotics")[0].closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.queryByLabelText("SJA Inc.")).toBeNull();
    expect(container.querySelector("footer#contact")).toBeTruthy();
  });
});
