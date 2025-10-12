import { motion } from "framer-motion";
import { fadeUp } from "./Helpers";
import {
  Scissors,
  Leaf,
  TreeDeciduous,
  Sprout,
  Axe,
  Cable,
  Check,
} from "lucide-react";

/* =========================================================================
   Données — Services C&T Arbro
   Optimisée pour performance, accessibilité et SEO local
============================================================================ */

export const SERVICES = [
  {
    icon: <Scissors className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "Élagage d’arbres",
    desc: (
      <>
        Taille <span className="text-emerald-600 font-medium">précise</span> et
        sécuritaire pour maintenir la santé et la structure de vos arbres tout
        en préservant leur esthétisme.
      </>
    ),
    checks: [
      "Retrait des branches mortes",
      "Élagage de dégagement (bâtiments, lignes)",
      "Sécurité et longévité de l’arbre",
    ],
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "Émondage d’arbres",
    desc: (
      <>
        Entretien visant à{" "}
        <span className="text-emerald-600 font-medium">
          améliorer la croissance
        </span>{" "}
        et la lumière pour une apparence harmonieuse.
      </>
    ),
    checks: [
      "Méthodes respectueuses de l’arbre",
      "Croissance dirigée et durable",
      "Résultat propre et équilibré",
    ],
  },
  {
    icon: (
      <TreeDeciduous className="w-6 h-6 text-emerald-600" aria-hidden="true" />
    ),
    title: "Abattage d’arbres",
    desc: (
      <>
        Abattage{" "}
        <span className="text-emerald-600 font-medium">sécuritaire</span> des
        arbres à risque, morts ou encombrants — avec équipement adapté et
        périmètre de travail contrôlé.
      </>
    ),
    checks: [
      "Évaluation par arboriculteur certifié",
      "Méthodes contrôlées (démantèlement, rétention)",
      "Site propre après intervention",
    ],
  },
  {
    icon: <Sprout className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "Taille de haies",
    desc: (
      <>
        Taille nette et uniforme pour une haie{" "}
        <span className="text-emerald-600 font-medium">
          dense et esthétique
        </span>
        , adaptée à chaque espèce et à votre propriété.
      </>
    ),
    checks: [
      "Haies de cèdres, feuillus et mixtes",
      "Découpe droite et précise",
      "Finition impeccable",
    ],
  },
  {
    icon: <Axe className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "Dessouchage / Essouchage",
    desc: (
      <>
        Retrait complet ou partiel des{" "}
        <span className="text-emerald-600 font-medium">souches d’arbres</span>{" "}
        pour un terrain prêt à être réaménagé.
      </>
    ),
    checks: [
      "Dessouchage mécanique ou manuel",
      "Élimination des racines visibles",
      "Nivellement et nettoyage du terrain",
    ],
  },
  {
    icon: <Cable className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
    title: "Haubanage & soutien",
    desc: (
      <>
        Renforcement structurel des arbres{" "}
        <span className="text-emerald-600 font-medium">fragilisés</span> à
        l’aide de haubans et câbles de soutien discrets et durables.
      </>
    ),
    checks: [
      "Évaluation par spécialiste",
      "Matériel homologué et discret",
      "Prévention des bris lors de tempêtes",
    ],
  },
];

/* =========================================================================
   Composant principal — Services C&T Arbro
   Version finale optimisée pour PageSpeed, UX & cohérence
============================================================================ */

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f6f9f7] py-24 md:py-28 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        {/* ===== TITRES ===== */}
        <motion.h2
          {...fadeUp(0)}
          className="text-sm font-semibold uppercase tracking-widest text-emerald-700"
        >
          Nos services
        </motion.h2>

        <motion.h3
          {...fadeUp(0.05)}
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
        >
          Interventions{" "}
          <span className="text-emerald-600">professionnelles</span> à Magog &
          en Estrie
        </motion.h3>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-4 max-w-2xl text-[15px] text-slate-600 leading-relaxed"
        >
          Des solutions complètes pour la{" "}
          <span className="text-emerald-600 font-medium">santé</span>, la{" "}
          <span className="text-emerald-600 font-medium">sécurité</span> et
          l’esthétique de vos arbres — avec un savoir-faire local et un souci du
          détail irréprochable.
        </motion.p>

        {/* ===== MOBILE — SCROLL HORIZONTAL ===== */}
        <div className="md:hidden mt-12 overflow-x-auto flex snap-x snap-mandatory scroll-smooth gap-6 pb-6 px-2 scrollbar-hide">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="snap-center flex-shrink-0 w-[85%] rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h4 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h4>
              </div>
              <p className="text-[14px] text-slate-600 mb-3 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-1 text-[14px] text-slate-700">
                {s.checks.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check
                      className="w-4 h-4 text-emerald-600 shrink-0"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ===== DESKTOP — GRID ===== */}
        <div className="hidden md:grid mt-14 grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 text-left shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                {s.icon}
                <h4 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h4>
              </div>
              <p className="text-[14px] text-slate-600 mb-3 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-1 text-[14px] text-slate-700">
                {s.checks.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check
                      className="w-4 h-4 text-emerald-600 shrink-0"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Décor doux et transition */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#f6f9f7]/60 to-[#eef5f3] pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[320px] h-[320px] bg-emerald-100/40 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}
