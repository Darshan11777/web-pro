import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import upstockImg from '../assets/images/image 5.png';
import fiverrImg from '../assets/images/image 4.png';
import cluthImg from '../assets/images/image 3.png';
import ellipse from "../assets/images/Ellipse 50.png";
import image4 from "../assets/images/image 4.png";
import header_bottom from "../assets/images/header_bottom.png";
import header_two from "../assets/images/header_two.png";
import header_img from "../assets/images/Group 762.png";

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section  ref={ref} className=" header__section bottom__bg__section relative header__bg__section">
      <div className='header_img_container'>
        <video 
          src="https://videos.pexels.com/video-files/5057522/5057522-uhd_2560_1440_25fps.mp4" 
          autoPlay 
          muted 
          loop 
          className='header_img w-full h-full object-cover' 
        /> 
        <img 
          src={header_img} 
          alt=""  
          className='mt-[90px] mb-[100px] header_img h-[100%] object-cover' 
        />
      </div> 

      <div
      
        className="container herosection__container"
       
      >
        <div className="row">
          <div className="left__section">
            <motion.div className="heading__part w-[45%]"
              initial={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }}  // Initial state with 3D rotation and scaling
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}  // End state with 3D effect
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}  // Smooth and natural easing
            >
              <h1>Webpro</h1>
              <p>
                We are a creative web design & branding agency based in London that crafts beautiful work for brands who <span>refuse to blend in.</span>
              </p>
            </motion.div>
            <motion.div className="main__title w-[45%]"
             initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }}  // Coming from the right with 3D rotation
             whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}  // End state
             transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}  // Smooth and fluid transition
            >
              <h2>
                Advanced web pro
              </h2>
            </motion.div>
          </div>
          <motion.img 
  src={header_bottom} 
  className="mt-0" 
  alt="header_bottom"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
/>
<motion.div className="hero-section-bottom__img">
  {/* Slide Up and Fade-In for each image one by one with decreased delay */}
  <motion.img 
    src={upstockImg} 
    className="first__img" 
    alt="Upstock" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={ellipse} 
    className="second__img" 
    alt="Ellipse" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={fiverrImg} 
    className="first__img" 
    alt="Fiverr" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={ellipse} 
    className="second__img" 
    alt="Ellipse" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={cluthImg} 
    className="first__img" 
    alt="Cluth" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={ellipse} 
    className="second__img" 
    alt="Ellipse" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }} 
  />
  
  <motion.img 
    src={image4} 
    className="first__img" 
    alt="Image 4" 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }} 
  />
</motion.div>



        </div>
      </div>
    </section>
  );
}
