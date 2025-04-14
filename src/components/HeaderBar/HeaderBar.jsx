import React from "react";
import "./HeaderBar.css";
import { Link } from "react-router-dom";

const HeaderBar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
            <button className="close-btn" onClick={onClose}>×</button>

            <Link to="/" className="menu-btn" onClick={onClose}>Головна</Link>
            <button className="menu-btn">Послуги</button>
            <button className="menu-btn">Про нас</button>
            <button className="menu-btn">Контакти</button>
        </div>
    );
};

export default HeaderBar;
