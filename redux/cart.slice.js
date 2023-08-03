import { createSlice } from "@reduxjs/toolkit";
const CARD = "CARD";
import { getCookie, setCookie } from "../lib/useCookies";
const initialItem = getCookie("CARD");

const cartSlice = createSlice({
  name: "cart",
  initialState: initialItem,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return;
      } else {
        setCookie(CARD, { ...action.payload, quantity: 1 });
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
        setCookie(CARD, state.splice(index, 1));
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);

      setCookie(CARD, state.splice(index, 1));
    },
    deleteCart: (state, action) => {
      let store = state();
      setCookie(CARD, store);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,

  decrementQuantity,
  removeFromCart,
  deleteCart,
} = cartSlice.actions;
