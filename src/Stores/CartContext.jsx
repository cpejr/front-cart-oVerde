import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useGlobalLanguage } from "./globalLanguage";
import { TranslateTextCart } from "./Translations";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextCart({ globalLanguage });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (tree) => {
    setCartItems((prevCart) => {
      const existingTree = prevCart.find((item) => item._id === tree._id);
      if (existingTree) {
        return prevCart.map((item) =>
          item._id === tree._id
            ? { ...item, quantity: item.quantity + tree.quantity }
            : item
        );
      } else {
        return [...prevCart, tree];
      }
    });
    toast.success(translations.toastAddedMessage);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((tree) => tree._id !== id));
    toast.success(translations.toastRemovedMessage);
  };

  const isInCart = (tree) => {
    const cartItem = cartItems.find((item) => item._id === tree._id);

    if (cartItem) {
      const adjustedTree = { ...tree };
      adjustedTree.available_quantity -= cartItem.quantity;

      return adjustedTree;
    }
    return tree;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
