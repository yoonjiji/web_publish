import React from "react";
import CodingBar from "./CodingBar.jsx";

export default function Coding() {
  const codeList = [
    {
      title: "HTML",
      percent: "98%",
    },
    {
      title: "CSS",
      percent: "90%",
    },
    {
      title: "JavaScript",
      percent: "90%",
    },
    {
      title: "TypeScript",
      percent: "80%",
    },
    {
      title: "React",
      percent: "79%",
    },
    {
      title: "NodeJS",
      percent: "68%",
    },
  ];
  return (
    <article class="sklls__coding">
      <h3 class="skill__title">Coding Skills</h3>
      <ul>
        {codeList.map((item) => (
          <li class="bar">
            <CodingBar title={item.title} percent={item.percent} />
          </li>
        ))}
      </ul>
    </article>
  );
}
