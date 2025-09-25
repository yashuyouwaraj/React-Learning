import { motion } from "motion/react"

const BouncingCircle = () => {
  return (
    <motion.div className="box" animate={{y:[0,-100,0]}} transition={{duration:1,repeat:Infinity , ease:"easeInOut"}}></motion.div>
    
  )
}

export default BouncingCircle