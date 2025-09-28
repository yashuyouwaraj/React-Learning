import { motion } from "motion/react"

const InteractiveHoverAndInViewAnimation = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map((item,index)=>(
            <motion.div key={index} initial={{scale:0.8}} whileInView={{scale:1}} whileHover={{scale:1.2,backgroundColor:"#3b82f6"}} transition={{duration:0.3}} className="bg-blue-500 p-6 text-white text-center rounded-lg">
                <h3 className="text-2xl">Card {item}</h3>
            </motion.div>
        ))}
    </div>
  )
}

export default InteractiveHoverAndInViewAnimation