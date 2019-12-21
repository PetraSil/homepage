import React from 'react';
import './logo.css';
import linkedin from './linkedin.png';
import github from './github.png';

const Logo = () =>
  <>
    <span className="logo">
    PETRA SILAVUORI
    </span>
    <div className="logo-icons">
      <img src={linkedin} alt="Linkedin logo link."></img>
      <img src={github} alt="Github logo link."></img>
    </div>
  </>
;

export default Logo;