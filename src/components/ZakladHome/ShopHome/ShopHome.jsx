import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ShopHome.css';
import FoodList from '../FoodList/FoodList';
import { products } from '../../Data/data';

const ShopHome = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const categoryRefs = useRef({});

  useEffect(() => {
    const foundProduct = products.find(product => product.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Магазин не знайдено</div>;
  }

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const ref = categoryRefs.current[categoryName];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="shop-home">
      <h2>{product.title}</h2>
      <p>{product.schedule.split('\n').map((line, index) => (
        <span key={index}>{line}<br /></span>
      ))}</p>

      <div className="sticky-category-selector">
        <select onChange={handleCategoryChange} defaultValue="">
          <option value="">-- Всі категорії --</option>
          {product.categories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="categories">
        {product.categories.map((category, index) => (
          <div 
            key={index} 
            ref={el => categoryRefs.current[category.name] = el} 
            className="category"
          >
            <h3>{category.name}</h3>
            <FoodList dishes={category.dishes} id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopHome;
