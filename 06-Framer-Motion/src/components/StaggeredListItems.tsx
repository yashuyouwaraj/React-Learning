// import { motion } from "motion/react"

// const parentVariant = {
//     hidden:{opacity:0},
//     visible:{opacity:1,
//         transition: {staggerChildren:0.8,}
//     }
// }

// const childVariants = {
//     hidden:{opacity:0 , x:20},
//     visible:{opacity:1,x:0}
// }

// const StaggeredListItems = () => {
//   return (
//     <motion.div variants={parentVariant} initial="hidden" animate="visible" className="flex gap-2">
//         {[...Array(5)].map((_,index)=>(
//             <motion.div variants={childVariants} className="bg-amber-200 w-32 h-32" key={index}></motion.div>
//         ))}
//     </motion.div>
//   )
// }

// export default StaggeredListItems

import { motion } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={staggerVariants}
          className="mb-2 p-5 bg-yellow-300"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;