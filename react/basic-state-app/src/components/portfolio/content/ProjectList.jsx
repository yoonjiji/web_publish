import React, { useEffect, useState } from "react";
import Project from "./Project.jsx";

export default function ProjectList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.projectList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul class="projects">
      {list.map((item) => (
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
