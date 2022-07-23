import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Collage from "./components/photoComp/Collage"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    
    <>
     
      <Header />
      <Navbar />
      <About />
      
      <Testimonials/>
      <Contact />
      <Footer />
      
        
    </>
    
  );
}

export default App;
