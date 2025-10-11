// src/Avis.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

/* =========================================================================
   Avis clients — version haut de gamme professionnelle
============================================================================ */

export default function Avis() {
  const reviews = [
    {
      name: "Michael Bonin",
      text: "Très bon service, rapide et efficace. Je recommande fortement.",
      rating: 5,
    },
    {
      name: "KooL MaT",
      text: "Service pro, ponctuel et travail propre. Arbres morts retirés sans problème.",
      rating: 5,
    },
    {
      name: "P. Latulippe",
      text: "Professionnels du service, résultat impeccable à chaque fois.",
      rating: 5,
    },
    {
      name: "Sandra Lizotte",
      text: "Super service, travail de qualité et personnel très courtois.",
      rating: 5,
    },
  ];

  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-yellow-400"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.293c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.293a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <section id="avis" className="relative py-24 md:py-28 bg-[#f8faf9] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-2">
            Témoignages
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Votre satisfaction, notre meilleure publicité
          </h3>
          <p className="mt-3 text-slate-600 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Des clients de Magog, Sherbrooke et partout en Estrie nous font confiance
            pour un service professionnel, soigné et sécuritaire.
          </p>
        </motion.div>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-7 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg h-full flex flex-col justify-between transition-all duration-300"
              >
                <div className="flex justify-center mb-3">{renderStars(r.rating)}</div>
                <p className="text-slate-700 italic leading-relaxed">“{r.text}”</p>
                <p className="mt-5 font-semibold text-slate-900">– {r.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="https://www.google.com/search?q=Émondage+Arbro&sca_esv=5950ff312d9797ee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
          >
            Voir tous nos avis sur Google
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

      {/* Effet décoratif */}
      <div className="absolute -top-24 left-0 w-[300px] h-[300px] bg-emerald-100/40 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}
