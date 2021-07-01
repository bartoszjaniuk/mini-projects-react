import React from "react";
import styles from "./coctails-list.module.scss";
import CoctailItem from "./../coctail-item/coctail-item";
import { useSelector } from "react-redux";

const CoctailsList = () => {
  const { coctails, loading } = useSelector((state) => state.coctail);

  if (loading) {
    return <div>LOADING :D :D :D</div>;
  }

  if (coctails.length < 1) {
    return <p>no cocktails matched your search criteria</p>;
  }
  return (
    <div className={styles.list}>
      {coctails.map((coctail) => {
        return <CoctailItem {...coctail} key={coctail.id} />;
      })}
    </div>
  );
};

export default CoctailsList;
