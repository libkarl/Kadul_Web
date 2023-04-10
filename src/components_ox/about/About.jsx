import React from "react";
import "./about.css";
import ME from "../../assets/logo.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { GiCrane } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" class="prose mt-10 mx-auto p-6">
      <div class="container about__container ">
        <div class="about__me">
          <div class="about__me-image">
            <img class="img_me" src={ME} alt="about" />
          </div>
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article class="about__card">
              <FiAward class="about__icon" />
              <h5>{t("about.experiences.title")}</h5>
              <small>{t("about.experiences.info")}</small>
            </article>
            <article class="about__card">
              <FiUsers class="about__icon" />
              <h5>{t("about.clients.title")}</h5>
              <small>{t("about.clients.info")}</small>
            </article>
            <article class="about__card">
              <GiCrane class="about__icon" />
              <h5>{t("about.projects.title")}</h5>
              <small>{t("about.projects.info")}</small>
            </article>
          </div>
          <h6 class="mt-2">{t("about.title")}</h6>
          <p class="mb-6 mt-6  mx-auto ">{t("about.text.part1")}</p>
          <p class="mb-6 mt-3  mx-auto ">{t("about.text.part2")}</p>

          <a
            href="#contact"
            class="mt-5 ml-2 rounded-md bg-black px-10 py-2 text-white
           hover:bg-white hover:text-black hover:font-semibold hover:border-2 hover:border-black mb-5"
          >
            {t("about.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
