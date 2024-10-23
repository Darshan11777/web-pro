// import * as React from "react";

// function InquiryPage() {
// return (
//   <div className="flex overflow-hidden flex-col pt-4 pb-12 bg-white">
//     <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">

//       <div className="mt-20 ml-3.5 max-w-full w-[1281px] max-md:mt-10">
//         <div className="flex gap-5 max-md:flex-col">
//             <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
//               <div className="mt-9 text-9xl font-bold leading-none text-center text-gray-700 uppercase border border-rose-500 border-solid max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//                 Reach out to <span className="text-rose-500">us</span>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
//                 className="object-contain grow shrink-0 max-w-full aspect-square w-[260px] max-md:mt-8"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex relative flex-col justify-center py-px mt-5 w-full min-h-[504px] max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
//           className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative flex-col items-center px-20 pt-28 w-full bg-gray-700 bg-opacity-60 max-md:px-5 max-md:pt-24 max-md:max-w-full">
//           <div className="flex z-10 flex-col mb-0 w-full max-w-[1464px] max-md:mb-2.5 max-md:max-w-full">
//             <div className="self-center text-5xl font-bold text-center text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
//               We help business to refine. Design and launch
//               <br />
//               their digital products.
//             </div>
//             <div className="flex flex-col justify-center items-center px-16 py-14 mt-32 w-full bg-white shadow-lg rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
//               <div className="max-w-full w-[1210px]">
//                 <div className="flex gap-5 max-md:flex-col">
//                   <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col leading-none text-gray-700 whitespace-nowrap max-md:mt-10">
//                       <div className="self-start text-4xl font-semibold">
//                         Email
//                       </div>
//                       <div className="mt-1.5 text-4xl">abc123@hmail.com</div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col leading-none text-gray-700 max-md:mt-10">
//                       <div className="text-4xl font-semibold max-md:mr-1.5">
//                         Phone number
//                       </div>
//                       <div className="mt-1.5 text-4xl">+91 00000 00000</div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col grow text-gray-700 max-md:mt-10">
//                       <div className="text-4xl font-semibold leading-none">
//                         Open Time
//                       </div>
//                       <div className="mt-1.5 text-4xl leading-10 max-md:mr-2.5">
//                         10:00am To
//                         <br />
//                         07:00pm
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex z-10 flex-col items-end self-end pb-36 mt-0 mr-48 max-w-full w-[1092px] max-md:pb-24 max-md:mr-2.5">
//         <div className="flex z-10 flex-wrap gap-5 justify-between self-stretch max-md:max-w-full">
//           <div className="flex flex-col justify-center px-20 py-12 rounded-full border border-solid border-zinc-500 max-md:px-5 max-md:max-w-full">
//             <div className="flex flex-col justify-center px-16 py-11 rounded-full border border-solid border-zinc-500 max-md:px-5 max-md:max-w-full">
//               <div className="flex flex-col justify-center px-16 py-12 rounded-full border border-solid border-zinc-500 max-md:px-5">
//                 <div className="flex shrink-0 rounded-full border border-solid border-zinc-500 h-[159px]" />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col my-auto text-4xl font-bold leading-none text-rose-500 whitespace-nowrap tracking-[6.8px]">
//             <div>.......</div>
//             <div className="z-10 -mt-10">.......</div>
//           </div>
//         </div>
//         <div className="-mt-60 text-4xl font-bold leading-none text-rose-500 tracking-[6.8px] max-md:mt-0">
//           .......
//         </div>
//         <div className="text-4xl font-bold leading-none text-rose-500 tracking-[6.8px]">
//           .......
//         </div>
//         <div className="text-4xl font-bold leading-none text-rose-500 tracking-[6.8px]">
//           .......
//         </div>
//         <div className="mb-0 text-4xl font-bold leading-none text-rose-500 tracking-[6.8px] max-md:mb-2.5">
//           .......
//         </div>
//       </div>
//       <div className="flex flex-col self-center mt-9 ml-3 w-full text-4xl text-gray-700 max-w-[1486px] max-md:max-w-full">
//         <div className="flex flex-wrap gap-10 text-center max-md:max-w-full">
//           <div className="flex flex-col flex-1 max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               First name
//             </div>
//             <div className="shrink-0 mt-2 h-px bg-gray-700 border border-gray-700 border-solid max-md:max-w-full" />
//           </div>
//           <div className="flex flex-col flex-1 max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               Last name
//             </div>
//             <div className="shrink-0 mt-2 h-px bg-gray-700 border border-gray-700 border-solid max-md:max-w-full" />
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-10 mt-28 text-center max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
//           <div className="flex flex-col flex-1 max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               Phone number
//             </div>
//             <div className="shrink-0 mt-2 max-w-full h-px bg-gray-700 border border-gray-700 border-solid w-[631px]" />
//           </div>
//           <div className="flex flex-col flex-1 whitespace-nowrap max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               Email
//             </div>
//             <div className="shrink-0 mt-2 h-px bg-gray-700 border border-gray-700 border-solid max-md:max-w-full" />
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-10 mt-28 text-center whitespace-nowrap max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-col flex-1 max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               Budget
//             </div>
//             <div className="shrink-0 mt-2 max-w-full h-px bg-gray-700 border border-gray-700 border-solid w-[631px]" />
//           </div>
//           <div className="flex flex-col flex-1 max-md:max-w-full">
//             <div className="self-start border border-gray-700 border-solid">
//               Attachment
//             </div>
//             <div className="shrink-0 mt-2 h-px bg-gray-700 border border-gray-700 border-solid max-md:max-w-full" />
//           </div>
//         </div>
//         <div className="self-start mt-28 text-center border border-gray-700 border-solid max-md:mt-10">
//           Your message
//         </div>
//         <div className="shrink-0 mt-3 w-full h-px bg-gray-700 border border-gray-700 border-solid max-md:mr-0.5" />
//         <div className="gap-2.5 self-end p-2.5 mt-28 text-3xl font-semibold text-white bg-rose-500 rounded-[50px] max-md:mt-10">
//           Send enquery
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center self-center px-20 py-32 mt-48 w-full bg-rose-500 bg-opacity-20 max-w-[1726px] rounded-[50px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-col items-center mb-0 max-w-full w-[1292px] max-md:mb-2.5">
//           <div className="text-4xl font-bold text-rose-500">
//             <span className="text-gray-700">Advanced</span> Web Pro
//           </div>
//           <div className="self-stretch mt-10 text-3xl text-center text-gray-700 text-opacity-70 max-md:max-w-full">
//             It should be designed to enhance usability and provide easy access
//             to important details. Here’s how to structure the content for your
//             IT website’s footer section:
//           </div>
//           <div className="flex flex-wrap gap-10 mt-11 max-w-full text-2xl font-semibold text-gray-700 w-[834px] max-md:mt-10">
//             <div>Home</div>
//             <div className="grow shrink w-[95px]">About Us</div>
//             <div className="grow shrink w-[89px]">Services</div>
//             <div className="grow shrink w-[117px]">Contact Us</div>
//             <div>Blogs</div>
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b3afc9448212e57d5c017086e41af2ebf39a5335f1d93bc1efcf1bde9bd4a5?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
//             className="object-contain mt-16 max-w-full aspect-[4.76] w-[286px] max-md:mt-10"
//           />
//         </div>
//       </div>
//       <div className="self-center mt-12 text-4xl text-gray-700 max-md:mt-10 max-md:max-w-full">
//         © 2024 Adavnced web pro. All rights reserved.
//       </div>
//     </div>
//   );
// }
// export default InquiryPage;

import React, { useState } from "react";
import InquiryHeader from "./inquiryPage Components/InquiryHeader";
import InquiryDetails from "./inquiryPage Components/InquiryDetails";
import InquiryForm from "./inquiryPage Components/InquiryForm";

function ContactForm() {


  return (
    <div className="">
        <InquiryHeader/>
      {/* Background Image Section */}
   <InquiryDetails/>
<InquiryForm/>
     
    </div>
  );
}

export default ContactForm;
