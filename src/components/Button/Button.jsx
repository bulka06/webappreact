import React from 'react';
import './Button.css';


const Button = (props) => {
    return(
        <button {...props} classNamek={'button' + props.className}/>
    );
};