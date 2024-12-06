export default function PackageContentTitle({ title }) {
  return (
    <div className="content-title-tyle">
      <span className="content-title-sub-tyle-font">{title}</span>
      <button className="package-content-button">더보기</button>
    </div>
  );
}
