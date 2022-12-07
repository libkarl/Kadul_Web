import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/* kotva_nav bar- pokud je activeNav  roven  # chceme jí dát class name active  */
/* pokud ne, bude class name prazdny string */
/* vytvoří se konstanta activeNav v ní je default nastavena jako */
/* aktivní komponent header */

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const location = useLocation();
  const navigate = useNavigate();
  const returnToMainPage = (href) => {
    if ((location.pathname !== "/kadul") | "/oryx") {
      location.pathname.split("/")[1] === "kadul"
        ? navigate("/kadul")
        : navigate("/oryx");
    }
    setActiveNav(href);
  };

  return (
    <nav>
      <a
        href="#home"
        onClick={() => returnToMainPage("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#possibilities"
        onClick={() => returnToMainPage("#possibilities")}
        className={activeNav === "#possibilities" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#gallery"
        onClick={() => returnToMainPage("#gallery")}
        className={activeNav === "#gallery" ? "active" : ""}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#testimonials"
        onClick={() => returnToMainPage("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <MdOutlineRateReview />
      </a>
      <a
        href="#contact"
        onClick={() => returnToMainPage("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlinePhoneInTalk />
      </a>
    </nav>
  );
};

export default Nav;
