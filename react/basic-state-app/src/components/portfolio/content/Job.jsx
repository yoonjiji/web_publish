import React from "react";

export default function Job({ img, alt, name, period }) {
  return (
    <li class="job">
      <img src={img} alt={alt} />
      <div>
        <p class="job__name">{name}</p>
        <p class="job__period">{period}</p>
      </div>
    </li>
  );
}
