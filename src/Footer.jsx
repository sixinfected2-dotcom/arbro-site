// src/components/Footer.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const [highlight, setHighlight] = useState(false);

  // Effet de surbrillance verte quand on arrive sur le footer
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
      className={`relative bg-black text-gray-300 py-14 px-6 md:px-16 transition-[box-shadow] duration-700 ${
        highlight ? "shadow-[0_0_40px_#16a34a55]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* LOGO + DESCRIPTION */}
        <div>
          <img 
            src={logo} 
            alt="C&T Arbro" 
            className="h-20 w-auto mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          />
          <p className="text-sm leading-relaxed">
            Entreprise locale au service de vos arbres à <span className="text-white font-medium">Magog</span>, 
            <span className="text-white font-medium"> Sherbrooke</span> et en <span className="text-white font-medium">Estrie</span>.
          </p>

          {/* Réseaux sociaux */}
          <div className="mt-6">
            <h3 className="text-white font-semibold text-lg mb-3">Réseaux sociaux</h3>
            <div className="flex space-x-6">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/tonlienici"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={facebook} alt="Facebook" className="h-9 w-9" />
              </a>
              {/* Google Reviews */}
              <a 
                href="https://share.google/DiDwdpKmLmBViuMd6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={google} alt="Google Reviews" className="h-9 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* COORDONNÉES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Coordonnées</h3>
          <p>
            <a href="tel:8195550131" className="hover:text-emerald-400 transition">
              819-555-0131
            </a>
          </p>
          <p>
            <a href="mailto:info@ctarbro.ca" className="hover:text-emerald-400 transition">
              info@ctarbro.ca
            </a>
          </p>
          <p className="mt-2">Magog · Sherbrooke · Estrie</p>
        </div>

        {/* HEURES D’OUVERTURE */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Heures d’ouverture</h3>
          <p>Ouvert 24h/24 – 7 jours sur 7</p>
          <p className="mt-1 text-emerald-400 font-semibold">Urgence disponible</p>
        </div>

        {/* LIENS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Liens</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-emerald-400 transition">Services</a></li>
            <li><a href="#galerie" className="hover:text-emerald-400 transition">Galerie</a></li>
            <li><a href="#estimation" className="hover:text-emerald-400 transition">Estimation</a></li>
            <li><a href="#territoire" className="hover:text-emerald-400 transition">Territoire</a></li>
          </ul>
        </div>

        {/* ZONES DESSERVIES */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Zones desservies</h3>
          <p className="text-sm leading-relaxed">
            Magog, Sherbrooke, Orford, Austin, Eastman, Sainte-Catherine-de-Hatley,
            North Hatley, Ayer’s Cliff, et toute l’Estrie.
          </p>
        </div>
      </div>

      {/* BAS DE PAGE */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-white font-medium">C&T Arbro</span> — Tous droits réservés.
        <div className="mt-2 space-x-3">
          <a href="#" className="hover:text-emerald-400 transition">Politique de confidentialité</a>
          <span>|</span>
          <a href="#" className="hover:text-emerald-400 transition">Conditions d’utilisation</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
