import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Kadul from "./pages/Kadul/Kadul";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { KadulProject1 } from "./components/projects/kadul1";
import CustomLoader from "./components/loader/loading";
import Oryx from "./pages/Oryx/Oryx";

function AppContent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="kadul" element={<Kadul />} />
          <Route path="oryx" element={<Oryx />} />
          <Route path="kadul/kadulproject1" element={<KadulProject1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <Suspense fallback=<CustomLoader />>
      <AppContent />
    </Suspense>
  );
}

export default App;

// <Header />
//<Navbar />
//<About />
//<Services />
//<Collage />
//<Testimonials/>
//<Contact />
//<Footer />
