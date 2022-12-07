import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Kadul from "./pages/Kadul/Kadul";
import { KadulProject1 } from "./components/projects/kadul1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="kadul" element={<Kadul />} />
          <Route path="kadul/kadulproject1" element={<KadulProject1 />} />
        </Routes>
      </BrowserRouter>
    </>
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
