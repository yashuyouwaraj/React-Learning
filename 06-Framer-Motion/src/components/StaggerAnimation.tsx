import { motion } from "motion/react"

const parentVariants={
    hidden: {opacity:0},
    visible: {
        opacity:1,
        transition:{
            staggerChildren:0.8,
        }
    }
}

const childVariants={
    hidden:{opacity:0,x:20},
    visible:{opacity:1,x:0}
}

const StaggerAnimation = () => {
  return (
    <motion.div className="flex mt-25 mb-10" variants={parentVariants} initial="hidden" animate="visible">
        {[...Array(5)].map((_,index)=>(
            <motion.div variants={childVariants} className="box mt-[2rem]" key={index} />
        ))}
    </motion.div>
  )
}

export default StaggerAnimation