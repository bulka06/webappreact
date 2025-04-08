import React, { useEffect } from 'react';
import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import ZakladHome from './components/ZakladHome/ZakladHome';

import './components/Header/Header.css';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* Оновлений маршрут для ZakladHome */}
        <Route path="zaklad/:id" element={<ZakladHome />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
