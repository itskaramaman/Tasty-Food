import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
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

        if (removeObj === true) {
          state.items = state.items.filter(
            (item) =>
              item.item.card.info.id !== action.payload.item.card.info.id
          );
        }
      });
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    addResturantDetails: (state, action) => {
      state.restaurantName = action.payload.restaurantName;
      state.restaurantAreaName = action.payload.restaurantAreaName;
    },
  },
});

export const { addItem, removeItem, clearCart, addResturantDetails } =
  cartSlice.actions;
export default cartSlice.reducer;
