import React, { useEffect, useState } from 'react';
import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ZakladHome from './components/ZakladHome/ZakladHome';
import ShopHome from './components/ZakladHome/ShopHome/ShopHome';
import FoodInfo from './components/FoodInfo/FoodInfo';
import WorkTime from './components/WorkTime/WorkTime';
import FormModal from './components/FormModal/FormModal';

import './components/Header/Header.css';
import './components/WorkTime/WorkTime.css';
import './components/FormModal/FormModal.css';

function App() {
  const { tg } = useTelegram();
  const [showWorkTime, setShowWorkTime] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Стейт модалки форми

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      {/* 👇 передаємо функцію відкриття модалки у Header */}
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <div>
        {/* Кнопка для відкриття WorkTime */}
        <button 
          className="worktime-button" 
          onClick={() => setShowWorkTime(true)}
        >🕒</button>

        <WorkTime isOpen={showWorkTime} onClose={() => setShowWorkTime(false)} />

        {/* Плаваюча кнопка для відкриття модалки форми */}
        <button 
          className="form-floating-button"
          onClick={() => setIsModalOpen(true)}
        > 
        </button>

        {/* Модальне вікно форми */}
        {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="zaklad/:id" element={<ZakladHome />} />
        <Route path="shop/:id" element={<ShopHome />} />
        <Route path="food-info/:id/:dishesId" element={<FoodInfo />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
