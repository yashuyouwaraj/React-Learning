import { motion } from "motion/react"

// 1. Transformations
// const App = () => {
//   return (
//     <div>
//       <div>
//         <motion.div className="box" animate={{x:50 ,y:"-2rem"  }}/>
//         <motion.div className="box" animate={{ rotate: 60, rotateX:80 }}/>
//         <motion.div className="box" animate={{ translateY:150, scale:2, scaleX:2 }}/>
//         <motion.div className="box" animate={{ y:300, skewX:20, skewY:20 }}/>
//       </div>
//     </div>
//   )
// }


// 2. Transitions

// const App = () => {
//   return (
//     <div>
//       <motion.div className="box" initial={{x:-300}} animate={{x:300}} transition={{duration: 3 , delay:3 , ease: "backInOut"}} />
//     </div>
//   )
// }


// 3. KeyFrames

const App = () => {
  return (
    <div>
      <motion.div className="box" animate={{scale: [1,2,3,4,3,2,1] , rotate: [0,270,0,180,50] , borderRadius: ["20%","40%", "60%" , "20%","50%"] }} transition={{duration:5}} />
    </div>
  )
}

export default App