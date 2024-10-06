import React from 'react'
import subtractimg from '../assets/images/Subtract.png'
import image12 from '../assets/images/silder_img.png'
import arrowimg from '../assets/images/arrow_img.png'
import CardBrandSection from './CardBrandSection'
import SilderSection from './SilderSection'
import CardSlider from './cardSlider/CardSlider'
import centerImg from "../assets/images/Mask group (3).png"
import centerImg2 from "../assets/images/Ellipse 60.png"
import {motion } from 'framer-motion'



export default function OurResultSection() {
  return (
    <div className='relative w-[102vw]'>
      <section className="our_work_section relative">
        <div className="container right_side">
          <div className="row">
            <motion.div
              className="title"
              initial={{ opacity: 0, y: 50, scale: 0.8 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
              transition={{ duration: 1, ease: 'easeOut' }} // Transition options
            >
              <h1>Our Services</h1>
            </motion.div>
            <motion.div
              className="heading__title"
              initial={{ opacity: 0, y: 50, scale: 0.8 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Transition options
            >
              <h1>Making <span>“brands”</span> a damn site better.</h1>
              <div className='slider_section'>
                <CardSlider />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Background */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-1  h-[6px] w-[70%] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          style={{
            background: 'linear-gradient(90deg, #453B57, #ED5959 47.16%, #453B57)',
          }}
        ></motion.div>
        {/* Center Background Image */}
        <motion.div
          className="absolute top-[30%] left-0 h-[170px] animate-scaleUpDown"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          <img src={centerImg} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </section>

      <motion.div
        className="absolute top-[35%] z-[2] left-0 h-[600px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
      >
        <img src={centerImg2} alt="" className="h-full w-full object-cover" />
      </motion.div>

      <div className="our__result__section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="our_process__title">
              <h5>Our Process</h5>
              <h1>We develop website this <span>“process”</span></h1>
            </div>
            <div className="row relative">
              <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                <div className="mainn__result__section">
                  <div className="mock_title">
                    <div className="row">
                      <motion.div
                        className="lg:w-[30%] md:w-[50%] sm:w-full w-full"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                      >
                        <div className="web_developemnt">
                          <ul>
                            <li><a>Web Development</a></li>
                            <li><a>Graphic Design</a></li>
                          </ul>
                        </div>
                      </motion.div>

                      <motion.div
                        className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                      >
                        <div className="web_developemnt">
                          <ul>
                            <li><a>Web Design</a></li>
                            <li><a>Digital Marketing</a></li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="lg:w-[50%] md:w-[50%] sm:w-full w-full relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
              >
                <div
                  className="absolute inset-x-0 top-[30px] left-[-100px] h-[100px] w-[6px]"
                  style={{
                    background: 'linear-gradient(0deg, #453B57, #ED5959 47.16%, #453B57)',
                  }}
                ></div>
                <div className="right__result__section">
                  <p>Provide a summary of your services, focusing on how you solve common IT problems.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mainn__star">
            <div className="flex gap-[25px]">
              <motion.div
                className="lg:w-[65%] md:w-[74.7%] sm:w-full w-full"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="star__img">
                  <img src={subtractimg} alt="Star Image" />
                </div>
                <div className="star__details">
                  <h2>405</h2>
                  <span><p>Star</p> Reviews</span>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-[28%] md:w-[24.9%] sm:w-full w-full"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="reviews__section">
                  <div className="sub__reviwes">
                    <h3>10+</h3>
                    <span>Experience</span>
                  </div>
                  <div className="sub__reviwes">
                    <h3>10+</h3>
                    <span>Experience</span>
                  </div>
                  <div className="sub__reviwes">
                    <h3>10+</h3>
                    <span>Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
