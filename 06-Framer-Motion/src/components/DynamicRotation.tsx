import { animate } from "motion"
import { motion, useMotionValue } from "motion/react"


const DynamicRotation = () => {
    const rotation=useMotionValue(0)
    const handleRotate=()=>{
        animate(rotation,rotation.get()+45,{ type: "spring", stiffness: 300 })
    }
  return (
    <div>
        <motion.button onTap={handleRotate} style={{rotate:rotation}} className="bg-blue-500 p-2 text-xl rounded-lg">Click Me</motion.button>
    </div>
  )
}

export default DynamicRotation