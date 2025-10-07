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
============================================================================ */
export const SERVICES = [
  {
    icon: <Scissors className="w-6 h-6 text-emerald-600" />,
    title: "Élagage d’arbres",
    desc: (
      <>
        Taille <span className="text-emerald-600 font-medium">précise</span> et
        sécuritaire pour maintenir la santé et la structure des arbres tout en
        préservant leur esthétisme.
      </>
    ),
    checks: [
      "Retrait des branches mortes",
      "Élagage de dégagement (bâtiments, lignes)",
      "Sécurité et longévité de l’arbre",
    ],
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Émondage d’arbres",
    desc: (
      <>
        Travail d’entretien visant à{" "}
        <span className="text-emerald-600 font-medium">
          améliorer la croissance
        </span>
        , la lumière et l’apparence des arbres.
      </>
    ),
    checks: [
      "Interventions respectueuses de l’arbre",
      "Croissance dirigée et durable",
      "Résultat soigné et équilibré",
    ],
  },
  {
    icon: <TreeDeciduous className="w-6 h-6 text-emerald-600" />,
    title: "Abattage d’arbres",
    desc: (
      <>
        Abattage{" "}
        <span className="text-emerald-600 font-medium">sécuritaire</span> des
        arbres à risque, morts ou encombrants. Équipement adapté et périmètre
        sécurisé.
      </>
    ),
    checks: [
      "Évaluation par arboriculteur",
      "Méthodes contrôlées (démantèlement, rétention)",
      "Site propre après intervention",
    ],
  },
  {
    icon: <Sprout className="w-6 h-6 text-emerald-600" />,
    title: "Taille de haies",
    desc: (
      <>
        Taille nette et uniforme pour une haie{" "}
        <span className="text-emerald-600 font-medium">dense et esthétique</span>,
        adaptée à chaque espèce.
      </>
    ),
    checks: [
      "Haies de cèdres, feuillus et mixtes",
      "Découpe droite et précise",
      "Résultat propre et professionnel",
    ],
  },
  {
    icon: <Axe className="w-6 h-6 text-emerald-600" />,
    title: "Dessouchage / Essouchage",
    desc: (
      <>
        Retrait complet ou partiel des{" "}
        <span className="text-emerald-600 font-medium">souches d’arbres</span>{" "}
        après abattage, pour un terrain prêt à être réaménagé.
      </>
    ),
    checks: [
      "Dessouchage mécanique ou manuel",
      "Élimination des racines visibles",
      "Nivellement et nettoyage du terrain",
    ],
  },
  {
    icon: <Cable className="w-6 h-6 text-emerald-600" />,
    title: "Haubanage & soutien",
    desc: (
      <>
        Renforcement structurel des arbres{" "}
        <span className="text-emerald-600 font-medium">fragilisés</span> à l’aide
        de haubans et de câbles de soutien.
      </>
    ),
    checks: [
      "Évaluation par spécialiste",
      "Matériel homologué et discret",
      "Prévention des bris en tempête",
    ],
  },
];

/* =========================================================================
   Composant principal — Desktop + Mobile horizontal scroll
============================================================================ */
function Services() {
  return (
    <section
      id="services"
      className="bg-[#f6f9f7] py-24 relative overflow-hidden"
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
          className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900"
        >
          Interventions{" "}
          <span className="text-emerald-600">professionnelles</span>
        </motion.h3>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-3 max-w-2xl text-slate-600 text-[15px]"
        >
          Des solutions complètes pour la{" "}
          <span className="text-emerald-600 font-medium">santé</span>, la{" "}
          <span className="text-emerald-600 font-medium">sécurité</span> et
          l’esthétique de vos arbres — avec un savoir-faire local et attentif aux
          détails.
        </motion.p>

        {/* ===== MOBILE — SCROLL HORIZONTAL ===== */}
        <div className="md:hidden mt-12 overflow-x-auto flex snap-x snap-mandatory scroll-smooth gap-6 pb-6 px-2 scrollbar-hide">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="snap-center flex-shrink-0 w-[85%] rounded-2xl border border-black/10 bg-white p-6 text-left transition-all duration-200 hover:border-emerald-500/50"
            >
              <div className="flex items-center gap-2 mb-3">
                {s.icon}
                <h4 className="text-lg font-bold text-slate-900">{s.title}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                {s.checks.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
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
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-black/10 bg-white p-6 text-left transition-all duration-200 hover:border-emerald-500/50"
            >
              <div className="flex items-center gap-2 mb-3">
                {s.icon}
                <h4 className="text-lg font-bold text-slate-900">{s.title}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                {s.checks.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
