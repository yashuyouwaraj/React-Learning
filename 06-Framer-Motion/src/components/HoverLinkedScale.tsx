import { motion, useMotionValue } from "motion/react"


const HoverLinkedScale = () => {
    const scale = useMotionValue(1)
  return (
    <motion.button onHoverStart={()=>scale.set(1.2)} onHoverEnd={()=>(scale.set(1))} style={{scale}}className="transition-all duration-200 bg-blue-500 text-white p-2 rounded-lg text-lg">Hover Me</motion.button>
  )
}

export default HoverLinkedScale