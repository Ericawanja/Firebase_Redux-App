import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logInReducer from "./slices/Log_in_slice";
import productsReducer from "./slices/ProductsSlice";
import cartReducer from "./slices/cart_slice"
import Review_slice from "./slices/Review_slice";

const RootReducer = combineReducers({
  logged: logInReducer,
  products: productsReducer,
  cart: cartReducer,
  reviews: Review_slice,
});

export const store = configureStore({
  reducer: RootReducer,
});
