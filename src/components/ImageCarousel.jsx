import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";
import Lightbox from "./Lightbox";

const images = [image1, image2, image3, image4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full rounded-lg cursor-pointer"
          onClick={openLightbox}
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &gt;
        </button>
        <div className="flex space-x-2 mt-4">
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
      <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox} />
    </>
  );
};

export default ImageCarousel;
