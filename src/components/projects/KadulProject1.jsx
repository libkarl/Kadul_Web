import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "../footer/Footer";

import Nav from "../navbar/Navbar";
import AboutProject from "./AboutProject";
import NavbarProject from "./NavbarProject";
import ProjectGallery from "./ProjectGallery";
import ProjectIntroduction from "./ProjectIntroduction";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      xsm: 450,
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      lgs: 1400,
      xl: 1536,
      xxl: 1800,
      ultra: 2000, // large screens
    },
  },
});

export const KadulProject1 = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarProject />
        <AboutProject />
        <ProjectGallery />
        <ProjectIntroduction />
        <Nav />
        <Footer />
      </ThemeProvider>
    </>
  );
};
