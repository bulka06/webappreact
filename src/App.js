import React, { useEffect, useState } from 'react';
import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { BaskProvider } from './components/Basket/BaskContext/BaskContext';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ZakladHome from './components/ZakladHome/ZakladHome';
import ShopHome from './components/ZakladHome/ShopHome/ShopHome';
import FoodInfo from './components/FoodInfo/FoodInfo';
import FormModal from './components/FormModal/FormModal';
import BaskButton from './components/Basket/BaskButton/BaskButton';
import BaskPage from './components/Basket/BaskPage/BaskPage';

import './components/Header/Header.css';
import './components/WorkTime/WorkTime.css';
import './components/FormModal/FormModal.css';

function App() {
  const { tg } = useTelegram();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBaskModalOpen, setIsBaskModalOpen] = useState(false); // Додаємо стан для модалки кошика

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <BaskProvider>
        <Header onOpenModal={() => setIsModalOpen(true)} />

        <div>
          {/* Кнопка відкриття кошика */}
          <BaskButton onClick={() => setIsBaskModalOpen(true)} />
          <button
            className="form-floating-button"
            onClick={() => setIsModalOpen(true)}
          >
          </button>
          {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
          
          {/* Кнопка відкриття кошика */}
          <BaskButton onClick={() => setIsBaskModalOpen(true)} />
          
        </div>

        <Routes>
          <Route index element={<Home />} />
          <Route path="zaklad/:id" element={<ZakladHome />} />
          <Route path="shop/:id" element={<ShopHome />} />
          <Route path="food-info/:id/:dishesId" element={<FoodInfo />} />
          <Route path="/bask" element={<BaskPage />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </BaskProvider>
    </div>
  );
}

export default App;