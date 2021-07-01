import React from "react";

import styles from "./coctails.module.scss";
import Search from "./search/search";
import CoctailsList from "./coctails-list/coctails-list";
import useFetchData from "./fetchData";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Coctails = () => {
  useFetchData(url);
  return (
    <>
      <div className={styles.coctailsContent}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.coctailsContainer}>
          <CoctailsList />
        </div>
      </div>
    </>
  );
};

export default Coctails;
