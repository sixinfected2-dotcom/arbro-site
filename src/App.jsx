import React from "react";
import AppRoot from "./AppRoot";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* =========================================================================
   App.jsx — Point d’entrée principal de l’application
   (AppRoot contient toute la structure et les animations)
============================================================================ */
export default function App() {
  return (
    <>
      <AppRoot />
      <SpeedInsights />
    </>
  );
}
