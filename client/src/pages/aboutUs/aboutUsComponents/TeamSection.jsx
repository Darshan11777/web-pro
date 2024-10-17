import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function TeamSection() {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const data=useSelector(state=>state.data.data.aboutTeamHeader)
  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highLight})`, "gi")
  );
 
  return (
    <div className=' mt-[100px] mb-[100px] '>
      <motion.div
        ref={headingRef}
        className=" text-9xl font-[Poppins] mx-auto font-semibold leading-none text-[#453B57] max-md:mt-10 max-md:max-w-full max-md:text-4xl"
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
        transition={{ duration: 0.5 }}
      >
        
        {/* Meet To <span className="text-rose-500">Our Team</span> */}
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
      </motion.div>
      <motion.div
        ref={textRef}
        className="mt-7 font-[lato]  mx-auto text-4xl leading-10 text-center text-[#453B57] tracking-[2.38px] w-[961px] max-md:max-w-full"
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5, delay: 0.2 }} // Add a slight delay for the text
      >
       
        {data?.shortDescription}
      </motion.div>
    </div>
  );
}

export default TeamSection;
