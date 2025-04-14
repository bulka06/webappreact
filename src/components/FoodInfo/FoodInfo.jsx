import React from 'react';
import { useParams } from 'react-router-dom';
import { places, products } from '../Data/data';
import './FoodInfo.css';

const FoodInfo = () => {
  const { id, dishesId } = useParams();

  // Шукаємо в places
  const place = places.find(place => place.id === id);
  const productFromPlace = place?.categories
    ?.flatMap(category => category.dishes)
    ?.find(dish => dish.dishesId === dishesId);

  // Якщо не знайдено — шукаємо в products
  let productFromProducts = null;
  if (!productFromPlace) {
    const product = products.find(product => product.id === id);
    productFromProducts = product?.categories
      ?.flatMap(category => category.dishes)
      ?.find(dish => dish.dishesId === dishesId);
  }

  // Обираємо, що відобразити
  const product = productFromPlace || productFromProducts;

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
