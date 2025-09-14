
import { useFormStatus } from 'react-dom'


const FormButton = () => {
    const {pending}=useFormStatus();
  return (
    <button className=' mt-3 ml-25 rounded p-2 bg-blue-600 text-white' type='submit' disabled={pending}>{pending? "Submitting...":"Submit"}</button>
  )
}

export default FormButton