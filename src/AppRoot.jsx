import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Territory from "./Territory";
import Gallery from "./Gallery";
import Avis from "./Avis";
import Guarantees from "./Garanties";
import About from "./About";
import Estimation from "./Estimation";
import Footer from "./Footer";
import { motion } from "framer-motion";

/* =========================================================================
   Variants d’animation entre les sections
============================================================================ */
const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================================
   App Root — avec transitions fluides
============================================================================ */
export default function AppRoot() {
  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-[#f6f8f9] text-slate-800 selection:bg-emerald-200/60 overflow-x-hidden"
    >
      {/* HEADER */}
      <Header />

      {/* CONTENU PRINCIPAL */}
      <main>
        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <WhyUs />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Territory />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Gallery />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Avis />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Guarantees />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.section>

        <motion.section
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Estimation />
        </motion.section>
      </main>

      {/* Ancre pour Contact */}
      <section id="contact" aria-hidden="true" className="sr-only" />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
