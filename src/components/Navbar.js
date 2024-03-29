import React from 'react';
import { Button} from 'reactstrap';

const Navbar = () => {
  return (
    <nav className="transparent lighten-1">
      <div className="nav-wrapper">
        <a href="" className="brand-logo left">Logo</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Who we are</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
