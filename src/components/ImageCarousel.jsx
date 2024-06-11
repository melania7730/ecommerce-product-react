import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";
import iconPrevious from "../assets/images/icon-previous.svg";
import iconNext from "../assets/images/icon-next.svg";

const images = [image1, image2, image3, image4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

const ImageCarousel = () => {
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

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt="Product"
        className="w-full rounded-lg mb-4 lg:h-[450px] object-contain"
      />
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <img src={iconPrevious} alt="Previous" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <img src={iconNext} alt="Next" />
      </button>
      <div className="flex space-x-4 justify-center lg:justify-start">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt="Thumbnail"
            className={`w-24 h-24 rounded-lg cursor-pointer ${
              currentImage === index ? "border-2 border-orange-500" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
