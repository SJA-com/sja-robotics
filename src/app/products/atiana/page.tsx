import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Atiana Robot | SJA Robotics",
  description:
    "Automated Technology for Intelligent Assistance, Navigation, and Action. A next-generation multitasker for households, medical facilities, and military applications.",
};

export default function AtianaPage() {
  return (
    <ProductPage
      name="Atiana Robot"
      subtitle="A Next-Generation Multitasker"
      fullForm="Automated Technology for Intelligent Assistance, Navigation, and Action"
      tagline="A revolutionary robot designed to perform a wide variety of tasks, making it suitable for households, medical facilities, and even military applications."
      gradient="from-accent to-accent-2"
      icon="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      description={[
        "Atiana is a revolutionary robot designed to perform a wide variety of tasks, making it suitable for households, medical facilities, and even military applications. It embodies the future of intelligent robotics, with capabilities that exceed current limitations in the field.",
        "The crown jewel of SJA Robotics, Atiana represents the future of autonomous technology, integrating into homes, hospitals, and high-security areas. With the potential to revolutionize multiple industries, Atiana is a symbol of what the company stands for: innovation, intelligence, and empowerment.",
        "SJA Robotics plans to expand the Atiana line into various sectors, customizing robots for specific purposes: Atiana-H for Healthcare (specialized in diagnostics, patient care, and medical assistance), Atiana-S for Security (focused on combat and protection with enhanced security features), and Atiana-R for Rescue (equipped for extreme conditions with fire-resistance and flight capabilities, ideal for emergency rescue missions).",
      ]}
      features={[
        {
          title: "Household Assistance",
          detail:
            "Manages daily chores, integrates with smart home systems, and offers personalized assistance based on user habits.",
        },
        {
          title: "Medical Expertise",
          detail:
            "Operates like a doctor, with AI for diagnostics, surgery, and emergency care, connecting in real-time with healthcare professionals.",
        },
        {
          title: "Combat and Security",
          detail:
            "Functions as a soldier or bodyguard, with military-grade defense, combat skills, and tactical awareness.",
        },
        {
          title: "Flight and Mobility",
          detail:
            "Uses advanced propulsion systems for flight, with the ability to navigate challenging terrains.",
        },
        {
          title: "Fire Resistance",
          detail:
            "Built with heat-resistant materials for operation in hazardous environments.",
        },
        {
          title: "Self-Charging (Without Electricity)",
          detail:
            "Employs renewable energy, such as solar cells, kinetic energy, or thermoelectric generators, ensuring constant operation without reliance on traditional power sources.",
        },
      ]}
      closingNote="Atiana embodies the future of intelligent robotics. With capabilities spanning from household chores to life-saving medical procedures and military-grade defense, Atiana is not just a robot — it's a revolution."
    />
  );
}
