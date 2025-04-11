import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSendData = () => {
        const data = {
            name,
            phone,
            street,
        };
        console.log("Дані надіслано:", data);
        setIsSubmitted(true);
    };

    return (
        <div className="form">
            <h3>Введіть свої дані</h3>

            <input 
                type="text" 
                placeholder="Ваше ім'я" 
                className="input"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Ваш номер телефону" 
                className="input"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Вулиця" 
                className="input"
                value={street}
                onChange={e => setStreet(e.target.value)}
            />

            <button 
                className="submit-button"
                onClick={onSendData}
                disabled={!name || !phone || !street}
            >
                Відправити дані
            </button>

            {isSubmitted && <p className="success-msg">Дані успішно надіслано ✅</p>}
        </div>
    );
};

export default Form;
