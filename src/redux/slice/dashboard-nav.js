import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav_active: false,
};

export const dashboardNavSlice = createSlice({
  name: "dashboardNav",
  initialState,
  reducers: {
    toggle: (state) => {
      state.nav_active = !state.nav_active;
    },
  },
});

export const { toggle } = dashboardNavSlice.actions;
export default dashboardNavSlice.reducer;
