import React from "react";
import Header from "../../components_ox/header/Header";
import Navbar from "../../components_ox/navbar/Navbar";
import About from "../../components_ox/about/About";
import Services from "../../components_ox/services/Services";
import Collage from "../../components_ox/photoComp/Collage";
import Testimonials from "../../components_ox/testimonials/Testimonials";
import Contact from "../../components_ox/contact/Contact";
import Footer from "../../components_ox/footer/Footer";
import Technology from "../../components_ox/technology/Technology";

function Oryx() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Services />
      <Technology />
      <Collage />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Oryx;
