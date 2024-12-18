import React from "react";

export default function BestBookContent(props) {
  return (
    <div className="container-content">
      <div className="container-content-tags">
        {props.suggest && <button>강력추천</button>}
        {props.today && <button>오늘의 책</button>}
      </div>
      <div>
        <span>[{props.type}]</span>
        <span>{props.title}</span>
      </div>
      <div>
        <span>{props.author}</span>
        <span>{props.company}</span>
        <span>{props.pubDate}</span>
      </div>
      <div>
        <span>{props.price}</span>
        <span>({props.perSele}% 할인)</span>
        <span>{props.point}원</span>
      </div>
    </div>
  );
}
