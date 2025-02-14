import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function Carts({ refreshStorage }) {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  /** 장바구니 아이템 저장 : 배열 */
  const [cartList, setCartList] = useState(() => {
    try {
      const initCartList = localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList) : []; // 배열로 가져오기
    } catch (error) {
      console.log("로컬스토리지 데이터 작업도중 에러 발생");
      console.log(error);
      return [];
    }
  });

  // pids 배열 생성 cartItems의 pid값을 pids 배열에 추가
  const pids = cartList && cartList.map((item) => item.pid); // [5, 11]
  console.log("pid-->", pids);

  //axios를 이용하여 DB연동
  useEffect(() => {
    if (pids.length > 0) {
      axios
        .post("http://localhost:9000/product/cartItems", { pids: pids }) // JSON으로 전송
        .then((res) => {
          console.log("Carts res.data--->", res.data);

          // cartItems 업데이트
          const updateCartItems = cartList.map((item) => {
            const filterItem = res.data.find((ritem) => ritem.pid === item.pid);

            return filterItem
              ? {
                  ...item,
                  pname: filterItem.pname,
                  price: filterItem.price,
                  description: filterItem.description,
                  image: filterItem.image,
                }
              : item;
          });

          console.log("Updated cart items --->", updateCartItems);
          setCartList(updateCartItems);
        })
        .catch((error) => console.error("Error fetching cart items:", error));
    }
  }, [cartList]);

  /** 주문하기 이벤트 처리 */
  const handleOrder = (type, pid, size) => {
    console.log(type, pid, size);

    // 1. 로그인 여부 체크
    // console.log("isLoggedIn-->", isLoggedIn);

    if (isLoggedIn) {
      // 로그인 o --> DB 연동 후 저장
      // { "id" : "test1", "cartList": [~~~~~] }
      const id = localStorage.getItem("user_id");
      let formData = [];

      if (type === "all") {
        formData = { id: id, cartList: cartList }; // [ {}, {}, {} ... ]
      } else {
        const filterItem = cartList.filter(
          (item) => item.pid === pid && item.size === size
        );
        formData = { id: id, cartList: filterItem };
      }

      axios
        .post("http://localhost:9000/cart/add", formData)
        .then((res) => {
          if (res.data.result_rows) {
            alert("장바구니에 추가되었습니다.");
            if (type === "all") {
              // 주문하기 페이지 이동

              // 로컬스토리지 전체 아이템 삭제
              clearStorageAll();
              refreshStorage([], 0);
              // App.js의 cartList, cartCount 초기화
              // localStorage.removeItem("cartItems");  // 비동기
              // setCartList([]); // 동기
            } else {
              // 로컬스토리지 개별 아이템 삭제
              const updateCart = clearStorageEach(pid, size);
              refreshStorage(updateCart, updateCart.length);
            }
          }
        })
        .catch((error) => console.log(error));
    } else {
      // 로그인 x --> 로그인 > DB연동 후 저장
      window.confirm("로그인이 필요한 서비스입니다.") && navigate("/login");
    }
  };

  // 로컬스토리지 전체아이템 삭제
  const clearStorageAll = () => {
    console.log("-----------> 로컬스토리지 전체 삭제 시작");
    localStorage.removeItem("cartItems"); // 비동기
    navigate("/cartdb");
    setTimeout(() => {
      // 동기를 비동기로 만들어주기
      setCartList([]);
    }, 0);
    console.log("-----------> 로컬스토리지 전체 삭제 종료");
  };

  // 로컬스토리지 개별 아이템 삭제
  const clearStorageEach = (pid, size) => {
    const updateCart = cartList.filter(
      (item) => !(item.pid === pid && item.size === size)
    );
    // console.log("updateCart--->", updateCartList);
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", updateCart);
    setTimeout(() => {
      setCartList(updateCart);
    }, 0);

    return updateCart; // refreshCart에 넘겨주기 위한 반환
  };

  return (
    <div className="content">
      <h1>MyCart!!</h1>
      <table border="1">
        <tr>
          <th>Pid</th>
          <th>Pname</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Description</th>
          <th>Image</th>
          <th></th>
        </tr>
        {cartList &&
          cartList.map((item) => (
            <tr>
              <td>{item.pid}</td>
              <td>{item.pname}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.image} alt="" style={{ width: "100px" }} />
              </td>
              {/* <td>
                <button
                  onClick={() => handleOrder("each", item.pid, item.size)}
                >
                  계속 담아두기
                </button>
              </td> */}
            </tr>
          ))}
      </table>
      <button onClick={() => handleOrder("all")}>주문하기</button>
      {/* 파라미터 넘길거면 콜백함수 형태 */}
    </div>
  );
}
