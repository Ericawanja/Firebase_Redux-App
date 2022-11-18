import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInReducer from "./slices/Log_in_slice";
import productsReducer from "./slices/ProductsSlice";

const RootReducer = combineReducers({
  logged: logInReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
