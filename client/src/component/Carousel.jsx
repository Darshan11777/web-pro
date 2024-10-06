import React, { useState, useEffect, useRef } from 'react';
// import Card from './Card';

// Example components to display in the carousel
const Slide1 = () => (
  <div className="w-100 h-100 bg-danger d-flex align-items-center justify-content-center text-white display-3"> 
    {/* Use Bootstrap classes for styling */}
    Slide 1 Content
  </div>
);

const Slide2 = () => (
  <div className="w-100 h-100 bg-primary d-flex align-items-center justify-content-center text-white display-3">
    Slide 2 Content
  </div>
);

const Slide3 = () => (
  <div className="w-100 h-100 bg-success d-flex align-items-center justify-content-center text-white display-3">
    Slide 3 Content
  </div>
);

// Array of slide components
const slides = [<Slide1 />, <Slide2 />, <Slide3 />]; 

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startSlideshow = () => {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); //set timer for slideshow
    };

    startSlideshow();

    return () => clearTimeout(timeoutRef.current);
  }, [currentSlideIndex]);

  const handleDotClick = (index) => {
    clearTimeout(timeoutRef.current);
    setCurrentSlideIndex(index);
  };

  return (
    <div className="position-relative mt-5 mb-5"> {/* Use Bootstrap's position-relative class */}
      <div className="w-100 overflow-hidden position-relative"> {/* Use Bootstrap's position-relative class */}
        <div style={{ height: '70vh' }}> {/* Use inline styles for height */}
          {/* Render the current slide */}
          {slides[currentSlideIndex]} 

          {/* Blurred Color Overlay (optional) - Implement with custom CSS or Bootstrap's utilities */}
          {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 blur-md"></div> */}
        </div>
      </div>

      <div className="position-absolute bottom-4 mt-3 start-50 translate-middle-x d-flex gap-3 custom-height" > {/* Use Bootstrap classes for positioning and spacing */}
        {slides.map((_, index) => (
          <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-4 h-4 rounded-circle ${ // Changed to w-4 h-4
            currentSlideIndex === index ? ' carousel-active-button' : 'bg-secondary'
          }`}
        ></button>
        
        ))}
      </div>
    </div>
  );
}
