import { Text, Img, Heading } from "../../components";
import React from "react";

export default function AboutUsSection2() {
  return (
    <>
      {/* About Us Section */}
      <div className="mt-[142px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[148px] lg:gap-[185px] lg:px-5 md:gap-[185px] md:px-5 sm:gap-[70px]">
          <div className="relative h-[338px]">
            <Text
              as="p"
              className="absolute right-[5px] top-[14px] m-auto w-[380px] text-[34px] font-normal leading-[119%] tracking-[2.38px] text-[#453b57] lg:text-[28px] md:text-[28px] sm:text-[26px]"
            >
              We are a creative web design & branding agency based in London.
            </Text>
            <Heading
              size="headinglg"
              as="h2"
              className="absolute bottom-8 left-0 top-0 my-auto h-max w-[84%] font-['Poppins'] text-[128px] font-semibold leading-[169px] text-[#453b57] lg:text-[48px] md:text-[48px]"
            >
              <span className="text-[#453b57]">
                <>
                  History of
                  <br />
                </>
              </span>
              <span className="text-[#ed5959]">Advanced Web Pro</span>
            </Heading>
          </div>

          <div className="flex justify-between gap-5 md:flex-col">
            <Img
              src="images/img_rectangle_130.png"
              alt="History Image"
              className="h-[466px] w-[46%] rounded-[48px] object-contain md:w-full"
            />
            <div className="flex w-[46%] flex-col items-start gap-5 rounded-[48px] bg-[#453b57] px-11 py-[76px] lg:py-8 md:w-full md:p-5 sm:p-4">
              <Text
                size="textxl"
                as="p"
                className="ml-3.5 font-['Poppins'] text-[40px] font-normal text-[#ffffff] lg:text-[34px] md:ml-0 md:text-[34px] sm:text-[32px]"
              >
                Our History
              </Text>
              <Text
                size="texts"
                as="p"
                className="mb-18 ml-[18px] w-full text-[32px] font-normal leading-[128%] tracking-[2.24px] text-[#ffffff] lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
              >
                <span>
                  We are a creative web design & branding agency based in London. We are a creative web design & branding agency based in London. We are creative web design & branding.
                </span>
                <span className="tracking-[-11.84px]">&nbsp;</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
