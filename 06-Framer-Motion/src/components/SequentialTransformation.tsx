import { motion } from "motion/react"

const SequentialTransformation = () => {
  return (
    <div>
        {[...Array(5)].map((_,i)=>(
            <motion.div key={i} className="bg-teal-600 w-20 h-20 m-2" animate={{x:100}} transition={{duration:0.5 , delay:i*0.5}} />
        ))}
    </div>
  )
}

export default SequentialTransformation