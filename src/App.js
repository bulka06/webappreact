import React, { useEffect } from 'react';

import './App.css';
import useTelegram from './components/hooks/useTelegram';




function App() {
  const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
    tg.ready();
    }, [])

  
  return (
    <div className="App">
      <Headers />
      <button onClick={onToggleButton}> toggle </button>
    </div>
  );
}

export default App;
