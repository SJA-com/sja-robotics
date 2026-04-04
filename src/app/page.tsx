import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Products />
        <Vision />
      </main>
      <Footer />
    </>
  );
}
