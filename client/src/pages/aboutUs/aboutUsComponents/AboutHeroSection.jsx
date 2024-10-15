import React from "react";
import heroImg1 from "../../../assets/images/Rectangle 124.png";
export default function AboutHeroSection() {
  return (
    <div className="container relative  font__control" >
    <div className=" mt-32 font-bold text-center text-rose-500 uppercase  text-[150px] max-md:mt-10  max-md:text-4xl max-md:leading-10">
      {" "}
      <div className="flex justify-between items-center ">
        Bring{" "}
        <img
          src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728970284/zqc4gutkjzhrqmjgpfrn.png"
          alt="Vision Icon"
          className="w-[300px] h-full max-md:w-[50px]" // Adjust image size based on screen size
        />
        <span className="text-[#453B57]">your</span>
      </div>
      <div className="flex justify-between items-center ">
        vision
        <span className="text-transparent  " style={{ WebkitTextStrokeColor: 'red', WebkitTextStrokeWidth: '1px', backgroundColor: 'transparent' }}>
  to
</span>



        Life
      </div>
      <div className="flex justify-around w-[80%] items-center ">
      <img
          src="https://res.cloudinary.com/dbuuc0cdy/image/upload/v1728970284/zqc4gutkjzhrqmjgpfrn.png"
          alt="Vision Icon"
          className="w-[300px] h-full max-md:w-[50px]" // Adjust image size based on screen size
        />
     with us
      </div>
      <div className="pt-0 max-w-[357px]  absolute font-[lato] text-left text-black bottom-[30px] -right-[120PX]">
      < p className="text-3xl leading-10 text-gray-700 uppercase tracking-[2.0px] font-[lato]">
      We are creative web design &
      branding agency based in London
      </p>
    </div>
    </div>
    </div>
  );
}
