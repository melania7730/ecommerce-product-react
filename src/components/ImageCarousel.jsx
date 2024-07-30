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
    <div className="relative lg:px-12">
      <img
        src={images[currentImage]}
        alt="Product"
        className="lg:max-w-md ml-5 mt-6 mb-6 lg:h-[450px] lg:rounded-3xl object-cover"
      />
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg inline-block lg:hidden"
      >
        <img className="w-2" src={iconPrevious} alt="Previous" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 lg:rounded-3xl shadow-lg inline-block lg:hidden"
      >
        <img src={iconNext} alt="Next" />
      </button>
      <div className="hidden md:flex justify-between lg:mt-7 pl-5 gap-x-8">
        {thumbnails.map((thumb, index) => {
          const isActive = currentImage === index;

          return (
            <div
              key={index}
              className={`relative w-[5.5rem] h-[5.7rem] cursor-pointer`}
              onClick={() => setCurrentImage(index)}
            >
              <img className="rounded-2xl" src={thumb} alt="Thumbnail" />
              {isActive && (
                <div
                  className={`absolute w-full h-full bg-white bg-opacity-70 inset-0  ${
                    isActive ? "border-2 border-orange-500" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
