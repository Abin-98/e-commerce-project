import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import About from "./Pages/About/About";
import StoreMain from "./Pages/Store/StoreMain";
import Navibar from "./components/Navibar";
import Contact from "./Pages/ContactUS/Contact";
import ProductDetails from "./Pages/Store/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <header>
        <Navibar />
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/store" exact>
          <StoreMain/>
        </Route>
        <Route path="/store/:productId">
          <ProductDetails />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
