import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom'

const Navbar = () => 
  <nav className="navbar">
    <nav className="navbar-left">
      <Logo />
    </nav>
    <nav className="navbar-right">
      <Link to="/work">
        <span>Work</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
      <Link to="/">
        <span>Home</span>
    </Link>
    </nav>
  </nav>
;   

export default Navbar;
