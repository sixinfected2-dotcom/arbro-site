// src/Estimation.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp } from "./Helpers"; // ✅ on garde cohérence avec tes autres composants
import { Phone, Mail, MapPin } from "lucide-react";

/* =========================================================================
   Section Estimation — Version haut de gamme professionnelle
============================================================================ */

const SERVICES = [
  "Émondage d’arbres",
  "Élagage d’arbres",
  "Abattage d’arbres",
  "Taille de haies",
  "Dessouchage / Essouchage d’arbres",
  "Haubanage",
  "Autre service",
];

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Estimation() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ctarbro", // ✅ ID EmailJS
        "template_tyx1d78",
        form.current,
        "Sr1s56qOZX0nKDGrN"
      )
      .then(
        () => {
          alert("✅ Merci ! Votre demande a bien été envoyée à C&T Arbro.");
          form.current.reset();
          setSelectedServices([]);
        },
        (error) => {
          console.error("❌ Erreur EmailJS :", error);
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section
      id="estimation"
      className="relative bg-[#f8faf9] py-24 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* TITRES */}
        <motion.h2
          {...fadeUp(0)}
          className="text-sm font-semibold uppercase tracking-widest text-emerald-700 text-center"
        >
          Estimation gratuite
        </motion.h2>

        <motion.h3
          {...fadeUp(0.05)}
          className="mt-3 mb-12 text-3xl md:text-4xl font-bold text-center text-slate-900"
        >
          Obtenez votre soumission en quelques clics
        </motion.h3>

        {/* FORMULAIRE */}
        <motion.form
          ref={form}
          {...fadeUp(0.1)}
          onSubmit={onSubmit}
          className="mx-auto grid gap-10 rounded-3xl bg-white p-8 shadow-lg border border-slate-200 md:p-12 md:grid-cols-2"
        >
          {/* Colonne gauche */}
          <div className="space-y-6">
            <Field label="Nom complet">
              <input
                name="name"
                type="text"
                required
                placeholder="Ex : Jean Tremblay"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Courriel">
              <input
                name="email"
                type="email"
                required
                placeholder="exemple@email.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Adresse complète">
              <input
                name="address"
                type="text"
                required
                placeholder="Ex : 123 Rue Principale, Magog"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Téléphone">
              <input
                name="phone"
                type="tel"
                required
                placeholder="Ex : 819-843-3101"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            <Field label="Le service qui vous intéresse">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                      className="h-4 w-4 accent-emerald-600"
                    />
                    <span className="text-[15px] text-slate-700">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            {/* Champ caché */}
            <input
              type="hidden"
              name="services"
              value={selectedServices.join(", ")}
              readOnly
            />

            <Field label="Détails supplémentaires">
              <textarea
                name="details"
                rows={5}
                placeholder="Ex : Nombre d’arbres, accès, urgence, etc."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all resize-none"
              />
            </Field>
          </div>

          {/* Bouton */}
          <div className="md:col-span-2 mt-6 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={sending}
              type="submit"
              className={`rounded-xl px-10 py-3.5 text-[16px] font-semibold text-white shadow-md transition-all duration-300 ${
                sending
                  ? "bg-emerald-400 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg"
              }`}
            >
              {sending ? "Envoi en cours..." : "Envoyer ma demande"}
            </motion.button>
          </div>
        </motion.form>

        {/* Bloc contact direct */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 text-center text-slate-600 text-[15px] space-y-3"
        >
          <p className="font-medium">
            Vous préférez nous contacter directement ?
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-700 font-medium">
            <a
              href="tel:8198433101"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <Phone className="h-4 w-4" /> (819) 843-3101
            </a>
            <a
              href="mailto:info@ctarbro.com"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <Mail className="h-4 w-4" /> info@ctarbro.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Magog, Estrie
            </span>
          </div>
        </motion.div>
      </div>

      {/* Effets décoratifs */}
      <div className="absolute -top-24 left-0 w-[320px] h-[320px] bg-emerald-100/40 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 right-0 w-[280px] h-[280px] bg-emerald-200/30 blur-3xl rounded-full opacity-40" />
    </section>
  );
}
