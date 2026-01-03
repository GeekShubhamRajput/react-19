import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0);
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return(
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={ resetCount }>Reset</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
    </div>
  )
}
