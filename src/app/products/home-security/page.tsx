import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Home Security & Monitoring | SJA Robotics",
  description:
    "AI-powered security systems with voice commands, real-time alerts, pattern recognition, and comprehensive monitoring.",
};

export default function HomeSecurityPage() {
  return (
    <ProductPage
      name="Home Security & Monitoring"
      fullForm="AI-Powered Protection"
      tagline="AI-powered security systems designed to make homes safer and smarter."
      gradient="from-accent-3 to-accent"
      icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      description={[
        "AI-powered security systems designed to make homes safer and smarter. With voice commands and real-time alerts, these systems provide comprehensive monitoring, track entry and exit points, and recognize patterns to alert users of any unusual activity.",
        "Our Home Security & Monitoring systems leverage the latest in AI technology to provide proactive protection, going beyond simple alarms to offer intelligent, context-aware security for your entire home.",
      ]}
      features={[
        {
          title: "Voice-Controlled Security",
          detail:
            "Manage your entire security system through voice commands — arm, disarm, and check status hands-free.",
        },
        {
          title: "Real-Time Alerts",
          detail:
            "Instant notifications pushed to your mobile device for any detected activity or anomalies.",
        },
        {
          title: "Pattern Recognition",
          detail:
            "AI recognizes behavioral patterns and learns your household routines, alerting you of any unusual activity.",
        },
        {
          title: "Entry & Exit Tracking",
          detail:
            "Comprehensive monitoring of all entry and exit points in the home with detailed logs.",
        },
      ]}
    />
  );
}
