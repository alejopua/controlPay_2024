export const StarPay = ({
  title,
  amount,
  percentage,
  date,
  addPrevPay,
  addNextPay,
  PaymentModalComponent,
  paymentModalProps,
  statusPay,
}) => {
  return (
    <div className="h-36 relative w-fit flex flex-row items-start ">
      <div className="h-fit relative top-8">
        <button
          onClick={addPrevPay}
          className={`${
            statusPay === "pending"
              ? "opacity-0 transition-opacity duration-300 hover:opacity-100"
              : "hidden"
          } size-8 absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-200 text-xs text-center rounded-full`}
        >
          +
        </button>
        <div className="h-0.5 w-12 bg-white"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center top-0">
        {PaymentModalComponent && (
          <PaymentModalComponent {...paymentModalProps} />
        )}
        <div className="absolute w-max text-xs text-center md:text-base top-16">
          <h1>{title}</h1>
          <h2>
            {`${
              Number.isInteger(amount) ? amount.toString() : amount.toFixed(1)
            } USD (${
              Number.isInteger(percentage)
                ? percentage.toString()
                : percentage.toFixed(1)
            }%)`}
          </h2>
          {statusPay !== "pending" ? (
            <span>
              <p className="text-sm text-green-600">{`Pagado el ${date}`}</p>
              <p className="text-sm text-green-600">{`con ${statusPay}`}</p>
            </span>
          ) : (
            <p className="text-sm text-gray-500">{date}</p>
          )}
        </div>
      </div>
      <div className="h-fit relative flex opacity-100 transition-opacity duration-300 hover:opacity-100 top-8">
        <div
          className={`h-0.5 w-16 ${
            statusPay === "pending" ? "bg-gray-200" : "bg-green-600"
          } rounded`}
        ></div>
        <button
          onClick={addNextPay}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 text-xs text-center rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};
