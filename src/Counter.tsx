import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button className="btn" onClick={() => setCount((c) => c - 1)}>
        De
      </button>
      <span className="px-3">{count}</span>
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        In
      </button>
    </div>
  );
}

export default Counter;
