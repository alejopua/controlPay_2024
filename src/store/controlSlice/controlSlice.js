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
      const id = payload;

      const paymentIndex = state.payments.findIndex((p) => p.id === id);
      const payment = state.payments[paymentIndex];
      console.log(payment);

      if (payment && payment.status === "pending") {
        state.payments = state.payments.filter((p) => p.id !== id);
      }
    },
    pay: (state, { payload }) => {
      const { id, method } = payload;
      const paymentIndex = state.payments.findIndex((p) => p.id === id);

      const previousPayment = state.payments[paymentIndex - 1];
      const payment = state.payments[paymentIndex];

      // !previousPayment: Checks if there is no previous payment.
      // previousPayment.status !== "pending": Checks if the status of the previous payment is different from "pending".

      if (!previousPayment || previousPayment.status !== "pending") {
        if (payment && payment.status === "pending") {
          payment.status = method === "card" ? "card" : "cash";
          payment.date = formattedDate();
          state.totalAmount -= payment.amount; // Subtract from totalAmount
        }
      }
    },
    toggleEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    submitForm(state, { payload }) {
      console.log("Form submitted:", payload);
    },
    setValidationErrors(state, { payload }) {
      console.log("Form errors:", payload);
      // state.validationErrors = action.payload;
    },
  },
});

export const {
  splitPrev,
  splitNext,
  removePayment,
  pay,
  toggleEditing,
  submitForm,
  setValidationErrors,
} = controlSlice.actions;
