import React from 'react';
import './BaskButton.css';
import { useBask } from '../../Basket/BaskContext/BaskContext';
import { useNavigate } from 'react-router-dom'; // імпортуємо навігацію

const BaskButton = () => {
  const { baskItems } = useBask();
  const navigate = useNavigate(); // ініціалізуємо navigate
  
  // Якщо кошик порожній — не показуємо кнопку
  if (!baskItems || baskItems.length === 0) return null;

  const handleClick = () => {
    navigate('/bask'); // переходимо на сторінку кошика
  };

  return (
    <button className="bask-button" onClick={handleClick}>
      🛒 {baskItems.length}
    </button>
  );
};

export default BaskButton;
