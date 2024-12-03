import Button from "./Button.jsx";

export default function ButtonList({ list }) {
  return (
    <ul>
      {list.map((object) => (
        <li>
          <Button type={object.type} name={object.name} />
        </li>
      ))}
    </ul>
  );
}
