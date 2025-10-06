import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeUp } from "./animation.js";

const SERVICES = [
  "Émondage d’arbres",
  "Élagage d’arbres",
  "Abattage d’arbres",
  "Taille de haies",
  "Dessouchage / Essouchage d’arbres",
  "Haubanage",
  "Autre service"
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

function Estimator() {
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

    try {
      const fd = new FormData(form.current);
      console.log("🟢 Données envoyées à EmailJS :", Object.fromEntries(fd.entries()));
    } catch {}

    emailjs
      .sendForm(
        "service_ctarbro",      // ✅ Service ID
        "template_tyx1d78",     // ✅ Template ID (Contact Us)
        form.current,
        "Sr1s56qOZX0nKDGrN"     // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Merci ! Votre demande a bien été envoyée.");
          form.current.reset();
          setSelectedServices([]);
          setSending(false);
        },
        (error) => {
          console.error("❌ Erreur EmailJS :", error);
          alert("Une erreur est survenue, veuillez réessayer.");
          setSending(false);
        }
      );
  };

  return (
    <section id="estimation" className="bg-[#f8faf9] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.h2
          {...fadeUp(0)}
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-emerald-700"
        >
          Estimation
        </motion.h2>

        <motion.h3
          {...fadeUp(0.05)}
          className="mb-12 text-center text-3xl md:text-4xl font-extrabold text-slate-900"
        >
          Obtenez une soumission rapide
        </motion.h3>

        <motion.form
          ref={form}
          {...fadeUp(0.1)}
          onSubmit={onSubmit}
          className="mx-auto grid gap-8 rounded-3xl bg-white p-8 shadow-2xl border border-slate-200 md:p-10 md:grid-cols-2"
        >
          {/* Colonne gauche */}
          <div className="space-y-6">
            <Field label="Nom complet">
              <input
                name="name"
                type="text"
                required
                placeholder="Ex: Jean Tremblay"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Courriel">
              <input
                name="email"
                type="email"
                required
                placeholder="exemple@email.com"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Adresse complète">
              <input
                name="address"
                type="text"
                required
                placeholder="Ex: 123 Rue Principale, Magog"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>

            <Field label="Téléphone">
              <input
                name="phone"
                type="tel"
                required
                placeholder="Ex: 819-555-0131"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </Field>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            <Field label="Le service qui vous intéresse">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                      className="h-4 w-4 accent-emerald-600"
                    />
                    <span className="text-[15px] text-slate-700">{service}</span>
                  </label>
                ))}
              </div>
            </Field>

            {/* Champ caché pour EmailJS */}
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
                placeholder="Ex: Nombre d’arbres, accès, urgence, etc."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-[15px] focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none transition-all resize-none"
              />
            </Field>
          </div>

          {/* Bouton */}
          <div className="md:col-span-2 mt-4 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={sending}
              type="submit"
              className={`rounded-xl px-10 py-3 text-[16px] font-semibold text-white shadow-md transition-colors ${
                sending ? "bg-emerald-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {sending ? "Envoi en cours..." : "Envoyer la demande"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Estimator;
