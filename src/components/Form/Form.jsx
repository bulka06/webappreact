import React, { useEffect, useState } from "react";
import './Form.css';
import useTelegram from "../hooks/useTelegram";


const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const {tg} = useTelegram();

    useEffect( () => {
        tg.MainButton.setParams({
            text: 'Відправити дані',
        }); 
    },[]);

    useEffect(() => {
        if (!name || !phone || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [name, phone, street]);


    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    };
    
    return (
     
        <div className="form">
               <p> Ghbdfg</p>
            <h3>Введіть свої дані</h3>
            <input 
                type="text" 
                placeholder="Ваше ім'я" 
                className="input"
                value={name}
                onChange={onChangeName}
            />

            <input 
                type="text" 
                placeholder="Ваш номер телефону" 
                className="input"
                value={phone}
                onChange={onChangePhone}
            />

            <input 
                type="text" 
                placeholder="Вулиця" 
                className="input"
                value={street}
                onChange={onChangeStreet}
            />
        </div>
    );
};

export default Form;
