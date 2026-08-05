import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import CareerGoals from "./components/CareerGoals";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Marquee from "./components/Marquee";
import MouseGlow from "./components/MouseGlow";
import Navbar from "./components/Navbar";
import NeuralCanvas from "./components/NeuralCanvas";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    document.body.style.overflow = booting ? "hidden" : "";
    const t = setTimeout(() => setBooting(false), 2900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [booting]);

  return (
    <div className="relative min-h-screen bg-[#04060f] text-slate-200">
      {/* atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-[1] grid-overlay" aria-hidden="true" />
      <NeuralCanvas />
      <MouseGlow />
      <div className="pointer-events-none fixed inset-0 z-[60] noise-overlay" aria-hidden="true" />

      {/* boot sequence */}
      <AnimatePresence>{booting && <Loader key="loader" />}</AnimatePresence>

      {/* content mounts as the boot sequence dissolves — hero reveal plays right after */}
      {!booting && (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <CareerGoals />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
