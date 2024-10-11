import React, { useEffect, useState } from "react";

import Accordion from "./Accordion";
import axios from "axios";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
  };

  const data = useSelector((state) => state.data.data.faqs);
  const headerData = useSelector((state) => state.data.data.faqsHeader);
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
