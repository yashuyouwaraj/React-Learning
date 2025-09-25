import { motion } from "motion/react"

const MovingBox = () => {
  return (
    <motion.div className="box" initial={{x:-200}} animate={{x:300}} transition={{duration:3}} ></motion.div>
  )
}

export default MovingBox