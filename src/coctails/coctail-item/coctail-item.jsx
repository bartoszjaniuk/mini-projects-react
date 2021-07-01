import React from "react";
import styles from "./coctail.module.scss";

const CoctailItem = ({ name, image, glass, info }) => {
  return (
    <div className={styles.card2}>
      <div className={styles.card2__containerIMG}>
        <img
          src={image}
          alt={name}
          className={styles.card2__containerIMG__image}
        />
      </div>
      <div className={styles.card2__content}>
        <div className={styles.box}>
          <div className={styles.box__left}>
            <span>🍳</span>
            <span>🍷</span>
            <span>🥛</span>
          </div>
          <div className={styles.box__right}>
            <span>{name}</span>
            <span>{info}</span>
            <span>{glass}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoctailItem;

{
  /* <div className={styles.card}>
<div className={styles.card__header}>
  <span>{name}</span>
  <span>{info}</span>
  <span>{glass}</span>
  <button>DETAILS</button>
</div>
<div className={styles.card__img}>
  <img src={image} alt={name} className={styles.card__img__inner} />
</div>
</div> */
}
