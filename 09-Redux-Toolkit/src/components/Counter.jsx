import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../App/features/counter/conunterSlice"

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className="text-4xl">
        <h1>{count}</h1>
        <button className="rounded bg-blue-500 p-2 mt-2" onClick={()=>dispatch(increment())}>increment</button>
        <button className="rounded bg-red-800 p-2 mt-2" onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter