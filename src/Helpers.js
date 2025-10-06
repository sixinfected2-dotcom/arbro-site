/* =========================================================================
   Helpers — Animations, transitions et scroll fluide global
============================================================================ */

// Animation standard vers le haut (fade + mouvement)
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

// Animation standard (fade uniquement)
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

/* =========================================================================
   Scroll fluide intelligent (ajusté pour header fixe)
============================================================================ */
export const smoothTo = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;

  // Hauteur du header sticky (responsive)
  const header = document.querySelector("header");
  const headerHeight = header ? header.offsetHeight : 90;

  // Position Y de la cible
  const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;

  // Scroll fluide avec léger easing
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  // Ajout visuel : flash subtil sur la section ciblée (repère visuel)
  el.style.transition = "box-shadow 0.5s ease";
  el.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.4)";
  setTimeout(() => {
    el.style.boxShadow = "none";
  }, 1000);
};
