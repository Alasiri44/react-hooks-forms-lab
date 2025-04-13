import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onSearchChange(event) {
   setSelectedCategory(event.target.value);
   changeItems();
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || selectedCategory === '') return true;

    return item.category === selectedCategory;
  });

  const[myItems, setMyItems] = useState(items);

  function changeItems(){
    setMyItems(myItems => itemsToDisplay);
  }

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
