import React from "react";

export default function Major({ icon, title, text }) {
  return (
    <>
      <i class={icon}></i>
      <p class="major__title">{title}</p>
      <p>{text}</p>
    </>
  );
}
