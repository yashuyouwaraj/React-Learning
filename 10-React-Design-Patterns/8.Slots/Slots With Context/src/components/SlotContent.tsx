import { useMyContext } from "../hooks/useMyContext"

const SlotContent = () => {
    const {setValue}=useMyContext()
  return (
    <button onClick={()=>setValue("New Value from SlotContent")}>
        Update Context Value
    </button>
  )
}

export default SlotContent