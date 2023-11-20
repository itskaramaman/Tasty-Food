import { useState } from "react";

const IncrementDecrement = ({ count: countGiven, handleAddItem }) => {
  console.log(countGiven);
  const [count, setCount] = useState(countGiven);

  const handleIncrement = () => {
    handleAddItem(count + 1);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleDecrement()}
        className="bg-orange-400 hover:bg-orange-500 text-white w-5 rounded-l"
      >
        <span className="my-auto">-</span>
      </button>
      <span className="bg-gray-200 w-5 text-center">{count}</span>
      <button
        onClick={() => handleIncrement()}
        className="bg-orange-400 hover:bg-orange-500 text-white w-5 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;
