import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { controlSlice } from "./controlSlice/controlSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    control: controlSlice.reducer,
  },
});
