import "./main.css";
import React from "react";
import MainHeader from "../../components/main_header/Main_header";
import Cards from "../../components/cards/Cards";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Main = function () {
  return (
    <HelmetProvider> <div className="bg">
    <Helmet>
     <title>House For Everyone</title>
    
    </Helmet>
    <MainHeader />
    <Cards />
  </div>
</HelmetProvider>     
  );
};

export default Main;
