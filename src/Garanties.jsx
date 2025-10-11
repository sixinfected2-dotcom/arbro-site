// src/Garanties.jsx
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, ThumbsUp } from "lucide-react";

/* =========================================================================
   Garanties — Version sans CNESST
============================================================================ */
const GUARANTEES = [
  {
    title: "Assurance responsabilité",
    text: "Nous sommes entièrement couverts par une assurance responsabilité professionnelle pour protéger nos clients et nos employés en tout temps.",
    icon: <ShieldCheck className="h-11 w-11 text-emerald-600 drop-shadow-sm" />,
  },
  {
    title: "Sécurité et professionnalisme",
    text: "Nos équipes travaillent selon des protocoles de sécurité rigoureux et des pratiques professionnelles reconnues pour garantir des interventions sécuritaires.",
    icon: <HardHat className="h-11 w-11 text-emerald-600 drop-shadow-sm" />,
  },
  {
    title: "Satisfaction garantie",
    text: "Chaque chantier est réalisé avec soin, dans les délais convenus, et toujours remis propre. Notre priorité : votre tranquillité d’esprit.",
    icon: <ThumbsUp className="h-11 w-11 text-emerald-600 drop-shadow-sm" />,
  },
];

// Animation parent (stagger)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animation enfant
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Guarantees() {
  return (
    <section id="garanties" className="bg-[#f8faf9] py-20 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl px-4 md:px-8 text-center"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-2">
          Garanties & sécurité
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Notre engagement envers votre sécurité
        </h3>
        <p className="max-w-2xl mx-auto text-[15px] text-slate-600 mb-12 leading-relaxed">
          Chez C&T Arbro, la sécurité, la rigueur et la qualité sont au cœur de chaque
          intervention. Nous nous engageons à offrir un service irréprochable, 
          réalisé par des professionnels qualifiés et soucieux de votre satisfaction.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-8"
      >
        {GUARANTEES.map((g, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.25 } }}
            className="group rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl p-8 text-center transition-all duration-300"
          >
            <div className="flex justify-center mb-5">{g.icon}</div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{g.title}</h4>
            <p className="text-[15px] text-slate-600 leading-relaxed">{g.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Guarantees;
