import * as React from "react";
import AboutHeroSection from "./aboutUsComponents/AboutHeroSection";
import CompleteProjectSection from "./aboutUsComponents/CompleteProjectSection";
import ProjectImageSection from "./aboutUsComponents/ProjectImageSection";
import HistorySection from "./aboutUsComponents/HistorySection";
import OurHistorySection from "./aboutUsComponents/OurHistorySection";
import RequestQouteSection from "./aboutUsComponents/RequestQouteSection";
import TeamSection from "./aboutUsComponents/TeamSection";
import TeamSectionList from "./aboutUsComponents/TeamSectionList";
import FooterSection from "../../component/FooterSection";

 function AboutUs() {
  return (
    <div className=" container flex  flex-col items-center px-20 pt-4 pb-20 bg-white max-md:px-5">
      {/* <div className="flex flex-wrap gap-5 justify-between items-start self-stretch max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1b537793d86c02f59b20bce3d12a6a05a5141eb5a06ab0989ed3356eb962320?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
          className="object-contain shrink-0 max-w-full aspect-[3.12] w-[221px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d02fc911cdc3c8df6a8a3592191a1656d5bf277c11142ff5ddab5278547c4202?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
          className="object-contain shrink-0 mt-4 aspect-square w-[60px]"
        />
      </div> */}
      
      <AboutHeroSection/>
     <CompleteProjectSection/>
      <ProjectImageSection/>
    <HistorySection/>
    <OurHistorySection/>
      <RequestQouteSection/>
    <TeamSection/>
      <TeamSectionList/>
      {/* <div className="flex  font-[lato] flex-col justify-center items-center px-20 py-28 mt-36 w-full bg-indigo-200 bg-opacity-30 max-w-[1465px] rounded-[50px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[1084px] max-md:mb-2.5">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center mt-6 leading-none text-center text-[#453B57] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9161df426294a662a34863ca7d40f2cd9a31df3800a00b09897ae24d2ae3dc97?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                    className="object-contain max-w-full rounded-full aspect-square w-[139px]"
                  />
                  <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                    lay legroom
                  </div>
                  <div className="mt-2.5 text-xl tracking-widest">
                    Founder & CEO{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-20 py-11 w-full leading-none text-center text-[#453B57] bg-indigo-50 rounded-[50px] shadow-[2px_2px_54px_rgba(188,188,188,0.25)] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2748cd310b2679d1f0d945f68be6eb03696e2b5ec6abb643979ef4a0dc508a8?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                    className="object-contain max-w-full rounded-full aspect-square w-[139px]"
                  />
                  <div className="mt-7 text-3xl font-semibold tracking-[2.24px]">
                    lay legroom
                  </div>
                  <div className="mt-2.5 text-xl tracking-widest">
                    Founder & CEO{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center mt-6 leading-none text-center text-[#453B57] max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88f285f8f726eacb35cdf20a29e3470c13569a1e5116a4bab3fab5dfee254ad0?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                    className="object-contain max-w-full rounded-full aspect-square w-[139px]"
                  />
                  <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                    lay legroom
                  </div>
                  <div className="mt-2.5 text-xl tracking-widest">
                    Founder & CEO{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-32 leading-none text-center text-[#453B57] max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78844dd4001910f28bc3044fd3845e85dbcc0b977703d30fbe21a6b1ea8c41b7?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                className="object-contain max-w-full rounded-full aspect-square w-[139px]"
              />
              <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                lay legroom
              </div>
              <div className="mt-2.5 text-xl tracking-widest">
                Founder & CEO{" "}
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b4d16fe7e1236c85a20e7532d647a88e182cd22cd25b63145d5d680d7283670?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                className="object-contain max-w-full rounded-full aspect-square w-[139px]"
              />
              <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                lay legroom
              </div>
              <div className="mt-2.5 text-xl tracking-widest">
                Founder & CEO{" "}
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d85e6dfbef295f1c90e83741769e63bd38c7e327fd292ddf0dc682d20ede849?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                className="object-contain max-w-full rounded-full aspect-square w-[139px]"
              />
              <div className="self-stretch mt-7 text-3xl font-semibold tracking-[2.24px]">
                lay legroom
              </div>
              <div className="mt-2.5 text-xl tracking-widest">
                Founder & CEO{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-20 py-32 mt-56 w-full bg-rose-500 bg-opacity-20 max-w-[1726px] rounded-[50px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 max-w-full w-[1292px] max-md:mb-2.5">
          <div className="text-4xl font-bold text-rose-500">
            <span className="text-[#453B57]">Advanced</span> Web Pro
          </div>
          <div className="self-stretch mt-10 text-3xl text-center text-[#453B57] text-opacity-70 max-md:max-w-full">
            It should be designed to enhance usability and provide easy access
            to important details. Here’s how to structure the content for your
            IT website’s footer section:
          </div>
          <div className="flex flex-wrap gap-10 mt-11 max-w-full text-2xl font-semibold text-[#453B57] w-[834px] max-md:mt-10">
            <div>Home</div>
            <div className="grow shrink w-[95px]">About Us</div>
            <div className="grow shrink w-[89px]">Services</div>
            <div className="grow shrink w-[117px]">Contact Us</div>
            <div>Blogs</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddea5f99718113ceabc2d1a3b490c64b9e65694e8e22c2e98426fee0bd212c34?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
            className="object-contain mt-16 max-w-full aspect-[4.76] w-[286px] max-md:mt-10"
          />
        </div>
      </div>
      <div className="mt-12 text-4xl text-[#453B57] max-md:mt-10 max-md:max-w-full">
        © 2024 Adavnced web pro. All rights reserved.
      </div> */}
      <FooterSection/>
    </div>
  );
}
export default  AboutUs;