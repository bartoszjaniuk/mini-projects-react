import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import cartReducer from "./cart-reducer";

const middlewares = [logger];

const store = createStore(cartReducer, applyMiddleware(...middlewares));

export default store;
