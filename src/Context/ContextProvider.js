import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);


  const addToCart = (addedItem) => {
    const index = items.findIndex((item) => item.id === addedItem.id);
    if (index === -1) {
      setItems([...items, addedItem]);
    } else {
      const dupItems = [...items];
      dupItems[index].quantity += 1;
      setItems([...dupItems]);
    }
  };

  const removeFromCart = (ID) => {
    const index = items.findIndex((item) => item.id === ID);
    setItems((prev) => {
      const dupItems = prev.splice(index, 1);
      return dupItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
