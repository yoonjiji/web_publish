import AvatarImage from "./AvatarImage.jsx";

export default function AvatarImageList({ list }) {
  return (
    <ul>
      {list.map((object) => (
        <li>
          <AvatarImage img={object.img} />
        </li>
      ))}
    </ul>
  );
}
/**
{
 * list = [
            { img: "/images/people1.webp" },
            { img: "/images/people2.webp" },
            { img: "/images/people3.webp" },
        ]
}   
 */

// object = {"img" : "/images/people1.webp"}
