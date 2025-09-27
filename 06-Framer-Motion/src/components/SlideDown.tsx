import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

// 


const SlideDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black opacity-50 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded shadow-lg max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-bold">Modal Title</h2>
              <p className="mt-2 text-gray-700">This is a modal window!</p>
              <button
                className="mt-4 p-2 bg-red-500 text-white rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};




export default SlideDown