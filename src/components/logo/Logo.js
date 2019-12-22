import React from 'react';
import './logo.css';
import linkedin from './linkedin.png';
import github from './github.png';
import { Link } from 'react-router-dom'

const Logo = () =>
  <>
     <Link exact to="/">
      <span className="logo">
        PETRA SILAVUORI
      </span>
    </Link>
    {/*<div className="logo-icons">
      <img src={linkedin} alt="Linkedin logo link."></img>
      <img src={github} alt="Github logo link."></img>
</div>*/}
  </>
;

export default Logo;