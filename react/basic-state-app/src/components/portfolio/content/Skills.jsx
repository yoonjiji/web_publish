import React from "react";
import CodingSkill from "./codingSkill.jsx";

export default function Skills() {
  const skillToolList = [
    {
      name: "Visual Studio Code",
    },
    {
      name: "IntelliJ",
    },
    {
      name: "Android Studio Code",
    },
    {
      name: "iOS development tools",
    },
    {
      name: "Eclipse",
    },
  ];

  const skillEtcList = [
    {
      name: "Git",
    },
    {
      name: "Scrum Master",
    },
    {
      name: "SVN",
    },
  ];

  return (
    <section id="skill" className="section max-container">
      <h2 className="title">My Skills</h2>
      <p className="description">Skills & Attributes</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae,
        aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio
        natus? Cum, harum eum sint id quod nulla adipisci. Sunt?
      </p>
      <div className="skills">
        <CodingSkill />
        <article className="skills__tools">
          <h3 className="skill__title">Tools</h3>
          <ul>
            {skillToolList.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </article>

        <article className="skills__etc">
          <h3 className="skill__title">Etc</h3>
          <ul>
            {skillEtcList.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
