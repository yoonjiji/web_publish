export default function PackageContentItem({ src, alt, name, price }) {
  return (
    <a href="#">
      <div>
        <img src={src} alt={alt} />
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </a>
  );
}
