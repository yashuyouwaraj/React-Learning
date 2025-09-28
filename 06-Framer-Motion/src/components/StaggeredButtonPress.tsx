import { motion } from "motion/react"

const buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];

const StaggeredButtonPress = () => {
  return (
    <div>
        <motion.div whileHover={{transition:{staggerChildren:0.2}}} className="flex space-x-4">
            {buttons.map((label,index)=>(
                <motion.button whileHover={{scale:1.1}} key={index} className="bg-blue-500 text-white p-2 text-xl rounded-lg">{label}</motion.button>
            ))}
        </motion.div>
    </div>
  )
}

export default StaggeredButtonPress