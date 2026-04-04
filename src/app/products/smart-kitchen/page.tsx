import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Smart Kitchen Appliances | SJA Robotics",
  description:
    "AI-powered kitchen appliances including Smart Fridge and Voice-Controlled Oven for an effortless cooking experience.",
};

export default function SmartKitchenPage() {
  return (
    <ProductPage
      name="Smart Kitchen Appliances"
      fullForm="AI-Powered Kitchen Suite"
      tagline="Your smart home wouldn't be complete without appliances that understand your needs."
      gradient="from-accent-2 to-accent-3"
      icon="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      description={[
        "Your smart home wouldn't be complete without appliances that understand your needs. SJA Robotics aims to bring AI to the kitchen with devices that make cooking effortless and intuitive.",
        "From tracking what's in your fridge to hands-free oven control, our Smart Kitchen Appliances bring the power of AI to the heart of your home.",
      ]}
      features={[
        {
          title: "Smart Fridge",
          detail:
            "Tracks food expiration dates, suggests recipes based on available ingredients, and can be controlled through voice commands.",
        },
        {
          title: "Voice-Controlled Oven",
          detail:
            "Allows users to preheat, adjust temperatures, and start cooking just by speaking.",
        },
        {
          title: "Ingredient Tracking",
          detail:
            "Automatically monitors pantry and fridge inventory to reduce food waste and simplify meal planning.",
        },
        {
          title: "Hands-Free Operation",
          detail:
            "All kitchen appliances respond to voice commands, keeping your hands free for cooking and preparation.",
        },
      ]}
    />
  );
}
