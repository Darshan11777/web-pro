import React, { useEffect, useState } from "react";

import Accordion from "./Accordion";
import axios from "axios";
import { motion } from "framer-motion";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
  };

  const [data, setData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const fetchHeaderData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/faqs`);

      const headerData = res.data[0];
      setHeaderData(headerData);
    } catch (error) {
      console.error("Error fetching header data:", error);
    }
  };

  const fetchSlide = async () => {
    try {
      const res = await axios.get(`${baseUrl}slides/faqs`);

      setData(res.data);
    } catch (error) {
      console.error("Error fetching slide:", error);
    }
  };

  useEffect(() => {
    fetchSlide();
    fetchHeaderData();
  }, []);
  const newHeader = headerData?.header?.split(
    new RegExp(`(${headerData?.highlighted_word})`, "gi")
  );

  return (
    <div className="faq__main__section container">
      <div className="our_process__title mb-[80px]">
        {/* <h5>Our Result</h5> */}
        <h5>{headerData?.section_name}</h5>
        {/* <h1>We develop website this <span>“process”</span></h1> */}
        {/* <h1>What people say about our <span> “Result”</span></h1> */}
        {/* <h1>{initialFormPData?.header}</h1> */}
        <h1>
          {" "}
          {newHeader &&
            newHeader.map((part, index) =>
              part.toLowerCase() ===
              headerData?.highlighted_word?.toLowerCase() ? (
                <span key={index} className="text-red-500 font-bold">
                  {part}
                </span>
              ) : (
                part
              )
            )}
        </h1>
      </div>
      {data &&
        data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            <p className="text-[20px] leading-[32px]">{item.description}</p>
          </Accordion>
        ))}
    </div>
  );
}
