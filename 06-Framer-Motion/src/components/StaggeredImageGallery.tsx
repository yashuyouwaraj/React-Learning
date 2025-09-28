import { motion } from "motion/react"

const images = [
  "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop",
];

const parentVariant={
    hidden:{opacity:0},
    visible: {opacity:1,transition:{
        staggerChildren:0.8
    }}
}

const childVariants={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
}

const StaggeredImageGallery = () => {
  return (
    <div>
        <motion.div className="flex gap-2" variants={parentVariant} initial="hidden" animate="visible">
            {images.map((_,index)=>(
                <motion.img key={index} variants={childVariants} src={images[index]} alt={`Image : ${index}`} className="w-64 h-64 object-cover rounded-lg" />
            ))}
        </motion.div>
    </div>
  )
}

export default StaggeredImageGallery