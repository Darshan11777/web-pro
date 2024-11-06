import React from 'react'
import { useSelector } from 'react-redux'

export default function InquiryHeader() {

  const data=useSelector(state=>state.data.data.inquiryPageHeader)
  
  const splitWords = data.header.split(" ");
const newHeader = splitWords.map((word, index) => {
  // Check if the word matches the blue highlight
  if (word.toLowerCase() === data.redHighLight?.toLowerCase()) {
    return (
      <span key={index} className="text-rose-500">
        {word}{" "}
      </span>
    );
  }
  
  // Check if the word matches the transparent highlight
  if (word.toLowerCase() === data.transparentHighLight?.toLowerCase()) {
    return (
      <span
        key={index}
        className="text-transparent"
        style={{
          WebkitTextStrokeColor: "red",
          WebkitTextStrokeWidth: "1px",
          backgroundColor: "transparent",
        }}
      >
        {word + " "}{" "}
      </span>
    );
  }

  // Return the word as it is if it doesn't match either highlight
  return <span key={index}>{word}{" "}</span>;
});

console.log( "newHeader",newHeader);
  return (
    <div className="w-full  relative  ">
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="relative ">
           
            

<div className="flex  max-md:flex-col mt-[100px] mb-[100px] ">
           <div className=" w-full max-md:ml-0 max-md:w-full container">

       
             <div className=" font-bold text-center flex items-center text-[110px]   max-md:mt-10 max-md:text-4xl max-md:leading-10  text-[#453B57] uppercase ">
            <div>
             {newHeader.map(item=>item)}

            </div>
            
      <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
             <img
               loading="lazy"
               src="https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/98fafc41e3dd9654a8922e18363b3bb503effb8557dfd4b1e16da028d9e070b6?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
               className="object-contain grow shrink-0 max-w-full aspect-square w-[160px] max-md:mt-8"
               />
           </div>
             </div>
           </div>
          
        </div>
            
          
               <div className="self-center text-5xl font-bold h-[400px] text-center text-white leading-[65px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px] relative w-full">
  {/* Background Image */}
  <img
    loading="lazy"
    // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27b6891acc8d13307a868ed75ace7c66f7ac99eeb1f980c9b95aa754e33dee86?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w"
    src={data.image}
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 px-6 py-8 "></div>
  {/* Description Content */}
  <div className='container h-full flex justify-center items-center'>

  <div className="relative z-10 self-center  py-8 ">
{data.shortDescription}

  </div>
  </div>
</div>
          </div>
        </div>
  )
}
