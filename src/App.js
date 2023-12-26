import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import About from "./Pages/About/About";
import StoreMain from "./Pages/Store/StoreMain";
import Navibar from "./components/Navibar";
import Contact from "./Pages/ContactUS/Contact";

function App() {
  return (
    <div>
      <header>
        <Navibar />
      </header>
      <main>
        <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/home" exact>
          <HomePage/>
        </Route>
        <Route path="/store">
          <StoreMain/>
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
