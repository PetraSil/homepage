import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom'

const Navbar = ({ open, setMobile }) => 
  <nav className="navbar">
    <nav className="navbar-left">
      <Logo open={open}/>
    </nav>
    <nav className="navbar-right">
      <div className="nav-items-large">
        <NavLink exact to="/work" activeClassName="active">
          <span aria-label="Navigation link">Work</span>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          <span aria-label="Navigation link">Contact</span>
        </NavLink>
        <NavLink exact to="/" activeClassName="active">
          <span aria-label="Navigation link">Home</span>
      </NavLink>
      </div>
      <div className="nav-items-small" aria-label="Mobile navigation link" open={open} onClick={() => setMobile(!open)}>
        <div id="nav-line-first"></div>
        <div id="nav-line-second" style={{ width: open ? "1rem" : "2rem" }}></div>
        <div id="nav-line-third" style={{ width: open ? "2rem" : "1rem", boxShadow: open ? " 0px 0px 169px 30px rgba(25, 190, 219, 0.7)" : "" }}></div>
      </div>
    </nav>
  </nav>
;   

export default Navbar;
