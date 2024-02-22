import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const TasksProvider = ({ children }) => {
  const [items, setCart] = useState([
    {
      id: 1,
      name: "Hardware Necklace",
      colors: "Ivory, Black",
      price: 90,
    },
    {
        id: 2,
        name: "Anchor Necklace",
        colors: "Gold, Silver",
        price: 120,
    },
  ]);

  const addItem = ({ name, colors }) => {
    const newItem = {
      id: items.length + 1,
      name,
      colors,
      price: 0,
    };
    setCart([...items, newItem]);
  };

  const deleteItem = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
