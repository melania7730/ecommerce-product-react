import React from "react";
import Cart from "../components/Cart";
import ImageCarousel from "../components/ImageCarousel";
import ProductDetails from "../components/ProductDetails";
import { ContextAll } from "../context/ContextAll";

const Home = ({ handleAddToCart, handleRemoveItem }) => {
  const { cartItems, isCartVisible } = React.useContext(ContextAll);
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-16 items-center ">
        <div className="flex-1">
          <ImageCarousel />
        </div>
        <div className="flex-1">
          <ProductDetails handleAddToCart={handleAddToCart} />
        </div>
      </div>
      {isCartVisible && (
        <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
      )}
    </>
  );
};

export default Home;
