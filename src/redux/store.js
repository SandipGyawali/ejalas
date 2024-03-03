import { configureStore } from "@reduxjs/toolkit";
import dashboardNavReducer from "./slice/dashboard-nav";
import windowWidthReducer from "./slice/windowWidth";

export const store = configureStore({
  reducer: {
    dashboardNav: dashboardNavReducer,
    windowWidth: windowWidthReducer,
  },
});
