import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState<number>(0);
  return (
    <div>
        <h1>Counter App</h1>
        <h3>count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter