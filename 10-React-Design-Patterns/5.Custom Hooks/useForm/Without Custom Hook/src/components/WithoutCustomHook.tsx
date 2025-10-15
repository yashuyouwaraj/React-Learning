import React, { useState } from "react"


const WithoutCustomHook = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [submitted,setSubmitted]=useState(false)

    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault()
        setSubmitted(true)
        console.log("Submitted:",{name,email})
    }

  return (
    <div>
        {submitted ? (
            <h2>Thank You for submitting your information</h2>
        ):(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        )}
    </div>
  )
}

export default WithoutCustomHook