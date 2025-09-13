import { useRef, useState, type FormEvent } from "react";

type formData={
    name:string;
    email:string;
    password:string;
}

const Form = () => {
    const [submittedData,setSubmittedData]= useState<formData>({
        name:"",
        email:"",
        password:"",
    })

    const name=useRef<HTMLInputElement>(null)
    const email=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const nameVal=name.current!.value
        const emailVal=email.current!.value
        const passwordVal=password.current!.value

        setSubmittedData({
            name:nameVal,
            email:emailVal,
            password:passwordVal,
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" ref={name}/>
            <input type="email" placeholder="Enter Your email" ref={email}/>
            <input type="password" placeholder="Enter Your Password" ref={password}/>
            <button type="submit">Submit</button>
        </form>
        <section>
            <h1>Name: {submittedData.name}</h1>
            <h1>Email: {submittedData.email}</h1>
            <h1>Password: {submittedData.password}</h1>
        </section>
    </div>
  )
}

export default Form