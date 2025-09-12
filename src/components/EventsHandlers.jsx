import React from 'react'
const Move=()=>{
    function moveHandler(){
        alert('Mouse move event fired');
        console.log("Mouse move event fired");
    }
    return(
        <p onMouseMove={moveHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis eos, vel non explicabo nemo numquam atque doloribus sed nisi!</p>
    )
}

export default Move
