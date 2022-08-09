import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from "./pages/Main/Main"
import Kadul from "./pages/Kadul/Kadul"

function App() {
  return (
    
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='kadul' element={<Kadul />} />
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