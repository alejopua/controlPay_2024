import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "checking", // "checking" | "authenticated" | "unauthenticated"
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
