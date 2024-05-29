import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  // useState
  const [value, setValue] = useState(23);
  const handleIncrement = () => {
      setValue(value+1)
  };
  return (
    <div className="counter">
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
export default Counter;
