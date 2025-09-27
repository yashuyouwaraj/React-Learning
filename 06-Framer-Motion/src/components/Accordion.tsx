import { motion } from "motion/react";
import { div, h1 } from "motion/react-client";
import { useState } from "react";

const items = [
  { title: "Item 1", content: "This is the content of item 1." },
  { title: "Item 2", content: "This is the content of item 2." },
  { title: "Item 3", content: "This is the content of item 3." },
];

const Accordion = () => {
  const [visible, setVisible] = useState(null);
  const toggleItem = (index: any) => {
    setVisible(visible === index ? null : index);
  };
  return (
    <div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className=" w-[18rem] bg-amber-100 rounded-t-lg p-2 mb-2"
          >
            <div className="flex justify-between text-black items-center mb-0.5">
              <h1>{item.title}</h1>
              <button onClick={() => toggleItem(index)} className="text-xl cursor-pointer">
                +
              </button>
            </div>
            <motion.p
              className="text-black overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: visible === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.content}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
