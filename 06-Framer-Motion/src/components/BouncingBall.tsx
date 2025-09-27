import { motion } from "motion/react"

const BouncingBall = () => {
  return (
    <div>
        <motion.div className="box rounded-full" animate={{y:[-100,0,-100]}} transition={{duration:1, repeat:Infinity, repeatType:"loop" , ease:"easeInOut"}} />
    </div>
  )
}

export default BouncingBall