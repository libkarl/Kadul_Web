import React, { Component } from "react";
import "./footer.css";
import CompanyLogo from "../../assets/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer class="p-2 bg-white rounded-lg shadow md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.kadul.com/index.php/en/home-2/"
            class="flex items-center mb-4 sm:mb-0"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CompanyLogo}
              style={{
                maxWidth: "130px",
                maxHeight: "130px",
                marginBottom: "-3.5rem",
              }}
              class="mr-3 "
              alt="Company Logo"
            />
          </a>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://karldev.com/" class="hover:underline">
            DevCon
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    );
  }
}

export default Footer;
