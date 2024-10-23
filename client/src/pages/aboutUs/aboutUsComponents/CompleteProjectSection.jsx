import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function CompleteProjectSection({details}) {
  // Define animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  let data;
  
 const aboutUsPageData=useSelector(state=>state.data.data.aboutProjectSection)

data=details?details:aboutUsPageData

  return (
    <div className="mb-[100px] mt-[100px] w-full">
      <motion.div
        className="flex flex-wrap gap-5 justify-between mb-[100px]   ml-8 w-full text-4xl leading-10 text-center text-black max-w-[1390px] tracking-[2.38px] max-md:mt-10 max-md:max-w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <span className="text-6xl font-black text-[#453B57]">{data.complete_projects}+</span>
          <br />
          <span className="text-4xl font-medium text-[#453B57]">
            Complete projects
          </span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <span className="text-6xl font-black text-[#453B57]">{data.year_of_experience}+</span>
          <br />
          <span className="text-4xl font-medium text-[#453B57]">
          Year Of Experience
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 ml-8 text-4xl leading-10 text-center text-black tracking-[2.38px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={itemVariants}
      >
        <span className="text-6xl font-black text-[#453B57]">{data.happy_clients}+</span>
        <br />
        <span className="text-4xl font-medium text-[#453B57]">
        Happy Clients
        </span>
      </motion.div>
    </div>
  );
}
