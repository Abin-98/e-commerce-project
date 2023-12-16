//import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Navibar from "./components/Navibar";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navibar></Navibar>
      <Header></Header>
      <ProductList></ProductList>
    </>
  );
}

export default App;
