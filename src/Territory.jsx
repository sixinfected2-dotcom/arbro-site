// src/Territory.jsx
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "./Helpers";

/* =========================================================================
   Territoire — C&T Arbro
   Version haut de gamme : design premium, carte Google conservée
============================================================================ */
function Territory() {
  return (
    <section
      id="territoire"
      className="relative bg-[#f7faf9] py-24 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        {/* TITRES */}
        <motion.h2
          {...fadeUp(0)}
          className="text-sm font-semibold uppercase tracking-widest text-emerald-700"
        >
          Territoire
        </motion.h2>

        <motion.h3
          {...fadeUp(0.05)}
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
        >
          Sherbrooke, Magog & toute l’Estrie
        </motion.h3>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600"
        >
          Basés à <strong>Magog</strong>, nous desservons{" "}
          <strong>Sherbrooke</strong>, <strong>Orford</strong>,{" "}
          <strong>Austin</strong>, <strong>Eastman</strong>,{" "}
          <strong>Sainte-Catherine-de-Hatley</strong>,{" "}
          <strong>North Hatley</strong>, <strong>Ayer’s Cliff</strong> et
          l’ensemble de la région de <strong>l’Estrie</strong>.  
          <br />
          Notre équipe locale intervient rapidement pour tous travaux d’élagage,
          abattage, haubanage ou dessouchage.
        </motion.p>

        {/* GOOGLE MAP */}
        <motion.div
          {...fadeIn(0.15)}
          className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]"
        >
          <iframe
            title="Carte du territoire C&T Arbro"
            src="https://www.google.com/maps/d/u/0/embed?mid=1Xsmlf2GlCkKHCVt7kShlddc9igmjkuw&ehbc=2E312F"
            width="100%"
            height="480"
            loading="lazy"
            allowFullScreen
            className="w-full aspect-[16/8] rounded-[2rem]"
            style={{ border: 0 }}
          ></iframe>

          {/* overlay décoratif subtil */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-emerald-50/20 to-transparent opacity-60" />
        </motion.div>

        {/* NOTE + CTA */}
        <motion.div {...fadeUp(0.25)} className="mt-8 space-y-4">
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            La carte ci-dessus illustre nos zones d’intervention principales 🌲 — 
            si vous êtes situés à proximité,{" "}
            <span className="text-emerald-700 font-medium">
              contactez-nous
            </span> : nous couvrons également les secteurs environnants.
          </p>

          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=1Xsmlf2GlCkKHCVt7kShlddc9igmjkuw&ehbc=2E312F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-3 rounded-xl bg-emerald-600 px-6 py-3 text-white text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3h7v7m0 0L10 21l-4-4L21 10z"
              />
            </svg>
            Ouvrir la carte complète sur Google Maps
          </a>
        </motion.div>
      </div>

      {/* Effet décoratif d’arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full opacity-50 -z-10" />
    </section>
  );
}

export default Territory;
