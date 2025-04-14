import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ShopHome.css';
import FoodList from '../FoodList/FoodList';
import { products } from '../../Data/data';

const ShopHome = () => {
  const { id } = useParams();
  const location = useLocation();
  const categoryRefs = useRef({});
  const [product, setProduct] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategoryId = queryParams.get('categoryId');

  useEffect(() => {
    const foundProduct = products.find(product => product.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Магазин не знайдено</div>;
  }

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    const ref = categoryRefs.current[categoryId];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ✨ Фільтруємо категорії, якщо в URL є categoryId
  const visibleCategories = selectedCategoryId
    ? product.categories.filter(cat => String(cat.categoryId) === selectedCategoryId)
    : product.categories;

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
            <option key={index} value={category.categoryId}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="categories">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            ref={el => categoryRefs.current[category.categoryId] = el}
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
