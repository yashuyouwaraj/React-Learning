import { animate } from "motion"
import { motion, useMotionValue } from "motion/react"


const SpringAnimatedPosition = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const handleTap=()=>{
        animate(x,Math.random()*100,{ type: "spring", stiffness: 300 })
        animate(y,Math.random()*100,{ type: "spring", stiffness: 300 })
    }
  return (
    <div>
        <motion.div onTap={handleTap} style={{x,y}} className="bg-amber-100 w-32 h-32 rounded-lg">
        </motion.div>
    </div>
  )
}

export default SpringAnimatedPosition