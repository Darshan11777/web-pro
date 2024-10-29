import * as React from "react";
import PortfolioHeader from "./Componants/PortfolioHeader";
import ProjectHighlights from "./Componants/ProjectHighlights";
import PortfolioProject from "./Componants/PortfolioProject";
import ProjectInfo from "./Componants/ProjectInfo";
import ProjectSlider from "./Componants/ProjectSlider";
import { useSelector } from "react-redux";
import PortfolioSnapshot from "./Componants/PortfolioSnapshot";

export default function OurWorkPage() {


  
 
  return (
    <div className="flex overflow-hidden flex-col items-center pt-4 pb-10 bg-white">
    
      {/* <div className="mt-32 w-full max-w-[1516px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="font-bold text-gray-700 uppercase border border-rose-500 border-solid leading-[242px] text-[180px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
              Our <span className="text-rose-500">portfolio</span>
              <br />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-3.5 text-4xl text-gray-700 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:mr-1.5 max-md:max-w-full">
                Crafting digital experiences where beauty meets ROI, turning
                heads and unlocking revenue potential with every click.
                <br />
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a899c06525f788cb22b2953557b861a71b340d41e2359d655e172f2e081b73f?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                className="object-contain mt-11 w-full aspect-[1.25] rounded-[40px] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div> */}
      <PortfolioHeader />
      <ProjectHighlights section={1}/>
      <PortfolioProject/>
      <div className="container">

     <ProjectInfo/>
      </div>
      {/* <div className=" text-3xl text-center text-[#453B57AB]   max-md:mt-10 ">
        It should be designed to enhance usability and provide easy access to
        important details. Here’s how to structure the content for your IT
        website’s footer section:
      </div> */}
      {/* <div className="flex flex-col justify-center px-20 py-12 mt-14 max-w-full rounded-full border border-solid border-zinc-500 w-[660px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col justify-center px-16 py-11 rounded-full border border-solid border-zinc-500 max-md:px-5 max-md:max-w-full">
          <div className="flex shrink-0 rounded-full border border-solid border-zinc-500 h-[254px]" />
        </div>
      </div> */}

     {/* <ProjectSlider/> */}
     <div className="container my-[100px]"> 

     <PortfolioSnapshot/>
     </div>
     {/* <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Responsive Multi-Slide Carousel</h1>
      <MultiSlideCarousel  />
      </div> */}
      <div className="container">

      <ProjectHighlights className="flex-row-reverse" section={2}/>
      </div>
      
     
    </div>
  );
}