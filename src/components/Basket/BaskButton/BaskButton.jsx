import React from 'react';
import './BaskButton.css';
import { useBask } from '../../Basket/BaskContext/BaskContext';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const BaskButton = () => {
  const { baskItems } = useBask();
  const navigate = useNavigate();

  if (!baskItems || baskItems.length === 0) return null;

  const handleClick = () => {
    navigate('/bask');
  };

  const totalPrice = baskItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="bask-button-new" onClick={handleClick}>
      <div className="top-row">
        <FiShoppingCart className="cart-icon" />
        <span className="price">{totalPrice} ₴</span>
      </div>

    </div>
  );
};

export default BaskButton;
