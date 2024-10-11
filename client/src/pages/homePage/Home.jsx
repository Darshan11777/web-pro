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

export default function Home() {
  const ourSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ourSectionRef,
    offset: ["start start", "center end"],
  });

  return (
    <>
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

      <FooterSection />
    </>
  );
}
