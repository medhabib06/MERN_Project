import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import SideDrawer from "./Components/SideDrawer";
import BackDrop from "./Components/BackDrop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <SideDrawer/>
        <BackDrop/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
