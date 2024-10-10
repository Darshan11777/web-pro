import React, { useEffect, useState } from "react";
import useAnimate from "../hooks/useAnimate";
import { motion } from "framer-motion";
import exclude from "../assets/images/Exclude.png";
import icon from "../assets/images/icon.png";
import Maskgroup from "../assets/images/Mask group (6).png";
import bottomRightImage from "../assets/images/Mask group (1).png"; // Import the new image
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stopLoading } from "../redux/slices/LoadingSlice";
export default function AboutUsSection() {
  const [initialFormData, setInitialFormData] = useState({});
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/about-us`);
      const data = res.data;

      setInitialFormData(data);
    } catch (error) {
      console.error("Error fetching header:", error);
    }finally{
      dispatch(stopLoading())
    } 
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const newHeader = initialFormData?.header?.split(
    new RegExp(`(${initialFormData?.highlighted_word})`, "gi")
  );

  return (
    <section className="about__section relative">
      {/* Container for content */}
      <div className="container">
        <div className="row">
          {/* Left side with image */}
          <motion.div
            className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="about__img">
              <img
                src={initialFormData?.img_url}
                className="Exclude"
                alt="Exclude"
              />
              <div className="img_text">
                <h2>{initialFormData?.years_of_experience}</h2>
                <span>year of experience</span>
              </div>
            </div>
          </motion.div>

          {/* Right side with content */}
          <motion.div
            className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="main__about">
              <motion.div
                className="title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              >
                <h1>{initialFormData?.section_name}</h1>
              </motion.div>

              <motion.div
                className="our_journey"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                <h2>
                  {" "}
                  {newHeader &&
                    newHeader.map((part, index) =>
                      part.toLowerCase() ===
                      initialFormData?.highlighted_word?.toLowerCase() ? (
                        <span key={index} className="text-red-500 font-bold">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                </h2>
                {/* <h2>Our Journey in IT <span>“Excellence”</span></h2> */}
              </motion.div>

              <motion.div
                className="our_journey_details"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                {/* <p>A brief overview of your company, highlighting your mission and the key.</p> */}
                <p>{initialFormData?.description}</p>
              </motion.div>

              {/* Service Details */}

              {initialFormData?.tags?.split(",")?.map((tag,i) => {
                if (!tag) {
                  return;
                }
                return (
                  <motion.div
                  key={i}
                    className="part__section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  >
                    <img src={icon} className="icon_part" alt="Icon" />
                    <div className="right__part">
                      <p>{tag?.replace(/\|/g, ",")} </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Button Section */}
            <div className="about__button mt-6">
              <div className="button__text">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                </ul>
              </div>
              <div className="iconn__section">
                <div className="icon p-6 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2xl"
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right image */}
      <motion.div
        className="absolute top-[-100px] right-[0px] h-[200px] w-[100px] animate-scaleUpDown"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={bottomRightImage}
          alt="Bottom Right"
          className="object-cover h-full w-full"
        />
      </motion.div>
    </section>
  );
}