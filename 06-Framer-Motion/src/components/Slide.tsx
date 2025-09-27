import { motion } from "motion/react"
import { useState } from "react"

// const Slide = () => {
//     const [visible,setVisible]=useState(true)
//     const [movement,setmovement]=useState(true)
//   return (
//     <div>
//         <motion.div className="w-10 bg-teal-500 p-20" animate={{x:movement ? 0:200 , opacity: visible?1 :0}}/>
//         <button onClick={()=>setmovement(!movement)} className="bg-2 bg-amber-400 text-teal-600 p-2 rounded-lg mt-5 ml-5">Toggle The movement</button>
//         <button onClick={()=>setVisible(!visible)} className="bg-2 bg-amber-400 text-teal-600 p-2 rounded-lg mt-5 ml-5" >Toggle The Visibility</button>
//     </div>
//   )
// }


const Slide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>
      <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-700
         text-white p-4 ${isOpen ? "" : "-translate-x-full"}`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>Content goes here!</p>
      </motion.div>
    </div>
  );
};


export default Slide