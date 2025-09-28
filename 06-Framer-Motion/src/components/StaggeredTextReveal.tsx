import { motion } from "motion/react"

const text = "Hello World!";

const staggerVarients={
    hidden:{opacity:0},
    visible:{opacity:1}
}

const StaggeredTextReveal = () => {
  return (
    <div>
        <motion.div className="text-4xl font-bold text-white" initial="hidden" animate="visible" variants={{
            visible:{
                transition:{staggerChildren:0.8}
            }
        }}>
            {text.split("").map((char,index)=>(
                <motion.span variants={staggerVarients} key={index}>{char}</motion.span>
            ))}
        </motion.div>
    </div>
  )
}

export default StaggeredTextReveal