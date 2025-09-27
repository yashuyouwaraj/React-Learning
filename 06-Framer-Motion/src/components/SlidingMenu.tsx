import { motion } from "motion/react"
import { useState } from "react"

const MenuVariants={
    closed:{x:"-100%"},
    open:{x:0}
}

const SlidingMenu = () => {
    const [isOpen,SetIsOpen]=useState(false)
  return (
    <div>
        <button onClick={()=>SetIsOpen(!isOpen)} className="p-2 bg-gray-500 text-white">ToggleMenu</button>
        <motion.div variants={MenuVariants} initial="closed" animate={isOpen ? "open" : "closed"} transition={{duration:0.3}} className="fixed top-0 left-0 w-64 h-full bg-blue-600">
            <ul className="p-4 text-white">
                <li>Home</li>
                <li>Abount</li>
                <li>Contact</li>
            </ul>
        </motion.div>
    </div>
  )
}

export default SlidingMenu