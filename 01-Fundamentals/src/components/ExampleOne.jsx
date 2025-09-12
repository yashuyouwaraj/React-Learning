import React from 'react'
import { useState } from 'react'
const ExampleOne = () => {
    const [count, setCount] = useState(()=>{
        const initialCount=10;
        return initialCount;
    })
    const increment= ()=>{
        setCount((prevCount)=>prevCount+1);
    } 
    return (
    <div>
        count: {count}
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ExampleOne