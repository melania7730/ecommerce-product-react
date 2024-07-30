import { useState, createContext } from "react";

export const ContextAll = createContext();

const AllProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <ContextAll.Provider
      value={{
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ContextAll.Provider>
  );
};

export default AllProvider;
