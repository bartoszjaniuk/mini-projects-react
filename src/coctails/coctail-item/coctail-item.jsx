import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CoctailActionTypes } from "../redux/coctail.types";
import styles from "./coctail.module.scss";

const CoctailItem = ({ id, name, image, glass, info }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div
      className={styles.card2}
      onClick={() => {
        dispatch({ type: CoctailActionTypes.SET_COCTAIL_ID, payload: id });
        history.push(`/coctail/${id}`);
      }}
    >
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
