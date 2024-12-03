import React, { useState } from "react";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}


function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems)=>[...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) => prevItems.map(
    (item) => item.id === id ? {...item, packed: !item.packed} : item
    ));
  }

  return (
    <div className="app">
      <Logo />
      <Form additems={handleAddItems}/>
      <PackingList 
      items={items}
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
