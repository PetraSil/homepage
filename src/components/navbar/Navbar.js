import React from 'react';
import './navbar.css';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom'

const Navbar = ({ open, setMobile }) => {
return (
  <nav className="navbar__wrapper">
    <nav className="navbar__wrapper_left">
      <Logo open={open}/>
    </nav>
    <nav className="navbar__wrapper_right">
      <div className="navbar__items_large">
        <NavLink exact to="/work" activeClassName="active" >
          <span aria-label="Navigation link">Work</span>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          <span aria-label="Navigation link">Contact</span>
        </NavLink>
        <NavLink exact to="/home" activeClassName="active">
          <span aria-label="Navigation link">Home</span>
      </NavLink>
      </div>
      <div className="navbar__small" aria-label="Mobile navigation link" open={open} onClick={() => setMobile(!open)}>
        <div className="navbar__small_line_first"></div>
        <div className="navbar__small_line_second" style={{ width: open ? "1rem" : "2rem" }}></div>
        <div className="navbar__small_line_third" style={{ width: open ? "2rem" : "1rem", boxShadow: open ? " 0px 0px 169px 30px rgba(25, 190, 219, 0.7)" : "" }}></div>
      </div>
    </nav>
  </nav>
)};   

export default Navbar;
