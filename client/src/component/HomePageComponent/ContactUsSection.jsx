import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission
  };

  


  const headerData = useSelector(state => state.data.data.contactUsHeader)
  const contactDetailes=useSelector(state => state.data.data.contactUsForm)

  const newHeader = headerData?.header?.split(
    new RegExp(`(${headerData?.highlighted_word})`, "gi")
  );

  return (
    <div className="contact_us_section overflow-x-hidden">
      <div className="container">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 15 }} // Initial state with 3D rotation
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} // Animation when in view
          transition={{ duration: 1.2, ease: "easeOut" }} // Transition options
          style={{ perspective: "1000px" }} // Apply perspective to the parent container
        >
          <div className="title">
            <h1>{headerData?.section_name}</h1>
          </div>
          <div className="heading__title">
            <h1 className="">
              {newHeader &&
                newHeader.map((part, index) =>
                  part.toLowerCase() ===
                  headerData.highlighted_word.toLowerCase() ? (
                    <span key={index} className="block">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
            </h1>
          </div>
        </motion.div>
        <div className="form__section">
          <div className="row">
            <motion.div
              className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
              initial={{ opacity: 0, x: -150, scale: 0.9, rotateY: -15 }} // Initial state with 3D rotation
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }} // Animation when in view
              transition={{ duration: 1.2, ease: "easeOut" }} // Transition options
            >
              <div className="form__details">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="firstName"
                    name="username"
                    placeholder="Username"
                    className="white-input"
                  />
                  <br />
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lname"
                    name="email"
                    placeholder="Email"
                    className="white-input"
                  />
                  <br />
                  <input
                    onChange={handleChange}
                    type="number"
                    id="lname"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="white-input"
                  />
                  <br />
                  <textarea
                    onChange={handleChange}
                    id="lname"
                    name="message"
                    placeholder="How can we help you?"
                    className="white-input bg_input"
                  />
                  <br />
                  <button className="message__button">Send message</button>
                </form>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-[50%] md:w-[50%] sm:w-full w-full"
              initial={{ opacity: 0, x: 150, scale: 0.9, rotateY: 15 }} // Initial state with 3D rotation
              whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }} // Animation when in view
              transition={{ duration: 1.2, ease: "easeOut" }} // Transition options
            >
              <div className="reviews__section">
                <div className="sub__reviwes">
                  <h3>Email</h3>
                  <span>
                    {/* abc123@gmail.com */}

                    {contactDetailes?.email}
                  </span>
                </div>
                <div className="sub__reviwes">
                  <h3>Phone number</h3>
                  {/* <span>+91 00000 00000</span> */}
                  <span>{contactDetailes?.phone_number}</span>
                </div>
                <div className="sub__reviwes">
                  <h3>Address</h3>
                  {/* <span>Petlad, 2nd floor, Bank House, College Chokdi Road, Petlad 388450.</span> */}
                  <span>{contactDetailes?.address}</span>
                </div>
                <div className="sub__reviwes">
                  <h3>Open Time</h3>
                  {/* <span>10:00am To 07:00pm</span> */}
                  <span>{contactDetailes?.open_time}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
