import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ProjectImageSection() {
  const data = useSelector((state) => state.data.data.aboutImageProjectSection);

  return (
    <div className=" mb-[100px] mt-[100px] w-full max-w-[1464px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* First Image */}
        <motion.div
          className="flex flex-col w-[31%] h-[422px]  max-md:ml-0 max-md:w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            loading="lazy"
            src={data.image_1}
            className="object-cover h-full w-full rounded-[50px] max-md:mt-10 max-md:max-w-full"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            loading="lazy"
            src={data.image_2}
            className="object-cover w-full h-full rounded-[50px] max-md:mt-10 max-md:max-w-full"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img
            loading="lazy"
            src={data.image_3}
            className="object-cover h-full w-full rounded-[50px] max-md:mt-10 max-md:max-w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
