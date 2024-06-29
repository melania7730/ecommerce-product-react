import React, { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <ProductDetails addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
