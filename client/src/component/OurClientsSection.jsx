import React, { useEffect, useState } from "react";
import OurServices from "./OurServiceSection";
import OurSection from "./OurServiceSection";
import clientphoto from "../assets/images/cilent_photo.png";
import starimage from "../assets/images/star_image.png";
import ReviewCard from "./review/ReviewCard";
import ReviewSlider from "./review/ReviewSlider";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";

export default function OurClientsSection() {
  
  const data=useSelector(state=>state.data.data.ourClientHeader)
  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highlighted_word})`, "gi")
  );

  return (
    <div>
      <motion.section
        className="our_services"
        initial={{ opacity: 0, y: 50, scale: 0.9 }} // Initial state with slide and scale
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
        transition={{ duration: 1.2, ease: "easeOut" }} // Transition options
      >
        <div className="services__before">
          <div className="container">
            <div className="title">
              {/* <h1>Our Clients</h1> */}
              <h1>{data?.section_name}</h1>
            </div>
            <div className="row">
              <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full ourservice__relative">
                <div className="heading__title">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  >
                    {/* <span>“Client”
              </span>  say
              about us */}

                    {newHeader &&
                      newHeader.map((part, index) =>
                        part.toLowerCase() ===
                        data.highlighted_word.toLowerCase() ? (
                          <span key={index} className="text-red-500 font-bold">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </motion.h1>
                </div>
                <motion.div
                  className="ourservice__border"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                <motion.div
                  className="sub__heading__title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                  <span>{data?.description}</span>
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
      <ReviewSlider />
    </div>
  );
}
