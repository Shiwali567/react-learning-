import { useEffect, useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("update your count and number", count, number);
  });

  const handleReset = () => {
    setCount(0);
    setNumber(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={() => setCount(count + 1)}>increment [+]</button>
      <button onClick={() => setNumber(number - 1)}>decrement [-]</button>
      {/* <button onClick={() => setCount(0)}>RESET [0]</button>
      <button onClick={() => setNumber(0)}>RESET [0]</button> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Counter;
