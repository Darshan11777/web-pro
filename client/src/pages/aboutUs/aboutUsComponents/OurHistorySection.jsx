import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

export default function OurHistorySection() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 },  // Fully visible and in position
  };

  const data=useSelector(state=>state.data.data.historyDetailesSection)
 
  return (
    <div className="mb-[100px] mt-[100px] w-full max-w-[1459px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <motion.div
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <img
            loading="lazy"
            src={data.image}
            className="object-cover grow w-full aspect-[1.49] rounded-[40px] max-md:mt-10 max-md:max-w-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <div className="flex bg-[#453B57] flex-col grow px-14 pt-20 pb-28 w-full text-white rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
            <div className="self-start text-4xl font-[Poppins]">{data.header}</div>
            <div className="mt-5 text-3xl leading-10 tracking-[2.24px] max-md:max-w-full font-[lato]">
             {data.shortDescription}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
