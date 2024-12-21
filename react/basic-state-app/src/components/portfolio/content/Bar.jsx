import React from "react";

export default function Bar({ name, percent }) {
  return (
    <li class="bar">
      <div class="bar__metadata">
        <span>{name}</span>
        <span>{percent}</span>
      </div>
      <div class="bar__bg">
        <div class="bar__value" style={{ width: percent }}></div>
      </div>
    </li>
  );
}
