import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      <div>
        <motion.div className="box" animate={{x:50 ,y:"-2rem"  }}/>
        <motion.div className="box" animate={{ rotate: 60, rotateX:80 }}/>
        <motion.div className="box" animate={{ translateY:150, scale:2, scaleX:2 }}/>
        <motion.div className="box" animate={{ y:300, skewX:20, skewY:20 }}/>
      </div>
    </div>
  )
}

export default App