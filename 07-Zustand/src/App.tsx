import OtherComponent from "./components/OtherComponent"
import { useConterStore } from "./store"

const App = () => {
  const count = useConterStore((state)=>state.count)
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <OtherComponent />
    </div>
  )
}

export default App