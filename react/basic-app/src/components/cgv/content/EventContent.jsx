export default function EventContent({ src, title, date }) {
  return (
    <>
      <div>
        <a href="#">
          <img src={src} alt="이벤트 광고" />
        </a>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </>
  );
}
