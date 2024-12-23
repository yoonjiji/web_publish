import "./App.css";
// Layout
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

// header components
import Logo from "./components/header/Logo.jsx";
import MenuList from "./components/header/MenuList.jsx";
import ToggleButton from "./components/header/ToggleButton.jsx";

// content components
import Home from "./components/content/Home.jsx";
import Majors from "./components/content/Majors.jsx";
import Jobs from "./components/content/Jobs.jsx";
import Skills from "./components/content/Skills.jsx";
import Coding from "./components/content/Coding.jsx";
import SectionWrap from "./components/content/SectionWrap.jsx";
import Article from "./components/content/Article.jsx";
import Categories from "./components/content/Categories.jsx";
import Projects from "./components/content/Projects.jsx";
import Testimonials from "./components/content/Testimonials.jsx";
import Arrow from "./components/content/Arrow.jsx";

// Footer components
import Top from "./components/footer/Top.jsx";
import ContectLinks from "./components/footer/ContectLinks.jsx";
import Bottom from "./components/footer/Bottom.jsx";

import "./css/style.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo img="images/favicon.ico" name="Yoon" />
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home img="images/favicon.ico" name="Yoon" />
        <SectionWrap
          id="about"
          title="About me"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            beatae, aliquid ratione commodi nam ex voluptate rem eveniet
            cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci.
            Sunt?!"
        >
          <Majors />
          <Jobs />
        </SectionWrap>
        <SectionWrap id="skill" title="My Skills" description="">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            beatae, aliquid ratione commodi nam ex voluptate rem eveniet
            cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci.
            Sunt?
          </p>
          <Skills>
            <Coding />
            <Article type="tools" />
            <Article type="etc" />
          </Skills>
        </SectionWrap>
        <SectionWrap id="work" title="My Work" description="Projects">
          <Categories />
          <Projects />
        </SectionWrap>
        <SectionWrap
          id="testimonial"
          title="Testimonials"
          description="See what they say about me"
        >
          <Testimonials />
        </SectionWrap>
        <Arrow />
      </Content>
      <Footer>
        <Top title="Let's talk" description="" />
        <ContectLinks />
        <Bottom />
      </Footer>
    </>
  );
}
