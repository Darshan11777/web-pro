import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function RequestQuoteSection({details}) {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const aboutUsDetails=useSelector(state=>state.data.data.aboutQuoteSection)
  const data=details?details:aboutUsDetails;

 
  const newHeader = data?.headerLine2?.split(
    new RegExp(`(${data?.highLight})`, "gi")
  );
  

  return (
    <div className="mb-[100px] mt-[100px] pl-[70px] about__section__gradinent max-w-full rounded-[50px] w-[1459px] max-md:pl-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <motion.div
            className="flex font-semibold z-10 flex-col items-start self-stretch my-auto mr-0 w-full text-3xl max-md:mt-10 max-md:max-w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl text-[#453B57] max-md:max-w-full  max-md:text-4xl font-[Poppins]">
              {/* <span className="font-semibold text-[#453B57] ">Empowering your</span>
              <br />
              <span className="font-semibold text-[#453B57]">Vision :</span>
              <span className="font-semibold text-rose-500"> Request Quote</span> */}

             {data.headerLine1}
              <br />
              {newHeader &&
                    newHeader.map((part, index) =>
                      part.toLowerCase() ===
                      data?.highLight?.toLowerCase() ? (
                        <span key={index} className="font-semibold text-rose-500">
                          {part}
                          
                        </span>
                      ) : (
                        part
                      )
                    )}
                   
                    
            </div>

            <div className="self-stretch mt-11 leading-10 text-[#453B57] tracking-[2.24px] max-md:mt-10 max-md:max-w-full font-[lato]">
              <span className="font-medium">
                We are a creative web design & branding agency based in London.
              </span>
            </div>
            <div className="flex flex-wrap gap-10 mt-20 max-w-full font-semibold w-[590px] max-md:mt-10 font-[Poppins]">
              <div className="flex-auto gap-2.5 self-stretch p-2.5 text-white text-center bg-rose-500 rounded-[50px]">
                Request Quote
              </div>
              <div className="flex-auto gap-2.5 self-stretch p-2.5 text-[#453B57] text-center border border-[#453B57] border-solid rounded-[50px]">
                Learn more
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <motion.img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w"
            className="object-contain z-10 grow mt-0 w-full rounded-none aspect-[0.67] max-md:-mr-1.5 max-md:max-w-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}
