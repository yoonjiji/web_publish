import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials.jsx";

export default function TestimonialList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.testimonialList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section id="testimonial" class="section max-container">
      <h2 class="title">Testimonial</h2>
      <p class="description">See what they say about me</p>
      <ul class="testimonials">
        {list &&
          list.map((item) => (
            <Testimonials
              img={item.img}
              alt={item.alt}
              text={item.text}
              name={item.name}
              company={item.company}
            />
          ))}
      </ul>
    </section>
  );
}
