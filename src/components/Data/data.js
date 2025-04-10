
export const places = [
  {
    id: '1',
    title: 'Pizza Soprano', /* Піца з Тераси  інше з То-То*/
    image: require('../assets/sunIcon.png'),
    schedule: 'понеділок – п’ятниця 08:00 – 21:00\nсубота – неділя 10:00 – 22:00',
    isNew: true,
    categories: [
      {
        name: 'Піца',
        dishes: [
          { dishesId: '111', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
          { dishesId: '112', name: 'Ді Парма', description: 'Прошуто, помідори, мікс салату, сир пармезан, сир моцарела, соус томатний', price: 210 },
          { dishesId: '113', name: 'Чілі Пепероні', description: 'Ковбаса салямі, сир моцарела, перець болгарський, перець чилі', price: 169 },
          { dishesId: '114', name: 'Кватроформаджі', description: 'Соус вершковий, сир моцарела, сир пармезан, сир дор блю, фета', price: 179 },
          { dishesId: '115', name: 'Капрічоза', description: 'Шинка, кукурудза, перець болгарський, маслини, печериці, соус томатний, сир моцарела', price: 179 },
          { dishesId: '116', name: 'Мафія', description: 'Соус томатний, шинка, салямі, печериці, маслини, помідор, сир моцарела', price: 179 },
        ],
      },
      {
        name: 'Пательня',
        dishes: [
          { dishesId: '121', name: 'Пательня з беконом, печерицями та гострим чілі', description: 'Картопля, печериці, бекон, перець чілі, вершки, моцарела, спеції', price: 185 },
          { dishesId: '122',name: 'Пательня з куркою та овочами', description: 'Картопля, курка, перець болгарський, броколі, вершки, моцарела, спеції', price: 185 },
          { dishesId: '123',name: 'Пательня Мисливська', description: 'Картопля, мисливські ковбаски,соус томат, моцарела, часник, кріп', price: 175 },
          { dishesId: '124',name: 'Пательня з куркою та печерицями', description: 'Картопля, куряче філе, печериці, вершки, моцарела, спеції', price: 195 },
        ],
      },

      {
        name: 'Салати',
        dishes: [
          { dishesId: '131', name: 'Грецький', description: 'Помідори, огірки, солодкий перець, синя цибуля, оливки, фета', price: 100 },
          { dishesId: '132',name: 'З грушею', description: 'Листя салату, груша, горгонзола, грецькі горіхи, соус', price: 129 },
          { dishesId: '133',name: 'Нісуаз', description: 'Салат, тунець, помідори, синя цибуля, перепелині яйця, маслини, анчоуси, соус', price: 130 },
          { dishesId: '134',name: 'З куркою та беконом', description: 'Салат, куряче філе, бекон, помідори, хлібні грінки, соус', price: 135 },
        ],
      },
      {
        name: 'Гарячі закуски',
        dishes: [
          { dishesId: '141', name: 'Млинці з салямі ', description: 'Сир, соус песто, салямі', price: 95 },
          { dishesId: '142', name: 'Млинці з шинкою', description: 'Шинка, сир, сметанний соус', price: 87 },
          { dishesId: '143', name: 'Сендвічі з куркою', description: 'Курка, бекон, салат, соус', price: 99 },
          { dishesId: '144', name: 'Сендвічі з шинкою та сиром', description: 'Шинка, сир, салат, соус', price: 119},
        ],
      },
      
      {
        name: 'Додатки',
        dishes: [
          { dishesId: '151', name: 'Печериці ', description: '', price: 20 },
          { dishesId: '152',name: 'Пармезан', description: '', price: 25 },
          { dishesId: '153',name: 'Оливки', description: '', price: 10 },
          { dishesId: '154',name: 'Шинка', description: '', price: 20},
          { dishesId: '155',name: 'Салямі', description: '', price: 25},
          { dishesId: '156',name: 'Кукурудза', description: '', price: 20},
          { dishesId: '157',name: 'Гострий чилі соус', description: '', price: 10},
          { dishesId: '158',name: 'Кетчуп', description: '', price: 7},
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Katana Sushi',  /*  З Sushi Zoom*/
    image: require('../assets/sunIcon.png'),
    schedule: '11:00 – 22:00',
    isNew: false,
    categories: [
      {
        name: 'Каліфорнії',
        dishes: [
          { dishesId: '211', name: 'Каліфорнія з тунцем', description: 'Рис, ікра масаго, тунець, сурімі, огірок, авокадо, японський майонез', price: 135  },
          { dishesId: '212',name: 'Каліфорнія з вугрем', description: 'Рис, ікра масаго, вугор, сурімі, огірок, авокадо, японський майонез', price: 159 },
          { dishesId: '213',name: 'Каліфорнія з лососем', description: 'Рис, ікра масаго, лосось, сурімі, огірок, авокадо, японський майонез', price: 149 },
          { dishesId: '214',name: 'Каліфорнія філа з копченим лососем', description: 'рис, чорний та білий кунжут, крем сир, копчений лосось, авокадо, огірок', price: 135 },
          { dishesId: '215',name: 'Каліфорнія філа з лососем', description: 'Рис, крем сир, чорний та білий кунжут, лосось, авокадо, огірок', price: 125 },
          { dishesId: '216',name: 'Каліфорнія філа з креветкою', description: 'Рис, чорний та білий кунжут, креветка, авокадо, огірок, крем сир', price: 125 },
        ],
      },
      {
        name: 'Філадельфії',
        dishes: [
          { dishesId: '221', name: 'Філадельфія чіз з лососем', description: '(Рис, крем сир, огірок, чедер тостовий, лосось, японський майонез)', price: 185 },
          { dishesId: '222',name: 'Філадельфія з авокадо', description: '(Рис, крем сир, авокадо, понзу)', price: 135 },
          { dishesId: '223',name: 'Філадельфія з тигровою креветкою', description: '(Рис, крем сир, огірок, тигрова креветка)', price: 165 },
          { dishesId: '224',name: 'Філадельфія з тунцем', description: '(Рис, крем сир, огірок, тунець)', price: 155 },
          { dishesId: '225',name: 'Філадельфія з вугрем', description: '(Рис, крем сир, вугор, унагі соус, огірок, кунжут)', price: 175 },
          { dishesId: '226',name: 'Філадельфія з копченим лососем', description: '(Рис, крем сир, огірок, копчений лосось)', price: 175 },
        ],
      },

      {
        name: 'Запечені роли',
        dishes: [
          { dishesId: '231', name: 'Запечена каліфорнія з вугрем', description: '(Рис, норі, крем сир, огірки, вугор, моцарелла, пармезан, японський майонез, білий та чорний кунжут, унагі соус)', price: 175 },
          { dishesId: '232', name: 'Запечена каліфорнія з лососем', description: '(Рис, норі, крем сир, огірки, лосось, моцарелла, пармезан, японський майонез, білий та чорний кунжут, унагі соус)', price: 149 },
          { dishesId: '233', name: 'Запечене футо з тигровою креветкою та авокадо', description: '(Рис, норі, тигрова креветка, авокадо, моцарелла, пармезан, японський майонез, унагі соус)', price: 185 },
          { dishesId: '234', name: 'Запечена філадельфія з лососем', description: '(Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, лосось, унагі соус)', price: 215 },
          { dishesId: '235', name: 'Запечений Black рол', description: '(Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, чорний кунжут, унагі соус)', price: 145 },
          { dishesId: '236', name: 'Запечений сезам рол', description: '(Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, кунжут, унагі соус)', price: 125 },
        ],
      },

      {
        name: 'Дракони',
        dishes: [
          { dishesId: '241', name: 'Зелений Дракон', description: '(Рис, крем сир, вугор, огірки, авокадо, унагі соус, кунжут)', price: 165 },
          { dishesId: '242', name: 'Золотий Дракон', description: '(Рис, крем сир, вугор, огірок, тигрова креветка)', price: 175 },
          { dishesId: '243', name: 'Вогняний Дракон', description: '(Рис, крем сир, креветка, авокадо, лосось)', price: 190 },
          { dishesId: '244', name: 'Червоний Дракон', description: '(Рис, крем сир, вугор, авокадо, тунець)', price: 175 },
        ],
      },

      {
        name: 'Сети',
        dishes: [
          { dishesId: '251', name: 'Сет Едо', description: '(Макі філа з лососем½, макі філа з лососевою ікрою½, філадельфія з лососем½, філадельфія з вугрем ½, каліфорнія філа з лососем½, каліфорнія філа з креветкою½, чорний дракон ½, червоний дракон ½)', price: 529 },
          { dishesId: '252', name: 'Сет Нісеко', description: '(Філадельфія з лососем, Пикантний Тартар, Золотий Дракон 1/2, Зелений Дракон 1/2, Спайсі з Лососем 1/2, Спайси з Сурімі 1/2)', price: 649 },
          { dishesId: '253', name: 'Сет Осіма', description: '(Халапеньйо рол,Сирний рол,Гострий футомак,Гриль рол з лососем 1/2,Гриль рол з тунцем 1/2)', price: 589 },
          { dishesId: '254', name: 'Сет Family', description: '(Каліфорнія гриль з лососем ½, каліфорніяз вугрем ½, гриль рол з лососем ½, гриль рол з тунцем ½, філадельфія з лососем ½, філадельфія з вугрем½, червоний дракон ½, чорний дракон½ )', price: 659 },
          { dishesId: '255', name: 'Сет Шанхай', description: '(Зелений дракон½, золотий дракон½, філадельфія з лососем½, філадельфія чіз з лососем½, філадельфія сезам½, філадельфія з тунцем½))', price: 449 },
          { dishesId: '256', name: 'Сет Легіон', description: '(Філадельфія класік з лососем, філадельфія класік з вугрем, філадельфія класік з тигровою креветкою, чорний дракон, червоний дракон, зелений дракон))', price: 1099 },
        ],
      },

    ],
  },
];
