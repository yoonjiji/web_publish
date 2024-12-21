import React from "react";

export default function Testimonials(props) {
  return (
    <li class="testimonial">
      <img class="testimonial__img" src={props.img} alt={props.alt} />
      <div class="testimonial__bubble">
        <p>{props.text}</p>
        <p>
          <a href="#" class="testimonial__bubble__name">
            {props.name}
          </a>
          / {props.company}
        </p>
      </div>
    </li>
  );
}
