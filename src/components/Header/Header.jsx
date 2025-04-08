import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <div className="left">
                <span className="icon">☰</span>
            </div>
            <div className="center">
                <div className="brand-text">
                    <div>Служба доставки</div>
                    <strong>Тук-Тук</strong>
                </div>
            </div>
            <div className="right">
                <span className="icon">🛒</span>
                <span className="cart-count">1</span>
            </div>
        </header>
    );
};

export default Header;
