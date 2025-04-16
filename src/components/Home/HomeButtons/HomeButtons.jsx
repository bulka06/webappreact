import React from "react";
import "./HomeButtons.css";
import homeIcon from "../../assets/homeIcon.jpg";
import sunIcon from "../../assets/sunIcon.png";

const HomeButtons = ({ onScrollToCategories, onScrollToZaklads }) => {
  return (
    <div className="home-buttons-wrapper">
      <div className="home-button" onClick={onScrollToCategories}>
        <img src={sunIcon} alt="Продукти" />
        <span>Продукти</span>
      </div>
      <div className="home-button" onClick={onScrollToZaklads}>
        <img src={homeIcon} alt="Заклади" />
        <span>Заклади</span>
      </div>
    </div>
  );
};

export default HomeButtons;
