export default function EventItem({ src, title, date }) {
  return (
    <>
      <div>
        <img src={src} alt="이벤트 광고" width="200px" />
      </div>

      <p>{title}</p>
      <p>{date}</p>
    </>
  );
}
