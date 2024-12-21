import React, { useEffect, useState } from "react";
import Job from "./Job.jsx";

export default function JobList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => setList(jsonData.AboutJobList))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul class="jobs">
      {list.map((item) => (
        <Job
          img={item.img}
          alt={item.alt}
          name={item.name}
          period={item.period}
        />
      ))}
    </ul>
  );
}
