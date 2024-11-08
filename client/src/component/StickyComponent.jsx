// import React, { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import centerImg from "../assets/images/Ellipse 57.png";

// const ShrinkingHeader = ({ ComponentOne, ComponentTwo }) => {
//   const ref = useRef(null);

//   // State to store the scroll progress of the component
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"], // Control scroll trigger purely by ComponentOne
//   });

//   // Scale down and fade out transformations (locked to the progress of ComponentOne)
//   const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

//   // Use state to handle dynamic position changes
//   const [position, setPosition] = useState("sticky");

//   // Dynamically update position based on scrollYProgress
//   useEffect(() => {
//     scrollYProgress.onChange((latest) => {
//       const newPosition = latest < 0.01 ? "relative" : "sticky";
//       setPosition(newPosition);
//       console.log( "newPosition",latest);
//       console.log( "position",position);
//       console.log( "scale",scale.current);
//     });
//   }, [scrollYProgress]);
//   return (
//     <div className=" w-full   relative">
//       {/* <div className="absolute top-[0%] left-[10px] h-[500px] w-[130px] animate-scaleUpDown">
//       <img src={centerImg} alt="" className="h-full w-full object-cover" />
//     </div> */}
//  {/* <div className="relative  h-[300px] w-full"> Parent has overflow-hidden */}
// {/* </div> */}

//   <div className="absolute top-0 right-0 h-[500px] w-[60%] transform "> {/* Adjust the positioning */}
//     <img src='https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730878950/Ellipse_56_xqgkks.png' alt="" className="h-full w-full object-cover" />
//   </div>


//       {/* Wrapping both components */}

//       <div  className="   ">
        
//         {/* Component One - sticky behavior and animation */}
// <motion.div  ref={ref}  className="relative top-0   h-screen  ">
//         <motion.div
      
//           className="pt-[70px] pb-[70px] sticky  top-0 " // Sticky only after it hits the top
//           style={{
//             scale,
//             opacity,
//              // Dynamically setting position based on scroll
//           }}
//         >
//           <ComponentOne />
//         </motion.div>
//         </motion.div>
//         {/* Component Two - dynamic height */}
//         <div className="relative mt-[-300px] z-1">
//           <ComponentTwo />
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ShrinkingHeader = ({ ComponentOne, ComponentTwo }) => {
  const ref = useRef(null);
  const componantOneRef = useRef(null);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [componantOneHeight, setComponantOneHeight] = useState(0);

  // Update the screen height on window resize
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update ComponentOne height after it mounts
  useEffect(() => {
    if (componantOneRef.current) {
      setComponantOneHeight(componantOneRef.current.offsetHeight);
    }
  }, []);
  console.log( "screenHeight",screenHeight);
  console.log( "componantOneHeight",componantOneHeight);

  // Scroll and animation configurations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let animateTime=componantOneHeight*2-componantOneHeight;
  // animateTime=screenHeight-animateTime

  console.log( "animateTimeaaa", ((componantOneHeight/2 )/ componantOneHeight-81.5) * 100);
  const navbarPercentage=(81.5*100)/componantOneHeight
  console.log("55555555555", ((componantOneHeight / 2)  / (componantOneHeight-81.5)) * 100-navbarPercentage);

  // const animationEndTime=animateTime*100/componantOneHeight*2/100
  const animationEndTime=(((componantOneHeight / 2)  / (componantOneHeight-81.5)) * 100-navbarPercentage)/100
  
  console.log( "animationEndTime",animationEndTime);
  const scale = useTransform(scrollYProgress, [0, animationEndTime], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, animationEndTime], [1, 0.3]);

  // Sticky positioning update based on scroll
  const [position, setPosition] = useState("sticky");
  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setPosition(latest > 0.5 ? "relative" : "sticky");
      console.log( "position",position);
      console.log( "scale",scale.current);
      console.log( "opacity",opacity.current);
      console.log( "scrollYProgress",scrollYProgress.current);
    });
  }, [scrollYProgress]);
  console.log( "position",position);
  console.log( "scale",scale.current);
  console.log( "opacity",opacity.current);
  console.log( "scrollYProgress",scrollYProgress.current);
  console.log( "componantOneHeight",componantOneHeight);
  return (
    <div className="w-full relative">
      {/* Optional background decoration */}
      <div className={`absolute top-0 h-[${componantOneHeight}px] right-0  w-[60%]`} style={{height:componantOneHeight+100}}>
        <img
          src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730878950/Ellipse_56_xqgkks.png"
          alt=""
          className={`h-full w-full object-cover`}
        />
      </div>

      {/* Wrapping components */}
      <div>
        {/* Component One - sticky behavior and animation */}
        <motion.div ref={ref} className={`relative    `} style={{height:componantOneHeight*2}}>
          <motion.div
            ref={componantOneRef}
            className={` sticky top-[50.5px] min-w-screen `}
            style={{ scale, opacity }}
          >
            <div className="pt-[70px] pb-[70px]">
            <ComponentOne />
            </div>
          </motion.div>
        </motion.div>

        {/* Component Two - positioned based on screen and ComponentOne height */}
        <div
          className="relative z-1"
          style={{
            marginTop: `-${componantOneHeight}px`,
          }}
        >
          <ComponentTwo />
        </div>
      </div>
    </div>
  );
};

export default ShrinkingHeader;


