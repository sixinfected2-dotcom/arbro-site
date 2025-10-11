// src/About.jsx
import { motion } from "framer-motion";
import { fadeUp } from "./Helpers";
import heroImage from "./assets/camion.webp";

/* =========================================================================
   À propos — version finale : fluide, humaine, et hautement professionnelle
============================================================================ */

function About() {
  const paragraphs = [
    <>
      Depuis plus de{" "}
      <span className="text-emerald-600 font-semibold">33 ans</span>,{" "}
      <span className="text-emerald-600 font-semibold">C&T Arbro</span> accompagne
      les particuliers et entreprises de l’<strong>Estrie</strong> dans
      l’<span className="text-emerald-600 font-semibold">élagage</span> et
      l’<span className="text-emerald-600 font-semibold">abattage d’arbres</span>,
      avec un savoir-faire transmis de génération en génération.
    </>,
    <>
      Nous plaçons l’<span className="text-emerald-600 font-medium">écoute</span> et
      la <span className="text-emerald-600 font-medium">sécurité</span> au cœur de
      chaque intervention, en tenant compte de votre environnement et du
      voisinage.
    </>,
    <>
      Chaque chantier est réalisé avec{" "}
      <span className="text-emerald-600 font-medium">rigueur</span> et{" "}
      <span className="text-emerald-600 font-medium">propreté</span> : démontage
      contrôlé, déchiquetage complet et nettoyage final soigné.
    </>,
    <>
      Grâce à notre{" "}
      <span className="text-emerald-600 font-semibold">service de nacelle</span>,
      nous intervenons sur des arbres de toutes tailles, avec précision et sécurité
      maximale, à <strong>Magog</strong>, <strong>Sherbrooke</strong> et partout en
      Estrie.
    </>,
    <>
      Une équipe{" "}
      <span className="text-emerald-600 font-medium">locale, expérimentée</span> et
      fière de contribuer à la{" "}
      <span className="text-emerald-600 font-medium">valeur</span> et à la{" "}
      <span className="text-emerald-600 font-medium">beauté</span> de votre
      propriété.
    </>,
  ];

  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] to-[#eef5f3] py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-20 px-5 sm:px-6 md:px-8">
        {/* IMAGE MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative md:hidden mb-6"
        >
          <div className="rounded-[1.5rem] overflow-hidden shadow-xl border border-emerald-100">
            <img
              src={heroImage}
              alt="Équipe C&T Arbro en intervention"
              className="h-[320px] w-full object-cover rounded-[1.5rem]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.h2
            {...fadeUp(0)}
            className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700"
          >
            À propos
          </motion.h2>

          <motion.h3
            {...fadeUp(0.1)}
            className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Une entreprise locale au savoir-faire reconnu
          </motion.h3>

          <div className="space-y-5 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* IMAGE DESKTOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100 group">
            <img
              src={heroImage}
              alt="Travaux d'élagage professionnel C&T Arbro"
              className="h-[440px] md:h-[500px] w-full object-cover rounded-[2rem] transform group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.98]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-[2rem]" />
          </div>
        </motion.div>
      </div>

      {/* Effets décoratifs + ligne de transition vers Estimation */}
      <div className="absolute -top-28 right-0 w-[380px] h-[380px] bg-emerald-100/40 blur-3xl rounded-full opacity-50" />
      <div className="absolute -bottom-24 left-0 w-[300px] h-[300px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#eef5f3]/60 to-[#f6f8f9] pointer-events-none" />
    </section>
  );
}

export default About;
