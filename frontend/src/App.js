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
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <Router>
        <NavBar/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ProductDetails/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
