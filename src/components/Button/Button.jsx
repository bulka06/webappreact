import React from 'react';
import './Button.css';

const Button = ({ className = '', ...props }) => {
    return (
        <button {...props} className={`button ${className}`} />
    );
};

export default Button;
