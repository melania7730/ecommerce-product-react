import { useState, createContext } from "react";

export const ContextAll = createContext();

const AllProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <ContextAll.Provider
      value={{
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </ContextAll.Provider>
  );
};

export default AllProvider;
