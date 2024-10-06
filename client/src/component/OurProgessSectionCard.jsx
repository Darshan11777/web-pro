import React from "react";
import { motion } from "framer-motion";
export default function OurProgessSectionCard({
  number,
  title,
  description,
  tags,
}) {
  return (
    <motion.div className="row">
      {/* Number Section */}
      <motion.div
        className="lg:w-[16.66%] md:w-[16.66%] sm:w-full w-full"
        initial={{ opacity: 0, y: 150, scale: 1 }} // Initial state
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="number__Section">
          <span>.{number}</span>
        </div>
      </motion.div>

      {/* Research Section */}
      <motion.div
        className="lg:w-[83.3%] md:w-[83.3%] sm:w-full w-full"
        initial={{ opacity: 0, y: 100, scale: 1 }} // Initial state
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animation when in view
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // Add a delay for staggered effect
      >
        <div className="reserach__section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="Research_details mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <p>{description}</p>
          </motion.div>

          <motion.div
            className="mainn__reserach"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <div className="research__sec">
              <ul>
                {tags.split(",").map((item, index) => {
                  return (
                    <motion.li
                    key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: (index / 10) * 2 + 1,
                      }}
                    >
                      <a>{item}</a>
                    </motion.li>
                  );
                })}
               
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
