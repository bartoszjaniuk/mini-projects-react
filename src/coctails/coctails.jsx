import React from "react";
import Navbar from "../navbar/navbar";
import { navigationLinks } from "./navbar/links";
import styles from "./coctails.module.scss";
import Search from "./search/search";
import CoctailItem from "./coctail-item/coctail-item";
const logoUrl = "https://image.flaticon.com/icons/png/512/38/38706.png";
const Coctails = () => {
  return (
    <>
      <Navbar
        navigationLinks={navigationLinks}
        logoIcon={logoUrl}
        title="Coctails"
      />
      <div className={styles.coctailsContent}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.coctailsContainer}>
          <div className={styles.coctailsList}>
            <CoctailItem />
            <CoctailItem />
            <CoctailItem />
            <CoctailItem />
            <CoctailItem />
            <CoctailItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Coctails;
