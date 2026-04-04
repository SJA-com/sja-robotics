import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Personal Health Monitoring | SJA Robotics",
  description:
    "AI health devices including blood pressure monitors, sleep trackers, and personal health assistants that sync with medical records.",
};

export default function HealthMonitoringPage() {
  return (
    <ProductPage
      name="Personal Health Monitoring"
      fullForm="AI Health Device Ecosystem"
      tagline="A comprehensive suite of health-monitoring devices powered by AI."
      gradient="from-accent to-accent-3"
      icon="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      description={[
        "Beyond the smart weighing scale, SJA Robotics is developing a series of health-monitoring devices that provide comprehensive health insights.",
        "These AI-powered devices track vital statistics, detect anomalies, monitor sleep patterns, and sync with health records to assist healthcare professionals in providing better medical care.",
      ]}
      features={[
        {
          title: "AI Blood Pressure Monitors",
          detail:
            "Track readings over time and detect anomalies in real-time, alerting users and healthcare providers of potential concerns.",
        },
        {
          title: "Sleep Trackers",
          detail:
            "Monitor sleep patterns throughout the night and offer personalized advice for better rest and improved sleep quality.",
        },
        {
          title: "Personal Health Assistants",
          detail:
            "AI-powered devices that provide continuous feedback on vital statistics and trends, helping users stay on top of their health.",
        },
        {
          title: "Medical Record Sync",
          detail:
            "Seamlessly syncs with health records to assist healthcare professionals in medical care and provide a complete health picture.",
        },
      ]}
    />
  );
}
