import React from "react";
import "./loading.css";

const CustomLoader = () => {
  return (
    <div class="loading-screen">
      <div class="loader-wrap">
        <span class="loader-animation"></span>
        <div class="loading-text">
          <span class="letter">L</span>
          <span class="letter">o</span>
          <span class="letter">a</span>
          <span class="letter">d</span>
          <span class="letter">i</span>
          <span class="letter">n</span>
          <span class="letter">g</span>
          <span class="letter">.</span>
          <span class="letter">.</span>
          <span class="letter">.</span>
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
