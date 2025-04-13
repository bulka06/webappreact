import React from "react";
import "./HomeButtons.css";
import homeIcon from "../../assets/homeIcon.jpg";
import sunIcon from "../../assets/sunIcon.png";

const HomeButtons = () => {
    const handleProductsClick = () => {
        console.log("Перехід до продуктів");
    };

    const handleShopsClick = () => {
        console.log("Перехід до закладів");
    };

    return (
        <div className="home-buttons-wrapper">
            <div className="home-button" onClick={handleProductsClick}>
                <img src={sunIcon} alt="Продукти" />
                <span>Продукти</span>
            </div>
            <div className="home-button" onClick={handleShopsClick}>
                <img src={homeIcon} alt="Заклади" />
                <span>Заклади</span>
            </div>
        </div>
    );
};

export default HomeButtons;
