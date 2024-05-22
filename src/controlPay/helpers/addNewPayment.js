export const addNewPayment = (state, newAmount, newPercentage, date) => ({
  id: crypto.randomUUID(),
  name: `Pago ${crypto.randomUUID().slice(0, 2)}`,
  amount: newAmount,
  percentage: newPercentage,
  status: "pending",
  date: date,
});
