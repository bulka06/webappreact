import React, { useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import { useBask } from '../Basket/BaskContext/BaskContext';

const Form = () => {
  const { tg } = useTelegram(); // кастомний хук
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
    <div className="form">
      <h2>Оформлення замовлення</h2>
      <input name="name" placeholder="Ім'я" value={form.name} onChange={handleChange} />
      <input name="lastname" placeholder="Прізвище" value={form.lastname} onChange={handleChange} />
      <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} />
      <input name="city" placeholder="Місто" value={form.city} onChange={handleChange} />
      <input name="street" placeholder="Вулиця" value={form.street} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="time" placeholder="Година доставки" value={form.time} onChange={handleChange} />

      <button
        onClick={onSendData}
        disabled={!form.name || !form.phone || !form.city || !form.street}
      >
        Підтвердити замовлення
      </button>
    </div>
  );
};

export default Form;
