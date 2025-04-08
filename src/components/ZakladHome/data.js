// data.js

export const places = [
    {
      id: '1',
      title: 'Чудовий ранок',
      schedule: 'понеділок – п’ятниця 08:00 – 21:00\nсубота – неділя 10:00 – 22:00',
      categories: [
        {
          name: 'Сніданки',
          dishes: [
            { name: 'Чікен бургер', description: 'Соковите куряче м’ясо, свіжі овочі', price: 80 },
            { name: 'Біф бургер', description: 'Соковитий яловичий бургер', price: 95 },
            { name: 'Картопля фрі', description: 'Смажена картопля з соусом', price: 40 },
            { name: 'Курячі крильця', description: 'Хрусткі курячі крильця', price: 70 },
          ],
        },
        {
          name: 'Десерти',
          dishes: [
            { name: 'Морозиво', description: 'Смачне ванільне морозиво', price: 45 },
            { name: 'Торт', description: 'Шоколадний торт', price: 60 },
            { name: 'Пиріжки', description: 'Свежі домашні пиріжки', price: 35 },
            { name: 'Чізкейк', description: 'Легкий чізкейк', price: 55 },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Sushi Zoom',
      schedule: '11:00 – 22:00',
      categories: [
        {
          name: 'Сети',
          dishes: [
            { name: 'Суші сет', description: 'Різноманітні суші та роли', price: 150 },
            { name: 'Роли Калифорнія', description: 'Роли з авокадо і лососем', price: 120 },
            { name: 'Роли Філадельфія', description: 'Роли з філадельфією та лососем', price: 130 },
            { name: 'Роли Текіла', description: 'Роли з креветками та соусом текіла', price: 140 },
          ],
        },
      ],
    },
  ];
  