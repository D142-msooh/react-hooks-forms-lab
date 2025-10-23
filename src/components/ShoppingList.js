import React from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items, searchText, onSearchChange, setItems }) {
  const displayedItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <Filter searchText={searchText} onSearchChange={onSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;