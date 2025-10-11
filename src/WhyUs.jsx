// src/WhyUs.jsx
import { motion } from "framer-motion";
import { fadeUp } from "./Helpers";

/* =========================================================================
   Pourquoi nous choisir — C&T Arbro
   Version haut de gamme : élégance, lisibilité, homogénéité
============================================================================ */

const cards = [
  {
    title: "Sécurité garantie",
    desc: "Chaque intervention est réalisée dans le respect des normes les plus strictes et couverte par notre assurance responsabilité professionnelle.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
          className="fill-emerald-600/90"
        />
        <path
          d="M9.5 12.5l1.8 1.8 3.8-3.8"
          className="stroke-white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Travail propre & minutieux",
    desc: "Nous laissons chaque chantier impeccable : démontage contrôlé, déchiquetage et nettoyage complet du site inclus.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M4 16h16M6 12h12M8 8h8M10 4h4"
          className="stroke-emerald-700"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="19" cy="5" r="2" className="fill-emerald-500" />
      </svg>
    ),
  },
  {
    title: "Équipe qualifiée",
    desc: "Des arboriculteurs expérimentés, passionnés par leur métier, formés aux meilleures techniques d’entretien et d’abattage.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M12 12a4 4 0 100-8 4 4 0 000 8z"
          className="fill-emerald-600/90"
        />
        <path
          d="M3.5 20.5a8.5 8.5 0 0117 0"
          className="stroke-emerald-700"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction locale",
    desc: "Une réputation bâtie sur la confiance et la satisfaction de nos clients à Magog, Sherbrooke et dans toute l’Estrie.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M20 8a8 8 0 11-16 0 8 8 0 0116 0z"
          className="fill-emerald-600/90"
        />
        <path
          d="M8.5 12.2l2.2 2.1 4.8-4.8"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function WhyUs() {
  return (
    <section
      id="pourquoi-nous"
      className="bg-[#f7faf9] py-24 md:py-28 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Pourquoi nous choisir
          </h2>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            L’excellence au service de vos arbres
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Chez <span className="font-semibold text-emerald-700">C&T Arbro</span>,
            nous allions expertise, sécurité et respect de l’environnement pour
            offrir un service professionnel et durable à chaque client.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.05 + i * 0.05)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100 shrink-0">
                  <Icon />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-slate-900">
                    {title}
                  </h4>
                  <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
