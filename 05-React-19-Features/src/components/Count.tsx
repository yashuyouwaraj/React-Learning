import { useActionState } from "react"

async function increment(previousState:number,formData:any) {
    console.log(formData.get('name'));
    return previousState+1;
}


const Count = () => {
  const [state,formAction]=useActionState(increment,0)
    
  return (
    <div>
        <form>
            <h1 className="text-3xl">{state}</h1>
            <button className="bg-teal-300 p-2" formAction={formAction}>Increment</button>
            <br />
            <input type="text" placeholder="Please Enter Your Name" className="border-2" name="name"/>
        </form>
    </div>
  )
}

export default Count