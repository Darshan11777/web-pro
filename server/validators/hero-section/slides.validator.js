// const { z } = require('zod');
import {z} from 'zod'

export const our_servicesSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    tags: z.string().regex(/.+/, "At least one tag is required"),
    imgUrl: z.string().url({message: "image is required"}),  // or use .nullable() if you want to allow null values
  });
export const our_processSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    tags: z.string().regex(/.+/, "At least one tag is required"),
    // imgUrl: z.string().url(), // or use .nullable() if you want to allow null values
  });
export const our_WorkSchema = z.object({
    // title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    tags: z.string().regex(/.+/, "At least one tag is required"),
    imgUrl: z.string().url({message: "image is required"}), // or use .nullable() if you want to allow null values
  });

  
// validation/reviewSchema.js


export const reviewSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  review: z.string().min(1, { message: "Review is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  rating: z.number().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }),
  imgUrl: z.string().url({message: "image is required"}), // Assuming imgUrl can be optional
});
export const newsSchema = z.object({
    tags: z.string().regex(/.+/, "At least one tag is required"),
  description: z.string().min(1, "Description is required"),
  imgUrl: z.string({message: "image is required"}).url({message: "image is required"}), // Assuming imgUrl can be optional
});
export const FAQsSchema = z.object({
    title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  
});


export const contactUsFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  phone_number: z.string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must not exceed 15 digits" }),
  // open_time: z.string().regex(/^(10:00 AM|10:00 AM - 07:00 PM)$/, {
  //   message: "Open time must be in the format '10:00 AM - 07:00 PM'"
  // }),
  open_time: z.string().min(1, {
    message: "Open Time is required"
  }),
  address: z.string().min(1, { message: "Address is required" }),
});
// About us header
// export const heroSectionSchema = z.object({
//   header: z.string().min(1, "Header is required"),
//   subheader: z.string().min(1, "Subheader is required"),
//   description: z.string().min(1, "Description is required"),
//   bg_video_url: z.string().url("Video is required").optional(),
//   below_img_url: z.string().url("Image is required").optional(),
// });

