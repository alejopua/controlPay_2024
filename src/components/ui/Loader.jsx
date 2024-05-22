export const Loader = () => {
  return (
    <div className="w-full h-screen container flex items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};
