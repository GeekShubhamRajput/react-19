import { useState } from "react"

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  )
}
