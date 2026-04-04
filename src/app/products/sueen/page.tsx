import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Sueen | SJA Robotics",
  description:
    "Smart Utility Efficient Errand Navigator. A state-of-the-art drone designed to assist with everyday household tasks.",
};

export default function SueenPage() {
  return (
    <ProductPage
      name="Sueen"
      subtitle="Next Generation Helper"
      fullForm="Smart Utility Efficient Errand Navigator"
      tagline="A state-of-the-art drone designed to assist with everyday household tasks, seamlessly integrating into modern smart homes."
      gradient="from-accent-2 to-accent-3"
      icon="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      description={[
        "Sueen is a state-of-the-art drone designed by SJA Robotics to assist with everyday household tasks, seamlessly integrating into modern smart homes. Equipped with advanced AI, Sueen performs a variety of simple yet essential tasks, such as delivering items around the house.",
        "Whether it's handing over a glass of water, delivering milk, or transporting small objects from one room to another, Sueen adds a new level of convenience to household management.",
      ]}
      features={[
        {
          title: "Intelligent Navigation",
          detail:
            "Sueen uses sophisticated pathfinding algorithms to navigate through the house efficiently, avoiding obstacles while moving safely within the indoor environment.",
        },
        {
          title: "Object Recognition and Handling",
          detail:
            "With cutting-edge AI, Sueen can identify various objects and securely pick them up without causing damage, ensuring safe delivery of items.",
        },
        {
          title: "Face and Voice Recognition",
          detail:
            "Sueen is equipped with facial recognition technology, allowing it to identify household members and deliver items directly to the intended person. It also recognizes voices, enabling users to give commands and receive personalized responses.",
        },
        {
          title: "Voice Integration",
          detail:
            "Users can control Sueen through simple voice commands, making it intuitive to request assistance for everyday errands.",
        },
        {
          title: "Safety and Stability",
          detail:
            "Sueen prioritizes safety with quiet operation and built-in safety measures to avoid accidents during use.",
        },
        {
          title: "Energy Efficiency",
          detail:
            "Optimized for extended use, Sueen operates with minimal energy consumption, ensuring longer battery life and less frequent charging.",
        },
      ]}
      closingNote="Sueen redefines home assistance by integrating AI, voice, and facial recognition to take care of the small but important tasks, freeing up time for families to focus on what matters most."
    />
  );
}
