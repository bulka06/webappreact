import React, { useState } from 'react';
import './FormModal.css';

const FormModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Функція для відправки даних
  const onSendData = () => {
    const data = { name, phone };
    console.log("Дані надіслано:", data);
    setIsSubmitted(true);

    // Скидаємо форму через 2 секунди і закриваємо модалку
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      onClose();  // Закриває модалку після 2 секунд
    }, 2000);
  };

  // Обробник кліку по оверлею для закриття модалки при натисканні на фон
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();  // Закриває модалку при натисканні на фон
    }
  };

  return (
    <div className="form-modal-overlay" onClick={handleOverlayClick}>
      <div className="form-modal">
        <div className="form-modal-header">
          <h3>Зв'язатись з нами </h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {!isSubmitted ? (
          <>
            <input
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Ваш номер телефону"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="form-input"
            />
            <button
              className="form-submit-btn"
              onClick={onSendData}
              disabled={!name || !phone} // Забороняємо відправку без заповнених полів
            >
              Відправити
            </button>
          </>
        ) : (
          <p className="form-success-msg">Дякуємо! Дані надіслано ✅</p>
        )}
      </div>
    </div>
  );
};

export default FormModal;
