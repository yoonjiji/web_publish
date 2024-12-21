import React from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

import HeaderTop from "./header/HeaderTop.jsx";
import Home from "./content/Home.jsx";

import About from "./content/About.jsx";
import Skills from "./content/Skills.jsx";
import Work from "./content/Work.jsx";
import Testimonial from "./content/Testimonial.jsx";
import Contect from "./footer/Contect.jsx";
import TopBtn from "./content/TopBtn.jsx";

import "./css/style.css";

export default function AppPortfolio() {
  return (
    <>
      <Header>
        <HeaderTop />
      </Header>
      <Content>
        <Home />
        <About />
        <Skills />
        <Work />
        <Testimonial />
        <TopBtn />
      </Content>
      <Footer>
        <Contect />
      </Footer>
    </>
  );
}
