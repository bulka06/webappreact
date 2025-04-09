import React, { useState } from "react";
import "./Header.css";
import HeaderBar from "../HeaderBar/HeaderBar"; // імпорт компоненту

const Header = () => {
    const [isHeaderBarOpen, setHeaderBarOpen] = useState(false);

    const toggleHeaderBar = () => {
        setHeaderBarOpen(!isHeaderBarOpen);
    };

    return (
        <>
            <header className="header-container">
                <div className="left" onClick={toggleHeaderBar}>
                    <div className={`burger-icon ${isHeaderBarOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="center">
                    <div className="brand-text">
                        <p>Служба доставки</p>
                        <strong>FastGo</strong>
                    </div>
                </div>
                <div className="right">
                    <span className="icon">🛒</span>
                    <span className="cart-count">0</span>
                </div>
            </header>
            <HeaderBar isOpen={isHeaderBarOpen} onClose={toggleHeaderBar} />
        </>
    );
};

export default Header;
