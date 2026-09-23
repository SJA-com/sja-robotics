import Navbar from "@/components/Navbar";
import DivisionAI from "@/components/DivisionAI";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SJA AI — Artificial Intelligence | SJA Robotics",
  description:
    "AI voice agents, personal AI companions and smart-home intelligence from SJA AI — with live demos.",
};

export default function SJAAIPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DivisionAI />
      </main>
      <Footer />
    </>
  );
}
