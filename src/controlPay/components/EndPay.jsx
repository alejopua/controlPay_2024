import { useSelector } from "react-redux";
import { EditPay } from "./EditPay";

export const EndPay = ({
  data,
  addNextPay,
  PaymentModalComponent,
  paymentModalProps,
}) => {
  const { isEditing } = useSelector((state) => state.control);
  return (
    <div className="h-36 relative w-fit flex flex-row items-start ">
      <div className="h-fit relative flex opacity-100 transition-opacity duration-300 hover:opacity-100 top-8">
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
            <EditPay data={data} />
          ) : (
            <>
              <h1 className="text-lg">{data.name}</h1>
              <p className="text-sm">
                {`${
                  Number.isInteger(data.amount)
                    ? data.amount.toString()
                    : data.amount.toFixed(1)
                } USD (${
                  Number.isInteger(data.percentage)
                    ? data.percentage.toString()
                    : data.percentage.toFixed(1)
                }%)`}
              </p>
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
        <div className="h-0.5 w-16 bg-white"></div>
        <button
          onClick={addNextPay}
          className={`${
            data.status === "pending"
              ? "opacity-0 transition-opacity duration-300 hover:opacity-100"
              : "hidden"
          } size-8 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-xs text-center rounded-full`}
        >
          +
        </button>
      </div>
    </div>
  );
};
