import { motion } from "motion/react"

const CombinedTransition = () => {
  return (
    <motion.div className='box' animate={{x:[-100,100,-100],y:[-100,100,-100] , rotate:[0,360,0], scale:[0.5,1.1,0.5]}} transition={{duration:3, repeat:Infinity}}></motion.div>
  )
}

export default CombinedTransition