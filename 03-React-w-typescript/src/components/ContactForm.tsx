// import { useState } from "react";

// interface ContactFormState {
//   name: string;
//   email: string;
// }

// const ContactForm = () => {
//   const [formData, setFormData] = useState<ContactFormState>({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission (e.g., send data to an API)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;



import React, { useRef, useState, type FormEvent } from "react";

type contact = {
  name: string;
  location: string;
  mobile: number;
};

const ContactForm = () => {
  const [data, setData] = useState<contact>({
    name: "",
    location: "",
    mobile: 0 ,
  });
  const name = useRef<HTMLInputElement>(null);
  const location = useRef<HTMLInputElement>(null);
  const mobile = useRef<HTMLInputElement>(null);



  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const nameval=name.current!.value
    const locationval=location.current!.value
    const mobilevale=mobile.current!.value

    setData({
        name:nameval,
        location:locationval,
        mobile:Number(mobilevale),
    })
  }

  return (
    <div>
      <h1>ContactForm</h1>
      <form onSubmit={handleSubmit}>
        <label >Name: 
            <input type="text" placeholder="Enter Your Name" ref={name}/>
        </label>
        <label > Location: 
            <input type="text" placeholder="Enter Your Location" ref={location}/>
        </label>
        <label> Mobile:
            <input type="text" placeholder="Enter Your Mobile" ref={mobile}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <section>
        <ul>
            <li>Name: {data.name}</li>
            <li>Location: {data.location}</li>
            <li>Mobile: {data.mobile}</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactForm;
