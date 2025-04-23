import React from 'react';
import { useBask } from '../BaskContext/BaskContext';
import { useNavigate } from 'react-router-dom';

import './BaskPage.css';

const BaskPage = () => {
  const {
    baskItems,
    removeFromBask,
    increaseQuantity,
    decreaseQuantity
  } = useBask();

  const navigate = useNavigate();
  const getTotal = () => {
    return baskItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="bask-container">
      <h1>Кошик</h1>

      {baskItems.length === 0 ? (
        <p>Ваш кошик порожній</p>
      ) : (
        <>
          <div className="bask-items">
            {baskItems.map(item => (
              <div key={item.id} className="bask-card">
                <div className="bask-card-header">
                  <button onClick={() => removeFromBask(item.id)}>×</button>
                </div>
                <div className="bask-card-body">
                  <p><strong>Товар:</strong> {item.name}</p>
                  <p><strong>Ціна:</strong> {item.price.toFixed(2)}₴</p>
                  <div className="bask-qty-row">
                    <strong>Кількість:</strong>
                    <div className="qty-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <input
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                  <p><strong>Проміжний підсумок:</strong> {(item.price * item.quantity).toFixed(2)}₴</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bask-summary">
            <h2>Підсумки кошика</h2>
            <p><strong>Проміжний підсумок:</strong> {getTotal()}₴</p>
            <p><strong>Доставка:</strong> Єдиний тариф</p>
            <small>Варіанти доставки будуть оновлені під час оформлення замовлення.</small>
            <button className="checkout-btn" onClick={() => navigate('/form')}>
            Перейти до оформлення
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BaskPage;
