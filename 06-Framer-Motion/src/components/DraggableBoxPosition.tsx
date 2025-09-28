import { motion, useMotionValue, useSpring } from "motion/react"
const DraggableBoxPosition = () => {
    const x = useSpring(0)
    const y = useSpring(0)
  return (
    <div>
        <motion.div className="bg-amber-100 w-32 h-32 rounded-lg" drag dragConstraints={{top:-100,bottom:100,left:-100,right:100}} style={{x,y}}>
        </motion.div>
        <div className="text-3xl font-bold">({x.get().toFixed(2)},{y.get().toFixed(1)})</div>
    </div>
  )
}

export default DraggableBoxPosition