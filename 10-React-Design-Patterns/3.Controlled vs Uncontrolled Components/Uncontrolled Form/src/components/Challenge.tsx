import React, { useRef } from "react"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subscribe: boolean;
  message: string;
}

const Challenge = () => {
  const firstNameRef=useRef<HTMLInputElement>(null)
  const lastNameRef=useRef<HTMLInputElement>(null)
  const emailRef=useRef<HTMLInputElement>(null)
  const subscribeRef=useRef<HTMLInputElement>(null)
  const messageRef=useRef<HTMLTextAreaElement>(null)


  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData:FormData={
      firstName:firstNameRef.current?.value??"",
      lastName:lastNameRef.current?.value??"",
      email:emailRef.current?.value??"",
      subscribe:subscribeRef.current?.checked??false,
      message:messageRef.current?.value??"",
    }
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={firstNameRef}
        type="text"
        name="firstName"
        placeholder="First Name"
      />
      <input
        ref={lastNameRef}
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
      <input
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Email"
      />
      <label>
        <input
          ref={subscribeRef}
          type="checkbox"
          name="subscribe"
        />
        Subscribe to Newsletter
      </label>
      <textarea
        ref={messageRef}
        name="message"
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Challenge