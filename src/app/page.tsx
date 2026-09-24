import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Divisions from "@/components/Divisions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <SocialProof />
        <About />
        <Founder />
        <Divisions />
      </main>
      <Footer />
    </>
  );
}
