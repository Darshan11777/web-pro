import React, { useState } from "react";

import Accordion from "./Accordion";

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
  };
  const data = [
    {
      title: "How do you determine the cost of your services?",
      description:
        "Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.",
    },
    {
      title: "Do you offer any discounts or packages?",
      description:
        "Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.",
    },
    {
      title: "Where are you located, and what do you serve?",
      description:
        "Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.",
    },
    {
      title: "How do I get started with your services?",
      description:
        "Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.Yes, we offer discounts for long-term contracts and bundled service packages. Contact us for more details.",
    },
  ];
  return (
    <div className="faq__main__section container">
      {data.map((item, index) => (
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
