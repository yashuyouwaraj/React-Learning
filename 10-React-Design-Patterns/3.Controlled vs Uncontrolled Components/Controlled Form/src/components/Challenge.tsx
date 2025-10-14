// import { useState } from "react"

// const Challenge = () => {
//     const [firstName,setFirstName]=useState('')
//     const [lastName,setLastName]=useState('')
//     const [email,setEmail]=useState('')
//     const [subscribe,setSubscribe]=useState(false)
//     const [message,setMessage]=useState('')

//     const handleSubmit=(e:any)=>{
//         e.preventDefault()
//         console.log(firstName)
//         console.log(lastName)
//         console.log(email)
//         console.log(subscribe)
//         console.log(message)
//     }
//   return (
//     <form onSubmit={handleSubmit} className="border-2 flex flex-col gap-4 justify-center border-teal-600 mt-2 ml-2 w-1/5">
//         <h1 className="text-2xl text-center font-semibold text-red-900">Important Form</h1>
//         <label className="ml-1.5 mr-1.5">First Name:
//             <input onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstName" placeholder="First Name" className="border-2 ml-1.5 mr-1.5"/>
//         </label>
//         <label className="ml-1.5 mr-1.5">
//             Last Name: <input onChange={(e)=>setLastName(e.target.value)} type="text" name='lastName' placeholder="Last Name" className="border-2 ml-1.5 mr-1.5" />
//         </label>
//         <label className="ml-1.5 mr-1.5">
//             Email:
//             <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="border-2 ml-1.5 mr-1.5" />
//         </label>
//         <label >
//             <input className="ml-1.5 mr-1.5" onClick={()=>setSubscribe(!subscribe)} type="checkbox" name="subscribe" value="True"/>Subscribe to newsletter
//         </label>
//             <textarea rows={5} cols={50} placeholder="Message" className="border-2 ml-1.5 mr-1.5" onChange={(e)=>setMessage(e.target.value)}></textarea>
//         <button className="bg-teal-800 rounded-lg mb-2 p-1 text-white ml-32 w-[4rem]" type="submit">Submit</button>
//     </form>
//   )
// }

// export default Challenge
import { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subscribe: false,
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to Newsletter
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;