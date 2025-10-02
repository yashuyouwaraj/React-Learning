import { useConterStore } from "../store"

const OtherComponent = () => {
    const {increment,decrement}= useConterStore()
  return (
    <div>
        <button className="bg-black text-white mt-2 text-xl ml-2 rounded-lg p-2" onClick={increment}>Increment</button>
        <button className="bg-black text-white mt-2 text-xl ml-2 rounded-lg p-2" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default OtherComponent