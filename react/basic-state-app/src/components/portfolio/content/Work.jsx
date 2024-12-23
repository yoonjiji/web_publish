import React, { useEffect, useState } from "react";
import CategorieList from "./CategorieList.jsx";
import ProjectList from "./ProjectList.jsx";

export default function Work() {
  const [menuList, setMenuList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [category, setCategory] = useState("total");

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((data) => data.json())
      .then((jsonData) => {
        setMenuList(jsonData.categorieList);

        if (category === "total") {
          setProjectList(jsonData.projectList);
        } else {
          const filterArray = jsonData.projectList.filter(
            (project) => project.category === category
          );
          setProjectList(filterArray);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  const handleMenuClickReq2 = (category) => {
    console.log(`Work -->${category}`);
    setCategory(category);
  };
  console.log(`category -->${category}`);

  return (
    <section id="work" class="section max-container">
      <h2 class="title">My work</h2>
      <p class="description">Projects</p>
      <CategorieList list={menuList} click={handleMenuClickReq2} />
      <ProjectList list={projectList} />
    </section>
  );
}
