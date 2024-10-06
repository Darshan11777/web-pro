

import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
      folder: 'webpro',
      resource_type: 'auto', 
    //   allowedFormats: ['jpg', 'jpeg', 'png', 'gif','mp4','mov','avi'], // Control allowed formats
    },
  });
  
  // const storage = new CloudinaryStorage({
  //   cloudinary: cloudinary.v2,
  //   params: {
  //     folder: 'webpro',
  //     resource_type: 'image',  // Ensure it's 'image' for image files
  //     chunk_size: 6000000, // Set chunk size to 6MB
  //     transformation: [{ width: 152, height: 152, crop: 'limit', quality: 'auto' }],
  //   },
  // });
  const upload = multer({ storage });
 const uploadMiddleware = upload.fields([
    { name: 'image', maxCount: 1 }, 
  ]);
 export default uploadMiddleware;




//   const timestamp = Math.round(new Date().getTime() / 1000);
// const signature = cloudinary.v2.utils.api_sign_request(
//   { timestamp, folder: 'webpro' },
//   process.env.CLOUDINARY_API_SECRET
// );

// console.log(signature);