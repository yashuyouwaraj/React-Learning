import { motion } from "motion/react"


const ZigZagAnimation = () => {
  return (
    <div>
        <motion.div className="box" animate={{x:[0,50,0,-50,0],y:[0,50,0,50,0]}} transition={{duration:2, repeat:Infinity,ease:'easeInOut'}} />
    </div>
  )
}

export default ZigZagAnimation