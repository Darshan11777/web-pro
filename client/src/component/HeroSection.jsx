// import  { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// import header_img from "../assets/images/Group 762.png";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";


// export default function HeroSection() {
//   const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

//   const data = useSelector((state) => state.data.data.heroSection);

//   return (
//     <section
//       ref={ref}
//       className="  bottom__bg__section relative pt-[20px]"
//     >
//       <div className="absolute inset-0 h-full w-full z-[-1]">
//         <video
//           src={data?.bg_video_url}
//           autoPlay
//           muted
//           loop
//           className=" w-full h-[90%] object-cover"
//         />
//  {/* Overlay */}
//  <div className="absolute inset-0 h-[90px] bg-[#453B57] opacity-5"></div> Adjust opacity as needed

//         <img
//           src={header_img}
//           alt=""
//           className="     inset-0  absolute h-[103%]   object-cover"
//         />
//       </div>

//       <div className="container  mt-[100px]">
//         <div className="">
//           <div className=" w-full flex justify-between items-center  mb-[50px]">
//             <motion.div
//               className=" w-[40%]"
//               initial={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }} // Initial state with 3D rotation and scaling
//               whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} // End state with 3D effect
//               transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} // Smooth and natural easing
//             >
//               <h1 className="bg-transparent text-[123px] font-[Lato] font-extrabold italic text-transparent text-stroke-1 text-stroke-white"
//               >{data.header}

//               </h1>
//               <p className="text-[32px] leading-[48px] font-[Poppins] font-normal text-white">
//                 {/* We are a creative web design & branding agency based in London that crafts beautiful work for brands who <span>refuse to blend in.</span> */}
//                 {data.description}
//               </p>
//             </motion.div>
//             <motion.div
//               className=" w-[40%]"
//               initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }} // Coming from the right with 3D rotation
//               whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} // End state
//               transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }} // Smooth and fluid transition
//             >
//               <h2 className="font-[Timmana] text-[130px] font-normal leading-[110px] text-[#ed5959] italic uppercase">{data.subheader}</h2>
//             </motion.div>
//           </div>
//           <div className="">

        
//           <motion.img
//             src={data.below_img_url}
//             className="mt-0"
//             alt="header_bottom"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           />

          
//           <motion.div className="w-full mt-6 flex  max-w-[1200px] justify-between ">
//           {data.brandImages.split(',').map((item,index)=>{
//              return  <motion.img
//               key={index}
//               src={item}
//               className="first__img"
//               alt='brand img'
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
//             />
               
            
//           })}
//           </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import header_img from "../assets/images/Group 762.png";
// import { useDispatch, useSelector } from "react-redux";

// export default function HeroSection() {
//   const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
//   const data = useSelector((state) => state.data.data.heroSection);
//   console.log(data,'sdfas')

//   return (
//     <section ref={ref} className="bottom__bg__section relative pt-4">
//       <div className="absolute inset-0 h-full w-full z-[-1]">
//         <video
//           src={data?.bg_video_url}
//           autoPlay
//           muted
//           loop
//           className="w-full h-[90%] object-cover"
//         />
//          {/* <img
//           src={header_img}
//           alt=""
//           className="w-[100vw] inset-0 h-[90%] object-cover z-[10]"
//         /> */}
//         <div className="absolute inset-0 h-full bg-[#453B57] w-full opacity-50 block md:hidden"></div>

//         <img
//           src={header_img}
//           alt=""
//           className="inset-0 w-full absolute hidden md:block h-[103%] object-cover"
//         />
//       </div>

//       <div className="mt-24 md:mt-28 lg:mt-[100px]">
//         <div>
//           <div className="container">
//             <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center mb-12 md:mb-20">
//               <motion.div
//                 className="w-full md:w-[40%]"
//                 initial={{ opacity: 0, x: -100, rotateY: 45, scale: 0.8 }}
//                 whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
//                 transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//               >
//                 <h1 className="bg-transparent text-[30px] md:text-[60px] lg:text-[123px] font-[Lato] font-extrabold italic text-transparent text-stroke-1 text-stroke-white">
//                   {data?.header}
//                 </h1>
//                 <p className="text-[16px] md:text-[24px] lg:text-[32px] leading-[24px] md:leading-[36px] lg:leading-[48px] font-[Poppins] font-normal text-white">
//                   {data.description}
//                 </p>
//               </motion.div>
//               <motion.div
//                 className="w-full md:w-[40%] mt-8 md:mt-0"
//                 initial={{ opacity: 0, x: 100, rotateY: -45, scale: 0.8 }}
//                 whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
//                 transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//               >
//                 <h2 className="font-[Timmana] text-[60px] md:text-[90px] lg:text-[130px] font-normal leading-[60px] md:leading-[90px] lg:leading-[110px] text-[#ed5959] italic uppercase">
//                   {data.subheader}
//                 </h2>
//               </motion.div>
//             </div>
//           </div>
//           <div>
//             <div className="container">
//               <motion.img
//                 src={data.below_img_url}
//                 className="mt-0 w-full mx-auto"
//                 alt="header_bottom"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.5, ease: "easeOut" }}
//               />
//             </div>

