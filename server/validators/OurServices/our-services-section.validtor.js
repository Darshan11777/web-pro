
import {z} from 'zod'

// Define the Zod schema for validation
export const our_services_it_services_header_schema = z.object({
    header_line_1: z.string().min(1, { message: "Header line 1 is required" }),
    header_line_2: z.string().min(1, { message: "Header line 2 is required" }), // Added message for header_line_2
    description: z.string().min(1, { message: "Description is required" }),
    image: z.string({ message: "Image is required" }).url({ message: "Image is required" }), // Added message format
    tags: z.string().regex(/.+/, { message: "At least one tag is required" }),
  });