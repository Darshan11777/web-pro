import * as React from "react";
import AboutHeroSection from "./aboutUsComponents/AboutHeroSection";
import CompleteProjectSection from "./aboutUsComponents/CompleteProjectSection";
import ProjectImageSection from "./aboutUsComponents/ProjectImageSection";
import HistorySection from "./aboutUsComponents/HistorySection";
import OurHistorySection from "./aboutUsComponents/OurHistorySection";
import RequestQouteSection from "./aboutUsComponents/RequestQouteSection";
import TeamSection from "./aboutUsComponents/TeamSection";
import TeamSectionList from "./aboutUsComponents/TeamSectionList";
import FooterSection from "../../component/FooterSection";

function AboutUs() {
  return (
    <div className=" container flex  flex-col items-center px-20 pb-20 bg-white max-md:px-5">
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

      <AboutHeroSection />
      <CompleteProjectSection />
      <ProjectImageSection />
      <HistorySection />
      <OurHistorySection />
      <RequestQouteSection />
      <TeamSection />
      <TeamSectionList />
     
     
    </div>
  );
}
export default AboutUs;
