import React from 'react';
import FoodItem from '../FoodItem/FoodItem'; // імпорт компоненту FoodItem 
import './FoodList.css'; 

const FoodList = ({ dishes, id }) => {
  return (
    <div className="dishes">
      {dishes.map((dish, idx) => (
        <div key={idx} className="dish-container">
          <FoodItem item={dish} id={id} />
        </div>
      ))}
    </div>
  );
};

export default FoodList;