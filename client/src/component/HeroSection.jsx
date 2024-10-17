import  { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


import header_img from "../assets/images/Group 762.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const data = useSelector((state) => state.data.data.heroSection);

  return (
    <section
      ref={ref}
      className=" header__section bottom__bg__section relative header__bg__section"
    >
      <div className="header_img_container">
        <video
          src={data?.bg_video_url}
          autoPlay
          muted
          loop
          className="header_img w-full h-full object-cover"
        />
 {/* Overlay */}
 <div className="absolute inset-0 bg-[#453B57F2] opacity-50"></div> {/* Adjust opacity as needed */}

        {/* <img
          src={header_img}
          alt=""
          className="mt-[90px] mb-[100px] header_img h-[100%] object-cover"
        /> */}
      </div>

      <div className="container herosection__container">
        <div className="row">
          <div className="left__section">
            <motion.div
              className="heading__part w-[45%]"
              initial={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }} // Initial state with 3D rotation and scaling
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} // End state with 3D effect
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} // Smooth and natural easing
            >
              <h1>{data.header}

              </h1>
              <p>
                {/* We are a creative web design & branding agency based in London that crafts beautiful work for brands who <span>refuse to blend in.</span> */}
                {data.description}
              </p>
            </motion.div>
            <motion.div
              className="main__title w-[45%]"
              initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }} // Coming from the right with 3D rotation
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} // End state
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} // Smooth and fluid transition
            >
              <h2>{data.subheader}</h2>
            </motion.div>
          </div>
          <motion.img
            src={data.below_img_url}
            className="mt-0"
            alt="header_bottom"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          
          <motion.div className="hero-section-bottom__img flex max-w-[1200px] justify-between">
          {data.brandImages.split(',').map((item,index)=>{
             return  <motion.img
              key={index}
              src={item}
              className="first__img"
              alt="Upstock"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            />
               
            
          })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
