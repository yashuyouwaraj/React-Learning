import { motion } from "motion/react";
import { useState } from "react";

const SwipeableCard = () => {
    const [isRemoved,SetIsRemoved]= useState(false)
    const handleSwipe=(_:any,info:any)=>{
        if(info.offset.x>100){
            SetIsRemoved(true)
        }
        if(info.offset.x<-100){
            SetIsRemoved(true)
        }
    }
  return (
    <div>
      <motion.div drag='x' dragConstraints={{left:-100,right:100}} onDragEnd={handleSwipe}>
        <div className={`bg-amber-100 w-50 h-60 rounded border-4 border-[#DBA400] ${isRemoved ? "hidden":""} `}>
          <img
            className="w-50 p-2 h-40 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1758712508625-d8e047c49239?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="holding hands"
          />
          <p className="text-mg text-[#614900] font-bold text-center pl-2 pr-2">
            Loved you yesterday, love you still, always have, always will
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SwipeableCard;
