import React from "react";
import styles from "./search.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Search = () => {
  // const [searchingTerm, setSearchingTerm] = useState(initialState)
  const { searchingValue } = useSelector((state) => state.coctail);
  return (
    <div className={styles.search}>
      <input className={styles.search__input} type="text" />
      <AiOutlineSearch className={styles.search__icon} />
    </div>
  );
};

export default Search;
