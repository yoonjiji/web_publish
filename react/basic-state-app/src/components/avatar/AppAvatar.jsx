import "./Avatar.css";
import Avatar from "./Avatar.jsx";

export default function AppAvatar() {
  const list = [
    {
      img: "/images/people1.webp",
      name: "Smith",
      isNew: "new",
    },
    {
      img: "/images/people2.webp",
      name: "James",
    },
    {
      img: "/images/people3.webp",
      name: "Kelly",
    },
  ];
  return (
    <div className="container">
      <ul>
        {list &&
          list.map((item) => (
            <li>
              <Avatar img={item.img} name={item.name} isNew={item.isNew} />
            </li>
          ))}
      </ul>
    </div>
  );
}
