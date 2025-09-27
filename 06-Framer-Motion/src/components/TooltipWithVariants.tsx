import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const tooltipVariants = {
  hidden: { opacity: 0,y:-10 },
  visible: { opacity: 1,y:0 },
};

const TooltipWithVariants = () => {
  const [isvisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="p-2 bg-blue-500 text-white"
      >
        Hover over Me
      </button>
      <AnimatePresence>
        {isvisible && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{duration:0.2}}
            className="absolute bg-gray-700 text-white p-2 rounded"
          >
            TooltipContent
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipWithVariants;
