import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import NavBar from './Components/Navbar';
import SideDrawer from "./Components/SideDrawer";
import BackDrop from "./Components/BackDrop";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
        <NavBar/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
