import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function CardSection({ open, title, description, image,tags,number }) {
  const [showImage, setShowImage] = useState(open || false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
    setIsRotated(!isRotated);
  };

  
  return (
    <div className="silderr__title card">
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="sub__title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <span>{number}.</span>
          <h3>{title}</h3> {/* Use the title prop */}
          <div className="button__text">
            <ul>
              <li><a href="#">Learn more</a></li>
            </ul>
          </div>
          <div className="iconn__section">
            <button 
              className={`icon animation ${isRotated ? 'rotate-icon' : ''}`} 
              onClick={toggleImage}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </motion.div>
        
        <motion.h3 
          className="heading_section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          {description} {/* Use the description prop */}
        </motion.h3>
        
        <motion.div 
          className="three__button__Section mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <ul>
            {
              tags.split(',').map((item,index)=>{
                
              return  <li key={index}><a >{item}</a></li>
              })
            }
            
          </ul>
        </motion.div>
        
        {/* Conditionally render the image with transition */}
        <motion.div
          className={`bottom__img ${showImage ? 'show' : ''}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showImage ? 1 : 0, scale: showImage ? 1 : 0.9 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={image} alt="Bottom Image" className="img-fluid" /> {/* Use the image prop */}
        </motion.div>
      </motion.div>
    </div>
  );
}
