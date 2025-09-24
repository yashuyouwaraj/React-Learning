import { motion, useMotionValue } from "motion/react"
import type { ChangeEvent } from "react"

const RangeSilder = () => {
    const scale=useMotionValue(1)
    const changeHandler = (e:ChangeEvent<HTMLInputElement>)=>scale.set(parseFloat(e.target.value))
  return (
    <div>
        <motion.div className="box" style={{scale}} />
        <div className="mt-[6rem]">
            <input type="range" min={0.5} max={5} step={0.01} defaultValue={1} onChange={changeHandler} />
        </div>
    </div>
  )
}

export default RangeSilder