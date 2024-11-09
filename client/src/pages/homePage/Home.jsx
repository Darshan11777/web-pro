import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../../component/HeroSection";
import SilderSection from "../../component/OurServiceSlides.jsx";

import OurWorkSection from "../../component/OurWorkSection";
import OurResultSection from "../../component/OurResultSection";

import ContactUs from "../../component/HomePageComponent/ContactUsSection.jsx";
import FooterSection from "../../component/FooterSection";
import OurClients from "../../component/OurClientsSection.jsx";
import AccordionSection from "../../component/Accordion/AccordionSection.jsx";
import StickyComponent from "../../component/StickyComponent.jsx";
import News from "../../component/NewsSection.jsx";
import OurProcessSection from "./../../component/OurProcessSection";
import ContactUsSection from "../../component/HomePageComponent/ContactUsSection.jsx";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/slices/WebProDataSlice.jsx";
import OurServiceSection from "../../component/OurServiceSection.jsx";
import OurServiceSlides from "../../component/OurServiceSlides.jsx";
import AboutUsSection from "../../component/AboutUsSection.jsx";
import axios from "axios";
import GoogleTranslate from "../../component/GoogleTranslate/GoogleTranslate.jsx";
import ResponsiveText from "../../component/ResponsiveText.jsx";

export default function Home() {
  // const ourSectionRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ourSectionRef,
  //   offset: ["start start", "center end"],
  // });





  return (
    <>

<div style={{ width: "50%", height: "500px", border: "1px solid black" }}>
      <ResponsiveText minFontSize={14} maxFontSize={32} multiLine={true} adjustOnResize={true}>
        This is a responsive text that can wrap across multiple lines while resizing to fit within the container. The font size will adjust based on the container's size.
      </ResponsiveText>
    </div>
      <HeroSection />

      <StickyComponent
        ComponentOne={OurServiceSection}
        ComponentTwo={OurServiceSlides}
      />
      <AboutUsSection />
      <OurProcessSection />
     

      <OurWorkSection />
     
      <OurResultSection />
      <OurClients />
      <News />
      <ContactUsSection />
      <AccordionSection />
      {/* <BlogSection/> */}

      {/* <Form/> */}

      {/* <CardSlider/> */}
      {/* accorodian */}

     
      
    </>
  );
}
