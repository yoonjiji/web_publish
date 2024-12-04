import Dwitter from "./Dwitter.jsx";
import { useEffect, useState } from "react";
import "./Dwitter.css";

export default function AppDwitter() {
  const [dwitters, setDwitters] = useState([]);

  //useStatus - 리액트에서 사용자가 정의한 변수, 객체들 관리
  // react network 접속 진행 시 ==> useEffect() 리액트 Hooks 사용한다
  // react hooks -- useEffect();
  // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수
  useEffect(() => {
    fetch("data/dwitters.json") // network 통해서 json 접근
      .then((result) => result.json())
      .then((jsonData) => setDwitters(jsonData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="dwitter-container">
      <h1>Dwitter</h1>
      <ul className="dwitter-menu">
        <li>All Dwitter</li>
        <li>My Dwitter</li>
        <li>Login / Signup</li>
      </ul>
      {/* Dwitter map을 통해 출력 */}
      {dwitters.map((object) => (
        <Dwitter
          img={object.img}
          name={object.name}
          id={object.id}
          date={object.date}
          content={object.content}
        />
      ))}
    </div>
  );
}
