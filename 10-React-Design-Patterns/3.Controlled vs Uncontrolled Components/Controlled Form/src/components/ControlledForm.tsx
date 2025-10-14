import { useEffect, useState } from "react"

const ControlledForm = () => {
    const [name, setName] = useState('')
    const [age,setAge] = useState('')
    const [hairColor,setHairColor] = useState('')
    const [nameInputError,setNameInputError] = useState('')

    useEffect(()=>{
        if(name.length < 2){
            setNameInputError('Name must be at least 2 characters long')
        } else{
            setNameInputError('')
        }
    }, [name])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Name: ${name}, Age: ${age}, Hair Color: ${hairColor}`)
    }
  return (
    <form onSubmit={handleSubmit}>
        {nameInputError && <p className="text-red-500">{nameInputError}</p>}
        <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border m-2"/>
        <input type="text" name="age" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} className="border m-2"/>
        <input type="text" name="hairColor" placeholder="Hair Color" value={hairColor} onChange={(e)=>setHairColor(e.target.value)} className="border m-2"/>
        <button type="submit" className="border m-2">Submit</button>
    </form>
  )
}

export default ControlledForm