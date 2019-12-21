import React from 'react';
import'./button.css';

const Button = ({ text }) => 
    <button className="button button-default">
        {text}
    </button>
;

export default Button;