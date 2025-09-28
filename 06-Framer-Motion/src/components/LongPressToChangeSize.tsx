import { motion } from "motion/react"
import { useState } from "react"


const LongPressToChangeSize = () => {
    const[isPress,setIsPress]=useState(false)
    const handleLongPressStart=()=>setIsPress(true)
    const handleLongPressEnd=()=>setIsPress(false)
  return (
    <motion.div onTapStart={handleLongPressStart} onTapCancel={handleLongPressEnd} onTap={handleLongPressEnd} className={`w-32 h-32 bg-amber-200 rounded-lg cursor-pointer transition-all duration-300 ${isPress ? "w-48 h-48":""} `}></motion.div>
  )
}

export default LongPressToChangeSize