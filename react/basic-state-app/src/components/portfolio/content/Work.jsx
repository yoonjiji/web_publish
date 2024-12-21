import React from "react";
import CategorieList from "./CategorieList.jsx";
import ProjectList from "./ProjectList.jsx";

export default function Work() {
  return (
    <section id="work" class="section max-container">
      <h2 class="title">My work</h2>
      <p class="description">Projects</p>
      <CategorieList />
      <ProjectList />
    </section>
  );
}
