// css
import "./css/cgv.css";
import "./css/commons.css";

// components
import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";

import Content from "./Content.jsx";
import Video from "./content/Video.jsx";
import MovieChart from "./content/MovieChart.jsx";
import EventSpecial from "./content/EventSpecial.jsx";
import Package from "./content/Package.jsx";

export default function AppCgv() {
  return (
    <>
      <Header>
        <HeaderTop />
        <HeaderBottom />
      </Header>
      <Content>
        <Video />
        <MovieChart />
        <EventSpecial />
        <Package />
      </Content>
    </>
  );
}
