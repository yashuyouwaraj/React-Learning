import { motion } from "motion/react"

const WaveEffect = () => {
  return (
    <div className="flex gap-1 space-x-2">
        {[...Array(5)].map((_,index)=>(
            <motion.div className="w-16 h-16 bg-purple-500" key={index} animate={{y:[0,-100,0]}} transition={{duration:0.6 ,repeatType:"reverse", delay:index*0.1, repeat:Infinity }}>
            </motion.div>
        ))}
    </div>
  )
}

export default WaveEffect