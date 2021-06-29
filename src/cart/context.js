import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import cartReducer from "./redux/cart-reducer";
// import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = React.createContext();

const INITIAL_STATE = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // dispatch({ type: "GET_TOTALS" });
    dispatch({ type: "GET_TOTAL_ITEMS_AND_AMOUNT" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItemFromCart,
        increaseAmount,
        decreaseAmount,
        toggleAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
