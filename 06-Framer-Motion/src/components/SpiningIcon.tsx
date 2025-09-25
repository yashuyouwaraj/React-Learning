import { motion } from "motion/react"

const SpiningIcon = () => {
  return (
    <div>
        <motion.img src="src\assets\SCG_iddx9qqi6A_0.png" className="w-48" animate={{rotate:360}} transition={{repeat:Infinity, duration:2 , ease:"linear"}}/>
    </div>
  )
}

export default SpiningIcon