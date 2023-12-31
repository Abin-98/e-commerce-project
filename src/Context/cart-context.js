import React from "react";

const CartContext = React.createContext({
  actualItems:[],
  items: [],
  totalAmount: 0,
  addProducts:(arr)=>{},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
