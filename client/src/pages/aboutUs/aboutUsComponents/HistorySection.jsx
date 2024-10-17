import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

export default function HistorySection() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const data=useSelector(state=>state.data.data.AboutHistorySection)
  return (
    <div className=" mt-[100px]  mb-[100px] w-full font-[Poppins]  text-9xl font-semibold text-[#453B57] max-md:mt-10 max-md:text-4xl">
      <motion.div
        className="flex justify-between w-full"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <span className="relative w-[55%]">
          
          {data.header_line_1}
          
          <div
            className="absolute bottom-0 right-0 w-[6px] h-[100%] mx-auto"
            style={{
              background: 'linear-gradient(0deg, #fff, #ED5959 47.16%, #fff)',
            }}
          ></div>
        </span>
        <p className="max-w-[500px] font-[Lato]">
         {data.shortDescription}
        </p>
      </motion.div>
      <span className="text-rose-500">{data.header_line_2}</span>
    </div>
  );
}
