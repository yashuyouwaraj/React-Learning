import React, { useState } from "react";

const ShoppingList = () => {
  const [items, SetItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    SetItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>ShoppingList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((items,index)=>(
            <li key={index}>
          {items.name} - Quantity: {items.quantity}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
