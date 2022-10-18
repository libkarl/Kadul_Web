import React from "react";
import "./cards.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import Residence from "../../assets/residence.jpg";
import Mountain from "../../assets/Uvod.jpg";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/kadul-logo.jpg"

const Cards = () => {
  return (
    <section className="container w-screen mt-8 h-full sm:h-screen">
      <div className=" w-full flex flex-wrap content-center justify-center mx-auto  py-5 md:px-6 gap-6">
      <Link to="kadul">
          <Tilt>
            <article className="bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4 ">
              
                <img alt="Placeholder" className="h-52 w-full" src={Residence}></img>
              

              <div className="rounded-lg z-50 bg-white relative -mt-2 p-4">
                <header className="leading-tight -mt-4 ml-1">
                  <img
                    className="no-underline -ml-16 text-black h-34 scale-50 mt-2 mb-4 "
                    src={Logo2}
                    alt="Placeholder"
                  ></img>
                </header>

                <p className="leading-tight pb-2 md:pb-4 text-center -mt-2 mb-1">
                    Modern construction industry creates new needs and challenges. Eco-friendly style, best possible workmanship and 
                    promptness of service. Knowing these requirements, Kadul company 
                    offers innovative solutions, which allow to save time and money.
                </p>

                <div className="py-4 flex justify-around flex-wrap  -mt-5">
                    <button>
                        <div class="flex items-center ml-44">
                            <Link to='kadul'class="anime_bt_ln mt-8 -mb-4"><span class="ef"></span>Open-></Link>
                        </div>
                    </button>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>

        <Link to="kadul">
          <Tilt>
            <article className="bg-white overflow-hidden rounded-lg shadow-lg w-72 m-4 ">
              
                <img alt="Placeholder" className="h-52 w-full" src={Mountain}></img>
              

              <div className="rounded-lg z-50 bg-white relative -mt-2 p-4">
                <header className="leading-tight -mt-4">
                  <img
                    className="no-underline hover:underline text-black h-36 -mb-4 "
                    src={Logo}
                    alt="Placeholder"
                  ></img>
                </header>

                <p className="leading-tight pb-2 md:pb-4 text-center -mt-2 mb-1">
                  Company draws on the experience of producing plastic tanks and
                  reservoirs, which executives of the company engaged in since
                  1982. The company is engaged in the production of plastic
                  products especially swimming pool, bathtubs, etc.
                </p>

                <div className="py-4 flex justify-around flex-wrap  -mt-5">
                    <button>
                        <div class="flex items-center ml-44">
                            <Link to='kadul'class="anime_bt_ln mt-8 -mb-4"><span class="ef"></span>Open-></Link>
                        </div>
                    </button>
                </div>
              </div>
            </article>
          </Tilt>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
