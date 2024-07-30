import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (tree) => {
    setCartItems((prevCart) => [...prevCart, tree]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((tree) => tree._id !== id));
  };

  const isInCart = (id) => {
    return cartItems.some((tree) => tree._id === id);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
