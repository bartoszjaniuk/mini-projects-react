import React from "react";
import styles from "./cart.module.scss";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGlobalContext } from "./context";
const CartItem = ({ id, title, price, amount, img }) => {
  const { removeItemFromCart, increaseAmount, decreaseAmount, toggleAmount } =
    useGlobalContext();
  return (
    <div className={styles.content__strip}>
      <div className={`${styles.content__strip__image} ${styles.contentRow20}`}>
        <img
          src={img}
          alt={title}
          className={styles.content__strip__image__inner}
        />
      </div>
      <div
        className={`${styles.content__strip__description} ${styles.contentRow20}`}
      >
        {title}
      </div>
      <div
        className={`${styles.content__strip__quantity} ${styles.contentRow10}`}
      >
        <button className={styles.icon__btn}>
          {" "}
          <FiChevronLeft onClick={() => toggleAmount(id, "decrease")} />
        </button>
        {amount}
        <button className={styles.icon__btn}>
          <FiChevronRight onClick={() => toggleAmount(id, "increase")} />
        </button>
      </div>
      <div className={`${styles.content__strip__price} ${styles.contentRow10}`}>
        💲{price}
      </div>
      <div
        className={`${styles.content__strip__remove} ${styles.contentRow20}`}
      >
        <AiTwotoneDelete
          className={styles.icon__delete}
          onClick={() => removeItemFromCart(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
