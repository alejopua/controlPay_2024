export const PaymentsLayout = ({ children }) => {
  return (
    <div className="w-full max-w-[913px] overflow-scroll pt-8 pb-10">
      <div className="h-[220px] flex items-center justify-start">
        {children}
      </div>
    </div>
  );
};
