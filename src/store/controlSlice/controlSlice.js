import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
};

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = controlSlice.actions;
