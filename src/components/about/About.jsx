import React from 'react'
import './about.css'
import ME from "../../assets/kadul-logo.jpg"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {GiCrane} from "react-icons/gi"



const About = () => {
  return (
    <section id="about" class="prose mt-10 mx-auto p-6">
      <div class="container about__container ">
        <div class="about__me">
          <div class="about__me-image">
            <img class="img_me" src={ME} alt = "About Image" />
          </div>
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
              <FiAward class='about__icon'/>
              <h5>Experience </h5>
              <small>3+ Years Working</small>
            </article>
            <article class="about__card">
              <FiUsers class='about__icon'/>
              <h5>Clients </h5>
              <small>50 + Worldwide</small>
            </article>
            <article class="about__card">
              <GiCrane class='about__icon'/>
              <h5>Projects </h5>
              <small>80+ Projects</small>
            </article>
          </div>

          <p class="mb-6 mt-6  mx-auto ">
          
          Modern construction industry creates new needs and challenges. Eco-friendly style, best possible workmanship and promptness of service are bread and butter for entrepreneurs and builders.
          Knowing these requirements, Kadul company offers innovative solutions, which allow to save time and money, and what is more – they are eco-friendly.
          </p>

          <a href="#contact" class="mt-5 ml-2 rounded-md bg-black px-10 py-2 text-white
           hover:bg-white hover:text-black hover:font-semibold hover:border-2 hover:border-black mb-5" >Let's Talk</a>
        </div>  
      </div>
    </section>
  )
}

export default About