export default function PackageContentItem({ src, alt, text, price }) {
  return (
    <a href="#">
      <div>
        <img src={src} alt={alt} />
      </div>
      <div>
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </a>
  );
}
