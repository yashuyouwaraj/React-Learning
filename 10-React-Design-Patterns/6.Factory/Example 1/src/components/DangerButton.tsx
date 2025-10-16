
const DangerButton = ({label}:{label:string}) => {
  return (
    <button className="bg-red-500 p-4 btn-danger text-white">{label}</button>
  )
}

export default DangerButton