import { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar.jsx";
import AvatarImage from "./components/AvatarImage.jsx";
import AvatarImageList from "./components/AvatarImageList.jsx";
import AvatarList from "./components/AvatarList.jsx";
import Menu from "./components/Menu.jsx";

export default function App() {
  const [imgList, setImgList] = useState([]);
  const [avatarList, setAvatarList] = useState([]);

  useEffect(() => {
    fetch("data/avatar.json")
      .then((result) => result.json())
      .then((jsonDeta) => {
        setImgList(jsonDeta.imgList);
        setAvatarList(jsonDeta.avatarList);
      })
      .catch();
  }, []);
  console.log(`imgList => ${imgList}`);

  return (
    <div className="App">
      <Menu />
      <div className="App-container">
        <Avatar img="/images/people1.webp" name="Smith" />
        <Avatar img="/images/people2.webp" name="James" />
        <Avatar img="/images/people3.webp" name="Sujin" />
      </div>
      <div className="App-container">
        <AvatarImage img="/images/people1.webp" />
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div className="App-container">
        <AvatarImageList list={imgList} />
      </div>
      <div className="App-container">
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}
