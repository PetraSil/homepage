import React from 'react'
import './intro.css';
import Button from '../button/Button';

const Intro = () =>
    <div className="intro-container">
      <h1>You could call me a...</h1>
      <h2>Software Developer<br/>
        Web Enthusiast<br/>
        Accessability Nerd<br/>
        UX/UI Designer</h2>
      <p>They also say I’m a pretty nice person.<br/>
        What a deal I am!
      </p>
      <Button text={"Contact me"} />
    </div>
;

export default Intro;