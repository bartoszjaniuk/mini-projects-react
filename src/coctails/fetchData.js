import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CoctailActionTypes } from "./redux/coctail.types";

const useFetchData = (url) => {
  const dispatch = useDispatch();
  const { searchingValue } = useSelector((state) => state.coctail);
  const fetchData = async () => {
    dispatch({ type: CoctailActionTypes.SET_LOADING });
    try {
      const response = await fetch(`${url}${searchingValue}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCoctails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        dispatch({
          type: CoctailActionTypes.SET_COCTAILS,
          payload: newCoctails,
        });
      } else {
        dispatch({
          type: CoctailActionTypes.SET_COCTAILS,
          payload: [],
        });
      }
    } catch (error) {
      alert(error);
      dispatch({ type: CoctailActionTypes.SET_LOADING });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [searchingValue]);
};

export default useFetchData;
