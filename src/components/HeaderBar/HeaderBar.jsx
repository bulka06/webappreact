import React from "react";
import "./HeaderBar.css"; 

const HeaderBar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
            <button className="menu-btn">Головна</button>
            <button className="menu-btn">Меню</button>
            <button className="menu-btn">Про нас</button>
            <button className="menu-btn">Контакти</button>
        </div>
    );
};

export default HeaderBar;
