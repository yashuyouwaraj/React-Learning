import { Form, useForm, type SubmitHandler } from "react-hook-form";

interface FormData{
  name:string,
  email:string,
  password:string,
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };


  return <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder="Name" id="name" {...register('name',{required:"Name is required"})} />
      {errors.name && <p style={{color:'red'}}>{String(errors.name.message)}</p>}
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" placeholder="Email" id="email" {...register('email',{required:'Email is required',pattern:{
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        message:'Invalid Email Address'
      }})} />
      {errors.email && <p style={{color:'red'}}>{errors.email.message}</p> }
      
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" {...register('password',{
        required:"Password is required",
        minLength:{
          value:8,
          message:'Password must be atleast 8 character'
        }
      })} 
      placeholder="Password"/>
      {errors.password && <p style={{color:'red'}}>{errors.password.message}</p> }
    </div>
    <button disabled={isSubmitting}>{isSubmitting ? 'Loading...':'Submit'}</button>
  </form>;
};

export default Forms;
