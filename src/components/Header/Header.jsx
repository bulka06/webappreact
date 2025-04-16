import React, { useState } from "react";
import "./Header.css";
import HeaderBar from "../HeaderBar/HeaderBar";

const Header = ({ onOpenModal }) => {
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
                    <span className="icon"></span>
                    <span className="cart-count"></span>
                </div>
            </header>

            {/* Передаємо onOpenModal у HeaderBar */}
            <HeaderBar 
                isOpen={isHeaderBarOpen} 
                onClose={toggleHeaderBar}
                onOpenModal={onOpenModal}
            />
        </>
    );
};

export default Header;
