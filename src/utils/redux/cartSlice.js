import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restuarantId: null,
    restaurantName: null,
    restaurantAreaName: null,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let itemAdded = false;
      state.items.map((item) => {
        if (item.item.card.info.id === action.payload.item.card.info.id) {
          item.count = item.count + 1;
          itemAdded = true;
        }
      });
      if (itemAdded === false) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      let removeObj = false;
      state.items.map((item) => {
        if (item.item.card.info.id === action.payload.item?.card?.info?.id) {
          item.count > 1 ? (item.count = item.count - 1) : (removeObj = true);
        }
        if (!removeObj) return;
        state.items = state.items.filter(
          (item) => item.item.card.info.id !== action.payload.item.card.info.id
        );
      });

      if (state.items.length === 0) {
        state.restuarantId = null;
        state.restaurantName = null;
        state.restaurantAreaName = null;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.restaurantName = null;
      state.restaurantAreaName = null;
      state.restuarantId = null;
    },
    addResturantDetails: (state, action) => {
      state.restaurantName = action.payload.restaurantName;
      state.restaurantAreaName = action.payload.restaurantAreaName;
      state.restuarantId = action.payload.restuarantId;
    },
  },
});

export const { addItem, removeItem, clearCart, addResturantDetails } =
  cartSlice.actions;
export default cartSlice.reducer;
