import React from 'react';
import './mobileMenu.css';
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ open }) =>
    <nav className="mobile-menu" 
      style={{width: open ? "100%" : "0", opacity: open ? "1" : "0"}}>
      <NavLink exact to="/work" activeClassName="active">
        <h3>Work</h3>
      </NavLink>
      <NavLink exact to="/contact" activeClassName="active">
        <h3>Contact</h3>
      </NavLink>
      <NavLink exact to="/" activeClassName="active">
        <h3>Home</h3>
      </NavLink>    
    </nav>
;
export default MobileMenu;