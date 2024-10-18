import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../../../assets/images/Rectangle 124.png";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AboutHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const data = useSelector((state) => state.data.data.aboutHeroSection);
  // console.log("data", data);

  const highLightBlue = data?.header?.split(
    new RegExp(`(${data?.blueHighLight})`, "gi")
  );

  const highLightTransparent = data?.header?.split(
    new RegExp(`(${data?.transparentHighLight})`, "gi")
  );

  // console.log(highLightTransparent,"blueHighlight")

  // console.log(data.header.split(" "), "data Header");

  // const newHeader= highLightBlue.map((part, index) =>
  //   part.toLowerCase() === data?.blueHighLight?.toLowerCase() ? (
  //     <span key={index} className="text-[#453B57]">
  //       {part}
  //     </span>
  //   ) : (


  //     highLightTransparent &&
  //     highLightTransparent.map((part,i)=>part.toLowerCase()=== data?.transparentHighLight?.toLowerCase()?(  <span
  //     key={i}
  //       className="text-transparent"
  //       style={{
  //         WebkitTextStrokeColor: "red",
  //         WebkitTextStrokeWidth: "1px",
  //         backgroundColor: "transparent",
  //       }}
  //     >
  //       {part}
  //     </span>):(part)
  //   )
  // ))
  // const data = useSelector((state) => state.data.data.aboutHeroSection);

if (!data || !data.header) return null;

const splitWords = data.header.split(" ");
const newHeader = splitWords.map((word, index) => {
  // Check if the word matches the blue highlight
  if (word.toLowerCase() === data.blueHighLight?.toLowerCase()) {
    return (
      <span key={index} className="text-[#453B57]">
        {word}{" "}
      </span>
    );
  }
  
  // Check if the word matches the transparent highlight
  if (word.toLowerCase() === data.transparentHighLight?.toLowerCase()) {
    return (
      <span
        key={index}
        className="text-transparent"
        style={{
          WebkitTextStrokeColor: "red",
          WebkitTextStrokeWidth: "1px",
          backgroundColor: "transparent",
        }}
      >
        {word}{" "}
      </span>
    );
  }

  // Return the word as it is if it doesn't match either highlight
  return <span key={index}>{word}{" "}</span>;
});


  return (
    <motion.div
      className="container relative font__control text-center text-[180px] mb-[100px]  "
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={containerVariants} // Apply container animation
    >
      <div className="mt-32 font-bold text-center text-rose-500 uppercase text-[150px] max-md:mt-10 max-md:text-4xl max-md:leading-10">
        <motion.div
          className="flex justify-between items-center flex-wrap"
          variants={textVariants} // Animate each text block
        >
          
          {newHeader[0]}
          <img
             src={data.image}
            alt="Vision Icon"
            className="w-[300px] object-cover h-[157px]  rounded-[50px] max-md:w-[50px]" // Adjust image size based on screen size
          />
          {newHeader[1]}
         
        </motion.div>
        <motion.div
          className="flex justify-between items-center max-w-[80%] mx-auto"
          variants={textVariants} // Animate each text block
        >
          
          {newHeader[2]}
         
             {newHeader[3]}
                     {newHeader[4]}
          
        </motion.div>
        <motion.div
          className="flex justify-around w-[80%] items-center mx-auto"
          variants={textVariants} // Animate each text block
        >
          <img
            src={data.image_2}
            alt="Vision Icon"
            className="w-[300px] object-cover h-[157px]  rounded-[50px] max-md:w-[50px]" // Adjust image size based on screen size
          />
        {newHeader.slice(5).map(item=>item)}
        </motion.div>
        {/* <motion.div
          className="pt-0 max-w-[357px] absolute font-[lato] text-left text-black bottom-[30px] -right-[120px]"
          variants={textVariants} // Animate the text block
        >
          <p className="text-3xl leading-10 text-gray-700 uppercase tracking-[2.0px] font-[lato]">
            
            {data.shortDescription}
          </p>
        </motion.div> */}
      </div>
    </motion.div>
  );
}
