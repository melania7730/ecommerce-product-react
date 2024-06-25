import React, { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ImageCarousel from "./components/ImageCarousel";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

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
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-center ">
          <div className="flex-1">
            <ImageCarousel />
          </div>
          <div className="flex-1">
            <ProductDetails
              quantity={quantity}
              setQuantity={setQuantity}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
        {isCartVisible && (
          <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
        )}
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
