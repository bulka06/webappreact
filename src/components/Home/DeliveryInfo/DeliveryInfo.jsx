import React from 'react';
import './DeliveryInfo.css';

const services = [
    {
      id: '01',
      title: 'ДОСТАВКА ЇЖІ',
      description: 'Смачні страви з улюблених закладів прямо до ваших дверей. Замовляйте їжу зручно та швидко, незалежно від погоди чи настрою!'
    },
    {
      id: '02',
      title: 'ДОСТАВКА ПРОДУКТІВ',
      description: 'Забудьте про довгі черги в супермаркетах! Ми доставимо свіжі продукти до вашого дому, поки ви займаєтесь справами або просто відпочиваєте.'
    },
    {
      id: '03',
      title: 'ПОДАРУНКИ',
      description: 'Хочете приємно здивувати близьку людину? Обирайте подарунок, а ми подбаємо про його доставку з любов’ю та увагою.'
    }
  ];

const DeliveryInfo= () => {
  return (
    <div className="delivery-services">
      <h2 className="section-title">ПОСЛУГИ ДОСТАВКИ</h2>
      {services.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-id">{service.id}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliveryInfo;
