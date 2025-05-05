import React, { useState } from 'react';
import { useBask } from '../Basket/BaskContext/BaskContext';
import './Form.css';

const Form = () => {
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

  const [status, setStatus] = useState(null);

  const getTotal = () => {
    return baskItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // Перевірка на обов'язкові поля
    const { name, phone, city, street } = form;
    if (!name || !phone || !city || !street) {
      setStatus('⚠️ Заповніть всі обовʼязкові поля');
      return;
    }

    const data = {
      ...form,
      baskItems,
      total: getTotal()
    };

    try {
      const response = await fetch('https://webappbot.onrender.com/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('✅ Замовлення успішно надіслано!');
      } else {
        setStatus('❌ Помилка при надсиланні замовлення.');
      }
    } catch (error) {
      console.error('❌ Помилка запиту:', error);
      setStatus('❌ Сталася помилка під час надсилання.');
    }
  };

  return (
    <div className="form-container">
      <h2>Оформлення замовлення</h2>

      <div className="form-group">
        <label>Ім'я *</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Прізвище</label>
        <input name="lastname" value={form.lastname} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Телефон *</label>
        <input name="phone" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Місто *</label>
        <input name="city" value={form.city} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Вулиця *</label>
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

      <button className="submit-button" onClick={handleSubmit}>Надіслати замовлення</button>

      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default Form;
