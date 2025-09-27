import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

// const FadeComponent = () => {
//     const [visible,setVisible] = useState(true)
//   return (
//     <div>
//         <motion.div className="p-20 bg-blue-600" animate={{opacity: visible ? 1 : 0}} exit={{opacity:0}} transition={{duration:1 , ease:"easeInOut"}}>
//         </motion.div>
//         <button onClick={()=>setVisible(!visible)} className="bg-white text-blue-500 mt-5 p-2 rounded-lg ml-6 ">Toggle Button</button>
//     </div>
//   )
// }



const FadeComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    
       <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>
      <AnimatePresence>
      {visible && (
        <motion.div
          className="p-4 bg-gray-200 rounded text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm a fading component!
        </motion.div>
      )}
      </AnimatePresence>
    </div>
)}   

export default FadeComponent