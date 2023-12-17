//import { Container, Row, Col } from "react-bootstrap";
import React, {useState} from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navibar from "./components/Navibar";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [showCart, setShowCart]=useState(false);

  return (
    <ContextProvider>
      <Navibar onShow={()=>{setShowCart(true)}} />
      {showCart && <Cart onClose={()=>{setShowCart(false)}}/>}
      <Header></Header>
      <ProductList></ProductList>
    </ContextProvider>
  );
}

export default App;
