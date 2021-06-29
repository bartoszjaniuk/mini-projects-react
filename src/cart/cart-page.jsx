import React from "react";
import Cart from "./cart";
import { useGlobalContext } from "./context";
import Nav from "./nav";

const CartPage = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h1>Loading... ⏳</h1>
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <Cart />
    </div>
  );
};

export default CartPage;
