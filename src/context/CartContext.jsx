import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart((products) => [...products, product]);
  };

  const removeProduct = () => {
    //logic
  };

  const value = {
    cart,
    addProduct,
    removeProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
