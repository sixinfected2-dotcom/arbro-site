// src/Gallery.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Import des images optimisées (.webp)
import img1 from "./assets/optimized/gallery1.webp";
import img2 from "./assets/optimized/gallery2.webp";
import img3 from "./assets/optimized/gallery3.webp";
import img4 from "./assets/optimized/gallery4.webp";
import img5 from "./assets/optimized/gallery5.webp";
import img6 from "./assets/optimized/gallery6.webp";
import img7 from "./assets/optimized/gallery7.webp";
import img8 from "./assets/optimized/gallery8.webp";

const GALLERY_IMAGES = [
  { src: img1, alt: "Parc d’équipements et véhicules spécialisés C&T Arbro" },
  { src: img2, alt: "Élagage d’arbre en toute sécurité avec harnais" },
  { src: img3, alt: "Déchiquetage et transport du bois après abattage" },
  { src: img4, alt: "Taille soignée de haies résidentielles" },
  { src: img5, alt: "Taille de grande haie avec nacelle articulée" },
  { src: img6, alt: "Abattage complet et nettoyage du chantier" },
  { src: img7, alt: "Abattage contrôlé avec corde et tronçonneuse" },
  { src: img8, alt: "Dessouchage mécanique en hiver" },
];

// Animation d’apparition subtile
const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const images = useMemo(() => GALLERY_IMAGES, []);
  const isOpen = openIndex !== null;

  // Scroll lock quand lightbox ouverte
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Navigation clavier
  const onKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i - 1 + images.length) % images.length);
    },
    [isOpen, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <section id="galerie" className="bg-[#f8faf9] py-24 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <h2 className="text-sm uppercase font-semibold tracking-widest text-emerald-700 mb-2">
            Galerie
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Nos réalisations et équipements professionnels
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Découvrez la qualité de nos interventions en élagage, abattage,
            taille de haies et dessouchage. Chaque image reflète notre engagement
            envers un travail propre, précis et sécuritaire.
          </p>
        </motion.div>

        {/* GALERIE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-white cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setOpenIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110 blur-sm"
                onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-3 text-white text-sm font-medium px-3 text-center">
                {img.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOUTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <a
            href="https://www.google.com/maps/contrib/105661505384977747433/place/ChIJeWtFgKkfRi0RgEWEahyJDxc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
          >
            Voir plus de photos sur Google
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                className="mx-auto max-h-[80vh] rounded-2xl shadow-2xl object-contain"
              />
              <p className="mt-3 text-center text-gray-200 text-sm md:text-base">
                {images[openIndex].alt}
              </p>

              {/* Bouton fermer */}
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-5 right-5 bg-white/90 text-gray-900 rounded-full p-2 shadow-md hover:bg-white transition"
                aria-label="Fermer"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Décor arrière-plan */}
      <div className="absolute -bottom-24 left-0 w-[280px] h-[280px] bg-emerald-100/40 blur-3xl rounded-full opacity-50" />
      <div className="absolute -top-20 right-0 w-[320px] h-[320px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}
