import React, { Suspense } from "react";
import AppRoot from "./AppRoot";

/* =========================================================================
   App.jsx — Point d’entrée principal
============================================================================ */
export default function App() {
  return (
    <Suspense fallback={<div className="text-center py-20">Chargement du site...</div>}>
      <AppRoot />
    </Suspense>
  );
}
