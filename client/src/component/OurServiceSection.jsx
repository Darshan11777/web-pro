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
          <div className="  mb-4 md:mb-6 lg:mb-8 text-center relative">
            <h1 className="text-[30px] sm:text-[30px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[400] font-[poppins] leading-[60px] text-[#453b57] pl-[60px]  md:pl-[60px] lg:pl-[80px] text-left">{data?.section_name}</h1>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[50px]  md:w-[50px] lg:w-[70px] h-[3px] bg-[#ed5959]"></div>
          </div>
          <div className="flex flex-col md:gap-3 lg:gap-0 relative justify-between md:flex-row lg:space-x-8">
            {/* Left Column */}
            <div className="w-full my-auto lg:w-1/2 ourservice__relative md:mb-6 lg:mb-0">
              <div className="">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className=" text-5xl sm:text-[60px] md:text-[50px]  lg:text-[60px]  xl:text-[89px] font-poppins font-semibold text-[#453b57] leading-[110%]"
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
                className=" mt-4 h-[2px] bg-gray-300"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </div>

{/* border */}
            <div className=" md:w-[10px] lg:w-[8px] " style={{background:` linear-gradient(180deg, rgb(255 255 255), rgb(237, 89, 89) 47.16%,rgb(255 255 255))`}}></div>
            {/* Right Column */}
            <div className="w-full  lg:w-1/2  flex items-center justify-center flex-grow ">
              <motion.div
                className="font-poppins  text-[#453b57]   text-[20px] sm:text-[26px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-poppins font-normal leading-[120%] my-auto"
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
