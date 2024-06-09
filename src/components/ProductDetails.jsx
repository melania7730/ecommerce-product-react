import React from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import cartIcon from "../assets/images/icon-cart.svg";

const ProductDetails = ({ quantity, setQuantity, handleAddToCart }) => {
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p className="text-gray-500 mt-4">
        These low-profile sneakers are your perfect casual wear companion...
      </p>
      <div className="flex items-center mt-4">
        <span className="text-2xl font-bold">$125.00</span>
        <span className="bg-gray-200 text-gray-700 rounded-lg ml-4 px-2 py-1">
          50%
        </span>
        <span className="text-gray-500 ml-4 line-through">$250.00</span>
      </div>
      <div className="flex items-center mt-4">
        <button
          onClick={decreaseQuantity}
          className="px-4 py-2 bg-gray-200 rounded-l-lg"
        >
          <img src={minusIcon} alt="minus" />
        </button>
        <span className="px-4 py-2 bg-white border-t border-b">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-4 py-2 bg-gray-200 rounded-r-lg"
        >
          <img src={plusIcon} alt="plus" />
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg flex items-center"
      >
        <img src={cartIcon} alt="Cart" className="mr-2" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
