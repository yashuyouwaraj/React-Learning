import { motion } from "motion/react"

const fadeInVariants={
    hidden:{opacity:0},
    visible: {opacity:1}
}

const SimpleFadeIn = () => {
  return (
    <div>
        <motion.div className="text-4xl bg-blue-500 p-4 rounded shadow" variants={fadeInVariants} initial="hidden" animate="visible" transition={{duration:0.5}}>Hello Bro</motion.div>
    </div>
  )
}

export default SimpleFadeIn