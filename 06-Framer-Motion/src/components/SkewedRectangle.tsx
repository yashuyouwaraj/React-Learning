import { motion } from "motion/react"
import { useState } from "react"

const SkewedRectangle = () => {
    const [isSkew,setIsSkew]=useState(false)

  return (
    <motion.div onClick={()=>setIsSkew(!isSkew)} className="box" animate={{skewX: isSkew? 20 :0}} transition={{duration:0.2}} />
  )
}

export default SkewedRectangle