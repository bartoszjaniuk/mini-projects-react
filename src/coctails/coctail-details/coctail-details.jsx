import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CoctailActionTypes } from "../redux/coctail.types";
import styles from "./coctail-details.module.scss";
const CoctailDetails = () => {
  const params = useParams();
  const { coctailId } = useSelector((state) => state.coctail);
  const [coctail, setCoctail] = useState({
    id: "",
    name: "",
    image: "",
    info: "",
    glass: "",
  });
  const dispatch = useDispatch();

  const fetchSingleCoctail = async () => {
    dispatch({ type: CoctailActionTypes.SET_LOADING });
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
      );
      const data = await response.json();
      if (data.drinks) {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          data.drinks[0];
        const coctailToFetch = {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
        setCoctail(coctailToFetch);
        console.log(coctailToFetch);
      } else {
        setCoctail(null);
      }
      dispatch({ type: CoctailActionTypes.SET_LOADING });
    } catch (error) {
      console.log(error);
      dispatch({ type: CoctailActionTypes.SET_LOADING });
    }
  };

  useEffect(() => {
    fetchSingleCoctail();
  }, [coctailId]);
  return (
    <div className={styles.container}>
      <div className={styles.coctail}>
        <div className={styles.coctail__imgContainer}>
          <img src={coctail.image} alt={coctail.name} className={styles.img} />
        </div>
        <div className={styles.coctail__detailsContainer}>
          <div className={styles.left}>
            <p>Name:</p>
            <p>Type:</p>
            <p>Info: </p>
          </div>
          <div className={styles.right}>
            <p>{coctail.name}</p>
            <p>{coctail.glass}</p>
            <p>{coctail.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoctailDetails;
