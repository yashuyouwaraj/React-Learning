import { motion } from "motion/react"


const PulsingButton = () => {
  return (
    <motion.button className="text-white bg-blue-500 rounded outline-none w-[140%]  " animate={{
        scale:[1,2,1],
        backgroundColor:['#3b82f6','#60a5fa','#3b82f6'],
    }} transition={{duration:2, ease:"easeInOut" , repeat:Infinity }}>
        Click Me
    </motion.button>
  )
}

export default PulsingButton