import React, { useRef, useEffect } from "react";
import styles from "./search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CoctailActionTypes } from "../redux/coctail.types";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useRef("");
  const handleChange = (e) => {
    dispatch({ type: CoctailActionTypes.SET_SEARCH, payload: e.target.value });
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        onChange={handleChange}
        ref={searchValue}
      />
      <AiOutlineSearch className={styles.search__icon} />
    </div>
  );
};

export default Search;
