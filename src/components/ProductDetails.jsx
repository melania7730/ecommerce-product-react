import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import cartIcon from "../assets/images/icon-cart.svg"; // Import the image

const ProductDetails = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 0));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8">
      <ImageCarousel />
      <div>
        <p className="text-sm text-orange-500 font-bold">SNEAKER COMPANY</p>
        <h1 className="text-3xl font-bold mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-500 mb-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold mr-4">$125.00</span>
          <span className="text-orange-500 bg-orange-100 px-2 py-1 rounded-lg font-bold">
            50%
          </span>
        </div>
        <div className="text-gray-500 line-through mb-4">$250.00</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-4 py-2 text-orange-500"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-4 py-2 text-orange-500"
            >
              +
            </button>
          </div>
          <button
            className="flex-1 flex items-center justify-center bg-orange-500 text-white py-2 rounded-lg"
            onClick={() =>
              addToCart({
                id: 1,
                name: "Fall Limited Edition Sneakers",
                price: 125,
                quantity,
              })
            }
          >
            <img src={cartIcon} alt="Cart" className="mr-2" />{" "}
            {/* Use the imported image */}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
