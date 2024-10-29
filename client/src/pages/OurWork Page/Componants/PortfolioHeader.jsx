import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function PortfolioHeader() {

  const data=useSelector((state)=>state.data.data.OurWorkPortfolioHeader)
      const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className=" w-full container my-[100px]">
      <div className=" flex gap-[10%] bg-bl">
        <div className="w-[60%]">
          <h1 className="font-bold text-gray-700 uppercase text-[180px] z-0  lg:text-[150px] lg:leading-[200px] md:text-6xl text-4xl ">
            <div className="flex justify-start gap-[40px] items-center">
              {" "}
              <span>{data.header_line_1}</span>
              <span>
                {" "}
                <section className="flex flex-col rounded-none max-w-[497px]">
              
    <article className="flex relative flex-col justify-center items-center w-full">
            <video
              ref={videoRef}
              loading="lazy"
              src={data.project_video}
              autoPlay
              loop
              muted
              className="rounded-[40px] object-cover w-[300px] h-[100%]"
              aria-hidden="true"
            />
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayback}
              className={`${isPlaying && 'transition-opacity duration-1000 opacity-0'} absolute z-10 flex items-center justify-center  w-[70px] h-[70px] bg-white rounded-full shadow-md`}
              aria-label={isPlaying ? "Pause video " : "Play video"}
            >
              {isPlaying ? (
                <img
                src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/pause.svg "
                alt="Pause"
                  className="w-full h-full  " // Adjust the size as needed
                />
            ) : (
                <img
                
                src="https://cdn.jsdelivr.net/npm/heroicons@1.0.6/outline/play.svg"// Replace with your pause image URL
                  alt="Play"
                  className="h-full w-full" // Adjust the size as needed
                />
              )}
            </button>
          </article>

                </section>
              </span>
            </div>
            <span className="text-rose-500">{data.header_line_2}</span>
          </h1>
        </div>
        <article className="w-[30%] ">
          <p className="mt-3.5 text-4xl text-gray-700 lg:text-2xl md:text-2xl max-md:mt-10">
            {data.short_description}
          </p>
          <img
            loading="lazy"
            src={data.project_img}
            className="object-contain mt-11 w-full aspect-[1.25] rounded-[40px] max-md:mt-10"
          />
        </article>
      </div>
    </section>
  );
}

// import React from 'react'

// export default function PortfolioHeader() {
//   return (
//      <div className="mt-32 w-full max-w-[1516px] max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col">
//           <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
//             <div className="font-bold text-gray-700 uppercase border border-rose-500 border-solid leading-[242px] text-[180px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
//               Our <span className="text-rose-500">portfolio</span>
//               <br />
//             </div>
//           </div>
//           <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
//             <div className="flex flex-col grow mt-3.5 text-4xl text-gray-700 max-md:mt-10 max-md:max-w-full">
//               <div className="max-md:mr-1.5 max-md:max-w-full">
//                 Crafting digital experiences where beauty meets ROI, turning
//                 heads and unlocking revenue potential with every click.
//                 <br />
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
//                 className="object-contain mt-11 w-full aspect-[1.25] rounded-[40px] max-md:mt-10 max-md:max-w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }
