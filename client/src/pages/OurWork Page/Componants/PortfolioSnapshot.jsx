import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const PortfolioSnapshot = () => {
  // const slides = [
  //   { id: 1, content:  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 1" className="w-full h-full object-cover" />},
  //   { id: 2, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 2" className="w-full h-full object-cover" /> },
  //   { id: 3, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 3" className="w-full h-full object-cover" /> },
  //   { id: 4, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 4" className="w-full h-full object-cover" /> },
  //   { id: 5, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 5" className="w-full h-full object-cover" /> },
  //   { id: 6, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 5" className="w-full h-full object-cover" /> },
  //   { id: 7, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 5" className="w-full h-full object-cover" /> },
  //   { id: 8, content: <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f9fd96360c6ad16b6298b0b3374c838a4e4733961cf22c11b11c456c1d0e58?width=400" alt="Slide 5" className="w-full h-full object-cover" /> },
  // ];

let slides;
  const data=useSelector(state=>state.data.data.OurWorkPortfolioSnapshot)


   slides=data.map((item,index)=>{
    return  { id: index, content:  <img src={item.image} alt="Slide 1" className="w-full h-full object-cover" />}
  })
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slidesPerView = 3;
  const totalSlidePage =Math.ceil( slides.length / slidesPerView);
  const changeInterval = 3000;

  // Automatically change slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlidePage);
    }, changeInterval);

    return () => clearInterval(interval);
  }, [currentSlide,slides]);

  // Handle slide change on dot click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Variants for animation
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const getSlideClass = (index,len) => {
    // return ''
    if(len===1){
      return 'scale-150 h-[400px] w-[40%]'
    }
    if(len===2){
      return 'scale-150 h-[400px] w-[40%]'
    }
    if (index === 0) return 'scale-150 h-[300px] w-[30%]';
    if (index === 1) return 'scale-150 h-[400px] w-[40%]';
    return 'scale-150 h-[300px] w-[30%]';
    // if (index === 0) return 'z-20 scale-110 lg:scale-125';
    // if (index === 1) return 'z-10 scale-90 opacity-80';
    // return 'z-0 scale-75 opacity-50';
  };

  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden">
      {/* Slides Container */}
      <div className=" flex   w-full   justify-center items-center gap-8">
        {/* <AnimatePresence initial={false}> */}
          {slides.slice(currentSlide*slidesPerView, currentSlide*slidesPerView + slidesPerView).map((slide, index,arry) => (
            <motion.div
              key={slide.id}
              className={`      transition-all duration-500 transform ${getSlideClass(index,arry.length)} `}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full">{slide.content}</div>
            </motion.div>
          ))}
        {/* </AnimatePresence> */}
      </div>

      {/* Dots */}
      <div className="flex mt-8 space-x-2 ">
        {Array(totalSlidePage).fill().map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer ${currentSlide === index ? 'text-[#B8B5B5]' : 'text-[#D9D9D9]'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSnapshot;