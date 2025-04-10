import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ZakladHome.css';
import FoodList from '../FoodList/FoodList'; 
import { places } from '../Data/data';

const ZakladHome = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const categoryRefs = useRef({});

  useEffect(() => {
    const foundPlace = places.find(place => place.id === id);
    setPlace(foundPlace);
  }, [id]);

  if (!place) {
    return <div>Заклад не знайдено</div>;
  }

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    const ref = categoryRefs.current[categoryName];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="zaklad-home">
      <h2>{place.title}</h2>
      <p>{place.schedule.split('\n').map((line, index) => (
        <span key={index}>{line}<br /></span>
      ))}</p>

      <div className="sticky-category-selector">
        <select onChange={handleCategoryChange} defaultValue="">
          <option value="">-- Всі категорії --</option>
          {place.categories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="categories">
        {place.categories.map((category, index) => (
          <div 
            key={index} 
            ref={el => categoryRefs.current[category.name] = el} 
            className="category"
          >
            <h3>{category.name}</h3>
            <FoodList dishes={category.dishes} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZakladHome;
