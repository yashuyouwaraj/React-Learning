import React from 'react'


const Product = (props) =>{
    return (
        <div>
            <h2>Product's Name: {props.name}</h2>
            <p>Product's Price: {props.price}</p>
        </div>
    )
}

export default Product