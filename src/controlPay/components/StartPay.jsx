export const StarPay = ({
  title,
  amount,
  percentage,
  date,
  addPrevPay,
  addNextPay,
  paymentModalComponent,
}) => {
  return (
    <div className="h-36 relative w-fit flex flex-row items-start ">
      <div className="h-fit relative flex opacity-0 transition-opacity duration-300 hover:opacity-100 top-8">
        <button
          onClick={addPrevPay}
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-200 text-xs text-center rounded-full flex items-center justify-center"
        >
          +
        </button>
        <div className="h-0.5 w-8 bg-gray-200 rounded"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center top-0">
        {paymentModalComponent && <paymentModalComponent />}
        <div className="absolute w-max text-xs text-center md:text-base top-16">
          <h1>{title}</h1>
          <h2>
            {`${
              Number.isInteger(amount) ? amount.toString() : amount.toFixed(1)
            } USD (${
              Number.isInteger(percentage)
                ? amount.toString()
                : amount.toFixed(1)
            }%)`}
          </h2>
          <h3>{date}</h3>
        </div>
      </div>
      <div className="h-fit relative flex opacity-100 transition-opacity duration-300 hover:opacity-100 top-8">
        <div className="h-0.5 w-16 bg-gray-200 rounded"></div>
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
