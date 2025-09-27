import { motion } from "motion/react"


const SlidingText = () => {
  return (
    <div>
      <motion.div className="bg-amber-50 text-black text-3xl p-2 rounded" animate={{x:[-550,330,0]}} transition={{duration:1.5}} >
        This is the Text
      </motion.div>
    </div>
  )
}

export default SlidingText