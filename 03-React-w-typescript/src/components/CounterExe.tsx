import React, { useState } from 'react'

const CounterExe = () => {
    const [count,setCount]=useState<number>(0);
  return (
    <div>
        <h1>Counter App - Exercise</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+Math.floor(Math.random()*100))}>Increment by Random</button>
        <button onClick={()=>setCount(count-Math.floor(Math.random()*100))}>Decrement by Random</button>
    </div>
  )
}

export default CounterExe