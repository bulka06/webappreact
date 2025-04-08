import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ZakladHome.css';
import FoodItem from '../FoodItem/FoodItem';

const ZakladHome = () => {
  const { id } = useParams(); // отримуємо id з URL
  const [place, setPlace] = useState(null);

  useEffect(() => {
    console.log("ID з URL:", id); // Додаємо логування параметра id

    const places = [
      {
        id: '1',
        title: 'Чудовий ранок',
        schedule: 'понеділок – п’ятниця 08:00 – 21:00\nсубота – неділя 10:00 – 22:00',
        dishes: [
          { name: 'Чікен бургер', description: 'Соковите куряче м’ясо, свіжі овочі', price: 80 },
          { name: 'Біф бургер', description: 'Соковитий яловичий бургер', price: 95 },
          { name: 'Курячі крильця', description: 'Хрусткі курячі крильця', price: 70 },
          { name: 'Картопля фрі', description: 'Смажена картопля з соусом', price: 40 },
        ],
      },
      {
        id: '2',
        title: 'Sushi Zoom',
        schedule: '11:00 – 22:00',
        dishes: [
          { name: 'Суші сет', description: 'Різноманітні суші та роли', price: 150 },
          { name: 'Роли Калифорнія', description: 'Роли з авокадо і лососем', price: 120 },
        ],
      },
    ];

    // Знайдемо заклад за id
    const foundPlace = places.find(place => place.id === id);
    console.log("Знайдений заклад:", foundPlace); // Логуємо знайдений заклад

    setPlace(foundPlace); // Встановлюємо знайдений заклад у стан
  }, [id]);

  if (!place) {
    return <div>Заклад не знайдено</div>;
  }

  return (
    <div className="zaklad-home">
      <h2>{place.title}</h2>
      <p>{place.schedule.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>

      <div className="dishes">
        {place.dishes.map((dish, index) => (
          <div key={index} className="dish-container">
            <FoodItem item={dish} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZakladHome;
