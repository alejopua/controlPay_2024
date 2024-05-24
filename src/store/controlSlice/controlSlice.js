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
        status: "pendings", // card | cash
        date: formattedDate(),
      },
      {
        id: crypto.randomUUID(),
        name: "Pago 2",
        amount: 182.0,
        percentage: 100,
        status: "pendings", // card | cash
        date: formattedDate(),
      },
      {
        id: crypto.randomUUID(),
        name: "Pago 3",
        amount: 182.0,
        percentage: 100,
        status: "pending", // card | cash
        date: formattedDate(),
      },
      {
        id: crypto.randomUUID(),
        name: "Pago 4",
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
    updateName: (state, { payload }) => {
      const { id, name } = payload;
      const payment = state.payments.find((payment) => payment.id === id);
      if (payment) {
        payment.name = name;
      }
    },
    updateAmount: (state, { payload }) => {
      const { id, amount } = payload;
      const paymentIndex = state.payments.findIndex((p) => p.id === id);
      const payment = state.payments[paymentIndex];

      if (payment && payment.status === "pending") {
        const previousAmount = payment.amount;
        payment.amount = amount;
        payment.percentage = (amount / state.totalAmount) * 100;

        const different = previousAmount - amount;

        if (different !== 0) {
          if (paymentIndex < state.payments.length - 1) {
            const nextPaymentIndex = paymentIndex + 1;
            const nextPayment = state.payments[nextPaymentIndex];

            if (nextPayment.status === "pending") {
              nextPayment.amount += different;
              nextPayment.percentage =
                (nextPayment.amount / state.totalAmount) * 100;
            }
          } else if (paymentIndex === state.payments.length - 1) {
            const prevPaymentIndex = paymentIndex - 1;
            const prevPayment = state.payments[prevPaymentIndex];

            if (prevPayment.status === "pending") {
              prevPayment.amount += different;
              prevPayment.percentage =
                (prevPayment.amount / state.totalAmount) * 100;
            }
          }
        }
      }
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
  updateName,
  updateAmount,
} = controlSlice.actions;
