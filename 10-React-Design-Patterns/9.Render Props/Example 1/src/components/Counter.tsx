import { useState } from "react"

const Counter = ({render}:any) => {
    const [count,setCount]=useState(0)

    const increment= ()=>setCount(count+1)
  return (
    <div>
        <button onClick={increment}>{render(count)}</button>
    </div>
  )
}

export default Counter