import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Voice-Automated Weighing Scale | SJA Robotics",
  description:
    "A smart weighing scale that identifies users by voice, records data, and provides historical trends with personalized health feedback.",
};

export default function WeighingScalePage() {
  return (
    <ProductPage
      name="Voice-Automated Weighing Scale"
      fullForm="Smart Health Monitoring"
      tagline="A smart weighing scale that does more than just measure weight."
      gradient="from-accent-3 to-accent"
      icon="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      description={[
        "A smart weighing scale that does more than just measure weight. When a user stands on the scale, it asks for their identity, records the data, and provides historical trends and personalized health feedback.",
        "This product integrates voice recognition and AI to give detailed insights such as last recorded weight, weight trends over time, reminders for regular weigh-ins, and connectivity with health apps to track fitness goals and offer health advice.",
      ]}
      features={[
        {
          title: "Voice-Based User Identification",
          detail:
            "When a user stands on the scale, it asks for their identity and records personalized data for each household member.",
        },
        {
          title: "Weight Trends Over Time",
          detail:
            "Provides last recorded weight, historical weight trends, and detailed analysis of progress over weeks and months.",
        },
        {
          title: "Smart Reminders",
          detail:
            "Sends reminders for regular weigh-ins to help users maintain consistency in their health tracking.",
        },
        {
          title: "Health App Connectivity",
          detail:
            "Connects with popular health apps to track fitness goals and offer personalized health advice based on collected data.",
        },
      ]}
    />
  );
}
