import cartItems from "../data.js";
import { CartActionTypes } from "./cart.actions.js";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case CartActionTypes.INCREASE_AMOUNT:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };

    case CartActionTypes.DECREASE_AMOUNT:
      let tempCartt = state.cart
        .map((cartItem) => {
          if (cartItem.id === payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: tempCartt,
      };
    // FIRST APPROACH
    // case CartActionTypes.GET_TOTAL_ITEMS_AND_AMOUNT:
    //   return {
    //     ...state,
    //     amount: state.cart.reduce(
    //       (totalItem, cartItem) => totalItem + cartItem.amount,
    //       0
    //     ),
    //     total: state.cart.reduce(
    //       (total, item) =>
    //         parseFloat((total + item.price * item.amount).toFixed(2)),
    //       0
    //     ),
    //   };
    // FIRST APPROACH END

    // SECOND APPROACH
    case CartActionTypes.GET_TOTAL_ITEMS_AND_AMOUNT:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      // values are overwriting here and life is great again
      return {
        ...state,
        total,
        amount,
      };
    // SECOND APPROACH END
    case CartActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case CartActionTypes.DISPLAY_ITEMS:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    case CartActionTypes.TOGGLE_AMOUNT:
      let temporaryCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === payload.id) {
            if (payload.type === "increase") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (payload.type === "decrease") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return {
        ...state,
        cart: temporaryCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
