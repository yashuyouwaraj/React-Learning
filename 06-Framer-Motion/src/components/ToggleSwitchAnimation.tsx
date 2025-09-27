import { motion } from "motion/react";
import { useState } from "react";
const switchVariants = {
  off: { x: 0 },
  on: { x: 80 },
};

const ToggleSwitchAnimation = () => { 
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className="relative inline-block w-36 h-16">
      <div
        onClick={() => SetIsOpen(!isOpen)}
        className={`w-full h-full rounded-full cursor-pointer ${
          isOpen ? "bg-green-500" : "bg-red-700"
        }`}
      />
      <motion.div
        onClick={() => SetIsOpen(!isOpen)}
        variants={switchVariants}
        initial="off"
        animate={isOpen ? "on" : "off"}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
      />
    </div>
  );
};

export default ToggleSwitchAnimation;
