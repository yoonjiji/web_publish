import React from "react";
import Testimonial from "./Testimonial.jsx";

export default function Testimonials() {
  const testimonialList = [
    {
      img: "images/testimonials/people1.webp",
      alt: "people1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
      name: "James Kim",
      company: "Google",
    },
    {
      img: "images/testimonials/people2.webp",
      alt: "people2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore necessitatibus sequi id obcaecati, assumenda quam corrupti. Numquam blanditiis praesentium, similique autem, accusamus debitis cupiditate, tempora officiis sed inventore nihil incidunt.",
      name: "Smith Park",
      company: "Samsung",
    },
    {
      img: "images/testimonials/people3.webp",
      alt: "people3",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nulla incidunt autem ullam, commodi in impedit repellat exercitationem provident at recusandae doloremque pariatur temporibus hic blanditiis explicabo voluptatibus neque aliquam.",
      name: "Anna Jin",
      company: "Samsung",
    },
  ];
  return (
    <ul class="testimonials">
      {testimonialList.map((item) => (
        <li class="testimonial">
          <Testimonial
            img={item.img}
            alt={item.alt}
            text={item.text}
            name={item.name}
            company={item.company}
          />
        </li>
      ))}
    </ul>
  );
}
