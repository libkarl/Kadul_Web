import React, { Component } from "react";
import "./header.css";
import { BiBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" mt-16 mb-15 container mx-auto " id="home">
      <div className="bg-white ">
        <div className=" ml-12 flex items-center justify-between h-auto header">
          <div className="flex items-center">
            <a
              className="flex-shrink-0 "
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="">
                <BiBuildingHouse size={60} />
              </div>
            </a>
          </div>
          <div className="block">
            <div className=" flex items-center ">
              <div className="typewriter">
                <h1 className="font-semibold arial text-2xl mr-10  hidden 2xl:block ">
                  {t("header.moto")}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 relative right-10 sm:right-0">
            <span
              onClick={() => i18n.changeLanguage("cz")}
              style={{ width: "30px", height: "30px" }}
              className="fi fi-cz cursor-pointer"
            ></span>

            <span
              onClick={() => i18n.changeLanguage("en")}
              style={{ width: "30px", height: "30px" }}
              className="fi fi-gb cursor-pointer"
            ></span>
          </div>
          <div className=" flex items-center">
            <Link to="/" className="anime_bt mt-12">
              <span className="ef"></span>
              {t("header.button")}-{">"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