//             <div className="bg-[#ED5959]">
//               <div className="container">
//                 <motion.div className="w-full h-8 mt-6 flex flex-wrap max-w-[1200px] justify-between mx-auto">
//                   {data.brandImages.split(',').map((item, index) => {
//                     return (
//                       <motion.img
//                         key={index}
//                         src={item}
//                         className="first__img mb-4 w-[48%] md:w-[30%] lg:w-[20%] object-contain"
//                         alt="brand img"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
//                       />
//                     );
//                   })}
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import header_img from "../assets/images/Group 762.png";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "./ResponsiveText";

export default function HeroSection() {

  // responsive font matrics
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const data = useSelector((state) => state.data.data.heroSection);

  // Memoize video source
  const videoSrc = useMemo(() => data?.bg_video_url, [data?.bg_video_url]);

  // Motion settings for reuse
  const fadeInLeft = { opacity: 0, x: -100, rotateY: 45, scale: 0.8 };
  const fadeInRight = { opacity: 0, x: 100, rotateY: -45, scale: 0.8 };
  const slideUp = { opacity: 0, y: 50 };

  return (
    <section ref={ref} className=" relative ">

      {/* <div className="oval-mask">
  <img src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730119162/Group_762_1_ostl1r.png" alt="Oval cropped image" />
</div> */}

{/* <div
  className="center-cropped"
  style={{ backgroundImage: `url("https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730119162/Group_762_1_ostl1r.png")` }}
>
  <img src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730119162/Group_762_1_ostl1r.png" className="bg-red-500" alt="Placeholder" />
</div> */}

      <div className="absolute inset-0 h-full w-full z-[-1]">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-[90%] object-cover"
        />
        
        <div className="absolute inset-0 h-full bg-[#453B57] w-full opacity-90 block md:hidden"></div>

        <img
          // src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730119162/Group_762_1_ostl1r.png"
          // src='https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730265262/Group_765_blgmib.png'
          alt="header"
          className="inset-0 w-full absolute hidden md:block h-[100%] object-cover"
        />
      </div>

      <div className="">
        <div className="relative ">

          <div className="absolute inset-0 h-[90%]  w-full ">
            <img src='https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730266321/Subtract_3_pzcpht.png 'alt=""  className="w-full h-full  hidden md:block object-c"/>
          </div>
          <div className="w-full container py-[30px] pt-[50px] md:py-[80px] lg:py-[100px] flex flex-col-reverse md:flex-row justify-between items-center">
            <motion.div
              className="w-full md:w-[40%]"
              initial={fadeInLeft}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="bg-transparent  mb-2 md:mb-6  font-[Lato]  font-extrabold italic text-transparent text-stroke-1 text-stroke-white w-full   h-[110px]">
                <ResponsiveText >
                  
                {data?.header + ''}    
                </ResponsiveText>
              </h1>
              <p className="text-[14px] md:text-[18px] h-[150px] w-full lg:text-[22px] leading-[20px] md:leading-[28px] lg:leading-[32px] font-[Poppins] font-normal text-white">
              <ResponsiveText >
                {data?.description+ ''}
                </ResponsiveText>
              </p>
            </motion.div>
            <motion.div
              className="w-full md:w-[40%]  my-auto lg:mt-auto"
              initial={fadeInRight}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="font-[Timmana]  p-0  m-0  text-left md:text-right   font-normal   text-[#ed5959]  italic uppercase  h-[220px]">
                <ResponsiveText breakWord={'advanced'}>
                  
                {data?.subheader}
                </ResponsiveText>
              </h2>
            </motion.div>
          </div>

          <div className="container">
            <motion.img
              src={data?.below_img_url}
              className="mt-0 w-full mx-auto"
              alt="header_bottom"
              initial={slideUp}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              loading="lazy"
            />
          </div>
          </div>
          <div className=" bg-[#ED5959]  relative">
            {/* bottom bg red img */}
          <div className="absolute inset-0 top-[-80%] z-[-1] h-[180%] w-full ">
            <img src='https://res.cloudinary.com/dbuuc0cdy/image/upload/v1730878479/Rectangle_97_k2uex1.png 'alt=""  className="w-full h-full object-c"/>
          </div>
            <div className="container">
              <motion.div className="w-full   mt-6 flex flex-wrap  justify-between items-center mx-auto">
                {data?.brandImages?.split(',').map((item, index) => (
                  <motion.img
                    key={index}
                    src={item}
                    className="first__img my-2 md:mb-4 w-[48%] md:w-[30%] lg:w-[20%] object-contain"
                    alt="brand logo"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    loading="lazy"
                  />
                ))}
              </motion.div>
            </div>
          </div>
       
      </div>
    </section>
  );
}
