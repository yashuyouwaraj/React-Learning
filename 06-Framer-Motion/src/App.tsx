import { motion, scale } from "motion/react"
import PulsingButton from "./components/PulsingButton"
import BouncingLoader from "./components/BouncingLoader"
import { useState } from "react"
import FlippingCard from "./components/FlippingCard"
import AnimatedShape from "./components/AnimatedShape"
import AnimatedCard from "./components/AnimatedCard"
import ImageGallery from "./components/ImageGallery"
import StaggerAnimation from "./components/StaggerAnimation"
import AnimatedGallery from "./components/AnimatedGallery"

// -------------- 1.Transformations --------------------
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

// export default App


// ------------------- 2.Transitions ----------------------

// const App = () => {
//   return (
//     <div>
//       <motion.div className="box" initial={{x:-300}} animate={{x:300}} transition={{duration: 3 , delay:3 , ease: "backInOut"}} />
//     </div>
//   )
// }

// export default App

// ------------------- 3.KeyFrames --------------------

// const App = () => {
//   return (
//     <div>
//       <motion.div className="box" animate={{scale: [1,2,3,4,3,2,1] , rotate: [0,270,0,180,50] , borderRadius: ["20%","40%", "60%" , "20%","50%"] }} transition={{duration:5}} />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       {/* <PulsingButton /> */}
//       <BouncingLoader />
//     </div>
//   )
// }

// export default App

// ----------------------- 4.Variants ----------------------

// const Variants={
//   hidden:{ opacity:0 , scale:0.8 },
//   visible : {opacity: 1, scale:1},
//   exit:{opacity:0,scale:0.5}
// }

// const App = () => {
//   const [isVisible,setIsVisible]=useState(true)
//   return (
//     <motion.div className="box" variants={Variants} initial="hidden" animate={isVisible?"visible":"hidden"} exit="exit" transition={{duration:2}} onClick={()=>setIsVisible(!isVisible)}>
//     </motion.div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <FlippingCard />
//       <AnimatedShape />
//     </div>
//   )
// }

// export default App

// --------------------5.Gestures -------------------------

// const App = () => {
//   return (
//     <div>
//       {/* WhileHover */}
//       <motion.div className="box" whileHover={{scale:1.2, rotate:10}} transition={{type: "spring",stiffness:300}} />

//       {/* WhileTap */}
//       <motion.div className="box" whileTap={{scale:0.8,backgroundColor:"crimson"}} transition={{type:"spring",stiffness:300}} />

//       {/* WhileDrag */}
//       <motion.div className="box" drag="x"/>

//       {/* whileDrag Constraints */}
//       <motion.div className="box" drag dragConstraints={{
//         top:-50,bottom:50,left:-50,right:50,
//       }}/>

//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <AnimatedCard />
//       <ImageGallery />
//       <AnimatedShape />
//     </div>
//   )
// }

// export default App


//----------------6.Stagger Animation ------------------


const App = () => {
  return (
    <div>
      <StaggerAnimation />
      <AnimatedGallery />
    </div>
  )
}

export default App
