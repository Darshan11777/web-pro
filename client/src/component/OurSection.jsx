import { useScroll, useTransform ,motion} from 'framer-motion';
import React, { useRef, useState } from 'react'
import afterImg from "../assets/images/Ellipse 57.png"

export default function OurSection () {
 
  
  return (
    
        
<motion.section 
  className="our_services" 
  initial={{ opacity: 0, y: 50, scale: 0.9 }} // Initial state with slide and scale
  whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
  transition={{ duration: 1.2, ease: 'easeOut' }} // Transition options
>
  <div className="services__before">
    <div className="container">
      <div className="title">
        <h1>Our Services</h1>
      </div>
      <div className="row">
        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full ourservice__relative">
          <div className="heading__title">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              We provide best <span>”Service”</span>
            </motion.h1>
          </div>
          <motion.div
            className='ourservice__border'
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
          <motion.div
            className="sub__heading__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <span>Provide a summary of your services, focusing on how you solve common IT problems.</span>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  {/* Optional background image animation */}
  {/* <motion.div
    className="absolute top-0 right-[-300px] h-[100%] w-[80%]"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
  >
    <img src={afterImg} alt="" className="h-full w-full object-cover" />
  </motion.div> */}
</motion.section>

 
  )
}