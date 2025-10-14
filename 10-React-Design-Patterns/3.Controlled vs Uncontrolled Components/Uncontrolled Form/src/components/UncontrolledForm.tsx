

import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameInput = useRef<HTMLInputElement>(null)
    const ageInput = useRef<HTMLInputElement>(null)
    const hairColorInput = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nameInput.current && ageInput.current && hairColorInput.current) {
            console.log(nameInput.current.value)
            console.log(ageInput.current.value)
            console.log(hairColorInput.current.value)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="mt-5 ml-5">
        <input type="text" name="name" placeholder="Name" className="border-2 border-gray-300" ref={nameInput}/>
        <input type="text" name="age" placeholder="Age" className="border-2 border-gray-300" ref={ageInput}/>
        <input type="text" name="hairColor" placeholder="Hair Color" className="border-2 border-gray-300" ref={hairColorInput}/>
        <button type="submit" name="submit" className="bg-blue-400 p-2 rounded text-white  ">Submit</button>
    </form>
  )
}

export default UncontrolledForm