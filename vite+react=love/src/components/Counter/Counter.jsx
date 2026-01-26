import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <p className="counter-display">
        Count is <span className="counter-value">{count}</span>
      </p>

      <div className="counter-buttons">
        <button className="counter-btn" onClick={increment}>
          +1
        </button>

        <button
          className="counter-btn"
          onClick={decrement}
          disabled={count === 0}
        >
          -1
        </button>

        <button className="counter-btn" onClick={reset} disabled={count === 0}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
