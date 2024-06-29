import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";
import closeIcon from "../assets/images/icon-close.svg";
import nextIcon from "../assets/images/icon-next.svg";
import prevIcon from "../assets/images/icon-previous.svg";

const images = [image1, image2, image3, image4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

const Lightbox = ({ isOpen, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <img src={prevIcon} alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <img src={nextIcon} alt="Next" />
        </button>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-lg"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <div className="flex space-x-2 mt-4 justify-center">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt="Thumbnail"
              className={`w-16 h-16 rounded-lg cursor-pointer ${
                currentImage === index ? "border-2 border-orange-500" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
