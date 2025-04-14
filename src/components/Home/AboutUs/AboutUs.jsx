import React, { useState } from 'react';
import './AboutUs.css';
import FormModal from '../../FormModal/FormModal'; // імпорт компоненту FormModal

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-us">
      <h2 className="about-title">Про нас</h2>
      <p className="about-description">
        Наша служба доставки була заснована у 2021 році в місті Золочів з метою зробити замовлення їжі та продуктів максимально зручним та швидким. Ми прагнемо до якості, швидкості та надійності, щоб кожен наш клієнт залишався задоволений.
      </p>

      <button className="contact-button" onClick={handleOpenModal}>Зв'язатись з нами</button>

      {isModalOpen && <FormModal onClose={handleCloseModal} />}

      <div className="stats">
        <div className="stat-item">
          <h3>12 537</h3>
          <p>Доставок виконано</p>
        </div>
        <div className="stat-item">
          <h3>8 902</h3>
          <p>Дзвінків оброблено</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
