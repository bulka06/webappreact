import React from 'react';
import { useParams } from 'react-router-dom';
import { places, products } from '../Data/data'; // Додано імпорт products
import './FoodInfo.css';

const FoodInfo = () => {
  const { id, dishesId } = useParams();

  // Спочатку шукаємо у places
  const place = places.find(place => place.id === id);

  // Шукаємо продукт у categories конкретного закладу
  const productFromPlace = place?.categories
    ?.flatMap(category => category.dishes)
    ?.find(dish => dish.dishesId === dishesId);

  // Якщо не знайшли в places, шукаємо у products
  const productFromProducts = !productFromPlace ? 
    products.find(product => product.id === id) : null;

  // Використовуємо знайдений продукт (або з places, або з products)
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