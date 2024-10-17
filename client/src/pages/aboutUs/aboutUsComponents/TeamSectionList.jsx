import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function TeamSectionList() {
  const teamMembers = useSelector((state) => state.data.data.teamDetails);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay between animations of team members
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeInOut' }, 
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-[100px] flex font-[lato] flex-col justify-center items-center px-20 py-28 mt-[100px] w-full bg-indigo-200 bg-opacity-30 max-w-[1465px] rounded-[50px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full "
    >
      <motion.div className="grid grid-cols-3 w-full mb-0 max-w-full max-md:mb-2.5">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`flex px-20 py-11 justify-center items-center max-md:ml-0 max-md:w-full ${index === 1 && 'shadow-[2px_2px_54px_rgba(188,188,188,0.25)] bg-indigo-50 rounded-[50px]'}`}
            variants={cardVariants}
          >
            <div className="flex flex-col items-center mt-6 leading-none text-center text-[#453B57] max-md:mt-10">
              <img
                loading="lazy"
                className="object-contain max-w-full rounded-full aspect-square w-[139px]"
                src={member.image}
                alt={member.name}
              />
              <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                {member.name}
              </div>
              <div className="mt-2.5 text-xl tracking-widest">
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// import React from 'react';




// export default function TeamSectionList() {
//   return (
//     <div className="flex flex-col justify-center items-center px-20 py-28 mt-36 w-full bg-indigo-200 bg-opacity-30 max-w-[1465px] rounded-[50px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
//       <div className="flex flex-col mb-0 max-w-full w-[1084px] max-md:mb-2.5">
//         <div className="grid grid-cols-3 max-md:flex-col">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col items-center mt-6 leading-none text-center text-[#453B57] max-md:mt-10">
//                 <img
//                   loading="lazy"
//                   src={`${member.img}`}
//                   alt={member.name}
//                   className="object-contain max-w-full rounded-full aspect-square w-[139px]"
//                 />
//                 <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
//                   {member.name}
//                 </div>
//                 <div className="mt-2.5 text-xl tracking-widest">
//                   {member.title}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Add additional sections or components as needed */}
//     </div>
//   );
// }
