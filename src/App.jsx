import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import Home from "./pages";
import { ContextAll } from "./context/ContextAll";

function App() {
  const { cartItems, setCartItems, isCartVisible, setIsCartVisible } =
    React.useContext(ContextAll);
  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItems([
        ...cartItems,
        {
          id: 1,
          name: "Fall Limited Edition Sneakers",
          price: 125.0,
          quantity,
          image: "/assets/images/image-product-1-thumbnail.jpg",
        },
      ]);
      setQuantity(0);
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <Header toggleCart={toggleCart} cartItemCount={cartItems.length} />
      <main className="container mx-auto p-6 lg:p-16">
        <Home
          handleAddToCart={handleAddToCart}
          handleRemoveItem={handleRemoveItem}
        />
      </main>
      <footer className="text-center mt-8">
        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Melania</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
