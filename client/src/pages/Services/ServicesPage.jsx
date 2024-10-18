import  React from "react";
import ServicesHeader from "./ServicesComponent/ServicesHeroSection";
import OurServiceSlides from "../../component/OurServiceSlides";
import { useSelector } from "react-redux";
import OurWorkSection from "../../component/OurWorkSection";

export default function OurServicesPage() {

  const itServicesDetailesData=useSelector((state)=>state.data.data.itServicesDetailsSlides)
  return (
    <div className="">
      <div>

        <ServicesHeader />
      </div>

        <OurServiceSlides slideData={itServicesDetailesData}/>
        <OurWorkSection/>

     
     
    </div>
  );
}