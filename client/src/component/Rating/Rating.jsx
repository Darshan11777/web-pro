import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating ,size=24}) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className="cursor-pointer"
          size={size}
        
          color={rating >= star ? '#ffc107' : '#e4e5e9'}
        />
      ))}
    </div>
  );
};

export default StarRating;
