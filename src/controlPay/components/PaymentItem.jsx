import { EditPay } from "./EditPay";
import { EndPay } from "./EndPay";
import { MiddlePay } from "./MiddlePay";
import PaymentModal from "./PaymentModal";
import { StarPay } from "./StartPay";

// id: crypto.randomUUID(),
// name: "Anticipo",
// amount: 182.0,
// percentage: 100,
// status: "pending", // card | cash
// date: formattedDate,

export const PaymentItem = ({
  payment,
  isEditing,
  totalAmount,
  splitNext,
  position,
  last,
}) => {
  return (
    <>
      {position === 0 ? (
        <StarPay
          data={payment}
          addNextPay={splitNext}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
        />
      ) : position === last ? (
        <EndPay
          data={payment}
          addNextPay={splitNext}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
        />
      ) : isEditing && payment.status === "pending" ? (
        <EditPay />
      ) : (
        <MiddlePay
          data={payment}
          addNextPay={splitNext}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
        />
      )}
    </>
  );
};
