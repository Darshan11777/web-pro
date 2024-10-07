import React, { useEffect, useState } from "react";

import Accordion from "./Accordion";
import axios from "axios";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion
const baseUrl=import.meta.env.VITE_API_BASE_URL
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
  };

  const [data, setData] = useState(null)

  const fetchSlide = async () => {
    try {
      const res = await axios.get(`${baseUrl}slides/faqs`);
     
      
      
   
      
      setData(res.data);
    
    } catch (error) {
      console.error('Error fetching slide:', error);
    }
  };
 
  useEffect(() => {
    fetchSlide();
   
  }, [])
  console.log( "data",data);
  return (
    <div className="faq__main__section container">
      {data && data.map((item, index) => (
        <Accordion key={index} title={item.title}
        
        isOpen={openIndex === index}
        onToggle={() => handleToggle(index)}
        >
          <p className="text-[20px] leading-[32px]">{item.description}</p>
        </Accordion>
      ))}
    </div>
  );
}
