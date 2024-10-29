import React from "react";
import { useSelector } from "react-redux";

export default function ContactUsDetails() {
  const data = useSelector((state) => state.data.data.contactUsPageForm);
  const header = useSelector(
    (state) => state.data.data.contactUsPageFormHeader
  );
 
  // Split the header based on the highlighted_word if data is available
  const newHeader = header?.header?.split(
    new RegExp(`(${header?.highlighted_word})`, "gi")
  );

  return (
    <div className="bg-zinc-100 mb-[100px] mt-[100px]">
      <div className="container px-8 py-16 mt-0 w-full max-md:px-5 max-md:py-12">
        <div className="mb-0 w-full max-w-[1478px] max-md:mb-2.5">
          <div className="grid grid-cols-12 gap-4 max-md:grid-cols-1">
            {/* Left Section */}
            <div className="flex flex-col col-span-6">
              <div className="text-gray-700 max-md:mt-10">
                <div className="self-start text-xl md:text-4xl lg:text-3xl">
                 {header.section_name}
                </div>
                <div className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[85px] max-md:text-3xl max-md:leading-[59px]">
                  {newHeader &&
                    newHeader?.map((part, index) =>
                      part.toLowerCase() ===
                      header.highlighted_word.toLowerCase() ? (
                        <span key={index} className="block text-4xl md:text-5xl lg:text-6xl text-rose-500 leading-[79px]">
                          {part}
                        </span>
                      ) : (
                        `${part}`
                      )
                    )}
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="col-span-3">
              <div className="text-[#453b57] text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Poppins'] leading-[40px]">
                <div className="mb-[10px]">Email</div>
                <div className="text-[#453b57] text-[18px] md:text-[24px] lg:text-[30px] font-normal font-['Poppins'] leading-[30px] flex flex-wrap">
                  {data.email}
                </div>
                <div className="mt-6 max-md:mt-4 mb-[10px]">Phone number</div>
                <div className="text-[#453b57] text-[18px] md:text-[24px] lg:text-[30px] font-normal font-['Poppins'] leading-[30px]">
                  {data.phone_number}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-3">
              <div className="text-4xl font-semibold leading-none text-gray-700 max-md:mt-10">
                <div className="text-[#453b57] text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Poppins'] leading-[40px] mb-[10px]">
                  Open Time
                </div>
                <div className="text-[#453b57] text-[18px] md:text-[24px] lg:text-[30px] font-normal font-['Poppins'] leading-[30px]">
                  {data.open_time}
                </div>
                <div className="text-[#453b57] text-[24px] md:text-[30px] lg:text-[36px] font-semibold font-['Poppins'] leading-[40px] mb-[10px] mt-6">
                  Address
                </div>
                <div className="text-[#453b57] text-[18px] md:text-[24px] lg:text-[30px] font-normal font-['Poppins'] leading-[30px]">
                  {data.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
