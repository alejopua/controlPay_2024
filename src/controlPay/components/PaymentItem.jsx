// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  splitNext,
  splitPrev,
  position,
  shouldDisableAddButton,
}) => {
  const { payments } = useSelector((state) => state.control);
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
          shouldDisableAddButton={shouldDisableAddButton}
        />
      ) : position === payments.length - 1 ? (
        <EndPay
          data={payment}
          addNextPay={splitNext}
          addPrevPay={splitPrev}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
          shouldDisableAddButton={shouldDisableAddButton}
        />
      ) : (
        <MiddlePay
          data={payment}
          addNextPay={splitNext}
          addPrevPay={splitPrev}
          PaymentModalComponent={PaymentModal}
          paymentModalProps={{ payment: payment }}
          shouldDisableAddButton={shouldDisableAddButton}
          position={position}
        />
      )}
    </>
  );
};
