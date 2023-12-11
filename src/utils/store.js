import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  },
});

export default store;
