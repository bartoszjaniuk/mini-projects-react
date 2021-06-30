import { combineReducers } from "redux";
import coctailReducer from "./coctail.reducer";

const combinedReducers = combineReducers({
  coctail: coctailReducer,
});

export default combinedReducers;
