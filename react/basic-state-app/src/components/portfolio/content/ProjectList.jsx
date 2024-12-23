import React from "react";
import Project from "./Project.jsx";

export default function ProjectList({ list }) {
  return (
    <ul class="projects">
      {list &&
        list.map((item) => (
          <Project
            img={item.img}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
    </ul>
  );
}
