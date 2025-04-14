import React, { useState } from "react";
import "./HeaderBar.css";
import { useNavigate } from "react-router-dom";
import WorkTime from "../WorkTime/WorkTime";

const HeaderBar = ({ isOpen, onClose, onOpenModal }) => {
  const navigate = useNavigate();
  const [showWorkTime, setShowWorkTime] = useState(false); // ← Стан модального вікна

  const handleScrollToDelivery = () => {
    navigate("/#delivery-info");
    onClose();
  };

  const handleScrollToAboutUs = () => {
    navigate("/#about-us");
    onClose();
  };

  const handleOpenContactModal = () => {
    onOpenModal();
    onClose();
  };

  const handleOpenWorkTime = () => {
    setShowWorkTime(true);
    onClose(); // якщо треба ховати сайдбар
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={onClose}>×</button>

        <button className="menu-btn" onClick={() => { navigate("/"); onClose(); }}>
          Головна
        </button>
        <button className="menu-btn" onClick={handleScrollToDelivery}>
          Послуги
        </button>
        <button className="menu-btn" onClick={handleScrollToAboutUs}>
          Про нас
        </button>
        <button className="menu-btn" onClick={handleOpenContactModal}>
          Контакти
        </button>
        <button className="menu-btn" onClick={handleOpenWorkTime}>
          Графік роботи
        </button>
      </div>

      {/* Модальне вікно */}
      <WorkTime isOpen={showWorkTime} onClose={() => setShowWorkTime(false)} />
    </>
  );
};

export default HeaderBar;
