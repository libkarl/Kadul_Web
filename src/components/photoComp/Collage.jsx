import * as React from "react";
import "./collage.css";
import Residence from "../../assets/residence.jpg";
import Architect from "../../assets/architect.jpg";
import { Link } from "react-router-dom";
import brochure from "../../assets/kadul_brochure.pdf";
import { useTranslation } from "react-i18next";

// Functional component
export default function Collage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mx-auto text-center p-6 w-11/12 container">
        <h1 className="gallery_header  text-red-600">{t("gallery.title")}</h1>
      </div>
      <div className="collage mx-auto p-12 container" id="gallery">
        <div className="gallery">
          <div className="gallery-item rounded-3xl ">
            <div>
              <div className="py-10 px-10 overflow-hidden h-full w-full bg-white  duration-200 hover:scale-105 ">
                <img
                  src={Residence}
                  alt="plant"
                  className="h-auto w-full rounded-2xl"
                />
                <div className="p-6">
                  <p className="text-medium mb-5 h-28 text-gray-700">
                    Well, aren't you going up to the lake tonight, you've been
                    planning it for two weeks.
                  </p>
                  <Link
                    to={"kadulproject1"}
                    className="w-44 rounded-md py-3 p-4 bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black"
                  >
                    See Info
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item rounded-3xl ">
            <div>
              <div className="py-10 px-10 overflow-hidden h-full w-full bg-white  duration-200 hover:scale-105 ">
                <img
                  src={Residence}
                  alt="plant"
                  className="h-auto w-full rounded-2xl"
                />
                <div className="p-6">
                  <p className="text-medium mb-5 h-28 text-gray-700">
                    Well, aren't you going up to the lake tonight, you've been
                    planning it for two weeks.
                  </p>
                  <Link
                    to={"kadulproject1"}
                    className="w-44 rounded-md py-3 p-4 bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black"
                  >
                    See Info
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item rounded-3xl ">
            <div>
              <div className=" py-10 px-10 overflow-hidden h-full bg-white  duration-200 hover:scale-105 ">
                <img
                  src={Architect}
                  alt="plant"
                  className="h-110 w-full rounded-2xl"
                />
                <div className="p-6">
                  <p className="text-medium mb-5 h-28 text-gray-700">
                    Well, aren't you going up to the lake tonight, you've been
                    planning it for two weeks.
                  </p>
                  <Link
                    to={"kadulproject1"}
                    className="w-44 rounded-md py-3 p-4 bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black"
                  >
                    See Info
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item rounded-3xl ">
            <div>
              <div className=" py-10 px-10 overflow-hidden h-full bg-white  duration-200 hover:scale-105 ">
                <img
                  src={Architect}
                  alt="plant"
                  className="h-110 w-full rounded-2xl"
                />
                <div className="p-6">
                  <p className="text-medium mb-5 h-28 text-gray-700">
                    Well, aren't you going up to the lake tonight, you've been
                    planning it for two weeks.
                  </p>
                  <Link
                    to={"kadulproject1"}
                    className="w-44 rounded-md py-3 p-4 bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black"
                  >
                    See Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center p-6 w-11/12 flex-1 flex-row container mb-14">
        <h1 className="p-6 text-3xl text-red-600">
          {t("gallery.downloadText")}
        </h1>
        <a
          className="w-44 rounded-md py-3 p-8 bg-black text-white border-2 hover:bg-white hover:text-black hover:shadow-md duration-75 hover:border-2 border-black"
          href={brochure}
          role="button"
          download="kadul_brochure"
        >
          Download
        </a>
      </div>
    </>
  );
}
