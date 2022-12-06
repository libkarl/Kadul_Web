import React, { Component } from "react";
import kadulWall from "../../assets/kadulWall.png";
import ReactPlayer from "react-player";

class Technology extends Component {
  render() {
    return (
      <div class=" bg-white mb-14" id="possibilities">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div class="lg:text-center">
            <h2 class="text-3xl text-red-600 font-semibold tracking-wide text-center">
              Technology
            </h2>

            <p class="mt-4 p-6 mx-auto w-8/12 text-center text-xl text-black ">
              The each of our buildings is built by the most modern and suitable
              technology which is available on the market in these days.
            </p>
          </div>
          <div class="mt-10 w-11/12 mx-auto text-center">
            <div class="grid grid-flow-row auto-rows-max gap-6">
              <div class="mx-auto">
                <img class="h-full" src={kadulWall} alt="technology"></img>
              </div>
              <p class="mt-6 xl:mt-8 p-6 mx-auto w-11/12 text-center text-xl text-black ">
                The each of our buildings is built by the most modern and
                suitable technology which is available on the market in these
                days. is available on the market in these days. is available on
                the market in these days.is available on the market in these
                days. The each of our buildings is built by the most modern and
                suitable technology which is available on the market in these
                days. is available on the market in these days. is available on
                the market in these days.is available on the market in these
                days. The each of our buildings is built by the most modern and
                suitable technology which is available on the market in these
                days. is available on the market in these days. is available on
                the market in these days.is available on the market in these
                days.
              </p>
            </div>
          </div>
          <p class="mt-4 pl-18 mx-auto w-8/12 text-left text-2xl font-semibold text-red-600 ">
            Kadul work process presentation
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
  }
}

export default Technology;
