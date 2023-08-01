import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const reducer = {
  cart: cartReducer,
};
console.log(cartReducer, "reducer");
const store = configureStore({
  reducer,
});

export default store;
