export const MiddlePay = ({
  data,
  addNextPay,
  PaymentModalComponent,
  paymentModalProps,
}) => {
  return (
    <div className="h-36 relative w-fit flex flex-row items-start ">
      <div className="h-fit relative flex opacity-100 transition-opacity duration-300 hover:opacity-100 top-8">
        <div
          className={`h-0.5 w-12 ${
            data.status === "pending" ? "bg-gray-200" : "bg-green-600"
          } rounded`}
        ></div>
      </div>
      <div className="relative flex flex-col justify-center items-center top-0">
        {PaymentModalComponent && (
          <PaymentModalComponent {...paymentModalProps} />
        )}

        <div className="absolute w-max text-xs text-center md:text-base top-16">
          <h1>{data.name}</h1>
          <h2>{`${
            Number.isInteger(data.amount)
              ? data.amount.toString()
              : data.amount.toFixed(1)
          } USD (${
            Number.isInteger(data.percentage)
              ? data.percentage.toString()
              : data.percentage.toFixed(1)
          }%)`}</h2>
          {data.status !== "pending" ? (
            <span>
              <p className="text-sm text-green-600">{`Pagado el ${data.date}`}</p>
              <p className="text-sm text-green-600">{`con ${data.status}`}</p>
            </span>
          ) : (
            <p className="text-sm text-gray-500">{data.date}</p>
          )}
        </div>
      </div>
      <div className="h-fit relative flex opacity-100 transition-opacity duration-300 hover:opacity-100 top-8">
        <div
          className={`h-0.5 w-16 ${
            data.status === "pending" ? "bg-gray-200" : "bg-green-600"
          } rounded`}
        ></div>
        <button
          onClick={() => addNextPay(data.id)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-200 text-xs text-center rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
};
