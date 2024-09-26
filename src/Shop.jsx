import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];
  return (
    <div>
      <h1>Shop</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
