import React, { Component } from "react";
import kadulWall from "../../assets/kadulWall.png";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const Technology = () => {
  const { t } = useTranslation();
  return (
    <div class=" bg-white mb-14" id="possibilities">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div class="lg:text-center">
          <h2 class="text-3xl text-red-600 font-semibold tracking-wide text-center">
            {t("technology.title")}
          </h2>

          <p class="mt-4 p-6 mx-auto w-10/12 text-center text-lg text-black ">
            {t("technology.evoInfo.part1")}
          </p>
          <p class="mt-2 p-6 mx-auto w-8/12 text-center text-lg text-black ">
            {t("technology.evoInfo.part2")}
          </p>
          <a
            target="_blank"
            class="text-blue-600"
            href="https://www.EVOMODULE.pl"
          >
            www.EVOMODULE.pl
          </a>
        </div>
        <div class="mt-10 w-11/12 mx-auto text-center">
          <div class="grid grid-flow-row auto-rows-max gap-6">
            <div class="mx-auto">
              <img class="h-full" src={kadulWall} alt="technology"></img>
            </div>
            <div class="grid grid-flow-row auto-rows-max gap-6"></div>
            <div class="flex-1">
              <h6 class="text-center text-lg text-red-600 font-semibold">
                Elastolith
              </h6>
              <p class="mt-2 p-6 mx-auto w-10/12 text-center text-lg text-black ">
                {t("technology.elastolith")}
              </p>
            </div>
            <div class="flex-1">
              <h6 class="text-center text-lg text-red-600 font-semibold">
                Aquafire
              </h6>
              <p class="mt-2 p-6 mx-auto w-10/12 text-center text-lg text-black ">
                {t("technology.aquafire")}
              </p>
            </div>
            <div class="flex-row">
              <div>
                <h6 class="text-center text-lg text-red-600 font-semibold">
                  3Thermo
                </h6>
                <p class="mt-2 p-6 mx-auto w-10/12 text-center text-lg text-black ">
                  {t("technology.3thermo.part1")}
                </p>
              </div>

              <p class="mt-2 p-6 mx-auto w-10/12 text-center text-lg text-black ">
                {t("technology.3thermo.part2")}
              </p>
            </div>
          </div>
        </div>
        <p class="mt-4 pl-18 mx-auto w-8/12 text-left text-2xl font-semibold text-red-600 ">
          {t("technology.videoTitle")}
        </p>
        <div class="mt-4 mx-auto text-center">
          <div class="flex flex-1 justify-center w-8/12 mx-auto">
            <ReactPlayer
              height={500}
              width="100%"
              class="w-full"
              url="https://www.youtube.com/watch?v=rEtaR8vYjC4s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
