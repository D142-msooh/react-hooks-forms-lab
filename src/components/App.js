import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apples", category: "Produce" },
    { id: 2, name: "Milk", category: "Dairy" },
  ]);

  const [searchText, setSearchText] = useState("");

  function handleSearchChange(newSearch) {
    setSearchText(newSearch);
  }

  return (
    <div>
      <ShoppingList
        items={items}
        searchText={searchText}
        onSearchChange={handleSearchChange}
        setItems={setItems}
      />
    </div>
  );
}

export default App;