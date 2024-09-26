import React from "react";
import { CartProvider } from "./CartContext";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
