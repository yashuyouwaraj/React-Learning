import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)
    const intervalRef = useRef(null)

    useEffect(()=>{
        intervalRef.current=setInterval(() => {
            setCount((prevCount)=> prevCount+1)
        }, 1000);
        return () =>{
            clearInterval(intervalRef.current)
        }
    })
  return (
    <div>
        <h1>Timer: {count} seconds</h1>
        <button onClick={()=> clearInterval(intervalRef.current)}>Stop Time</button>
    </div>
  )
}

export default Timer