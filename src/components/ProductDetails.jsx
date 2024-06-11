import React from "react";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import cartIcon from "../assets/images/icon-cart.svg";

const ProductDetails = ({ quantity, setQuantity, handleAddToCart }) => {
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-[540px] mx-auto lg:mx-0 lg:ml-16">
      <h2 className="text-orange-500 uppercase tracking-wide font-semibold mb-2">
        Sneaker Company
      </h2>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-gray-700 mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="ml-4 text-orange-500 bg-orange-100 px-2 py-1 rounded-lg text-sm font-semibold">
            50%
          </span>
        </div>
        <span className="text-gray-500 line-through">$250.00</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-4">
        <div className="flex items-center bg-gray-100 p-4 rounded-lg mb-4 lg:mb-0">
          <button onClick={decreaseQuantity} className="text-gray-600">
            <img src={iconMinus} alt="Decrease quantity" />
          </button>
          <span className="mx-4 text-lg font-semibold">{quantity}</span>
          <button onClick={increaseQuantity} className="text-gray-600">
            <img src={iconPlus} alt="Increase quantity" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-orange-500 text-white py-4 px-6 rounded-lg w-full lg:w-auto hover:bg-orange-600"
        >
          <img src={cartIcon} alt="Add to cart" className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
