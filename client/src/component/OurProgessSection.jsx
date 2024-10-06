import React, { useRef ,useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import centerImg from "../assets/images/Ellipse 57 (1).png"
import useAnimate from '../hooks/useAnimate';
import OurProgessSectionCard from './OurProgessSectionCard';
import axios from 'axios';

export default function OurProgessSection() {

  const [slides, setSlides] = React.useState(null);
  

  const baseUrl=import.meta.env.VITE_API_BASE_URL
  const targetRef = useRef()
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'center start'],
  });
  const getSlides=async()=>{
    const res = await axios.get(baseUrl + "slides/our-process");
    setSlides(res.data);
  }
  useEffect(() => {
    getSlides()
  
   
  }, [])
  
  let opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  let scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const slideInUp = useAnimate({ animationType: 'slideInUp' });
  const setRefs = (element) => {
    targetRef.current = element;
    slideInUp.ref(element);
    // ref2.current = element;
  };
  return (
    <motion.section className="Our__Process__section relative" 
    ref={targetRef}
    >
    {/* Background image with animation */}
    <motion.div
      className="absolute top-[0%] left-[10px] h-[500px] w-[130px] animate-scaleUpDown"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
     
    >
      <img src={centerImg} alt="" className="h-full w-full object-cover" />
    </motion.div>

    {/* Container with header and details */}
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Header */}
      <motion.div
        className="our_process__title sticky our-progress-header text-center"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{opacity,scale}}
      >
        <h5>Our Process</h5>
        <h1>We develop website this <span>“process”</span></h1>
      </motion.div>

      {/* Details */}
      <motion.div
        className="process__Section our-progress-detailes"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', staggerChildren: 0.2 }}
      >
        {slides?.map((item,index)=>{
          
        return <OurProgessSectionCard key={index} number={(index+1).toString().padStart(2, '0')}  title={item.title} description={item.description} tags={item.tags} />
        })}
        
      </motion.div>
    </motion.div>
  </motion.section>
  )
}