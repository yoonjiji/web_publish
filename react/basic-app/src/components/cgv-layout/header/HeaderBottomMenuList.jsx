import HeaderBottomMenu from "./HeaderBottomMenu.jsx";

export default function HeaderBottomMenuList() {
  const names = [
    { name: "영화" },
    { name: "극장" },
    { name: "예매" },
    { name: "스토어" },
    { name: "이벤트" },
    { name: "혜택" },
  ];

  return (
    <ul className="flex-container">
      {names.map((item) => (
        <li>
          <HeaderBottomMenu name={item.name} />
        </li>
      ))}
    </ul>
  );
}
