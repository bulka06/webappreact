
export const places = [
  {
    id: '1',
    title: 'Pizza Soprano', /* Піца з Тераси  інше з То-То*/
    image: require('../assets/PizzaSoprano/SopranoPizzaLogo.png'),
    schedule: 'Пн – Пт 08:00 – 21:00 \n Сб – Нд 10:00 – 22:00' ,
    isNew: true,
    categories: [
      {
        name: 'Піца',
        imageFood: require('../assets/homeIcon.jpg'),
        dishes: [
          { dishesId: '111', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179,
            imageFood: require('../assets/PizzaSoprano/PizzaTropikana.png')},
          { dishesId: '112', name: 'Ді Парма', description: 'Прошуто, помідори, мікс салату, сир пармезан, сир моцарела, соус томатний', price: 210,
            imageFood: require('../assets/PizzaSoprano/PizzaDiParma.png')},
          { dishesId: '113', name: 'Чілі пепероні', description: 'Ковбаса салямі, сир моцарела, перець болгарський, перець чилі', price: 169,
            imageFood: require('../assets/PizzaSoprano/PizzaPeperoni.png') },
          { dishesId: '114', name: 'Кватроформаджі', description: 'Соус вершковий, сир моцарела, сир пармезан, сир дор блю, фета', price: 179,
            imageFood: require('../assets/PizzaSoprano/PizzaKvadro.png') },
          { dishesId: '115', name: 'Капрічоза', description: 'Шинка, кукурудза, перець болгарський, маслини, печериці, соус томатний, сир моцарела', price: 179,
            imageFood: require('../assets/PizzaSoprano/PizzaKaprichoza.png') },
          { dishesId: '116', name: 'Мафія', description: 'Соус томатний, шинка, салямі, печериці, маслини, помідор, сир моцарела', price: 179,
            imageFood: require('../assets/PizzaSoprano/PizzaMafiya.png') },
          { dishesId: '117', name: 'Цезар', description: 'М`ясо курячого бедра, помідори, сир пармезан, мікс салату соус вершковий, соус цезар, сир моцарела', price: 199,
              imageFood: require('../assets/PizzaSoprano/PizzaCaesar.png') },
          { dishesId: '118', name: 'Фірмова', description: 'Томатний соус, шинка, салямі, мисливські ковбаски, бекон, перець болгарський, помідор, сир моцарела', price: 189,
            imageFood: require('../assets/PizzaSoprano/PizzaFirmova.png') },
          { dishesId: '119', name: 'Леонардо', description: 'Соус томатний, шинка, кукурудза, перець болгарський, сир моцарела', price: 169,
            imageFood: require('../assets/PizzaSoprano/PizzaLeonardo.png') },
          { dishesId: '119', name: 'Салямі', description: 'Cоус томатний, салямі, сир моцарела', price: 149,
            imageFood: require('../assets/PizzaSoprano/PizzaSalyami.png') },
        ],
      },
      {
        name: 'Пательня',
        dishes: [
          { dishesId: '121', name: 'Пательня з беконом, печерицями та гострим чілі', description: 'Картопля, печериці, бекон, перець чілі, вершки, моцарела, спеції', price: 185,
            imageFood: require('../assets/PizzaSoprano/Patelnya/PatelnyaZBekonom.jpg')},
          { dishesId: '122',name: 'Пательня з куркою та овочами', description: 'Картопля, курка, перець болгарський, броколі, вершки, моцарела, спеції', price: 185,
            imageFood: require('../assets/PizzaSoprano/Patelnya/PatelnyaZKyrkou.jpg') },
          { dishesId: '123',name: 'Пательня Мисливська', description: 'Картопля, мисливські ковбаски,соус томат, моцарела, часник, кріп', price: 175,
            imageFood: require('../assets/PizzaSoprano/Patelnya/PatelnyaMusluvska.jpg') },
          { dishesId: '124',name: 'Пательня з куркою та печерицями', description: 'Картопля, куряче філе, печериці, вершки, моцарела, спеції', price: 195,
            imageFood: require('../assets/PizzaSoprano/Patelnya/PatelnyaKyrkaPecherutsi.jpg') },
        ],
      },

      {
        name: 'Салати',
        dishes: [
          { dishesId: '131', name: 'Грецький', description: 'Помідори, огірки, солодкий перець, синя цибуля, оливки, фета', price: 100,
            imageFood: require('../assets/PizzaSoprano/Salad/SaladGretskiy.jpg')},
          { dishesId: '132',name: 'З грушею', description: 'Листя салату, груша, горгонзола, грецькі горіхи, соус', price: 129,
            imageFood: require('../assets/PizzaSoprano/Salad/SaladGrusha.jpg')},
          { dishesId: '133',name: 'Нісуаз', description: 'Салат, тунець, помідори, синя цибуля, перепелині яйця, маслини, анчоуси, соус', price: 130,
            imageFood: require('../assets/PizzaSoprano/Salad/SaladNisyaz.jpg')},
          { dishesId: '134',name: 'З куркою та беконом', description: 'Салат, куряче філе, бекон, помідори, хлібні грінки, соус', price: 135,
            imageFood: require('../assets/PizzaSoprano/Salad/SaladKyrka.jpg')},
        ],
      },
      
      {
        name: 'Гарячі закуски',
        dishes: [
          { dishesId: '141', name: 'Млинці з салямі ', description: 'Сир, соус песто, салямі', price: 95,
            imageFood: require('../assets/PizzaSoprano/Zakysku/MlyntsiZSalyami.jpg')},
          { dishesId: '142', name: 'Млинці з шинкою', description: 'Шинка, сир, сметанний соус', price: 87,
            imageFood: require('../assets/PizzaSoprano/Zakysku/MlyntsiZShynkoyu.jpg') },
          { dishesId: '143', name: 'Сендвічі з куркою', description: 'Курка, бекон, салат, соус', price: 99,
            imageFood: require('../assets/PizzaSoprano/Zakysku/SendvichiZKurkoyu.jpg') },
          { dishesId: '144', name: 'Сендвічі з шинкою та сиром', description: 'Шинка, сир, салат, соус', price: 119,
            imageFood: require('../assets/PizzaSoprano/Zakysku/SendvichiZShynkoyu.jpg')},
        ],
      },

      {
        name: 'Мікси',
        dishes: [
          { dishesId: '161', name: 'Мікс цезар з куркою', description: 'Футо темпура з курчам, салата, м’ясо курячого бедра, помідор, яйце куряче, сир пармезан, соус діжон, соус цезар, крутони', price: 159,
            imageFood: require('../assets/PizzaSoprano/Miksu/MiksKyrka.jpeg')},
          { dishesId: '162',name: 'Мікс філадельфія', description: 'Філадельфія з лососем, соус манго, салата, морква, помідор, огірок, соус діжон, чіпси рисові', price: 179,
            imageFood: require('../assets/PizzaSoprano/Miksu/MiksFiladelfia.jpeg')},
          { dishesId: '163',name: 'Мікс з мідіями', description: 'Каліфорнія в кунжуті з м’ясом мідій, салата, м’ясо мідій, огірок, помідори, морква, цибуля смажена, соус діжон, чіпси рисові, насіння чіа', price: 149,
            imageFood: require('../assets/PizzaSoprano/Miksu/MiksMidiyi.jpeg')},
          { dishesId: '164',name: 'Мікс лосось', description: 'Каліфорнія з лососем, соус манго, соус спайсі, салата, манго, помідор, огірок, морква, соус діжон, насіння чіа', price: 189,
            imageFood: require('../assets/PizzaSoprano/Miksu/MiksLosos.jpeg')},
        ],
      },

      {
        name: 'Гарніри',
        dishes: [
          { dishesId: '171', name: 'Овочі гриль', description: 'Перець болгарський, печериці, помідор, кабачок, цибуля', price: 89,
            imageFood: require('../assets/PizzaSoprano/Garniru/OvochiHryl.jpeg')},
          { dishesId: '172',name: 'Картопляне пюре', description: '', price: 69,
            imageFood: require('../assets/PizzaSoprano/Garniru/KartoplyanePyure.jpeg')},
          { dishesId: '173',name: 'Картопля фрі', description: '', price: 65,
            imageFood: require('../assets/PizzaSoprano/Garniru/KartoplyaFri.jpeg')},
          { dishesId: '174',name: 'Картопля по-селянськи', description: '', price: 59,
            imageFood: require('../assets/PizzaSoprano/Garniru/KartoplyaPoselyansky.jpeg')},
        ],
      },

      {
        name: 'Холодні закуски',
        dishes: [
          { dishesId: '181', name: 'Тар-тар з яловичини', description: 'Яловичина, огірок маринований, цибуля, яйце перепелине, крутони, соус шрірача', price: 339,
            imageFood: require('../assets/PizzaSoprano/Zakysku/TartarYalovychyna.jpeg')},
          { dishesId: '182', name: 'Тар-тар з лососем', description: 'Філе лосося, огірок маринований, цибуля, перець чилі, вершковий сир, хлібні багети', price: 225,
            imageFood: require('../assets/PizzaSoprano/Zakysku/TartarLosos.jpeg') },
          { dishesId: '183', name: 'Карпачо з лосося', description: 'Лосось слабосолений, сир пармезан, оливки, мікс салату, огірок свіжий, глісіні, соус бальзамік', price: 215,
            imageFood: require('../assets/PizzaSoprano/Zakysku/KarpachoLosos.jpeg') },
          { dishesId: '184', name: 'Сирна палітра', description: 'Сир пармезан, сир дор блю, сир камамбер, гріссіні, грецький горіх, соус ягідний', price: 299,
            imageFood: require('../assets/PizzaSoprano/Zakysku/SyrnaPalitra.jpeg')},
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
    image: require('../assets/KatanaSushi/KatanaSushiLogo.png'),
    schedule: 'Пн - Нд 11:00 – 22:00',
    isNew: false,
    categories: [
      {
        name: 'Каліфорнії',
        dishes: [
          { dishesId: '211',name: 'Каліфорнія з тунцем', description: 'Рис, ікра масаго, тунець, сурімі, огірок, авокадо, японський майонез', price: 135,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/CaliforniaTunets.jpeg')},
          { dishesId: '212',name: 'Каліфорнія з вугрем', description: 'Рис, ікра масаго, вугор, сурімі, огірок, авокадо, японський майонез', price: 159,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/CaliforniaVygor.jpeg') },
          { dishesId: '213',name: 'Каліфорнія з лососем', description: 'Рис, ікра масаго, лосось, сурімі, огірок, авокадо, японський майонез', price: 149,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/CaliforniaLosos.jpeg') },
          { dishesId: '214',name: 'Каліфорнія філа з копченим лососем', description: 'рис, чорний та білий кунжут, крем сир, копчений лосось, авокадо, огірок', price: 135,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/CaliforniaLososKopchenui.jpg') },
          { dishesId: '215',name: 'Каліфорнія філа з лососем', description: 'Рис, крем сир, чорний та білий кунжут, лосось, авокадо, огірок', price: 125,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/CaliforniaLososKopchenui.jpg') },
          { dishesId: '216',name: 'Каліфорнія філа з креветкою', description: 'Рис, чорний та білий кунжут, креветка, авокадо, огірок, крем сир', price: 125,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/KaliforniyaFilaKrevetka.jpg') },
          { dishesId: '217',name: 'Каліфорнія філа з вугрем', description: 'Рис, крем сир, чорний та білий кунжут, вугор, авокадо, огірок', price: 135,
            imageFood: require('../assets/KatanaSushi/Kaliforniyi/KaliforniyaFilaKrevetka.jpg') },
        ],
      },
      {
        name: 'Філадельфії',
        dishes: [
          { dishesId: '221', name: 'Філадельфія чіз з лососем', description: 'Рис, крем сир, огірок, чедер тостовий, лосось, японський майонез', price: 185,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaChizLosos.jpg') },
          { dishesId: '222',name: 'Філадельфія з авокадо', description: 'Рис, крем сир, авокадо, понзу', price: 135,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaAvokado.jpg')  },
          { dishesId: '223',name: 'Філадельфія з тигровою креветкою', description: 'Рис, крем сир, огірок, тигрова креветка', price: 165,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaTygrovoyuKrevetkoyu.jpg')  },
          { dishesId: '224',name: 'Філадельфія з тунцем', description: 'Рис, крем сир, огірок, тунець', price: 155,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaTuntsem.jpg')  },
          { dishesId: '225',name: 'Філадельфія з вугрем', description: 'Рис, крем сир, вугор, унагі соус, огірок, кунжут', price: 175,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaVugrem.jpg')  },
          { dishesId: '226',name: 'Філадельфія з копченим лососем', description: 'Рис, крем сир, огірок, копчений лосось', price: 175,
            imageFood: require('../assets/KatanaSushi/Filadelfiyi/FiladelfiyaKopchenymLosos.jpg')  },
        ],
      },

      {
        name: 'Запечені роли',
        dishes: [
          { dishesId: '231', name: 'Запечена каліфорнія з вугрем', description: 'Рис, норі, крем сир, огірки, вугор, моцарелла, пармезан, японський майонез, білий та чорний кунжут, унагі соус', price: 175,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapechenaKaliforniyaVugrem.jpg')  },
          { dishesId: '232', name: 'Запечена каліфорнія з лососем', description: 'Рис, норі, крем сир, огірки, лосось, моцарелла, пармезан, японський майонез, білий та чорний кунжут, унагі соус', price: 149,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapechenaKaliforniyaVugrem.jpg')   },
          { dishesId: '233', name: 'Запечене футо з тигровою креветкою та авокадо', description: 'Рис, норі, тигрова креветка, авокадо, моцарелла, пармезан, японський майонез, унагі соус', price: 185,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapecheneFutoTygrovoyuKrevetkoyu.jpg')   },
          { dishesId: '234', name: 'Запечена філадельфія з лососем', description: 'Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, лосось, унагі соус', price: 215,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapechenaFiladelfiyaLososem.jpg')   },
          { dishesId: '235', name: 'Запечений Black рол', description: 'Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, чорний кунжут, унагі соус', price: 145,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapecheneFutoTygrovoyuKrevetkoyu.jpg')   },
          { dishesId: '236', name: 'Запечений сезам рол', description: 'Рис, норі, крем сир, огірки, моцарелла, пармезан, японський майонез, кунжут, унагі соус', price: 125,
            imageFood: require('../assets/KatanaSushi/ZapecheniRolu/ZapechenyjSezamRol.jpg')   },
        ],
      },

      {
        name: 'Дракони',
        dishes: [
          { dishesId: '241', name: 'Зелений Дракон', description: 'Рис, крем сир, вугор, огірки, авокадо, унагі соус, кунжут', price: 165,
            imageFood: require('../assets/KatanaSushi/Drakonu/ZelenyjDrakon.jpg') },
          { dishesId: '242', name: 'Золотий Дракон', description: 'Рис, крем сир, вугор, огірок, тигрова креветка', price: 175,
            imageFood: require('../assets/KatanaSushi/Drakonu/ZolotyjDrakon.jpg') },
          { dishesId: '243', name: 'Вогняний Дракон', description: 'Рис, крем сир, креветка, авокадо, лосось', price: 190,
            imageFood: require('../assets/KatanaSushi/Drakonu/VognyanyjDrakon.jpg') },
          { dishesId: '244', name: 'Червоний Дракон', description: 'Рис, крем сир, вугор, авокадо, тунець', price: 175,
            imageFood: require('../assets/KatanaSushi/Drakonu/CHervonyjDrakon.jpg') },
          { dishesId: '245', name: 'Чорний Дракон', description: 'Рис, крем сир, копчений лосось, авокадо, вугор, унагі соус, кунжут', price: 199,
            imageFood: require('../assets/KatanaSushi/Drakonu/CHornyjDrakon.jpg') },
        ],
      },

      {
        name: 'Сети',
        dishes: [
          { dishesId: '251', name: 'Сет Едо', description: 'Макі філа з лососем½, макі філа з лососевою ікрою½, філадельфія з лососем½, філадельфія з вугрем ½, каліфорнія філа з лососем½, каліфорнія філа з креветкою½, чорний дракон ½, червоний дракон ½', price: 529,
            imageFood: require('../assets/KatanaSushi/Setu/SetEdo.jpg') },
          { dishesId: '252', name: 'Сет Нісеко', description: 'Філадельфія з лососем, Пикантний Тартар, Золотий Дракон 1/2, Зелений Дракон 1/2, Спайсі з Лососем 1/2, Спайси з Сурімі 1/2', price: 649,
            imageFood: require('../assets/KatanaSushi/Setu/SetNiseko.jpeg')  },
          { dishesId: '253', name: 'Сет Осіма', description: 'Халапеньйо рол,Сирний рол,Гострий футомак,Гриль рол з лососем 1/2,Гриль рол з тунцем 1/2', price: 589,
            imageFood: require('../assets/KatanaSushi/Setu/SetOsima.jpg')  },
          { dishesId: '254', name: 'Сет Family', description: 'Каліфорнія гриль з лососем ½, каліфорніяз вугрем ½, гриль рол з лососем ½, гриль рол з тунцем ½, філадельфія з лососем ½, філадельфія з вугрем½, червоний дракон ½, чорний дракон½ ', price: 659,
            imageFood: require('../assets/KatanaSushi/Setu/SetFamily.jpg')  },
          { dishesId: '255', name: 'Сет Шанхай', description: 'Зелений дракон½, золотий дракон½, філадельфія з лососем½, філадельфія чіз з лососем½, філадельфія сезам½, філадельфія з тунцем½', price: 449,
            imageFood: require('../assets/KatanaSushi/Setu/SetSHanhaj.jpg')  },
          { dishesId: '256', name: 'Сет Легіон', description: 'Філадельфія класік з лососем, філадельфія класік з вугрем, філадельфія класік з тигровою креветкою, чорний дракон, червоний дракон, зелений дракон', price: 1099,
            imageFood: require('../assets/KatanaSushi/Setu/SetLegion.jpg')  },
        ],
      },

      {
        name: 'Нігірі',
        dishes: [
          { dishesId: '261', name: 'Нігірі з тунцем', description: 'Рис, тунець', price: 45,
            imageFood: require('../assets/KatanaSushi/Nigiri/NigiriTuntsem.jpg') },
          { dishesId: '262', name: 'Нігірі з копченим лососем', description: 'Рис, копчений лосось', price: 55,
            imageFood: require('../assets/KatanaSushi/Nigiri/NigiriKopchenymLososem.jpg')  },
          { dishesId: '263', name: 'Нігірі з тигровою креветкою', description: 'Рис, тигрова креветка', price: 55,
            imageFood: require('../assets/KatanaSushi/Nigiri/NigiriTygrovoyuKrevetkoyu.jpg')  },
          { dishesId: '264', name: 'Нігірі з вугрем', description: 'Рис, вугор, норі, унагі соус, кунжут', price: 65,
            imageFood: require('../assets/KatanaSushi/Nigiri/NigiriVugrem.jpg')  },
          { dishesId: '265', name: 'Нігірі з лососем', description: 'Рис, лосось', price: 45,
            imageFood: require('../assets/KatanaSushi/Nigiri/NigiriLososem.jpg')  },
        ],
      },

    ],
  },

  {
    id: '4',
    title: 'Бон Апетит',  /*  З Чудовий ранок*/
    image: require('../assets/BonApetut/BonApetutLogo.jpg'),
    schedule: 'Пн – Пт 09:00 – 21:00\n Сб – Нд 10:00 – 22:00',

    isNew: false,
    categories: [
      {
        name: 'Сніданки',
        dishes: [
          { dishesId: '411',name: 'Сніданок з беконом', description: 'Яйця глазунья, бекон, оливки, томатне масло, шпинат, томати чері та цільнозерновий хліб на заквасці', price: 265,
            imageFood: require('../assets/BonApetut/Snidanku/SnidanokZBekonom.jpg')},
          { dishesId: '412',name: 'Англійський сніданок', description: 'Яйця глазунья, томатне масло, ковбаски, боби в томатному соусі, шпинат та цільнозерновий хліб та заквасці', price: 255,
            imageFood: require('../assets/BonApetut/Snidanku/AngSnidanok.jpg') },
          { dishesId: '413',name: 'Сніданок з авокадо та лососем', description: 'Яйця глазунья, авокадо, крем сир, шпинат, лосось, томати чері та булочка бріош', price: 285,
            imageFood: require('../assets/BonApetut/Snidanku/SnidanokZAvokado.jpg') },
          { dishesId: '414',name: 'Шакшука', description: '2 яйця на подушці з томатного соусу, болгарського перцю і спецій. Подається з кінзою і цільнозерновим хлібом', price: 205,
            imageFood: require('../assets/BonApetut/Snidanku/Shakshuka.jpg') },
          { dishesId: '415',name: 'Тост з яйцями бенедикт та беконом', description: 'Булочка бріош з яйцем пашот, крем сир, огірок, бекон, соус голандез.', price: 265,
            imageFood: require('../assets/BonApetut/Snidanku/TostZYaytsyamy.jpg') },
          { dishesId: '416',name: 'Тост з яйцями бенедикт і лососем', description: 'булочка бріош з яйцем пашот, крем сир, огірок, лосось, соус голандез.', price: 250,
            imageFood: require('../assets/BonApetut/Snidanku/TostZYaytsyamy2.jpg') },
          { dishesId: '417',name: 'Авокадо тост', description: 'Основа з цільнозернового хліба покрита крем сиром і мусом з авокадо. Подається з яйцями пашот, слабо соленим лососем', price: 250,
            imageFood: require('../assets/BonApetut/Snidanku/AvokadoTost.jpg') },
        ],
      },
      {
        name: 'Салати',
        dishes: [
          { dishesId: '421',name: 'Зелений салат з тофу', description: 'Мікс зелені, огірок, томати чері, панірований тофу в соусі унагі і попкорні з араманту, перець чілі для декору', price: 255,
            imageFood: require('../assets/BonApetut/Salatu/SalatZTofy.jpg')},
          { dishesId: '422',name: 'Салат з томатами', description: 'Червоні томати, песто з петрушки, лабне, рукола, оливки. Подається з шматочком смаженого хліба', price: 265,
            imageFood: require('../assets/BonApetut/Salatu/SalatZTomatamu.jpg') },
          { dishesId: '423',name: 'Цезар з куркою', description: 'Авторська варіація з куркою в паніровці, салат айсберг, томати чері, бекон, крихта бріоші, пармезан', price: 250,
            imageFood: require('../assets/BonApetut/Salatu/CaesarZKyrkoy.jpg') },
        ],
      },
      {
        name: 'Бургери',
        dishes: [
          { dishesId: '431',name: 'Подвійний смеш бургер', description: 'Пухкенька булочка, подвійна яловича смеш котлета власного виробництва, бекон, огірок маринований та соус 1000 островів. Подається з картоплею фрі та соусом на вибір', price: 310,
            imageFood: require('../assets/BonApetut/Burgers/PodviynyyBurger.jpg')},
          { dishesId: '432',name: 'Чізбургер', description: 'Пухкенька булочка, салат айсберг, соус барбекю, яловича котлета власного виробництва, сир чедр, бекон, цибуля, огірок власного маринування та багато сирного соусу. Подається з картоплею фрі та соусом на вибір', price: 295,
            imageFood: require('../assets/BonApetut/Burgers/Chizburger.jpg') },
          { dishesId: '433',name: 'Трюфельний бургер', description: 'Пухкенька булочка, трюфельний айолі, яловича котлета власного виробництва, печериці з трюфельною пастою, рукола. Подається з картоплею фрі та соусом на вибір', price: 270,
            imageFood: require('../assets/BonApetut/Burgers/TryufelnyyBurger.jpg') },
          { dishesId: '434',name: 'Бургер з куркою кацу', description: 'Пухкенька булочка, курка кацу, салат коул слоу, мариновані огірки, соус барбекю. Подається з картоплею фрі та соусом на вибір', price: 245,
            imageFood: require('../assets/BonApetut/Burgers/BurgerZKurkoyuKatsu.jpg') },
          { dishesId: '434',name: 'Дитячий бургер', description: 'Пухкенька булочка, сирний соус, курочка в паніровці, свіжі огірки, томати та салат айсберг. Подається з картоплею фрі та соусом на вибір', price: 225,
            imageFood: require('../assets/BonApetut/Burgers/DytyachyyBurger.jpg') },
        ],
      },
      {
        name: 'Десерти',
        dishes: [
          { dishesId: '441',name: 'Штрудель (яблучний/вишневий)', description: '', price: 119,
            imageFood: require('../assets/BonApetut/Desertu/Shtrudel.jpg')},
          { dishesId: '442',name: 'Сонячний', description: 'Бісквіт, шоколадний крем, заварний крем, лимонний курт, чіа пудинг, кокосове молоко, манго', price: 99,
            imageFood: require('../assets/BonApetut/Desertu/Sonyachnyy.jpeg') },
          { dishesId: '443',name: 'Млинці Креп-сюзет', description: 'Млинці, апельсиновий сік, морозиво, цедра апельсини', price: 125,
            imageFood: require('../assets/BonApetut/Desertu/MLYNTSIKREP.jpeg') },
          { dishesId: '444',name: 'Шоколадний фондан', description: 'Шоколадний кекс, ванільне морозиво, м’ята', price: 149,
            imageFood: require('../assets/BonApetut/Desertu/ShokoladnyyFondan.jpeg') },
          { dishesId: '444',name: 'Тірамісу', description: 'Печиво савоярді, ром, кава, маскарпоне', price: 119,
            imageFood: require('../assets/BonApetut/Desertu/Tiramisu.jpeg') },
        ],
      },
      {
        name: 'Сирники',
        dishes: [
          { dishesId: '451',name: 'Сирники класичні з вишневим компоте', description: 'Чотири сирники з кисломолочного сиру. Подається з сметаною та вишневим компоте', price: 165,
            imageFood: require('../assets/BonApetut/Surnuku/SyrnykyKlasychni.jpg')},
          { dishesId: '452',name: 'Кокосові сирники', description: 'Сирники тушковані в кокосовому молоці, кокосових вершках і білому шоколаді. Подаємо з апельсиновим гелем, філе апельсина і посипаємо фундуком', price: 240,
            imageFood: require('../assets/BonApetut/Surnuku/KokosoviSirnyky.jpg') },
          { dishesId: '453',name: 'Сирники класичні з карамельним соусом', description: 'Чотири сирника з кисломолочного сиру. Подається з сметаною та карамельним соусом', price: 165,
            imageFood: require('../assets/BonApetut/Surnuku/SyrnykyKlasychni2.jpg') },
          { dishesId: '454',name: 'Фісташкові сирники', description: 'Запечені сирники в фісташковій паніровці з повітряним фісташковим заварним кремом та вишневим компоте', price: 149,
            imageFood: require('../assets/BonApetut/Surnuku/FistashkoviSirnyky.jpg') },
          { dishesId: '454',name: 'Шпинатні сирники', description: 'Шпинатні сирники, які подаються з соусом на основі йогурта та мʼяти, лососем, шпинатом, посипаються фісташками та зеленою олією', price: 290,
            imageFood: require('../assets/BonApetut/Surnuku/ShpinatniSirnyky.jpg') },
        ],
      },
    ],
    },        
];



export const products = [
  {
    id: '3',
    title: 'АТБ',
    schedule: 'понеділок – неділя 05:00 – 23:55',
    isNew: false,
    categories: [
      
      {
        name: 'Фрукти, овочі',
        categoryId: 31,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '321', name: 'Яблука', description: '', price: 25,
            imageFood: require('../assets/homeIcon.jpg')},
          { dishesId: '321', name: 'Апельсини', description: '', price: 70,
            imageFood: require('../assets/homeIcon.jpg')
           },
        ],
      },
      {
        name: 'Молочні продукти та яйця',
        categoryId: 32,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '331', name: 'Молоко', price: 45,
            imageFood: require('../assets/homeIcon.jpg')
           },
        ],
      },
      {
        name: 'М`ясо',
        categoryId: 33,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '341', name: 'Свинина', description: '', price: 179,
            imageFood: require('../assets/homeIcon.jpg')
           },
        ],
      },
      {
        name: 'Риба',
        categoryId: 34,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '351', name: 'Карп', description: '', price: 179,
            imageFood: require('../assets/homeIcon.jpg')
          }, 
        ],
      },
      {
        name: 'Хліб та випічка',
        categoryId: 35,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '361', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Напої',
        categoryId: 36,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '371', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Ковбаси та м`ясні вироби',
        categoryId: 37,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '381', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Сири',
        categoryId: 38,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '391', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Снеки та чипси',
        categoryId: 39,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3101', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Солодощі',
        categoryId: 310,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3111', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Крупи та консерви',
        categoryId: 311,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3121', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Заморожена продукція',
        categoryId: 312,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3131', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Для дому',
        categoryId: 313,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3141', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
      {
        name: 'Гігієна та краса',
        categoryId: 314,
        image: require('../assets/sunIcon.png'),
        dishes: [
          { dishesId: '3151', name: 'Тропікана', description: 'Вершковий соус, шинка, кукурудза, манго, сир', price: 179 },
        ],
      },
    ],
  },
]                