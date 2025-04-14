import React from "react";
import "./HeaderBar.css";
import { useNavigate } from "react-router-dom";

const HeaderBar = ({ isOpen, onClose, onOpenModal }) => {
    const navigate = useNavigate();

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

    return (
        <div className={`sidebar ${isOpen ? "show" : ""}`}>
            <button className="close-btn" onClick={onClose}>×</button>

            <button className="menu-btn" onClick={() => { navigate("/"); onClose(); }}>Головна</button>
            <button className="menu-btn" onClick={handleScrollToDelivery}>Послуги</button>
            <button className="menu-btn" onClick={handleScrollToAboutUs}>Про нас</button>
            <button className="menu-btn" onClick={handleOpenContactModal}>Контакти</button>
        </div>
    );
};

export default HeaderBar;
