import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';

const Navbar = () => 
  <nav className="navbar">
    <nav className="navbar-left">
      <Logo />
    </nav>
    <nav className="navbar-right">
      <span>Work</span>
      <span>Contact</span>
      <span>Home</span>
    </nav>
  </nav>
;

export default Navbar;
