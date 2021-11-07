import React from "react";
import {Link} from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="shop_name">OCCASION</div>

      <ul className="navbar_links">
        <li>
          <Link to='/Cart'> </Link>
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
