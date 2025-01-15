import React from "react";

export default function Carts({ cartList }) {
  return (
    <div className="content">
      <h1>MyCart!!</h1>
      <table border="1">
        <tr>
          <th>PID</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
        {cartList.map((cart) => (
          <tr>
            <td>{cart.pid}</td>
            <td>{cart.size}</td>
            <td>{cart.qty}</td>
            <td>{cart.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
