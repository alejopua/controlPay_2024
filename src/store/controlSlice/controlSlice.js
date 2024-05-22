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
        name: "Anticipo",
        amount: 182.0,
        percentage: 100,
        status: "pending", // card | cash
        date: formattedDate(),
      },
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
        name: "Anticipo",
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
        console.log(newPayment);
      }
    },
  },
});

export const { splitNext } = controlSlice.actions;
