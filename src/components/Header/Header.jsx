import React from "react";
import "./Header.css";
import useTelegram from "../hooks/useTelegram";

const Header = () => {
    return (
        <header className="header-container">
            <div className="left">
                <span className="icon">☰</span>
            </div>
            <div className="center">
                <div className="brand-text">
                    <div>Служба доставки</div>
                    <strong>FastGo</strong>
                </div>
            </div>
            <div className="right">
                <span className="icon">🛒</span>
                <span className="cart-count">0</span>
            </div>
        </header>
    );
};

export default Header;
