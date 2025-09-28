import { motion } from "motion/react"


const parentVariant ={
    hidden:{opacity:0},
    visible:{opacity:1,transition:{
        staggerChildren:0.5,
    }}
}

const childVariants = {
    hidden: {opacity:0,x:20},
    visible:{opacity:1,x:0}
}

const StaggeredGridLayout = () => {
  return (
    <div>
        <motion.div variants={parentVariant} initial="hidden" animate="visible" className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_,index)=>(
                <motion.div key={index} variants={childVariants} className="bg-amber-200 w-16 h-16 rounded-lg"></motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default StaggeredGridLayout