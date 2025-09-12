import React from 'react'

const Products = () => {
    const product ={
        name: "Laptop",
        price: "$1200",
        availability: "In Stock"
    }
    return (
    <div>
        <h2>Product Information!</h2>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default Products