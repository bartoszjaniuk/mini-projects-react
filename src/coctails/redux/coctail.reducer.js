import { CoctailActionTypes } from "./coctail.types";
const INITIAL_STATE = {
  loading: false,
  searchingValue: "",
  coctails: [],
};

const coctailReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CoctailActionTypes.SET_SEARCH:
      return {
        ...state,
        searchingValue: payload,
      };
    case CoctailActionTypes.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case CoctailActionTypes.SET_COCTAILS:
      return {
        ...state,
        coctails: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default coctailReducer;
