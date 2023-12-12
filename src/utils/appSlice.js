import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    address: null,
    isAddressSidebarOpen: false,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    openAddressSidebar: (state) => {
      state.isAddressSidebarOpen = true;
    },
    closeAddressSidebar: (state) => {
      state.isAddressSidebarOpen = false;
    },
  },
});

export const { setAddress, openAddressSidebar, closeAddressSidebar } =
  appSlice.actions;
export default appSlice.reducer;
