import React, { useState } from 'react';
import useTelegram from '../hooks/useTelegram';
import { useBask } from '../Basket/BaskContext/BaskContext';
import './Form.css'; // Підключення CSS

const Form = () => {
  const { tg } = useTelegram();
  const { baskItems } = useBask();

  const [form, setForm] = useState({
    name: '',
    lastname: '',
    phone: '',
    city: '',
    street: '',
    paymentMethod: 'Готівка',
    email: '',
    time: ''
  });

  const getTotal = () => {
    return baskItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSendData = () => {
    const data = {
      ...form,
      baskItems,
      total: getTotal()
    };

    if (tg && tg.sendData) {
      tg.sendData(JSON.stringify(data));
    } else {
      alert("Telegram WebApp не ініціалізовано. Відкрий через Telegram.");
    }
  };

  return (
    <div className="form-container">
      <h2>Оформлення замовлення</h2>

      <div className="form-group">
        <label>Ім'я</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Прізвище</label>
        <input name="lastname" value={form.lastname} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Телефон</label>
        <input name="phone" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Місто</label>
        <input name="city" value={form.city} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Вулиця</label>
        <input name="street" value={form.street} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Година доставки</label>
        <input name="time" value={form.time} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Спосіб оплати</label>
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
          <option value="Готівка">Готівка</option>
          <option value="Карта">Карта</option>
        </select>
      </div>

      <button
        className="submit-button"
        onClick={onSendData}
        disabled={!form.name || !form.phone || !form.city || !form.street}
      >
        Підтвердити замовлення
      </button>
    </div>
  );
};

export default Form;
