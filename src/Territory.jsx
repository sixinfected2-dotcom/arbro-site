// src/Territory.jsx
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "./animation";

/* =========================================================================
   Territoire — Carte Google interactive (zones Magog, Sherbrooke & Estrie)
============================================================================ */
function Territory() {
  return (
    <section id="territoire" className="bg-[#f7faf9] py-16 md:py-20">
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
          className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900"
        >
          Sherbrooke, Magog & toute l’Estrie
        </motion.h3>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-3 max-w-2xl text-slate-600 text-[15px]"
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

        {/* GOOGLE MAP STYLISÉE */}
        <motion.div
          {...fadeIn(0.15)}
          className="mx-auto mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-[1.01]"
        >
          <iframe
            title="Carte du territoire C&T Arbro"
            src="https://www.google.com/maps/d/u/0/embed?mid=1Xsmlf2GlCkKHCVt7kShlddc9igmjkuw&ehbc=2E312F"
            width="100%"
            height="480"
            loading="lazy"
            allowFullScreen
            className="w-full aspect-[16/8] rounded-3xl"
            style={{ border: 0 }}
          ></iframe>
        </motion.div>

        {/* NOTE + CTA */}
        <motion.div {...fadeUp(0.25)} className="mt-6 space-y-3">
          <p className="text-[15px] text-slate-500 max-w-2xl mx-auto">
            La carte ci-dessus illustre nos zones d’intervention principales 🌲 — 
            si vous êtes situés à proximité, contactez-nous : nous couvrons 
            également les secteurs environnants.
          </p>

          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=1Xsmlf2GlCkKHCVt7kShlddc9igmjkuw&ehbc=2E312F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 rounded-xl bg-emerald-600 px-6 py-2 text-white text-sm font-semibold shadow-md hover:bg-emerald-700 transition"
          >
            Ouvrir la carte complète sur Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Territory;
