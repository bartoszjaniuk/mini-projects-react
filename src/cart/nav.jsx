import React from "react";
import styles from "./cart.module.scss";
import { RiShoppingCartLine } from "react-icons/ri";
import { useGlobalContext } from "./context";

const Nav = () => {
  const { amount } = useGlobalContext();
  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.icon__basket}>
          <RiShoppingCartLine />
        </div>
        <div className={styles.amountContainer}>
          <span className={styles.totalAmount}>{amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
