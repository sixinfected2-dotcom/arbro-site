import { motion } from "framer-motion";
import { fadeUp, smoothTo } from "./Helpers";
import heroImage from "./assets/optimized/camion.webp";

/* =========================================================================
   Hero — C&T Arbro
   Version optimisée : LCP, SEO local, accessibilité & fluidité
============================================================================ */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#173D2C] via-[#123224] to-[#0B1F16]"
      aria-label="Section principale de présentation de C&T Arbro"
    >
      {/* ===== MOBILE ===== */}
      <div className="md:hidden relative">
        <img
          src={heroImage}
          alt="Camion et équipe C&T Arbro en intervention à Magog et Sherbrooke"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="800"
          height="600"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.78] blur-sm transition-all duration-700 ease-out"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-32">
          <motion.h1
            {...fadeUp(0)}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            L’expertise locale{" "}
            <span className="text-emerald-400">pour vos arbres</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.05)}
            className="mb-8 max-w-md text-[15px] text-gray-200 leading-relaxed"
          >
            Interventions en{" "}
            <strong className="text-emerald-300 font-semibold">élagage</strong>,
            <strong className="text-emerald-300 font-semibold"> abattage</strong>{" "}
            et <strong className="text-emerald-300 font-semibold">entretien</strong>{" "}
            d’arbres à <strong>Magog</strong>, <strong>Sherbrooke</strong> et dans
            toute <strong>l’Estrie</strong>.
          </motion.p>

          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col gap-4 w-full max-w-[280px]"
          >
            <button
              onClick={() => smoothTo("#estimation")}
              className="rounded-xl bg-white text-[#0B1F16] px-6 py-3 font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Demander une estimation
            </button>
            <button
              onClick={() => smoothTo("#services")}
              className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition"
            >
              Voir nos services
            </button>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:grid relative mx-auto max-w-7xl grid-cols-2 items-center gap-12 px-8 py-28">
        {/* TEXTE */}
        <motion.div {...fadeUp(0)}>
          <h1 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            L’expertise locale{" "}
            <span className="text-emerald-400">pour vos arbres</span>
          </h1>

          <p className="mb-10 max-w-xl text-[17px] text-gray-200 leading-relaxed">
            Experts en{" "}
            <strong className="text-emerald-300 font-semibold">élagage</strong>,
            <strong className="text-emerald-300 font-semibold"> abattage</strong>{" "}
            et <strong className="text-emerald-300 font-semibold">entretien</strong>{" "}
            d’arbres à <strong>Magog</strong>, <strong>Sherbrooke</strong> et
            dans toute <strong>l’Estrie</strong>. Un service professionnel,
            sécuritaire et soigné.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothTo("#estimation")}
              className="rounded-xl bg-emerald-400 text-[#0B1F16] px-8 py-3 text-[15px] font-semibold shadow-lg hover:bg-emerald-300 transition"
            >
              Demander une estimation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothTo("#services")}
              className="rounded-xl border border-white/40 bg-white/5 px-8 py-3 text-[15px] font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition"
            >
              Voir nos services
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative flex justify-center items-center"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm"
            role="presentation"
          >
            <img
              src={heroImage}
              alt="Camion C&T Arbro lors d’un élagage professionnel en Estrie"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="900"
              height="600"
              className="h-[480px] w-full rounded-2xl object-cover brightness-[0.95] blur-sm transition-all duration-700 ease-out hover:scale-[1.02]"
              onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
              draggable={false}
            />
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/25 to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
