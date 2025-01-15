import React, { useEffect, useState } from "react";
import ProductAvata from "./ProductAvata.jsx";
import axios from "axios";

export default function ProductList() {
  const [list, setList] = useState([]); // list 변경시 실시간 업데이트
  // 객체를 가르키는 값, 넣고 빼는 값
  useEffect(() => {
    axios
      .get("data/product.json")
      .then((res) => setList(res.data))
      .catch((error) => console.log(error));

    // fetch("data/product.json")
    //   .then((data) => data.json())
    //   .then((jsonData) => setList(jsonData)) // jsonData를 전역변수화
    //   // 1. js에서 객체마다 스코프가 정해져있기 때문에 setList로 전역변수로 만들어줌
    //   // 2. 데이터가 변경되었을 때 리액트에서 자동으로 업데이트 해줌
    //   .catch(() => {});
  }, []);
  // fatch는 spring 문자로 가져옴 -> json으로 변환, js에서 바로 사용할 때
  // axios는 바로 json data로 가지고 옴, react 환경에서 라이브러리로 제공
  // - 네트웍을 통해서 접속(request)
  // - 서버와 서버를 연동할 때 사용(포트가 다를 때)

  // 출력 리스트 생성 [ [{},{},{}], [{},{},{}], [{}] ]
  // 2차원 배열로 출력
  const rows = [];
  for (let i = 0; i < list.length; i += 3) {
    // [{0},{1},{2}]
    rows.push(list.slice(i, i + 3)); // [{0},{1},{2}]
  } // slice는 결과를 배열로 출력

  // console.log(rows);

  return (
    <div>
      {rows.map((rowArray) => (
        <div className="product-list">
          {rowArray.map((product) => (
            <ProductAvata img={product.image} />
          ))}
        </div>
      ))}
    </div>
  );
}
