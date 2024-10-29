// import React from 'react'

// export default function PortfolioDetails() {
//   return (
//     <div className="mt-36 w-full  max-md:mt-10 ">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow text-4xl font-semibold text-gray-700 max-md:mt-6 max-md:max-w-full">
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
//                 className="object-contain w-full aspect-[1.88] max-md:max-w-full"
//               />
//               <div className="px-14 pt-6 pb-11 mr-8 ml-8 rounded-none border border-black border-solid max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
//                 Crafting digital experiences{" "}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
//             <div className="mt-44 text-3xl text-gray-700 text-opacity-70 max-md:mt-10">
//               It should be designed to enhance usability and provide easy access
//               to important details. Here’s how to structure the content for your
//               IT website’s footer section:
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProjectHighlights({className='',section}) {
let data;
const section1=useSelector(state=>state.data.data.OurWorkProjectHighlight)
const section2=useSelector(state=>state.data.data.OurWorkProjectHighlightSection2)
if(section===1){
data=section1  
}else{
  data=section2  
  
}
console.log( "data",data);
  return (
    <section className="my-[100px] w-full max-md:mt-10 container">
      <div className={`${className} grid grid-cols-1 md:flex  gap-5`} >
        <div className="w-[80%] flex flex-col">
          <div className="  text-4xl font-semibold text-gray-700 max-md:mt-6">
            <div className='relative'>

            <img
              loading="lazy"
              alt="Portfolio"
              src={data.image}
              className="object-contain w-full  "
            />
            </div>
            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80ff12c-9993-417b-8209-39c261b8245c?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              alt="Portfolio"
              className="object-contain w-full  "
            /> */}
            <div className="w-[100%] pl-[30px] mx-auto pt-6 pb-11 rounded-b-[25px] border border-black border-solid max-md:px-5 max-md:mr-2.5">
             {data.projectTitle}
            </div>
          </div>
        </div>
        <div className="w-[20%]  flex flex-col max-md:ml-0 max-md:w-full">
          {/* <h2 className="mt-44 text-3xl text-gray-700 text-opacity-70 max-md:mt-10">
            Content Structure for Your IT Website’s Footer
          </h2> */}
          <p className="mt-auto text-3xl text-[#453B57AB] max-md:mt-4">
         {data.description}       </p>
        </div>
      </div>
    </section>
  );
}
