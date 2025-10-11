import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/optimized/logo.webp";
import facebook from "../assets/optimized/facebook.webp";
import google from "../assets/optimized/google.webp";

/* =========================================================================
   Footer — version finale : fond fusionné + cohérence avec tout le site
============================================================================ */

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.footer
      id="footer"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative bg-gradient-to-t from-black via-[#0b0b0b] to-[#0b0b0b] text-gray-300 py-16 px-6 md:px-16 overflow-hidden transition-[box-shadow] duration-700 ${
        highlight ? "shadow-[0_0_45px_#16a34a55]" : ""
      }`}
    >
      {/* Lien fondu vers section précédente (supprime le blanc visible) */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-t from-black via-[#0b0b0b] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
        {/* LOGO + DESCRIPTION */}
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="C&T Arbro — Arboriculteurs à Magog et Sherbrooke"
            loading="lazy"
            decoding="async"
            className="h-20 w-auto mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] blur-sm transition-all duration-700"
            onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
          />
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            <strong className="text-white">C&T Arbro</strong> —{" "}
            <span className="text-emerald-400 font-medium">arboriculteurs certifiés</span>{" "}
            à <strong>Magog</strong>, <strong>Sherbrooke</strong> et dans toute{" "}
            <strong>l’Estrie</strong>. Experts en{" "}
            <span className="text-white font-medium">élagage</span>,{" "}
            <span className="text-white font-medium">abattage</span> et{" "}
            <span className="text-white font-medium">entretien d’arbres</span>.
          </p>

          {/* Réseaux sociaux */}
          <div className="mt-6">
            <h3 className="text-white font-semibold text-lg mb-3">
              Suivez-nous
            </h3>
            <div className="flex space-x-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/tonlienici"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de C&T Arbro"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={facebook}
                  alt="Facebook C&T Arbro"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9 rounded-full blur-sm transition-all duration-700"
                  onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
                />
              </a>

              {/* Google Reviews */}
              <a
                href="https://share.google/DiDwdpKmLmBViuMd6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lien Google Reviews C&T Arbro"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={google}
                  alt="Avis Google C&T Arbro"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto blur-sm transition-all duration-700"
                  onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
                />
              </a>
            </div>
          </div>
        </div>

        {/* COORDONNÉES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Coordonnées
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" />
              <a href="tel:8198433101" className="hover:text-emerald-400 transition">
                819-843-3101
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-400" />
              <a href="tel:8194372104" className="hover:text-emerald-400 transition">
                819-437-2104
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-400" />
              <a href="mailto:info@ctarbro.ca" className="hover:text-emerald-400 transition">
                info@ctarbro.ca
              </a>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>Magog · Sherbrooke · Estrie</span>
            </li>
          </ul>
        </div>

        {/* HORAIRES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Heures d’ouverture
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ouvert <span className="text-white font-medium">24h/24 – 7 jours/7</span>
            <br />
            <span className="text-emerald-400 font-semibold">
              Urgence disponible
            </span>
          </p>
        </div>

        {/* LIENS RAPIDES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-emerald-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#galerie" className="hover:text-emerald-400 transition">
                Galerie
              </a>
            </li>
            <li>
              <a href="#estimation" className="hover:text-emerald-400 transition">
                Estimation
              </a>
            </li>
            <li>
              <a href="#territoire" className="hover:text-emerald-400 transition">
                Territoire
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BAS DE PAGE */}
      <div className="mt-14 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 relative z-10">
        <p>
          © 2025 <span className="text-white font-medium">C&T Arbro</span> — Tous
          droits réservés.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-emerald-400 transition">
            Politique de confidentialité
          </a>
          <span className="text-gray-700">|</span>
          <a href="#" className="hover:text-emerald-400 transition">
            Conditions d’utilisation
          </a>
        </div>
      </div>

      {/* Effets décoratifs */}
      <div className="absolute -bottom-28 left-0 w-[320px] h-[320px] bg-emerald-500/15 blur-3xl rounded-full opacity-25" />
      <div className="absolute -bottom-20 right-0 w-[260px] h-[260px] bg-emerald-600/15 blur-3xl rounded-full opacity-25" />
    </motion.footer>
  );
}
