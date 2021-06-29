import React from "react";
import CartItem from "./cart-item";
import styles from "./cart.module.scss";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext();
  return (
    <div className={styles.container}>
      <div className={styles.shoppingCart}>
        <div className={styles.shoppingCart__title}>Shopping Cart</div>
        <div className={styles.content}>
          {cart.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })}
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <button onClick={clearCart}>Clear Cart</button>
          <span>$ {total}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
