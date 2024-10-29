import React from 'react'
import { useSelector } from 'react-redux'

export default function ProjectInfo() {

  const data=useSelector((state)=>state.data.data.OurWorkProjectInfo)
  return (
    <div className=" text-3xl my-[100px] text-center text-[#453B57AB]   max-md:mt-10 w-[70%] mx-auto ">
   {data.description}
  </div>
  )
}
