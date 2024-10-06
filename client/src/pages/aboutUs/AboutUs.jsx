import * as React from "react";
import HeroSection from "./aboutUsComponents/HeroSection";

 function AboutUs() {
  return (
    <div className="mt-[100px] container flex overflow-hidden flex-col items-center px-20 pt-4 pb-20 bg-white max-md:px-5">
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
      
      <HeroSection/>
      <div className="flex flex-wrap gap-5 justify-between mt-32 ml-8 w-full text-4xl leading-10 text-center text-black max-w-[1390px] tracking-[2.38px] max-md:mt-10 max-md:max-w-full">
        <div>
          <span className="text-6xl font-black text-gray-700">1K+</span>
          <br />
          <span className="text-4xl font-medium text-gray-700">
            Complete projects
          </span>
        </div>
        <div>
          <span className="text-6xl font-black text-gray-700">1K+</span>
          <br />
          <span className="text-4xl font-medium text-gray-700">
            Complete projects
          </span>
        </div>
      </div>
      <div className="mt-10 ml-8 text-4xl leading-10 text-center text-black tracking-[2.38px]">
        <span className="text-6xl font-black text-gray-700">1K+</span>
        <br />
        <span className="text-4xl font-medium text-gray-700">
          Complete projects
        </span>
      </div>
      <div className="mt-32 w-full max-w-[1464px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15704a0e033bd001a80e29312b5448ae86eff5ebe79c827290bbe0bd289b5fdb?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              className="object-contain grow w-full aspect-[1.01] rounded-[50px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1e8aa7ba329e89089edac2ffaf0fb8991443945ec540b628fd23506f2822b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              className="object-contain grow w-full aspect-[1.21] rounded-[50px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8a740c38e89d9ea45afd71dbc3f580cf64179afb90a6a719de75342098fe4?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              className="object-contain grow w-full aspect-[1.01] rounded-[50px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="self-start mt-36 ml-36 text-9xl font-semibold text-gray-700 leading-[169px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
        History of
        <br />
        <span className="text-rose-500">Advanced Web Pro</span>
      </div>
      <div className="mt-36 w-full max-w-[1459px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76dac50a93b513cd67b3f64c316e71396cd40b3a2f80f39a7d05b0afd030ec3b?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              className="object-contain grow w-full aspect-[1.49] rounded-[40px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 pt-20 pb-28 w-full text-white bg-gray-700 rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-4xl">Our History</div>
              <div className="mt-5 text-3xl leading-10 tracking-[2.24px] max-md:max-w-full">
                We are creative web design & branding agency based in London We
                are creative web design & branding agency based in London We are
                creative web design &{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-56 max-w-full rounded-[50px] w-[1459px] max-md:pl-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-start self-stretch my-auto mr-0 w-full text-3xl max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl text-white max-md:max-w-full max-md:text-4xl">
                <span className="font-semibold text-gray-700">
                  Empowering your
                </span>
                <br />
                <span className="font-semibold text-gray-700">Vision :</span>
                <span className="font-semibold text-rose-500">
                  Request Quot
                </span>
              </div>
              <div className="self-stretch mt-11 leading-10 text-gray-700 tracking-[2.24px] max-md:mt-10 max-md:max-w-full">
                <span className="font-medium">
                  We are creative web design & branding agency based in London
                  We are creative web design & branding agency based in London
                  We are creative web design &
                </span>{" "}
              </div>
              <div className="flex flex-wrap gap-10 mt-20 max-w-full font-semibold w-[590px] max-md:mt-10">
                <div className="flex-auto gap-2.5 self-stretch p-2.5 text-white bg-rose-500 rounded-[50px]">
                  Request Quot
                </div>
                <div className="flex-auto gap-2.5 self-stretch p-2.5 text-gray-700 border border-gray-700 border-solid rounded-[50px]">
                  Learn more
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a09670eb716c37829a5560ef9c95839aabde9fc7d25bd44ef3fbb720d784c9?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
              className="object-contain z-10 grow mt-0 w-full rounded-none aspect-[0.67] max-md:-mr-1.5 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-36 text-9xl font-semibold leading-none text-gray-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Meet To <span className="text-rose-500">Our Team</span>
      </div>
      <div className="mt-7 text-4xl leading-10 text-center text-gray-700 tracking-[2.38px] w-[961px] max-md:max-w-full">
        We are creative web design & branding agency based in London We are
        creative web design & branding agency based in London{" "}
      </div>
      <div className="flex flex-col justify-center items-center px-20 py-28 mt-36 w-full bg-indigo-200 bg-opacity-30 max-w-[1465px] rounded-[50px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[1084px] max-md:mb-2.5">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center mt-6 leading-none text-center text-gray-700 max-md:mt-10">
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
                <div className="flex flex-col grow items-center px-20 py-11 w-full leading-none text-center text-gray-700 bg-indigo-50 rounded-[50px] shadow-[2px_2px_54px_rgba(188,188,188,0.25)] max-md:px-5 max-md:mt-10">
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
                <div className="flex flex-col items-center mt-6 leading-none text-center text-gray-700 max-md:mt-10">
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
          <div className="flex flex-wrap gap-10 mt-32 leading-none text-center text-gray-700 max-md:mt-10 max-md:max-w-full">
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
            <span className="text-gray-700">Advanced</span> Web Pro
          </div>
          <div className="self-stretch mt-10 text-3xl text-center text-gray-700 text-opacity-70 max-md:max-w-full">
            It should be designed to enhance usability and provide easy access
            to important details. Here’s how to structure the content for your
            IT website’s footer section:
          </div>
          <div className="flex flex-wrap gap-10 mt-11 max-w-full text-2xl font-semibold text-gray-700 w-[834px] max-md:mt-10">
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
      <div className="mt-12 text-4xl text-gray-700 max-md:mt-10 max-md:max-w-full">
        © 2024 Adavnced web pro. All rights reserved.
      </div>
    </div>
  );
}
export default  AboutUs;