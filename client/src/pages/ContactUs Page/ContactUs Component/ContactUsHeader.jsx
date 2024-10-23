import React from 'react';
import { useSelector } from 'react-redux';

export default function ContactUsHeader() {

    const data=useSelector(state=>state.data.data.contactUsPageHeader)
   
  return (
    <div className="w-full bg-gray-100 mb-[100px] mt-[200px]">
      <div className="container flex flex-col items-center justify-center px-4 mx-auto max-md:px-5">
        <div className="w-full">
          <div className="text-center">
            {/* Large Heading */}
            <div className="font-bold uppercase text-[60px] md:text-[120px] lg:text-[150px] leading-[75px] md:leading-[140px] lg:leading-[180px] text-gray-700 max-md:text-4xl max-md:leading-[60px]">
              
              {data.headerLine1}
              <br />
              <div className='inline-flex items-center gap-[20px] justify-center'>
                <img 
                  className="w-[300px] h-[180px] object-cover rounded-[50px] max-md:w-[50px] max-md:h-[30px]" 
                  src={data.image}
                  alt="Together Image" 
                />
                <span className="text-rose-500">{data.headerLine2}</span>
              </div>
            </div>

            {/* Subtext */}
            <div className=" w-[80%]  mx-auto text-4xl text-center text-gray-700 max-md:text-base mt-8">
              
              {data.shortDescription              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
