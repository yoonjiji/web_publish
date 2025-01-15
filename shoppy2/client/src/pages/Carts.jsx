import React from "react";

export default function Carts({ cartList }) {
  return (
    <div>
      <h1>MyCart!!</h1>
      <table border="1">
        <tr>
          <th>TID</th>
          <th>Price</th>
          <th>Size</th>
          <th>Qty</th>
        </tr>
        {cartList.map((cartItem) => (
          <tr>
            <td>{cartItem.pid}</td>
            <td>{cartItem.price}</td>
            <td>{cartItem.size}</td>
            <td>{cartItem.qty}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
