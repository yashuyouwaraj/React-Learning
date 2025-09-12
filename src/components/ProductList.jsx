import React from 'react'

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$999" },
    { id: 3, name: "Tablet", price: "$499" }
  ];

  return (
    <div>
        <h1>Products List</h1>
        {products.map((p) => (
            <div key={p.id}>
                <p>Name: {p.name}</p>
                <p>Price: {p.price}</p>
            </div>
        ))}
    </div>
  )
};

export default ProductList