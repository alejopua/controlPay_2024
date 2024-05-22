import { createSlice } from "@reduxjs/toolkit";
import { addNewPayment, formattedDate } from "@/controlPay/helpers";

export const controlSlice = createSlice({
  name: "control",
  initialState: {
    payments: [
      {
        id: crypto.randomUUID(),
        name: "Anticipo",
        amount: 182.0,
        percentage: 100,
        status: "pending", // card | cash
        date: formattedDate(),
      },
      {
        id: crypto.randomUUID(),
        name: "Anticipo 2",
        amount: 182.0,
        percentage: 100,
        status: "pending", // card | cash
        date: formattedDate(),
      },
      {
        id: crypto.randomUUID(),
        name: "Anticipo 3",
        amount: 182.0,
        percentage: 100,
        status: "pending", // card | cash
        date: formattedDate(),
      },
    ],
    isEditing: false,
    totalAmount: 182.0,
  },
  reducers: {
    splitPrev: (state, { payload }) => {
      let paymentIndex = state.payments.findIndex((p) => p.id === payload);
      let payment = state.payments[paymentIndex];

      while (
        payment &&
        payment.status !== "pending" &&
        paymentIndex < state.payments.length - 1
      ) {
        paymentIndex += 1;
        payment = state.payments[paymentIndex];
      }

      if (payment && payment.status === "pending") {
        const newAmount = payment.amount / 2;
        const newPercentage = payment.percentage / 2;
        payment.amount = newAmount;
        payment.percentage = newPercentage;

        const newPayment = addNewPayment(
          state,
          newAmount,
          newPercentage,
          formattedDate()
        );
        state.payments.splice(paymentIndex, 0, newPayment);
      }
    },
    splitNext: (state, { payload }) => {
      const paymentIndex = state.payments.findIndex((p) => p.id === payload);
      const payment = state.payments[paymentIndex];

      if (payment && payment.status === "pending") {
        const newAmount = payment.amount / 2;
        const newPercentage = payment.percentage / 2;
        payment.amount = newAmount;
        payment.percentage = newPercentage;

        const newPayment = addNewPayment(
          state,
          newAmount,
          newPercentage,
          formattedDate()
        );
        state.payments.splice(paymentIndex + 1, 0, newPayment);
      }
    },
    removePayment: (state, { payload }) => {
      state.payments.filter((payment) => payment.id !== payload.id);
    },
  },
});

export const { splitPrev, splitNext } = controlSlice.actions;
