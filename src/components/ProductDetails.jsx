import React, { useContext } from "react";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import IconCart from "../assets/images/icon-cart";
import { ContextAll } from "../context/ContextAll";

// import { CartContext } from "../context/CartContext";

const ProductDetails = ({
  // quantity,
  // setQuantity,
  handleAddToCart,
}) => {
  // const { quantity, setQuantity } = React.useContext(CartContext);

  const AllContext = useContext(ContextAll);
  const [quantity, setQuantity] = React.useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-[320px] md:max-w-md mx-auto mt-6 lg:ml-2 lg:mt-2">
      <h2 className="text-dark-grayish-blue uppercase tracking-widest lg:tracking-[0.17rem] text-xs font-semibold mb-3 lg:mb-5">
        Sneaker Company
      </h2>
      <h1 className="text-[1.7rem] lg:text-[2.75rem] font-bold mb-4 lg:mb-10 leading-8 lg:leading-[1.05]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-dark-grayish-blue text-sm lg:text-[1rem] leading-6 lg:leading-[1.6rem] mb-6 lg:mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex lg:flex-col items-center lg:items-start lg:gap-y-3 justify-between mb-4 lg:mb-7">
        <div className="flex items-center">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="ml-4 lg:ml-5 text-white bg-very-dark-blue px-2 lg:px-3 py-1 rounded-lg text-sm font-semibold">
            50%
          </span>
        </div>
        <span className="text-gray-500 line-through font-semibold">
          $250.00
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-8 lg:gap-x-2 items-center w-full">
        <div className="flex items-center bg-light-grayish-blue rounded-lg mb-4 lg:mb-0 w-full justify-between col-span-3">
          <button
            onClick={decreaseQuantity}
            className="text-gray-600 p-6 lg:px-5"
          >
            <img src={iconMinus} alt="Decrease quantity" />
          </button>
          <span className="mx-4 text-lg font-semibold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="text-gray-600 p-6 lg:px-5"
          >
            <img src={iconPlus} alt="Increase quantity" />
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-orange-500 font-bold text-very-dark-blue py-4 px-6 rounded-lg w-full lg:w-auto hover:bg-orange-600 gap-x-2 col-span-5"
        >
          <IconCart className="!fill-very-dark-blue" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
