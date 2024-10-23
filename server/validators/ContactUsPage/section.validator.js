import { z } from 'zod';

export const contact_page_header_section_dataSchema = z.object({
  image: z
    .string({ message: "Image is required" })
    .url({ message: "Invalid URL format for image" }),
  headerLine1: z
    .string()
    .min(1, { message: "Header Line 1 is required" }),
  headerLine2: z
    .string()
    .min(1, { message: "Header Line 2 is required" }),
  
  shortDescription: z
    .string()
    .min(1, { message: "Short description is required" }),
});


export const contact_us_form_header_dataSchema = z.object({
  section_name: z.string().min(1, "Section name is required"),
  header: z.string().min(1, "Header is required"),
  
  highlighted_word: z.string().optional(), // Optional field for highlighted words
  
});