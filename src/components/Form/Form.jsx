import React, { useEffect, useCallback, useState } from 'react';
import useTelegram from '../hooks/useTelegram';
import { useBask } from '../Basket/BaskContext/BaskContext';
import './Form.css';

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

  // Надсилання через Telegram WebApp
  const onSendData = useCallback(() => {
    const data = {
      ...form,
      baskItems,
      total: getTotal()
    };

    tg.sendData(JSON.stringify(data));
  }, [form, baskItems]);

  // Показ/приховування кнопки
  useEffect(() => {
    if (!form.name || !form.phone || !form.city || !form.street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [form]);

  // Ініціалізація кнопки Telegram
  useEffect(() => {
    tg.MainButton.setParams({ text: 'Підтвердити замовлення' });
  }, []);

  // Подія натискання кнопки
  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

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
    </div>
  );
};

export default Form;
