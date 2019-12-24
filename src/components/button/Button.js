import React from 'react';
import'./button.css';

const Button = ({ text }) => 
    <button className="button button__default">
        {text}
    </button>
;

export default Button;