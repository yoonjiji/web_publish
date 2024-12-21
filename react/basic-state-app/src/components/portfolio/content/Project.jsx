import React from "react";

export default function Project({ img, alt, title, text }) {
  return (
    <li class="project">
      <img class="project__img" src={img} alt={alt} />
      <div class="project__metadata">
        <h3 class="project__metadata__title">{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}
