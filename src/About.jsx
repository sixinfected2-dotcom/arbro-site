/* =========================================================================
   À propos — version finale responsive + highlights + animation douce
============================================================================ */
import { motion } from "framer-motion";
import { fadeUp } from "./Helpers";
import heroImage from "./assets/camion.jpg";

function About() {
  const paragraphs = [
    <>
      Depuis plus de <span className="text-emerald-600 font-semibold">33 ans</span>,{" "}
      <span className="text-emerald-600 font-semibold">C&T Arbro</span> accompagne les
      particuliers et entreprises de l’Estrie dans{" "}
      <span className="text-emerald-600 font-semibold">l’entretien</span> et{" "}
      <span className="text-emerald-600 font-semibold">l’abattage d’arbres</span>.
    </>,
    <>
      Nous croyons qu’un travail bien fait commence par{" "}
      <span className="text-emerald-600 font-medium">l’écoute de nos clients</span> et le
      respect de leur environnement.
    </>,
    <>
      Chaque intervention est réalisée avec soin, dans les{" "}
      <span className="text-emerald-600 font-medium">délais promis</span>, et toujours dans
      un souci de <span className="text-emerald-600 font-medium">sécurité</span> et de{" "}
      <span className="text-emerald-600 font-medium">propreté</span>.
    </>,
    <>
      Grâce à notre service de{" "}
      <span className="text-emerald-600 font-semibold">nacelle</span>, nous offrons des
      travaux en hauteur sécuritaires et efficaces.
    </>,
    <>
      Une équipe <span className="text-emerald-600 font-medium">locale</span>,
      <span className="text-emerald-600 font-medium"> passionnée</span> et fière de
      contribuer à la beauté de votre terrain.
    </>,
  ];

  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] to-[#eef5f3] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-20 px-5 sm:px-6 md:px-8">
        {/* Image mobile */}
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
              alt="Travaux d'élagage C&T Arbro"
              className="h-[320px] w-full object-cover rounded-[1.5rem]"
            />
          </div>
        </motion.div>

        {/* Texte */}
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
            className="mb-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Entreprise locale, service expert
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

        {/* Image desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-100">
            <img
              src={heroImage}
              alt="Travaux d'élagage C&T Arbro"
              className="h-[440px] md:h-[500px] w-full object-cover rounded-[2rem] transform hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>

      {/* Effets décoratifs subtils */}
      <div className="absolute -top-28 right-0 w-[380px] h-[380px] bg-emerald-100/40 blur-3xl rounded-full opacity-50" />
      <div className="absolute -bottom-24 left-0 w-[300px] h-[300px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}

export default About;
