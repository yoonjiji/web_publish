import PackageContentTitle from "./PackageContentTitle.jsx";
import PackageContentItem from "./PackageContentItem.jsx";

export default function PackageContent({ title, list }) {
  return (
    <div className="content-border">
      <PackageContentTitle title={title} />
      <ul>
        {/* list 객체가 null이 아니면 map 실행 */}
        {list &&
          list.map((item) => (
            <li>
              <PackageContentItem
                src={item.src}
                alt={item.alt}
                text={item.text}
                price={item.price}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
