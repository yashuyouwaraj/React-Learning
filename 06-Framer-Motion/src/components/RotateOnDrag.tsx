import { motion } from "motion/react"
import { useState } from "react"

const RotateOnDrag = () => {
    const[rotation,setRotation]=useState(0)

    const handleDrag = (_:any,info:any)=>{
        const newRotation = info.offset.x +rotation
        setRotation(newRotation)
    }

  return (
    <motion.div drag onDrag={handleDrag} style={{rotate:rotation}} className="bg-amber-200 w-32 h-32 rounded-lg" ></motion.div>
  )
}

export default RotateOnDrag