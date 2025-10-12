import { motion } from "framer-motion";
import { ShieldCheck, HardHat, ThumbsUp } from "lucide-react";

/* =========================================================================
   Garanties — C&T Arbro
   Version optimisée : cohérence visuelle, accessibilité, SEO local & stabilité CLS
============================================================================ */

const GUARANTEES = [
  {
    title: "Assurance responsabilité",
    text: "Chaque intervention est couverte par une assurance responsabilité professionnelle complète, garantissant votre sécurité et celle de nos équipes sur le terrain.",
    icon: <ShieldCheck className="h-11 w-11 text-emerald-600 drop-shadow-sm" aria-hidden="true" />,
  },
  {
    title: "Sécurité et professionnalisme",
    text: "Nos arboriculteurs appliquent des protocoles rigoureux et utilisent un équipement certifié pour assurer un travail exemplaire, précis et sécuritaire à Magog et partout en Estrie.",
    icon: <HardHat className="h-11 w-11 text-emerald-600 drop-shadow-sm" aria-hidden="true" />,
  },
  {
    title: "Satisfaction garantie",
    text: "Nous tenons nos engagements : ponctualité, propreté du site et résultats impeccables. Votre tranquillité d’esprit est notre priorité absolue.",
    icon: <ThumbsUp className="h-11 w-11 text-emerald-600 drop-shadow-sm" aria-hidden="true" />,
  },
];

// Animation parent (stagger)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
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

export default function Guarantees() {
  return (
    <section
      id="garanties"
      className="relative overflow-hidden bg-[#f8faf9] py-24 md:py-28"
    >
      {/* HEADER */}
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
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Notre engagement envers la qualité et la confiance
        </h3>
        <p className="max-w-2xl mx-auto text-[15px] text-slate-600 mb-12 leading-relaxed">
          Chez <span className="font-semibold text-emerald-700">C&T Arbro</span>,
          la sécurité, la rigueur et le professionnalisme sont au cœur de
          chacune de nos interventions. Ces garanties reflètent notre engagement
          envers un service durable, sécuritaire et respectueux de votre
          environnement.
        </p>
      </motion.div>

      {/* CARTES GARANTIES */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-8"
      >
        {GUARANTEES.map((g, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl p-8 text-center transition-all duration-300 hover:border-emerald-500/40"
          >
            <div className="flex justify-center mb-5">{g.icon}</div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              {g.title}
            </h4>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              {g.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* LIGNE DOUCE DE TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#f8faf9]/50 to-[#eef5f3] pointer-events-none" />

      {/* Décors légers */}
      <div className="absolute -top-24 right-0 w-[320px] h-[320px] bg-emerald-100/40 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 left-0 w-[280px] h-[280px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}
