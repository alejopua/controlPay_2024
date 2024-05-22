// import { useEffect, useState } from "react";
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
  splitPrev,
  position,
  last,
  showButton,
}) => {
  // const [name, setName] = useState(payment.name);
  // const [amount, setAmount] = useState(payment.amount);
  // const [date, setDate] = useState(payment.date);
  // const [percentage, setPercentage] = useState(payment.percentage);

  // useEffect(() => {
  //   if (!isEditing) {
  //     setName(payment.name);
  //     setAmount(payment.amount);
  //     setDate(payment.date);
  //     setPercentage(payment.percentage);
  //   }
  // }, [isEditing, payment]);
  return (
    <>
      {position === 0 ? (
        <StarPay
          data={payment}
          position={position}
          addNextPay={splitNext}
          addPrevPay={splitPrev}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
          showButton={showButton}
        />
      ) : last ? (
        <EndPay
          data={payment}
          addNextPay={splitNext}
          addPrevPay={splitPrev}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
          showButton={showButton}
        />
      ) : isEditing && payment.status === "pending" ? (
        <EditPay />
      ) : (
        <MiddlePay
          data={payment}
          addNextPay={splitNext}
          addPrevPay={splitPrev}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
        />
      )}
    </>
  );
};
