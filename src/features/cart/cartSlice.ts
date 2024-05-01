import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  amount: number;
  total: number;
  loading: boolean;
};

const initialState: CartState = {
  items: cartItems,
  amount: 0,
  total: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      const itemId = payload;
      console.log("Este es el id que estoy recibiendo en removeItem: ", itemId);
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

//console.log(cartSlice);
export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;
