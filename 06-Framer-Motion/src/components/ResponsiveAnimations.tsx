import { color, motion } from "motion/react"
import { useState } from "react"

const ResponsiveAnimations = () => {
    const[isTab,setIsTab] = useState(false)
  return (
    <div>
        <motion.button onClick={()=>setIsTab(!isTab)} className="bg-[#27EEF5] text-white p-4 rounded-lg text-2xl" whileTap={{scale:isTab ? 1:0.5}} whileHover={{scale:1.1}}>Click Me</motion.button>
    </div>
  )
}

export default ResponsiveAnimations