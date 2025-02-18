import { Link } from "react-router-dom";

export default function MenuTap({ tapName, setTapName }) {
  const tabs = [
    { id: "detail", title: "DETAIL" },
    { id: "review", title: "REVIEW" },
    { id: "qna", title: "Q&A" },
    { id: "delivery", title: "RETURN & DELIVERY" },
  ];

  return (
    <ul className="taps">
      {tabs.map((tab) => (
        <li className={tapName === tab.id ? "active" : ""}>
          <Link to={`#${tab.id}`}>
            <button onClick={() => setTapName(tab.id)}>{tab.title}</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
