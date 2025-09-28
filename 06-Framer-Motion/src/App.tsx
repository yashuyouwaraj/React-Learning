import { motion, scale, useMotionValue, useMotionValueEvent } from "motion/react"
import PulsingButton from "./components/PulsingButton"
import BouncingLoader from "./components/BouncingLoader"
import { useState } from "react"
import FlippingCard from "./components/FlippingCard"
import AnimatedShape from "./components/AnimatedShape"
import AnimatedCard from "./components/AnimatedCard"
import ImageGallery from "./components/ImageGallery"
import StaggerAnimation from "./components/StaggerAnimation"
import AnimatedGallery from "./components/AnimatedGallery"
import RangeSilder from "./components/RangeSilder"
import DraggableBox from "./components/DraggableBox"
import AnimatedCardScrollEffect from "./components/AnimatedCardScrollEffect"
import ScrollAnimation from "./components/ScrollAnimation"
import ScrollAnimationWithuseTransform from "./components/ScrollAnimationWithuseTransform"
import AnimationScroll from "./components/AnimationScroll"
import MovingBox from "./components/MovingBox"
import BouncingCircle from "./components/BouncingCircle"
import SpiningIcon from "./components/SpiningIcon"
import SkewedRectangle from "./components/SkewedRectangle"
import CombinedTransition from "./components/CombinedTransition"
import SequentialTransformation from "./components/SequentialTransformation"
import FadeComponent from "./components/FadeComponent"
import Slide from "./components/Slide"
import SlideDown from "./components/SlideDown"
import ResponsiveAnimations from "./components/ResponsiveAnimations"
import Accordion from "./components/Accordion"
import ToastNotification from "./components/ToastNotification"
import BouncingBall from "./components/BouncingBall"
import PulsatingEffect from "./components/PulsatingEffect"
import ColorChangeAnimation from "./components/ColorChangeAnimation"
import SlidingText from "./components/SlidingText"
import ZigZagAnimation from "./components/ZigZagAnimation"
import WaveEffect from "./components/WaveEffect"
import BackgroundAnimation from "./components/BackgroundAnimation"
import SimpleFadeIn from "./components/SimpleFadeIn"
import SlidingMenu from "./components/SlidingMenu"
import TooltipWithVariants from "./components/TooltipWithVariants"
import ToggleSwitchAnimation from "./components/ToggleSwitchAnimation"
import DynamicListAnimation from "./components/DynamicListAnimation"
import SwipeableCard from "./components/SwipeableCard"
import DraggableBox2 from "./components/DraggableBox2"
import RotateOnDrag from "./components/RotateOnDrag"
import TapToChangeColor from "./components/TapToChangeColor"
import LongPressToChangeSize from "./components/LongPressToChangeSize"
import GestureBasedImageGallery from "./components/GestureBasedImageGallery"

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


// const App = () => {
//   return (
//     <div>
//       <StaggerAnimation />
//       <AnimatedGallery />
//     </div>
//   )
// }

// export default App



//----------------7.useMotionValue ------------------

// const App = () => {
//   const x = useMotionValue(0)

//   useMotionValueEvent(x,"animationStart", ()=>{
//     console.log("animation started on x")
//   })
//   useMotionValueEvent(x,"change",(latest)=>{
//     console.log("x changed to",latest)
//   })
//   return (
//     <motion.div className="box" drag dragConstraints={{left:0,right:200}} style={{x}}></motion.div>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <div>
//       <RangeSilder />
//     </div>
//   )
// }

// export default App

//----------------7.useTransform ------------------

// const App = () => {
//   return (
//     <div>
//       <DraggableBox />
//     </div>
//   )
// }

// export default App


//--------------8.Scroll Triggered Animations & ----------- 
//--------------- Scroll Driven Animations ------------------

// -------------------whileInView----------------------
// const App = () => {
//   return (
//     <div>
//       <h1 className="text-center text-3xl mb-4">Scroll Down To See The Animation</h1>
//       <div className="h-screen">
//         <AnimatedCardScrollEffect />
//       </div>
//     </div>
//   )
// }

// export default App

// ------------------- useScroll ----------------------

// const App = () => {
//   return (
//     <div>
//       <ScrollAnimation />
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <ScrollAnimationWithuseTransform />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <AnimationScroll />
//       <div className="h-[200vh] bg-gray-800 flex items-center justify-center ">
//         <h2 className="text-white">Scroll Down</h2>
//       </div>
//     </div>
//   )
// }

// export default App

//---------------Exercise Transformation----------------

// const App = () => {
//   return (
//     <div>
//       <MovingBox />
//       <BouncingCircle />
//       <SpiningIcon />
//       <SkewedRectangle />
//       <CombinedTransition />
//       <SequentialTransformation />
//     </div>
//   )
// }

// export default App

//---------------Exercise Transitions----------------

// const App = () => {
//   return (
//     <div>
//       <FadeComponent />
//       <Slide />
//       <SlideDown />
//       <ResponsiveAnimations />
//       <Accordion />
//       <ToastNotification />
//     </div>
//   )
// }

// export default App


//---------------Exercise Keyframes----------------

// const App = () => {
//   return (
//     <div>
//       <BouncingBall />
//       <PulsatingEffect />
//       <ColorChangeAnimation />
//       <SlidingText />
//       <ZigZagAnimation />
//       <WaveEffect />
//       <BackgroundAnimation />

//     </div>
//   )
// }

// export default App

//---------------Exercise Variants----------------

// const App = () => {
//   return (
//     <div>
//       <SimpleFadeIn />
//       <SlidingMenu />
//       <TooltipWithVariants />
//       <ToggleSwitchAnimation />
//       <DynamicListAnimation />
//     </div>
//   )
// }

// export default App

//---------------Exercise Gestures----------------

const App = () => {
  return (
    <div>
      {/* <SwipeableCard /> */}
      {/* <DraggableBox2 /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      {/* <LongPressToChangeSize /> */}
      <GestureBasedImageGallery />
    </div>
  )
}

export default App