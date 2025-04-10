import React from 'react';
import { useParams } from 'react-router-dom';
import { places } from '../Data/data';
import './FoodInfo.css'; // Додамо окремий CSS-файл

const FoodInfo = () => {
  const { id, dishesId } = useParams();

  const place = places.find(place => place.id === id);

  const product = place?.categories
    .flatMap(category => category.dishes)
    .find(dish => dish.dishesId === dishesId);

  if (!product) {
    return <div className="food-info"><h2>Продукт не знайдено</h2></div>;
  }

  return (
    <div className="food-info">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>{product.price} грн</strong>
    </div>
  );
};

export default FoodInfo;
