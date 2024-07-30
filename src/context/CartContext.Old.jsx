import { useState, createContext } from "react";

export const CartContext = createContext();

// const cart = {
//   quantity: 10,
// };

const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(10);

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
