import React, { useEffect, useState } from 'react';
import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ZakladHome from './components/ZakladHome/ZakladHome';
import FoodInfo from './components/FoodInfo/FoodInfo';
import WorkTime from './components/WorkTime/WorkTime';
import FormModal from './components/FormModal/FormModal';

import './components/Header/Header.css';
import './components/WorkTime/WorkTime.css';

function App() {
  const { tg } = useTelegram();
  const [showWorkTime, setShowWorkTime] = useState(false);

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />

      <button 
        className="worktime-button" 
        onClick={() => setShowWorkTime(true)}
      > 🕒
      </button>
      <WorkTime isOpen={showWorkTime} onClose={() => setShowWorkTime(false)} />

      <FormModal />
      <Routes>
        <Route index element={<Home />} />
        <Route path="zaklad/:id" element={<ZakladHome />} />
        <Route path="food-info/:id/:dishesId" element={<FoodInfo />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;