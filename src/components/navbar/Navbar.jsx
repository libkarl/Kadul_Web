import React from 'react'
import './navbar.css'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineRateReview} from "react-icons/md"
import {BiBookBookmark} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {MdOutlinePhoneInTalk} from "react-icons/md"
import {useState} from 'react'

/* kotva_nav bar- pokud je activeNav  roven  # chceme jí dát class name active  */
/* pokud ne, bude class name prazdny string */
/* vytvoří se konstanta activeNav v ní je default nastavena jako */
/* aktivní komponent header */
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#home" onClick= {() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#collage" onClick= {() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><RiServiceLine/></a>
      <a href="#experience" onClick= {() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookBookmark/></a>
      <a href="#testimonials" onClick= {() => setActiveNav("#testimonials")} className={activeNav === "#testimonials" ? "active" : ""}><MdOutlineRateReview/></a>
      <a href="#contact" onClick= {() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdOutlinePhoneInTalk/></a>
    </nav>
  )
}

export default Nav