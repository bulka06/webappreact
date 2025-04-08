import React from 'react';
import './FoodItem.css';

const FoodItem = ({ item }) => {
    return (
        <div className="food-card">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <strong>{item.price} грн</strong>
        </div>
    );
};

export default FoodItem;
