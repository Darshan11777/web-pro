import React, { useEffect, useState } from "react";
import silderimg from "../assets/images/silder_img.png";
import SilderSection from "./OurServiceSlides";
import CardSlider from "./cardSlider/CardSlider";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";

export default function News() {
 
  const data=useSelector(state=>state.data.data.newsHeader)
  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highlighted_word})`, "gi")
  );

  return (
    <section className="our_work_section relative">
      <div className="container right_side">
        <div className="row">
          <motion.div
            className="title"
            initial={{ opacity: 0, y: 0, scale: 0.8 }} // Initial state
            whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
            transition={{ duration: 1, ease: "easeOut" }} // Transition options
          >
            {/* <h1>News & Blogs</h1> */}
            <h1>{data?.section_name}</h1>
          </motion.div>
          <div className="heading__title">
            <motion.h1
              initial={{ opacity: 0, y: 0, scale: 0.8 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
              transition={{ duration: 1, ease: "easeOut" }} // Transition options
            >
              {/* Our latest */}
              {/* <span className='block'>“News & Blogs” </span> */}
              {newHeader &&
                newHeader.map((part, index) =>
                  part.toLowerCase() === data.highlighted_word.toLowerCase() ? (
                    <span key={index} className="block">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
            </motion.h1>
            <CardSlider data="news" />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-[6px] w-[70%] mx-auto"
        style={{
          background: "linear-gradient(90deg, #453B57, #ED5959 47.16%, #453B57",
        }}
      ></div>
    </section>
  );
}
