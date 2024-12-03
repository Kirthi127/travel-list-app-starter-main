import React, { useState } from "react";

export default function Form({additems}) {
    const [description, setdescription] = useState("");
    const [quantity, setquantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description) return;
      
      const newItem = {
        id: Date.now(),
        description,
        quantity: Number(quantity),
        packed: false,
      };
      additems(newItem);
      setdescription("");
      setquantity(1);
    }
  
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select value={quantity} onChange={(e) => setquantity(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setdescription(e.target.value)}/>
        <button type="submit">add</button>
      </form>
    );
  }