import React from "react";
import MajorList from "./MajorList.jsx";
import JobList from "./JobList.jsx";

export default function About() {
  return (
    <section id="about" class="section max-container">
      <h2 class="title">About me</h2>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus,
        temporibus perspiciatis repudiandae nostrum modi doloremque expedita non
        eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto
        ipsa inventore adipisci.
      </p>
      <MajorList />
      <JobList />
    </section>
  );
}
