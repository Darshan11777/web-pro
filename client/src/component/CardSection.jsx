import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function CardSection({
  open,
  title,
  description,
  image,
  tags,
  number,
}) {
  const [showImage, setShowImage] = useState(open || false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
    setIsRotated(!isRotated);
  };

  // return (
  //   <div className="relative bg-[#ffeded]   mx-auto md:p-10 md:pb-0 pt-10 pb-0 rounded-[50px] lg:m-5 card">
  //     <motion.div
  //       className="w-full space-y-5 lg:space-y-5"
  //       initial={{ opacity: 0, y: 20, scale: 0.8 }}
  //       whileInView={{ opacity: 1, y: 0, scale: 1 }}
  //       transition={{ duration: 1, ease: "easeOut" }}
  //     >
  //       <motion.div
  //         className="flex flex-col  md:flex-row justify-between items-center"
  //         initial={{ opacity: 0, x: -20 }}
  //         whileInView={{ opacity: 1, x: 0 }}
  //         transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
  //       >
  //         <div className="flex  gap-3 lg:gap-9">
  //           <span className=" text-[36px] sm:text-4xl  md:text-3xl lg:text-4xl text-[#453b57]  font-light leading-[60px] font-[poppins]">
  //             {number}
  //             {". "}
  //           </span>
  //           <h3 className="font-[poppins] text-[36px] sm:text-4xl font-[400] text-[#453b57] max-w-[953px] uppercase italic text-center sm:text-left md:text-3xl xl:text-5xl lg:text-5xl">
  //             {" "}
  //             {title}
  //           </h3>
  //         </div>
  //         <div className="flex gap-4 lg:gap-8">
  //           <div className="button__text mt-4 sm:mt-0">
  //             <ul>
  //               <li>
  //                 <a className="border border-[#ed5959] px-[33px] py-[10px] text-center rounded-[60px] font-poppins font-semibold leading-[48px] text-[20px] text-[#453b57]">
  //                   Learn more
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="iconn__section mt-4 sm:mt-0">
  //             <button
  //               className={`icon animation ${isRotated ? "rotate-icon" : ""}`}
  //               onClick={toggleImage}
  //             >
  //               <FontAwesomeIcon icon={faChevronDown} />
  //             </button>
  //           </div>{" "}
  //         </div>
  //       </motion.div>

  //       <motion.h3
  //         className=" font-[poppins] font-[400] lg:mx-auto text-[#453b57] lg:w-[80%]    xl:text-2xl lg:text-xl md:text-xl"
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
  //       >
  //         {description}
  //       </motion.h3>

  //       <motion.div
  //         className=""
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
  //       >
  //         <ul className="grid grid-cols-2 lg:grid-cols-3 lg:w-[80%] mx-auto  gap-4  md:p-0 ">
  //           {tags.split(",").map((item, index) => (
  //             <li key={index} className="h-full w-full ">
  //               <a className="  font-light h-full w-full  border border-[#958aa8] flex justify-center items-center rounded-[60px] text-[#958aa8] font-[poppins] p-1.5 md:text-xl xl:text-2xl">
  //                 {item}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </motion.div>

  //       {/* Conditionally render the image with transition */}
  //       <motion.div
  //         className={` transition-all  duration-500  ease-linear   ${
  //           showImage
  //             ? " h-52 sm:h-60 lg:h-72 xl:h-80 opacity-100"
  //             : "h-0 opacity-0"
  //         }`}
  //         initial={{ opacity: 0, scale: 0.9 }}
  //         animate={{ opacity: showImage ? 1 : 0, scale: showImage ? 1 : 0.9 }}
  //         transition={{ duration: 0.8, ease: "easeOut" }}
  //       >
  //         <img
  //           src={image}
  //           alt="Bottom Image"
  //           className="object-cover rounded-t-[50px] w-full h-full transition-opacity delay-500"
  //         />
  //       </motion.div>
  //     </motion.div>
  //   </div>
  // );
  return(  <div className="flex flex-col rounded-none">
    <div className="flex flex-col items-start px-20 pt-12 w-full bg-rose-50 rounded-[50px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1153px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <div className="grow self-start mt-2.5 text-4xl font-light text-gray-700">
            01.
          </div>
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
              <div className="flex-auto text-6xl font-medium text-gray-700 uppercase max-md:max-w-full max-md:text-4xl">
                Web development
              </div>
              <div className="flex flex-auto gap-2.5 justify-center items-center self-start p-2.5 mt-5 text-3xl font-semibold text-rose-500 border border-rose-500 border-solid rounded-[50px]">
                <div className="self-stretch my-auto">Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5849f828d5ee5fe958c76b83575af435fba39dbd59fd4692caed3fdf213e1e2b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                />
              </div>
            </div>
            <div className="mt-6 mr-9 text-3xl text-gray-700 max-md:mr-2.5 max-md:max-w-full">
              Crafting digital experiences where beauty meets ROI, turning
              heads and unlocking revenue potential with every click.
              <br />
            </div>
          </div>
        </div>
        <div className="flex flex-col self-end mt-16 w-full text-3xl font-light max-w-[1052px] text-zinc-400 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between self-center max-w-full w-[931px]">
            <div className="gap-2.5 self-stretch p-2.5 border border-solid border-zinc-400 rounded-[50px]">
              Web development
            </div>
            <div className="gap-2.5 self-stretch p-2.5 whitespace-nowrap border border-solid border-zinc-400 rounded-[50px]">
              Copy-writing
            </div>
            <div className="gap-2.5 self-stretch p-2.5 whitespace-nowrap border border-solid border-zinc-400 rounded-[50px]">
              WordPress
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/268506c77f5d8ef88af23546b28d5eb3a91eace9fe532ba742724a5b19accc4b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
            className="object-contain mt-16 w-full aspect-[2.64] rounded-[40px_40px_0px_0px] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
