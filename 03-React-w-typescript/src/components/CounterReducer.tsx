import { useReducer } from "react"

type State={count:number}
type Action = {type:"Increment"}

const reducer=(state:State,action:Action):State=>{
  switch (action.type) {
    case "Increment":
      return {count:state.count+1}
    default:
      return state
  }
}

const CounterReducer = () => {
  const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
    </div>
  )
}

export default CounterReducer