import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "AI-Driven Smart Bell | SJA Robotics",
  description:
    "An intelligent doorbell that interacts with visitors through AI, records responses, and sends real-time notifications.",
};

export default function SmartBellPage() {
  return (
    <ProductPage
      name="AI-Driven Doorbell"
      subtitle="Smart Bell"
      fullForm="Intelligent Doorbell System"
      tagline="A doorbell that interacts with visitors through AI technology."
      gradient="from-accent to-accent-2"
      icon="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      description={[
        "A doorbell that interacts with visitors through AI technology. When pressed, it asks the visitor who they are, records the response, and sends a notification to the homeowner's mobile device.",
        "The AI-Driven Doorbell combines voice interaction, mobile connectivity, and advanced security features to create a seamless and intelligent entry experience for your home.",
      ]}
      features={[
        {
          title: "Voice Interaction",
          detail:
            "The AI system engages with visitors, collects their details, and alerts the homeowner in real-time.",
        },
        {
          title: "Mobile Connectivity",
          detail:
            "Instant notifications and two-way communication through the connected mobile app.",
        },
        {
          title: "Facial Recognition",
          detail:
            "Identifies known visitors and flags unknown individuals for enhanced home security.",
        },
        {
          title: "Voice Verification",
          detail:
            "Verifies visitor identity through voice patterns and integrates with home security systems.",
        },
        {
          title: "Home Security Integration",
          detail:
            "Seamlessly connects with existing home security systems for comprehensive protection.",
        },
      ]}
    />
  );
}
