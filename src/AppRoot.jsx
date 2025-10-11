// src/AppRoot.jsx
import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

/* =========================================================================
   Lazy loading des sections lourdes pour meilleures performances
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
   Variants d’animation — entrée fluide entre les sections
============================================================================ */
const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================================
   App Root — Structure principale du site
============================================================================ */
export default function AppRoot() {
  return (
    <div
      id="top"
      className="min-h-screen scroll-smooth bg-[#f6f8f9] text-slate-800 selection:bg-emerald-200/60 overflow-x-hidden"
    >
      {/* HEADER GLOBAL */}
      <Header />

      {/* CONTENU PRINCIPAL */}
      <main>
        <Suspense fallback={<div className="text-center py-20">Chargement...</div>}>
          {[Hero, Services, WhyUs, Territory, Gallery, Avis, Guarantees, About, Estimation].map(
            (Component, index) => (
              <motion.section
                key={index}
                variants={sectionFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Component />
              </motion.section>
            )
          )}
        </Suspense>
      </main>

      {/* SECTION CONTACT (pour scroll fluide + SEO) */}
      <section id="contact" aria-hidden="false" className="sr-only">
        Contactez C&T Arbro — Magog / Sherbrooke — 819-843-3101 · 819-437-2104
      </section>

      {/* FOOTER */}
      <Footer />

      {/* ==================== SCHEMA LOCAL BUSINESS ==================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "C&T Arbro",
            "image": "https://arbro-site-p2cg.vercel.app/og-image.jpg",
            "@id": "https://arbro-site-p2cg.vercel.app",
            "url": "https://arbro-site-p2cg.vercel.app",
            "telephone": ["+18198433101", "+18194372104"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Magog",
              "addressRegion": "QC",
              "postalCode": "J1X",
              "addressCountry": "CA"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Estrie"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.266,
              "longitude": -72.147
            },
            "sameAs": [
              "https://www.facebook.com/tonlienici",
              "https://share.google/DiDwdpKmLmBViuMd6"
            ]
          }),
        }}
      />
    </div>
  );
}
