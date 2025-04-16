import React, { createContext, useContext, useState } from 'react';

// Створюємо контекст
const BaskContext = createContext();

// Хук для використання контексту
export const useBask = () => useContext(BaskContext);

// Провайдер контексту
export const BaskProvider = ({ children }) => {
  const [baskItems, setBaskItems] = useState([]);

  const addToBask = (item) => {
    setBaskItems((prev) => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromBask = (id) => {
    setBaskItems((prev) => prev.filter(item => item.id !== id));
  };
  const increaseQuantity = (id) => {
    setBaskItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setBaskItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  
  return (
    <BaskContext.Provider value={{ baskItems, addToBask, removeFromBask, increaseQuantity, decreaseQuantity }}>
      {children}
    </BaskContext.Provider>
  );
};


export default BaskContext;