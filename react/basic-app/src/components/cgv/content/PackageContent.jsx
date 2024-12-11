import PackageContentItem from "./content/PackageContentItem";

export default function PackageContent({ title, list }) {
  return (
    <>
      <div class="content-title-tyle">
        <span class="content-title-sub-tyle-font">{title}</span>
        <button class="package-content-button">더보기</button>
      </div>
      <ul>
        {list.map((object) => (
          <li>
            <PackageContentItem
              src={object.src}
              alt={object.alt}
              name={object.name}
              price={object.price}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
