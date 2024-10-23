import React from "react";
import ServicesHeader from "./ServicesComponent/ServicesHeroSection";
import OurServiceSlides from "../../component/OurServiceSlides";
import { useSelector } from "react-redux";
import OurWorkSection from "../../component/OurWorkSection";
import CompleteProjectSection from "../aboutUs/aboutUsComponents/CompleteProjectSection";
import FooterSection from "../../component/FooterSection";
import RequestQuoteSection from './../aboutUs/aboutUsComponents/RequestQouteSection';

export default function OurServicesPage() {
  const itServicesDetailesData = useSelector(
    (state) => state.data.data.itServicesDetailsSlides
  );
  const workHeaderData = useSelector(
    (state) => state.data.data.ourServicesOurWorkHeader
  );
  

  const projectData = useSelector(
    (state) => state.data.data.ourServicesProject
  );
  const quoteData = useSelector(
    (state) => state.data.data.ourServicesQuote
  );

  console.log( "quoteData",quoteData);


  return (
    <div className="">
      <div>
        <ServicesHeader />
      </div>

      <OurServiceSlides slideData={itServicesDetailesData} />

      <OurWorkSection 
      headerData={workHeaderData}
      slideData={"ourServicesWork"}
      
      />
      <div className="container">

      <CompleteProjectSection details={projectData} />
      </div>
      <div className="container">
      <RequestQuoteSection details={quoteData}/>

      </div>
      <FooterSection/>
    </div>
  );
}
