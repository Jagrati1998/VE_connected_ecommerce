// src/components/Carousel.jsx
import React, { useState } from "react";

const Carousel = () => {
  // State to track the current active slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for the carousel
  const slides = [
    {
      id: 1,
      color: "bg-green-500", // Green background color
      src: "https://via.placeholder.com/800x200?text=Slide+1",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/800x200?text=Slide+2",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/800x200?text=Slide+3",
      alt: "Slide 3",
    },
  ];

  // Function to go to the previous slide
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
   
    <div className="relative w-full px-10 py-20 ">
      {/* Image Display */}
      <div className="overflow-hidden">
        <img
          src={slides[currentIndex].src}
          alt={slides[currentIndex].alt}
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-green-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
 
  );
};

export default Carousel;
