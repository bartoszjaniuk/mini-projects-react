import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import combinedReducers from "./root.reducer";
const middlewares = [logger];

export const coctailsStore = createStore(
  combinedReducers,
  applyMiddleware(...middlewares)
);
