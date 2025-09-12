import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
    const [data,setData]=useState(0)
    useEffect(()=>{
        console.log("Component Mounts")
        document.title=`Increment ${data}`
    },[])
  return (
    <button onClick={()=>setData(data)}>Click me</button>
  )
}

export default BasicEffect