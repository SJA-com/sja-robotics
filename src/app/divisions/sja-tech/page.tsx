// ============================================================
// SJA TECH PAGE — COMMENTED OUT (uncomment when needed)
// ============================================================

// import Navbar from "@/components/Navbar";
// import DivisionTech from "@/components/DivisionTech";
// import Footer from "@/components/Footer";
//
// export const metadata = {
//   title: "SJA Tech — Consumer Electronics | SJA Robotics",
//   description:
//     "Next-generation consumer electronics — laptops, smartphones, smart home devices, and health monitoring solutions from SJA Tech.",
// };
//
// export default function SJATechPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-16">
//         <DivisionTech />
//       </main>
//       <Footer />
//     </>
//   );
// }

import { redirect } from "next/navigation";

export default function SJATechPage() {
  redirect("/");
}
