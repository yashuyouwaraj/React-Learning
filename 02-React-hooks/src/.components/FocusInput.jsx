import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)
    const focusInp=()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
    
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={()=>focusInp()}>Focus on input field</button>
    </div>
  )
}

export default FocusInput