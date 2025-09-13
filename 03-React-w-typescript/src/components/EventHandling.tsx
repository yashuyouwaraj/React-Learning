import React from 'react'

const EventHandling = () => {
    const handleClick =(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Button Clicked!",e.currentTarget)
    }
    const handleMouseEnter=(e:React.MouseEvent<HTMLDivElement>)=>{
        console.log("Mouse Entered!",e.currentTarget)
    }
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>EventHandling Example</h2>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default EventHandling