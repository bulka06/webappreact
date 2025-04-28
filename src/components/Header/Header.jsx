import React, { useState } from "react";
import "./Header.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import { FiShoppingCart } from 'react-icons/fi';
import { useBask } from '../Basket/BaskContext/BaskContext';


import { useNavigate } from "react-router-dom";


const Header = ({ onOpenModal }) => {
    const [isHeaderBarOpen, setHeaderBarOpen] = useState(false);
    const { baskItems } = useBask();
    const navigate = useNavigate();

    const toggleHeaderBar = () => {
        setHeaderBarOpen(!isHeaderBarOpen);
    };

    const handleCartClick = () => {
        navigate('/bask');
    };

    const totalPrice = baskItems?.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    ) || 0;

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
                <div className="right" onClick={handleCartClick}>
                    <FiShoppingCart className="cart-icon" />
                    {totalPrice > 0 && (
                        <span className="cart-price">{totalPrice} ₴</span>
                    )}
                </div>
            </header>

            <HeaderBar 
                isOpen={isHeaderBarOpen} 
                onClose={toggleHeaderBar}
                onOpenModal={onOpenModal}
            />
        </>
    );
};

export default Header;
