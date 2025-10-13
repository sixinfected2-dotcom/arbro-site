import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer.jsx";

/* =========================================================================
   Lazy loading des sections — améliore les performances
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
   Animation fluide entre les sections
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
   Scroll automatique selon l’URL (ex: /services → section Services)
============================================================================ */
function ScrollToSection() {
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");

    if (path) {
      const section = document.getElementById(path);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return null;
}

/* =========================================================================
   AppRoot — Structure complète du site C&T Arbro
============================================================================ */
export default function AppRoot() {
  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-gradient-to-b from-[#f6f8f9] via-[#e7ebe9] to-[#0b0b0b] text-slate-800 selection:bg-emerald-200/60 overflow-x-hidden"
    >
      {/* HEADER GLOBAL */}
      <Header />

      {/* Scroll automatique SEO-friendly */}
      <ScrollToSection />

      {/* CONTENU PRINCIPAL */}
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
          ].map((Component, index) => (
            <motion.section
              key={index}
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

      {/* SECTION CONTACT (SEO + navigation sémantique) */}
      <section
        id="contact"
        aria-hidden="false"
        className="sr-only"
      >
        Contactez C&T Arbro — Élagage, Abattage et Entretien d’arbres à Magog et
        Sherbrooke. Téléphone : 819-843-3101 / 819-437-2104.
      </section>

      {/* FOOTER FINAL */}
      <Footer />

      {/* =======================================================================
          Données structurées SEO — Google Local Business Schema
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
            geo: { "@type": "GeoCoordinates", latitude: 45.266, longitude: -72.147 },
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
