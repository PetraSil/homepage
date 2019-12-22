import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom'

const Navbar = () => 
  <nav className="navbar">
    <nav className="navbar-left">
      <Logo />
    </nav>
    <nav className="navbar-right">
      <NavLink exact to="/work" activeClassName="active">
        <span>Work</span>
      </NavLink>
      <NavLink exact to="/contact" activeClassName="active" >
        <span>Contact</span>
      </NavLink>
      <NavLink exact to="/" activeClassName="active">
        <span>Home</span>
      </NavLink>
    </nav>
  </nav>
;   

export default Navbar;
