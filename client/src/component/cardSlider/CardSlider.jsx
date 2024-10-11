import React, { useState, useEffect, useRef } from "react";
import CardBrandSection from "../CardBrandSection";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux";

export default function OurWorkSlides({ data}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
let slides;
if(data==="news"){
  
  slides=useSelector(state=>state.data.data.newsSlides)
}else{

  slides=useSelector(state=>state.data.data.ourWorkSlides)
}

 
  useEffect(() => {
    if (slides) {
      let intervalId;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          intervalId = setInterval(() => {
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % (slides.length - 2)
            );
          }, 3000);
        } else {
          clearInterval(intervalId);
        }
      });

      if (sliderRef.current) {
        observer.observe(sliderRef.current);
      }

      return () => {
        clearInterval(intervalId);
        if (sliderRef.current) {
          observer.unobserve(sliderRef.current);
        }
      };
    }
  }, [slides?.length]);

  return (
    // <div className=" ">
    <div className="container float-right">
      <div className="card-slider card-container" ref={sliderRef}>
        {slides?.map((slide, index) => (
          <div
            className="brand_card"
            key={index}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <CardBrandSection
              key={index}
              img={slide.imgUrl}
              description={slide.description}
              tags={slide.tags}
            />
            ,
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
