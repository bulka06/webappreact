import React from 'react';
import { useBask } from '../BaskContext/BaskContext'; // Імпорт контексту
import './BaskModal.css';

const BaskModal = ({ onClose }) => {
  const { baskItems, removeFromBask } = useBask();

  return (
    <div className="bask-modal-overlay" onClick={onClose}>
      <div className="bask-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Кошик</h2>
        {baskItems.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <ul>
            {baskItems.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity}
                <button onClick={() => removeFromBask(item.id)}>Видалити</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BaskModal;
