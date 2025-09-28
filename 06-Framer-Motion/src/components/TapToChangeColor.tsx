import { motion } from "motion/react"
import { useState } from "react";

const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"];


const TapToChangeColor = () => {
    const [colorIndex,SetColorIndex]=useState(0)
    const handleTap = ()=>{
        SetColorIndex((prev)=>(prev+1)%colors.length)
    }
  return (
    <motion.div className={` ${[colors[colorIndex]]} w-32 h-32 rounded-lg flex justify-center items-center text-amber-900 font-bold cursor-pointer`} onTap={handleTap}>Tap Me</motion.div>
  )
}

export default TapToChangeColor