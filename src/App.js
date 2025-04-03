import React, { useEffect } from 'react';

import './App.css';
import useTelegram from './components/hooks/useTelegram';
import Header from './components/Header/Header';



function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
    tg.ready();
    }, [])

  
  return (
    <div className="App">
      <Header/>
      work
      <button onClick={onToggleButton}> toggle </button>
    </div>
  );
}

export default App;
