import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';
import { useBask } from '../../Basket/BaskContext/BaskContext';


const FoodItem = ({ item, id }) => {
    const { addToBask } = useBask();

    const handleAddToBask = () => {
        addToBask({
            id: item.dishesId,
            name: item.name,
            price: item.price,
        });
    };

    return (
        <div className="food-card">
            {/* Додаємо картинку, якщо є */}
            {item.imageFood && (
                <img src={item.imageFood} alt={item.name} className="food-image" />
            )}

            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <strong>{item.price} грн</strong>

            <div className="food-card-actions">
                <Link to={`/food-info/${id}/${item.dishesId}`} className="food-info-link">
                    Деталі
                </Link>
                <button className="add-to-bask-btn" onClick={handleAddToBask}>
                    +
                </button>
            </div>
        </div>
    );
};

export default FoodItem;
