import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Collage from "./components/photoComp/Collage"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Testimonials from './components/testimonials/Testimonials';
import Services from "./components/services/Services"

function App() {
  return (
    
    <>
     
      <Header />
      <Navbar />
      <About />
      <Services />
      <Collage />
      <Testimonials/>
      <Contact />
      <Footer />
      
        
    </>
    
  );
}

export default App;
