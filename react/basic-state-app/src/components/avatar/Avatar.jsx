export default function Avatar(props) {
  return (
    <>
      <img src={props.img} alt="img" />
      <p>{props.name}</p>
      {props.isNew && <span className="new">new</span>}
    </>
  );
}
