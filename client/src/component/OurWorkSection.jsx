import React from 'react'
import silderimg from '../assets/images/silder_img.png'
import SilderSection from './SilderSection'
import CardSlider from './cardSlider/CardSlider'
import {motion } from 'framer-motion'

export default function OurWorkSection() {
  return (
    <section className="our_work_section relative">
        <div className="container right_side">
          <div className="row">
            <motion.div className="title"
             initial={{ opacity: 0, y: 0,scale:0.8 }} // Initial state
             whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
             transition={{ duration: 1, ease: 'easeOut' }} // Transition options
            >
              <h1>our services</h1>
            </motion.div>
            <div className="heading__title">
              <motion.h1
               initial={{ opacity: 0, y: 0,scale:0.8 }} // Initial state
               whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
               transition={{ duration: 1, ease: 'easeOut' }} // Transition options
              >Making<span>“brands” </span>
                a damn site better.</motion.h1>
                <CardSlider/>
            </div>
          </div>
        </div>
        <div 
        className="absolute inset-x-0 bottom-0 h-[6px] w-[70%] mx-auto"
        style={{
          background: 'linear-gradient(90deg, #453B57, #ED5959 47.16%, #453B57',
        }}
      ></div>
      </section>
      
  )
}
