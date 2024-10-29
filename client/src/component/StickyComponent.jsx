import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import centerImg from "../assets/images/Ellipse 57.png";

const ShrinkingHeader = ({ ComponentOne, ComponentTwo }) => {
  const ref = useRef(null);

  // State to store the scroll progress of the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Control scroll trigger purely by ComponentOne
  });

  // Scale down and fade out transformations (locked to the progress of ComponentOne)
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Use state to handle dynamic position changes
  const [position, setPosition] = useState("sticky");

  // Dynamically update position based on scrollYProgress
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      const newPosition = latest > 0.23 ? "relative" : "sticky";
      setPosition(newPosition);
      // console.log( "newPosition",latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="relative w-full ">
      {/* <div className="absolute top-[0%] left-[10px] h-[500px] w-[130px] animate-scaleUpDown">
      <img src={centerImg} alt="" className="h-full w-full object-cover" />
    </div> */}
 {/* <div className="relative  h-[300px] w-full"> Parent has overflow-hidden */}
  <div className="absolute top-0 right-0 h-full w-[60%] transform translate-x-[300px]"> {/* Adjust the positioning */}
    <img src={centerImg} alt="" className="h-full w-full object-cover" />
  </div>
{/* </div> */}



      {/* Wrapping both components */}
      <div ref={ref} className="relative ">
        {/* Component One - sticky behavior and animation */}
        <motion.div
          className="top-0 z-[-1]" // Sticky only after it hits the top
          style={{
            scale,
            opacity,
            position, // Dynamically setting position based on scroll
          }}
        >
          <ComponentOne />
        </motion.div>

        {/* Component Two - dynamic height */}
        <div className="relative">
          <ComponentTwo />
        </div>
      </div>
    </div>
  );
};

export default ShrinkingHeader;
