import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer.jsx";

/* =========================================================================
   Lazy loading — performance boost
============================================================================ */
const Hero = lazy(() => import("./Hero"));
const Services = lazy(() => import("./Services"));
const WhyUs = lazy(() => import("./WhyUs"));
const Territory = lazy(() => import("./Territory"));
const Gallery = lazy(() => import("./Gallery"));
const Avis = lazy(() => import("./Avis"));
const Guarantees = lazy(() => import("./Garanties"));
const About = lazy(() => import("./About"));
const Estimation = lazy(() => import("./Estimation"));

/* =========================================================================
   Animation entre sections
============================================================================ */
const sectionFade = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =========================================================================
   Scroll fluide — fonctionne pour /services, /#services, etc.
============================================================================ */
function ScrollToSection() {
  useEffect(() => {
    const scrollToTarget = () => {
      const hash = window.location.hash.replace("#", "");
      const path = window.location.pathname.replace("/", "");
      const targetId = hash || path;
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    // Scroll au chargement complet du DOM + après lazy loading
    const timer = setTimeout(scrollToTarget, 600);
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, []);

  return null;
}

/* =========================================================================
   SEO dynamique (titre + meta description + canonical)
============================================================================ */
function DynamicSEO() {
  useEffect(() => {
    const meta = {
      default: {
        title: "C&T Arbro — Élagage & Abattage d’arbres à Magog et Sherbrooke",
        desc: "Service professionnel d’élagage, d’abattage et d’entretien d’arbres à Magog, Sherbrooke et en Estrie. Estimation gratuite et service rapide.",
      },
      services: {
        title: "Élagage & Abattage d’arbres à Magog et Sherbrooke | C&T Arbro",
        desc: "Experts en élagage, abattage et entretien d’arbres à Magog et Sherbrooke. Sécurité, propreté et savoir-faire local.",
      },
      territoire: {
        title: "Zones desservies — Estrie, Magog, Sherbrooke | C&T Arbro",
        desc: "Nous desservons Magog, Sherbrooke et toute l’Estrie pour vos besoins en émondage et abattage d’arbres.",
      },
      galerie: {
        title: "Galerie de réalisations | C&T Arbro",
        desc: "Découvrez nos réalisations en élagage, abattage et entretien d’arbres à Magog et Sherbrooke.",
      },
      avis: {
        title: "Avis clients — C&T Arbro Magog Sherbrooke",
        desc: "Consultez les avis de nos clients satisfaits à Magog et Sherbrooke. Service rapide, professionnel et sécuritaire.",
      },
      garanties: {
        title: "Nos garanties et sécurité | C&T Arbro",
        desc: "Travaux d’élagage et abattage sécuritaires, assurés et garantis par C&T Arbro à Magog et Sherbrooke.",
      },
      apropos: {
        title: "À propos de C&T Arbro | Experts en arboriculture",
        desc: "C&T Arbro, entreprise locale spécialisée en élagage, abattage et entretien d’arbres. Basée à Magog, au service de l’Estrie.",
      },
      estimation: {
        title: "Estimation gratuite — C&T Arbro Magog Sherbrooke",
        desc: "Obtenez une estimation gratuite pour vos travaux d’élagage ou d’abattage à Magog et Sherbrooke. Contactez-nous dès aujourd’hui.",
      },
      contact: {
        title: "Contactez-nous — C&T Arbro | Magog Sherbrooke Estrie",
        desc: "Besoin d’un arboriculteur à Magog ou Sherbrooke ? Contactez C&T Arbro pour une estimation rapide et sans frais.",
      },
    };

    const updateSEO = () => {
      const hash = window.location.hash.replace("#", "");
      const path = window.location.pathname.replace("/", "");
      const key = hash || path;
      const { title, desc } = meta[key] || meta.default;

      document.title = title;

      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.name = "description";
        document.head.appendChild(metaTag);
      }
      metaTag.content = desc;

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = `https://ctarbro.ca${window.location.pathname}${window.location.hash}`;
    };

    updateSEO();
    window.addEventListener("hashchange", updateSEO);
    return () => window.removeEventListener("hashchange", updateSEO);
  }, []);

  return null;
}

/* =========================================================================
   AppRoot — Structure complète du site
============================================================================ */
export default function AppRoot() {
  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-gradient-to-b from-[#f6f8f9] via-[#e7ebe9] to-[#0b0b0b] text-slate-800 selection:bg-emerald-200/60 overflow-x-hidden"
    >
      <Header />

      {/* SEO et navigation */}
      <ScrollToSection />
      <DynamicSEO />

      <main>
        <Suspense
          fallback={
            <div className="text-center py-32 text-slate-500 font-medium">
              Chargement du contenu...
            </div>
          }
        >
          {[
            Hero,
            Services,
            WhyUs,
            Territory,
            Gallery,
            Avis,
            Guarantees,
            About,
            Estimation,
          ].map((Component, i) => (
            <motion.section
              key={i}
              variants={sectionFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden"
            >
              <Component />
            </motion.section>
          ))}
        </Suspense>
      </main>

      <section id="contact" aria-hidden="false" className="sr-only">
        Contactez C&T Arbro — Élagage, Abattage et Entretien d’arbres à Magog et
        Sherbrooke. Téléphone : 819-843-3101 / 819-437-2104.
      </section>

      <Footer />

      {/* =======================================================================
          Données structurées JSON-LD — Google Local Business
      ======================================================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "C&T Arbro",
            description:
              "Entreprise locale d’élagage, abattage et entretien d’arbres à Magog et Sherbrooke. Service professionnel 24/7 en Estrie.",
            image: "https://ctarbro.ca/og-image.jpg",
            "@id": "https://ctarbro.ca",
            url: "https://ctarbro.ca",
            telephone: ["+18198433101", "+18194372104"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Magog, QC",
              addressLocality: "Magog",
              addressRegion: "QC",
              postalCode: "J1X",
              addressCountry: "CA",
            },
            areaServed: { "@type": "AdministrativeArea", name: "Estrie" },
            openingHours: "Mo-Su 00:00-23:59",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.266,
              longitude: -72.147,
            },
            sameAs: [
              "https://www.facebook.com/tonlienici",
              "https://share.google/DiDwdpKmLmBViuMd6",
            ],
          }),
        }}
      />
    </div>
  );
}
