import React, { useState, useEffect, useRef } from "react";
import CardBrandSection from "../CardBrandSection";
import './index.css'
import axios from "axios";

export default function CardSlider({dataUrl="slides/our-work"}) {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(null);
  const sliderRef = useRef(null);

  const baseUrl=import.meta.env.VITE_API_BASE_URL

  const getSlides=async()=>{
    const res=await axios.get(baseUrl+dataUrl)
    console.log( "res.data",res.data);
    setSlides(res.data)
  }

  useEffect(() => {
    getSlides()
  
    
  }, [])
  
 
  useEffect(() => {

    if (slides){
      
    
    let intervalId;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 2));
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
        <div
          className="card-slider card-container"
          ref={sliderRef} 
        >
          
          {slides?.map((slide, index) => (

            <div
              className="brand_card"
              key={index}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <CardBrandSection key={index} img={slide.imgUrl} description={ slide.description} tags={slide.tags} />,
              
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
}
