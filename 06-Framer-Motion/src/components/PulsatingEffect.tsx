import { motion } from "motion/react"

const PulsatingEffect = () => {
  return (
    <div>
        <motion.button className="bg-blue-500 text-white p-2 text-2xl rounded" animate={{scale:[1,1.2,1]}} transition={{duration:1.2 , repeat:Infinity , repeatType:"loop", ease:"easeInOut"}}>Pulse</motion.button>
    </div>
  )
}

export default PulsatingEffect