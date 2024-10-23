import React from 'react'
import {useSelector} from 'react-redux'
export default function InquiryDetails() {

  const data=useSelector(state=>state.data.data.inquiryPageFormDetails)
  console.log(data)
  return (
    <div className="relative">
       
     


    {/* Contact Info */}
    <div className="relative z-20 -mt-16 flex justify-around bg-white shadow-lg rounded-lg py-8 px-6 w-3/4 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="font-semibold text-lg">Email</h2>
        <p className="mt-2">{data.email}</p>
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-lg">Phone number</h2>
        <p className="mt-2">{data.phone_number}</p>
      </div>
      <div className="text-center">
        <h2 className="font-semibold text-lg">Open Time</h2>
        <p className="mt-2">{data.}</p>
      </div>
    </div>
  </div>
  )
}
