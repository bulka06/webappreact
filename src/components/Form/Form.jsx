import React, { useState } from 'react';
import { useBask } from '../Basket/BaskContext/BaskContext';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Готівка');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { baskItems } = useBask();

  const getTotal = () => {
    return baskItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const onSendData = () => {
    const data = {
      name,
      lastname,
      phone,
      city,
      street,
      paymentMethod,
      email,
      time,
      baskItems,
    };

    console.log("Дані надіслано:", data);

    // Надсилання в Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify(data));
    }

    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Оформлення замовлення</h2>

      <div className="form-group">
        <label>Ім'я</label>
        <input type="text" placeholder="Ваше ім'я" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Прізвище</label>
        <input type="text" placeholder="Ваше прізвище" value={lastname} onChange={e => setLastName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Номер телефону</label>
        <input type="tel" placeholder="+380..." value={phone} onChange={e => setPhone(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Місто / Село</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Адреса доставки</label>
        <input type="text" placeholder="Назва вулиці та номер будинку" value={street} onChange={e => setStreet(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Спосіб оплати</label>
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
          <option value="Готівка">Готівка</option>
          <option value="Картка">Картка</option>
        </select>
      </div>

      <div className="form-group">
        <label>Електронна пошта (необов'язково)</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Година доставки (необов'язково)</label>
        <input type="text" value={time} onChange={e => setTime(e.target.value)} />
      </div>

      {/* Замовлення */}
      <div className="bask-container-form">
        <h3>Ваше замовлення</h3>
        {baskItems.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <>
            <div className="bask-items">
              {baskItems.map(item => (
                <div key={item.id} className="bask-card">
                  <div className="bask-card-body">
                    <p><strong>{item.name}</strong></p>
                    <p>Ціна: {item.price.toFixed(2)}₴</p>
                    <p>Кількість: {item.quantity}</p>
                    <p>Сума: {(item.price * item.quantity).toFixed(2)}₴</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bask-summary">
              <p><strong>Сума замовлення:</strong> {getTotal()}₴</p>
            </div>
          </>
        )}
      </div>

      <button
        className="submit-button"
        onClick={onSendData}
        disabled={!name || !phone || !city || !street}
      >
        Підтвердити замовлення
      </button>

      {isSubmitted && <p className="success-msg">✅ Замовлення прийнято!</p>}
    </div>
  );
};

export default Form;
