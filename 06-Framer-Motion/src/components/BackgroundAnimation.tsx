import { motion } from "motion/react"


const BackgroundAnimation = () => {
  return (
        <motion.div className="h-screen w-screen" animate={{backgroundColor:['#696FC7','#A7AAE1','#F5D3C4','#F2AEBB']}} transition={{duration:5 , repeat:Infinity , repeatType:"reverse" , ease:"linear"}}>
        </motion.div>
  )
}

export default BackgroundAnimation