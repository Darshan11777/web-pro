import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function FooterSection() {
  const data = useSelector((state) => state.data.data.footerSection);

  const newHeader = data?.header?.split(
    new RegExp(`(${data?.highlighted_word})`, "gi")
  );
  return (
    <div>
      <div className="footer__section">
        <div className="container">
          <motion.div
            className="row justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 10 }} // Initial state with 3D rotation
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} // Animation when in view
            transition={{ duration: 1.2, ease: "easeOut" }} // Transition options
            style={{ perspective: "1000px" }} // Apply perspective to the parent container
          >
            <div className="footer__title text-center">
              <h3>
                {" "}
                {newHeader &&
                  newHeader.map((part, index) =>
                    part.toLowerCase() ===
                    data?.highlighted_word?.toLowerCase() ? (
                      <span key={index}>{part}</span>
                    ) : (
                      part
                    )
                  )}
              </h3>
            </div>
            <div className="footer__webpro">
              <div className="footer_heading">
                <p>{data.description}</p>
              </div>
              <div className="footer__link">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex space-x-10 mt-10">
                <a
                  href={data.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fff]"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="xl"
                    className="p-3 h-6 w-6 rounded-full bg-[#453B57]"
                  />
                </a>

                <a
                  href={data.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fff]"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="p-3 rounded-full bg-[#453B57]"
                  />
                </a>

                <a
                  href={data.twitter_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fff]"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className="p-3 rounded-full bg-[#453B57]"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 Advanced Web Pro. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
