import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInReducer from "./slices/Log_in_slice";
import productsReducer from "./slices/ProductsSlice";
import cartReducer from "./slices/cart_slice"

const RootReducer = combineReducers({
  logged: logInReducer,
  products: productsReducer,
  cart: cartReducer
});

export const store = configureStore({
  reducer: RootReducer,
});
