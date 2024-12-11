export default function AirbnbComponent(props) {
  return (
    <div className="container">
      <div className="content">
        <div>
          <img src={props.src} alt="img" />
          {props.isGood && <span className="isgood">게스트 선호</span>}
          <span className="isheart" style={{ color: props.color }}>
            ♥
          </span>
        </div>
        {/* <img src={src} alt="하트" /> */}
        <p>{props.name}</p>
        <p className="textGray">{props.view}</p>
        <p className="textGray">{props.date}</p>
        <p>
          <span className="textBold">{props.price}</span> /박
        </p>
      </div>
    </div>
  );
}
