import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
