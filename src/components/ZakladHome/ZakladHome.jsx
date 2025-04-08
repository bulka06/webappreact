import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './ZakladHome.css';
import FoodItem from '../FoodItem/FoodItem';
import { places } from './data';  // Якщо data.js знаходиться в тій самій папці

const ZakladHome = () => {
  const { id } = useParams(); // отримуємо id з URL
  const [place, setPlace] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(""); // Стан для вибраної категорії
  const categoryRefs = useRef({}); // Для зберігання посилань на категорії

  useEffect(() => {
    console.log("ID з URL:", id); // Додаємо логування параметра id

    // Знайдемо заклад за id
    const foundPlace = places.find(place => place.id === id);
    console.log("Знайдений заклад:", foundPlace); // Логуємо знайдений заклад

    setPlace(foundPlace); // Встановлюємо знайдений заклад у стан
  }, [id]);

  if (!place) {
    return <div>Заклад не знайдено</div>;
  }

  // Обробка зміни вибраної категорії
  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategory(categoryName);

    // Прокручуємо до вибраної категорії
    if (categoryRefs.current[categoryName]) {
      categoryRefs.current[categoryName].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Фільтруємо страви за вибраною категорією
  const selectedCategoryDishes = selectedCategory
    ? place.categories.find(category => category.name === selectedCategory)?.dishes || []
    : place.categories.flatMap(category => category.dishes); // Якщо категорія не вибрана, показуємо всі страви

  return (
    <div className="zaklad-home">
      <h2>{place.title}</h2>
      <p>{place.schedule.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>

      <div className="category-selector">
      
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">-- Всі страви --</option>
          {place.categories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      {/* Відображення категорій та страв з відповідними рефами для скролінгу */}
      <div className="categories">
        {place.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category" ref={(el) => categoryRefs.current[category.name] = el}>
            <h3>{category.name}</h3>
            <div className="dishes">
              {category.dishes.map((dish, index) => (
                <div key={index} className="dish-container">
                  <FoodItem item={dish} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    
      <div className="dishes">
        {selectedCategoryDishes.length > 0 ? (
          selectedCategoryDishes.map((dish, index) => (
            <div key={index} className="dish-container">
              <FoodItem item={dish} />
            </div>
          ))
        ) : (
          <p>Будь ласка, виберіть категорію страв.</p>
        )}
      </div>
    </div>
  );
};

export default ZakladHome;
