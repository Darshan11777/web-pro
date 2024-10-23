
import { z } from "zod";
export const inquiry_header_section_dataSchema = z.object({
    header: z.string().min(1, "Header is required"),
    redHighLight: z.string().optional(),
    transparentHighLight: z.string().optional(),
    shortDescription: z.string().min(1, "Description is required"),
    image: z
      .string({ message: "image is required" })
      .url({ message: "image is required" })
  });

  export const inquiry_form_details_schema = z.object({
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
   
  });