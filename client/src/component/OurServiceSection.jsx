import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

export default function OurServiceSection() {
  const data = useSelector((state) => state.data.data.overServiceHeader);

  // Split the header based on the highlighted_word if data is available
  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highlighted_word})`, "gi")
  );

  return (
    <motion.section
      className=" w-full   "
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="services__before">
        <div className="container mx-auto ">
          <div className="title mb-4 md:mb-6 lg:mb-8 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{data?.section_name}</h1>
          </div>
          <div className="flex flex-col md:flex-row lg:space-x-8">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 ourservice__relative mb-6 lg:mb-0">
              <div className="">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className=" text-5xl md:text-[89px] font-poppins font-semibold text-[#453b57] leading-[110%]"
                >
                  {/* Render the header with highlighted word */}
                  {newHeader &&
                    newHeader.map((part, index) =>
                      part.toLowerCase() ===
                      data.highlighted_word.toLowerCase() ? (
                        <span key={index} className="text-red-500 font-semibold">{part}</span>
                      ) : (
                        part
                      )
                    )}
                </motion.h1>
              </div>
              <motion.div
                className="ourservice__border mt-4 h-[2px] bg-gray-300"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2  flex items-center justify-center flex-grow ">
              <motion.div
                className="sub__heading__title text-base  leading-[200%] my-auto"
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
    </motion.section>
  );
}
