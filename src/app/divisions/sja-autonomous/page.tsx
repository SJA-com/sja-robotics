import Navbar from "@/components/Navbar";
import DivisionAutonomous from "@/components/DivisionAutonomous";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SJA Autonomous — Physical Robots & Drones | SJA Robotics",
  description:
    "The Atiana robot, Sueen drone, and future autonomous machines from SJA Autonomous.",
};

export default function SJAAutonomousPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <DivisionAutonomous />
      </main>
      <Footer />
    </>
  );
}
