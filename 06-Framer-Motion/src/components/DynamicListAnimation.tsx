import { motion } from "motion/react"
import { useState } from "react"

const listVariants ={
    enter:{opacity:1,y:0},
    exit:{opacity:0,y:-20}
}



const DynamicListAnimation : React.FC = () => {
    const [items,setItems]=useState<string[]>([])
    const addItem = () =>{
    const newItem=`Item ${items.length +1}`
    setItems((prev)=>[...prev,newItem])
}

const removeItem = (index:number)=>{
    setItems((prev)=>prev.filter((_,i)=>i!==index));
}
  return (
    <div>
        <button onClick={addItem} className="mb-4 p-2 bg-blue-500 text-white">Add Item</button>
        <div>
            <div>
                {items.map((item,index)=>(
                    <motion.div key={index} variants={listVariants} initial="exit" animate="enter" exit="exit" transition={{duration:0.3}} className="p-2 bg-gray-200 mb-2 rounded text-black" onClick={()=>removeItem(index)}>
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DynamicListAnimation