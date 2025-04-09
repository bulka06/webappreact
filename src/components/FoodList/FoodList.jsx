import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodList.css'; 

const FoodList = ({ dishes }) => {
  return (
    <div className="dishes">
      {dishes.map((dish, idx) => (
        <div key={idx} className="dish-container">
          <FoodItem item={dish} />
        </div>
      ))}
    </div>
  );
};

export default FoodList;