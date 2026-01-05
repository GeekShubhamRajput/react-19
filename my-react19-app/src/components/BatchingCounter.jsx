import { useState } from "react"

export const BatchingCounter = () => {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState("")
  const [isUpdated, setIsUpdated] = useState(false)

  const handleCount = () => {
    setCount((prev) => prev + 1)

    setCount((prev) => prev + 5)

    setCount((prev) => prev + 10)

    setIsUpdated(true)

    setMsg("Updated")
  }

  return(
    <div>
      <h3>Counter: {count}</h3>
      <h4>{isUpdated && msg}</h4>
      <button onClick={handleCount}>Update Count</button>
    </div>
  )
}
