import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { smoothTo } from "./helpers"; 
import logo from "./assets/logo.png";

/* =========================================================================
   Header — Version premium finale (fluidité + ancrages précis + compatibilité mobile)
============================================================================ */
export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [shadow, setShadow] = useState(false);
  const lastY = useRef(0);

  // Gestion du scroll et du shrink
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setShrink(y > 40);
      setShadow(y > 5);

      if (!open) {
        if (y < 10) setHidden(false);
        else if (delta > 6) setHidden(true);
        else if (delta < -6) setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Réapparition du header si la souris remonte
  useEffect(() => {
    const onMove = (e) => {
      if (e.clientY < 10) setHidden(false);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Menu de navigation
  const nav = useMemo(
    () => [
      { label: "Services", hash: "#services" },
      { label: "Territoire", hash: "#territoire" },
      { label: "Galerie", hash: "#galerie" },
      { label: "Avis", hash: "#avis" },
      { label: "Garanties", hash: "#garanties" },
      { label: "À propos", hash: "#apropos" },
      { label: "Estimation", hash: "#estimation" },
      { label: "Contact", hash: "#footer" },
    ],
    []
  );

  return (
    <>
      <motion.header
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0.9 : 1,
          boxShadow: shadow
            ? "0 4px 20px rgba(0,0,0,0.08)"
            : "0 1px 0 rgba(0,0,0,0)",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 18,
          mass: 0.7,
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
      >
        {/* Bande verte haute */}
        <div className="bg-[#1B4332] text-white text-sm py-1 px-4 flex justify-between items-center">
          <span>C&T Arbro — Élagage & Abattage d’arbres · Estrie</span>
          <a href="tel:8195550131" className="font-semibold hover:underline">
            (819) 555-0131
          </a>
        </div>

        {/* Barre principale */}
        <div className="w-full bg-white/95">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <nav
              className={`flex items-center justify-between transition-all duration-300 ${
                shrink ? "h-16" : "h-20"
              }`}
            >
              {/* Logo */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Retour en haut"
                className="flex items-center gap-3"
              >
                <motion.img
                  src={logo}
                  alt="C&T Arbro"
                  animate={{ height: shrink ? 75 : 90 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-auto drop-shadow-sm"
                />
              </button>

              {/* Navigation Desktop */}
              <ul className="hidden md:flex items-center gap-10 text-[15.5px] text-slate-800 font-medium">
                {nav.map((n, i) => (
                  <li
                    key={i}
                    className="relative group cursor-pointer transition-all"
                  >
                    <button
                      onClick={() => smoothTo(n.hash)}
                      className="hover:text-[#1B4332] transition-all duration-300"
                    >
                      {n.label}
                    </button>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#1B4332]" />
                  </li>
                ))}
              </ul>

              {/* Actions principales */}
              <div className="hidden md:flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => smoothTo("#estimation")}
                  className="rounded-xl border border-[#2D6A4F] bg-white px-5 py-2 text-[15px] font-medium text-slate-900 shadow-sm hover:bg-[#F0FDF4] transition"
                >
                  Soumission
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  href="tel:8195550131"
                  className="rounded-xl bg-[#1B4332] px-5 py-2 text-[15px] font-semibold text-white shadow-sm hover:bg-[#163627] transition"
                >
                  Appeler
                </motion.a>
              </div>

              {/* Burger menu (mobile) */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </nav>

            {/* Drawer mobile animé */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden"
                >
                  <ul className="mt-2 space-y-1 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                    {nav.map((n, i) => (
                      <li key={i}>
                        <a
                          href={n.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            smoothTo(n.hash);
                          }}
                          className="block rounded-lg px-3 py-2 hover:bg-slate-50"
                        >
                          {n.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Ajustement d’espacement pour header fixe */}
      <div className="h-[108px] md:h-[116px]" />
    </>
  );
}
