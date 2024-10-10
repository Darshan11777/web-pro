import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { stopLoading } from '../redux/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function OurSection() {
  const [data, setData] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/our-service`);
      const slide = res.data[0];
      setData(slide);
    } catch (error) {
      console.error('Error fetching slide:', error);
    }finally{
      dispatch(stopLoading())
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Split the header based on the highlighted_word if data is available
  const newHeader = data?.header?.split(new RegExp(`(${data?.highlighted_word})`, 'gi'));

  return (
    <motion.section
      className="our_services"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="services__before">
        <div className="container">
          <div className="title">
            <h1>{data?.section_name}</h1>
          </div>
          <div className="row">
            <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full ourservice__relative">
              <div className="heading__title">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                >
                  {/* Render the header with highlighted word */}
                  {newHeader &&
                    newHeader?.map((part, index) =>
                      part.toLowerCase() === data.highlighted_word.toLowerCase() ? (
                        <span key={part}>
                          {part}
                        </span>
                        
                      ) : (
                        `${part}`
                      )
                    )}
                </motion.h1>
              </div>
              <motion.div
                className="ourservice__border"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              />
            </div>

            <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full">
              <motion.div
                className="sub__heading__title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              >
                <span>{data?.description}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
