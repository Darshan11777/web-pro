import React, { useEffect, useState } from 'react'
import subtractimg from '../assets/images/Subtract.png'
import image12 from '../assets/images/silder_img.png'
import arrowimg from '../assets/images/arrow_img.png'
import CardBrandSection from './CardBrandSection'
import SilderSection from './SilderSection'
import CardSlider from './cardSlider/CardSlider'
import centerImg from "../assets/images/Mask group (3).png"
import centerImg2 from "../assets/images/Ellipse 60.png"
import {motion } from 'framer-motion'
import axios from 'axios'



export default function OurResultSection() {

  const [initialFormData, setInitialFormData] = useState({})
  const baseUrl=import.meta.env.VITE_API_BASE_URL
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/result`);
      const data = res.data;
      console.log("Data", data);
      // setInitialFormData({
      //       header: data.header,
      //       highlight: data.highlighted_word,
      //       sectionName:data.section_name,
      //       description:data.description,
      //       rating: +data.rating,
      //       completedProjects: +data.completed_projects,
      //       yearsOfExperience: +data.years_of_experience,
        
      //       happyClients: +data.happy_clients,
      //       ImgUrl: data.bottom_img_url,
      //       // video_url: "",
      //       tags: data.tags,
      //     })
      setInitialFormData(data)
      
    } catch (error) {
      console.error("Error fetching header:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log( "initialFormData",initialFormData);
  const newHeader = initialFormData?.header?.split(new RegExp(`(${initialFormData?.highlighted_word})`, 'gi'));

  return (
    <div className='relative w-[102vw]'>
   
      {/* <motion.div
        className="absolute top-[35%] z-[2] left-0 h-[600px]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
      >
        <img src={centerImg2} alt="" className="h-full w-full object-cover" />
      </motion.div> */}

      <div className="our__result__section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="our_process__title">
              {/* <h5>Our Result</h5> */}
              <h5>{initialFormData?.section_name}</h5>
              {/* <h1>We develop website this <span>“process”</span></h1> */}
              {/* <h1>What people say about our <span> “Result”</span></h1> */}
              {/* <h1>{initialFormPData?.header}</h1> */}
             <h1> {newHeader && newHeader.map((part, index) =>
                        part.toLowerCase() === initialFormData?.highlighted_word?.toLowerCase() ? (
                            <span key={index} className="text-red-500 font-bold">
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}</h1>

            </div>
            <div className="row relative">
              <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
                <div className="mainn__result__section">
                  <div className="mock_title">
                    <div className="row">
                      <motion.div
                        className="lg:w-[30%] md:w-[50%] sm:w-full w-full"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                      >
                        <div className="web_developemnt">
                          <ul className='grid grid-cols-2 min-w-[500px] gap-2'>
                            {initialFormData?.tags?.split(',')?.map((tag)=>{
                              return <li><a>{tag}</a></li>
                            })}
                            
                          </ul>
                        </div>
                      </motion.div>

                      {/* <motion.div
                        className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                      >
                        <div className="web_developemnt">
                          <ul>
                            <li><a>Web Design</a></li>
                            <li><a>Digital Marketing</a></li>
                          </ul>
                        </div>
                      </motion.div> */}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="lg:w-[50%] md:w-[50%] sm:w-full w-full relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
              >
                <div
                  className="absolute inset-x-0 top-[30px] left-[-100px] h-[100px] w-[6px]"
                  style={{
                    background: 'linear-gradient(0deg, #453B57, #ED5959 47.16%, #453B57)',
                  }}
                ></div>
                <div className="right__result__section">
                  {/* <p>Provide a summary of your services, focusing on how you solve common IT problems.</p> */}
                  <p>{initialFormData?.description}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mainn__star">
            <div className="flex gap-[25px]">
              <motion.div
                className="lg:w-[65%] md:w-[74.7%] sm:w-full w-full"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="star__img">
                  <img src={initialFormData?.bottom_img_url} alt="Star Image" />
                  {/* {console.log( "form",form);} */}
                </div>
                <div className="star__details">
                  <h2>{initialFormData.rating}</h2>
                  <span><p>Star</p> Reviews</span>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-[28%] md:w-[24.9%] sm:w-full w-full"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="reviews__section">
                  <div className="sub__reviwes">
                    <h3>{initialFormData.years_of_experience}+</h3>
                    <span>Year Of Expensire</span>
                  </div>
                  <div className="sub__reviwes">
                    <h3>{initialFormData.completed_projects}+</h3>
                    <span>Completed Project</span>
                  </div>
                  <div className="sub__reviwes">
                    <h3>{initialFormData.happy_clients}+</h3>
                    <span>Happy Clients</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
