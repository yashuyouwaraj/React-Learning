import React, { useRef } from 'react'

const UseRef = () => {
    const inputElement =useRef(null)
    const focusInput= ()=>{
        inputElement.current.focus()
        inputElement.current.value= "Yashu"
    }
  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={()=> focusInput()}>Focus & write Yashu</button>
    </div>
  )
}

export default UseRef