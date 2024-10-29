import React from 'react'
import ContactUsForm from './ContactUs Component/ContactUsForm'
import ContactUsDetails from './ContactUs Component/ContactUsDetails'
import ContactUsHeader from './ContactUs Component/ContactUsHeader'
import FooterSection from '../../component/FooterSection'

export default function ContactUsPage() {
  return (
    <div className=" bg-white">
      
      <ContactUsHeader/>
      {/* <div className="flex z-10 flex-col justify-center items-center px-16 py-36 mt-0 w-full bg-zinc-100 max-md:px-5 max-md:py-24 max-md:mt-0 max-md:max-w-full">
        <div className="mb-0 w-full max-w-[1478px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-gray-700 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-4xl">Contact Us</div>
                <div className="mt-6 text-6xl font-semibold leading-[85px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
                  Join us with
                  <br />
                  <span className="text-6xl text-rose-500 leading-[79px]">
                    “Advanced Web Pro”
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto text-4xl font-semibold leading-none text-gray-700 max-md:mt-10">
                <div>Email</div>
                <div className="self-stretch mt-1.5 text-4xl">
                  abc123@hmail.com
                </div>
                <div className="mt-14 max-md:mt-10">Phone number</div>
                <div className="mt-1.5 text-4xl">+91 00000 00000</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-20 text-4xl font-semibold leading-none text-gray-700 max-md:mt-10">
                <div className="self-start">Open Time</div>
                <div className="mt-1.5 text-4xl max-md:mr-2.5">
                  10:00am To 07:00pm
                </div>
                <div className="self-start mt-10 max-md:mt-10">Address</div>
                <div className="mt-1.5 text-4xl leading-10">
                  Petlad, 2nd floor,
                  <br />
                  Bank House,
                  <br />
                  College Chokdi Road,
                  <br />
                  Petlad
                  <br />
                  388450.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div> */}
     <ContactUsForm/>
      <ContactUsDetails/>
     
    </div>
  )
}

