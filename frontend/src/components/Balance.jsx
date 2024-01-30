export const Balance = ({ balance }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg pt-4 pl-3">Your balance</div>
      <div className="font-semibold ml-4 text-lg pt-4 pl-3">Rs {balance}</div>
    </div>
  );
};
