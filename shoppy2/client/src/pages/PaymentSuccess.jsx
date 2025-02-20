import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import { useOrder } from "../hooks/useOrder";
// import axios from "axios";

export default function PaymentSuccess() {
  const { getOrderList, saveToOrder } = useOrder();
  const { orderList } = useContext(OrderContext);
  // kakaopay api에서 get방식으로 params를 보내줌
  const [searchParams] = useSearchParams();
  const pg_token = searchParams.get("pg_token");
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    const tid = localStorage.getItem("tid"); // 결제완료될 때 체크
    tid && setIsRun(true); // 결제창 넘어와서 tid가 있으면 실행

    // 비동기 처리 때문에 따로 함수 만들어줌
    const fetchOrderList = async () => {
      const orderList = await getOrderList();
      console.log("fetchOrderList==>", orderList);

      if (orderList.length > 0) {
        const totalPrice = orderList.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );
        // pg_token && tid 가 존재하면 shoppy_order 테이블에 주문내역 insert
        // shoppy_cart는 delete
        // oid(pk), pid, id, odate, tprice(total_amount), tid, type, size, qty 등 ...
        if (pg_token && tid) {
          //1. axios를 통한 DB insert --> orderList, total_price
          //2. useOrder 커스텀 훅을 이용한 DB insert
          saveToOrder(orderList, totalPrice, tid, "kakaopay");
        }
      }
    };

    if (isRun) fetchOrderList();
  }, [isRun]);

  //   console.log("total_price");
  //   console.log("payment success orderlist --->", orderList);

  return (
    <div>
      {/* pg_token이 있을 때 출력 */}
      {pg_token && <h2>결제가 완료되었습니다.</h2>}
    </div>
  );
}
