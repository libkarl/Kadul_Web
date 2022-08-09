import React from 'react'
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import About from "../../components/about/About"
import Services from "../../components/services/Services"
import Collage from "../../components/photoComp/Collage"
import Testimonials from "../../components/testimonials/Testimonials"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer" 

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