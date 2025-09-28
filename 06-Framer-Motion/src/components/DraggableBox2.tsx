import { motion } from "motion/react"

const DraggableBox2 = () => {
  return (
    <div>
        <motion.div className="w-32 h-32 bg-amber-100 flex justify-center items-center text-amber-500 font-bold rounded-lg" drag dragConstraints={{left:0,right:300 , top:0 , bottom:300 }}>
            Draggable Box
        </motion.div>
    </div>
  )
}

export default DraggableBox2