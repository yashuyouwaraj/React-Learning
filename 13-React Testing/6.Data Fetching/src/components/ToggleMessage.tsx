import { useState } from "react"

const ToggleMessage = () => {
  const [isVisible,setIsVisible]=useState(false)
  
  const toggleMessages=()=>{
    setIsVisible(prev=>!prev)
  }
  return (
    <div>
      <button onClick={toggleMessages}>Toggle Message</button>
      {isVisible && <p>The message is visible</p> }
    </div>
  )
}

export default ToggleMessage