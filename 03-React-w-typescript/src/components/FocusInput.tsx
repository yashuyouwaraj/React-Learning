import { useRef } from "react"

const FocusInput = () => {
    const inputField = useRef<HTMLInputElement>(null)
    const handleFocus=()=>{
        inputField.current?.focus();
    }
  return (
    <div>
        <h1>Focus</h1>
        <input type="text" placeholder="Click on button to focus" ref={inputField} />
        <button onClick={handleFocus}>Click to Focus</button>
    </div>
  )
}

export default FocusInput