import React from 'react';
import './logo.css';
import linkedin from './linkedin.png';
import github from './github.png';
import { Link } from 'react-router-dom'

const Logo = ({ open }) =>
  <>
     <Link exact to="/">
      <span className="logo" style={{ display: open ? "none" : "block" }}>
        PETRA SILAVUORI
      </span>
    </Link>
  </>
;

export default Logo;