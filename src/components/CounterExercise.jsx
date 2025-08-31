import React, { useState } from 'react'

const CounterExercise = () => {
  const [count,setCount] = useState(()=>{
    const initial=0;
    return initial;
  })
  const increment=()=>{
    setCount((prevCount)=>prevCount+1)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CounterExercise