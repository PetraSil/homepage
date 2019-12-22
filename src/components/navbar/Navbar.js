import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom'

const Navbar = ({ open, setMobile }) => 
  <nav className="navbar">
    <nav className="navbar-left">
      <Logo />
    </nav>
    <nav className="navbar-right">
      <div className="nav-items-large">
        <NavLink exact to="/work" activeClassName="active">
          <span>Work</span>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active" >
          <span>Contact</span>
        </NavLink>
        <NavLink exact to="/" activeClassName="active">
          <span>Home</span>
      </NavLink>
      </div>
      <div className="nav-items-small" open={open} onClick={() => setMobile(!open)}>
        <div id="nav-line-first"></div>
        <div id="nav-line-second" style={{ width: open ? "1rem" : "2rem" }}></div>
        <div id="nav-line-third" style={{ width: open ? "2rem" : "1rem" }}></div>
      </div>
    </nav>
  </nav>
;   

export default Navbar;
