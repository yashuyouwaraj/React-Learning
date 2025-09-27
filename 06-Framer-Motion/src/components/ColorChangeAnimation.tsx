import { motion } from "motion/react"


const ColorChangeAnimation = () => {
  return (
    <div>
        <motion.div className="box" animate={{backgroundColor:['#696FC7','#A7AAE1','#F5D3C4','#F2AEBB']}} transition={{duration:3 , repeat:Infinity ,ease:"linear"}} />
    </div>
  )
}

export default ColorChangeAnimation