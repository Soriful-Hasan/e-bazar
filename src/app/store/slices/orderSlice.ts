import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./cartSlice";

type Order = {
  id: string;
  name: string;
  address: string;
  phone: string;
  items: Product[];
  totalAmount: number;
  date: string;
};

type OrderState = {
  orders: Order[];
};

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Omit<Order, "id">>) => {
      const newOrder: Order = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.orders.push(newOrder);
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
