import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodItem.css';
import { useBask } from '../../Basket/BaskContext/BaskContext';

const FoodItem = ({ item, id }) => {
    const { addToBask } = useBask();
    const navigate = useNavigate(); // Використання useNavigate для перенаправлення

    const handleAddToBask = () => {
        addToBask({
            id: item.dishesId,
            name: item.name,
            price: item.price,
        });
    };

    const handleNavigate = () => {
        navigate(`/food-info/${id}/${item.dishesId}`); // Перенаправлення при кліку
    };

    return (
        <div className="food-card" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            {/* Додаємо картинку, якщо є */}
            {item.imageFood && (
                <img src={item.imageFood} alt={item.name} className="food-image" />
            )}

            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="food-card-actions" onClick={(e) => e.stopPropagation()}>
                <span className="food-card-price">{item.price} грн</span>
                <button className="add-to-bask-btn" onClick={handleAddToBask}>
                    +
                </button>
            </div>
        </div>
    );
};

export default FoodItem;
