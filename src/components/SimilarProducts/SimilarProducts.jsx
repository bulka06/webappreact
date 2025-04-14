import React from 'react';
import { places, products } from '../Data/data';
import FoodItem from '../ZakladHome/FoodItem/FoodItem';

import './SimilarProducts.css';

const SimilarProducts = ({ product, id }) => {
  let similarProducts = [];

  const place = places.find(place => place.id === id);
  const isFromPlace = !!place?.categories
    ?.flatMap(category => category.dishes)
    ?.find(dish => dish.dishesId === product.dishesId);

  if (isFromPlace) {
    place?.categories.forEach(category => {
      if (category.dishes.some(dish => dish.dishesId === product.dishesId)) {
        similarProducts = category.dishes.filter(dish => dish.dishesId !== product.dishesId);
      }
    });
  } else {
    const productData = products.find(p => p.id === id);
    productData?.categories.forEach(category => {
      if (category.dishes.some(dish => dish.dishesId === product.dishesId)) {
        similarProducts = category.dishes.filter(dish => dish.dishesId !== product.dishesId);
      }
    });
  }

  if (!similarProducts.length) return null;

  return (
    <div className="similar-products">
      <h3>Схожі товари:</h3>
      <div className="similar-products-list">
        {similarProducts.map(similar => (
          <FoodItem key={similar.dishesId} item={similar} id={id} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
