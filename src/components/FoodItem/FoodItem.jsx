import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './FoodItem.css';

const FoodItem = ({ item, id }) => {
    return (
        <div className="food-card">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <strong>{item.price} грн</strong>
            
            <Link to={`/food-info/${id}/${item.dishesId}`} className="food-info-link">
                Деталі
            </Link>
        </div>
    );
};

export default FoodItem;
