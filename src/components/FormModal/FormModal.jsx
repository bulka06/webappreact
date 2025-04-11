import React, { useState } from 'react';
import './FormModal.css';

const FormModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setIsSubmitted(false);
        setName('');
        setPhone('');
        setStreet('');
    };

    const onSendData = () => {
        const data = {
            name,
            phone,
            street,
        };
        console.log("Дані надіслано:", data);
        setIsSubmitted(true);
    };

    // Закриття модалки при кліку на фон
    const handleOverlayClick = (e) => {
        // Перевіряємо, чи клік був саме на фоні, а не на модалці
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return (
        <>
            <div className="form-floating-button" onClick={toggleModal}>
                📞
            </div>

            {isOpen && (
                <div className="form-modal-overlay" onClick={handleOverlayClick}>
                    <div className="form-modal">
                        <div className="form-modal-header">
                            <h3>Залишити заявку</h3>
                            <button className="close-btn" onClick={toggleModal}>✕</button>
                        </div>
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
                        <input
                            type="text"
                            placeholder="Вулиця"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                            className="form-input"
                        />
                        <button
                            className="form-submit-btn"
                            onClick={onSendData}
                            disabled={!name || !phone || !street}
                        >
                            Відправити
                        </button>
                        {isSubmitted && <p className="form-success-msg">Дані надіслано ✅</p>}
                    </div>
                </div>
            )}
        </>
    );
};


export default FormModal;
