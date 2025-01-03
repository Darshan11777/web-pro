import React, { useEffect, useState } from "react";
import silderimg from "../assets/images/silder_img.png";
import SilderSection from "./OurServiceSlides";

import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { stopLoading } from "../redux/slices/LoadingSlice";
import OurWorkSlides from "./cardSlider/CardSlider";

export default function OurWorkSection({ headerData,slideData }) {
  // const [data, setData] = useState(null);
  // const baseUrl = import.meta.env.VITE_API_BASE_URL;
  // const dispatch = useDispatch();
  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(`${baseUrl}section/header/our-work`);
  //     const headerData = res.data[0];
  //     setData(headerData);
  //   } catch (error) {
  //     console.error("Error fetching header data:", error);
  //   } finally {
  //     dispatch(stopLoading());
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  console.log( "slideData",slideData);
const homePageData=useSelector(state=>state.data.data.ourWorkHeader)
  const data= headerData ? headerData : homePageData
 
  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highlighted_word})`, "gi")
  );

  return (
    <section className="our_work_section relative overflow-x-hidden">
      <div className="container right_side">
        <div className="row">
          <motion.div
            className="title"
            initial={{ opacity: 0, y: 0, scale: 0.8 }} // Initial state
            whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
            transition={{ duration: 1, ease: "easeOut" }} // Transition options
          >
            <h1>{data?.section_name}</h1>
          </motion.div>
          <div className="heading__title">
            <motion.h1
              initial={{ opacity: 0, y: 0, scale: 0.8 }} // Initial state
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
              transition={{ duration: 1, ease: "easeOut" }} // Transition options
            >
              {newHeader &&
                newHeader.map((part, index) =>
                  part.toLowerCase() === data.highlighted_word.toLowerCase() ? (
                    <span key={index} className="text-red-500 font-bold">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
            </motion.h1>
            <OurWorkSlides data={slideData} />
          </div>
        </div>
      </div>
     {slideData!=="ourServicesWork"&& <div
        className="absolute inset-x-0 bottom-0 h-[6px] w-[70%] mx-auto"
        style={{
          background: "linear-gradient(90deg, #453B57, #ED5959 47.16%, #453B57",
        }}
      >


      </div>}
    </section>
  );
}
