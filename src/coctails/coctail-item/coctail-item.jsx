import React from "react";
import styles from "./coctail.module.scss";

const CoctailItem = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <p>Title</p>
        <p>Type</p>
        <p>isAlco</p>
        <button>DETAILS</button>
      </div>
      <div className={styles.card__img}>
        <img src="img" alt="img" className={styles.card__img__inner} />
      </div>
    </div>
  );
};

export default CoctailItem;
