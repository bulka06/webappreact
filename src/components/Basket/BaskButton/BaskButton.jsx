import React from 'react';
import './BaskButton.css';
import { useBask } from '../../Basket/BaskContext/BaskContext';

const BaskButton = ({ onClick }) => {
  const { baskItems } = useBask();
  
  // Додаємо перевірку на undefined/null
  if (!baskItems || baskItems.length === 0) return null;
  
  console.log('Кількість товарів у кошику:', baskItems.length);
  
  return (
    <button className="bask-button" onClick={onClick}>
      🛒 {baskItems.length}
    </button>
  );
};

export default BaskButton;