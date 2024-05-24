import { useSelector } from "react-redux";
// import { EditPay } from "./EditPay";

export const MiddlePay = ({
  data,
  addNextPay,
  addPrevPay,
  PaymentModalComponent,
  paymentModalProps,
  shouldDisableAddButton,
  position,
}) => {
  const { isEditing } = useSelector((state) => state.control);
  const { payments } = useSelector((state) => state.control);
  const handleClick = () => {
    if (data.status === "pending") {
      addNextPay();
    } else {
      addPrevPay();
    }
  };

  return (
    <div className="h-36 relative w-fit flex flex-row items-start ">
      <div className="h-fit relative z-40 top-8">
        <div
          className={`h-0.5 w-16 ${
            data.status === "pending" ? "bg-gray-200" : "bg-green-600"
          } rounded`}
        ></div>
      </div>
      <div className="relative flex flex-col justify-center items-center top-0">
        {PaymentModalComponent && (
          <PaymentModalComponent {...paymentModalProps} />
        )}
        <div className="absolute w-max text-xs text-center md:text-base top-16">
          {isEditing && data.status === "pending" ? (
            <>{"hola"}</>
          ) : (
            <>
              <h1>{data.name}</h1>
              <h2>
                {`${
                  Number.isInteger(data.amount)
                    ? data.amount.toString()
                    : data.amount.toFixed(1)
                } USD (${
                  Number.isInteger(data.percentage)
                    ? data.percentage.toString()
                    : data.percentage.toFixed(1)
                }%)`}
              </h2>
              {data.status !== "pending" ? (
                <span>
                  <p className="text-sm text-green-600">{`Pagado el ${data.date}`}</p>
                  <p className="text-sm text-green-600">{`con ${data.status}`}</p>
                </span>
              ) : (
                <p className="text-sm text-gray-500">{data.date}</p>
              )}
            </>
          )}
        </div>
      </div>
      <div className="h-fit relative flex top-8">
        <div
          className={`h-0.5 w-16 ${
            data.status === "pending" ? "bg-gray-200" : "bg-green-600"
          } rounded`}
        ></div>
        {position < payments.length - 1 &&
          !shouldDisableAddButton(position) && (
            <button
              onClick={handleClick}
              className={`absolute z-50 right-[-12px] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 text-xs text-center rounded-full flex items-center justify-center ${
                shouldDisableAddButton(position)
                  ? "opacity-0"
                  : "opacity-0 hover:opacity-100"
              } transition-opacity duration-300`}
            >
              +
            </button>
          )}
      </div>
    </div>
  );
};
