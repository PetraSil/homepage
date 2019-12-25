import React from 'react';
import './mobileMenu.css';
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ open, setMobile }) =>
    <nav className="mobile__menu" 
      style={{width: open ? "100%" : "0", opacity: open ? "1" : "0"}}>
      <NavLink to="/work" activeClassName="active" open={open} onClick={() => setMobile(!open)}>
        <h3 aria-label="Navigation link">Work</h3>
      </NavLink>
      <NavLink to="/contact" activeClassName="active" open={open} onClick={() => setMobile(!open)}>
        <h3 aria-label="Navigation link">Contact</h3>
      </NavLink>
      <NavLink  to="/home" activeClassName="active" open={open} onClick={() => setMobile(!open)}>
        <h3 aria-label="Navigation link">Home</h3>
      </NavLink>    
    </nav>
;
export default MobileMenu;