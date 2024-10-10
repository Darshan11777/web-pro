
import {z} from 'zod'

// Define the Zod schema for validation
export const heroSectionSchema = z.object({
    header: z.string().min(1, "Header is required"),
    subheader: z.string().min(1, "Subheader is required"),
    description: z.string().min(1, "Description is required"),
    bg_video_url: z.string().url("Video is required").optional(),
    below_img_url: z.string().url("Image is required").optional(),
  });
  
  // our service header
  
  
  export const our_service_headerSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
  
    description: z.string().min(1, "Description is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
  });
  
  
  
  // Our Process header
  
  export const our_process_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    
    highlighted_word: z.string().optional(), // Optional field for highlighted words
    
  });
  
  // Our Work header
  
  export const our_work_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
    
    
  });
  // Our result 
  
  export const our_result_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    tags: z.string().regex(/.+/, "At least one tag is required"),
    
    description: z.string().min(1, "Description is required"),
    
  });
  
  // our client header
  export const our_client_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    
    header: z.string().min(1, "Header is required"),
    
    description: z.string().min(1, "Description is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
    
  });
  
  //  news header
  
  export const news_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    
    highlighted_word: z.string().optional(), // Optional field for highlighted words
  })
  //  contact_us header
  
  export const contact_us_header_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
  
  })

  
  export const experience_dataSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
  
  })

  export const ourResultSchema = z.object({
  
    tags: z.string().regex(/.+/, "At least one tag is required"),
    description: z.string().min(1,{message: "Description is required"}),
    rating: z.number( "Rating must be between 1 and 5").min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }),
    completed_projects:z.number("Completed Projects must be higher than 1").min(1, { message: "Completed Projects must be higher than 1" }),
    years_Of_experience:z.number("Years Of Experience must be higher than 1").min(1, { message: "Years Of Experience must be higher than 1" }),
    happy_clients:z.number("Happy Clients must be higher than 1").min(1, { message: "Happy Clients must be higher than 1" }),
    bottom_img_url: z.string({message: "image is required"}).url({message: "image is required"}), 
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), 

  })

  export const aboutUsSchema = z.object({
    tags: z.string().regex(/.+/, "At least one tag is required"),
    description: z.string().min(1,{message: "Description is required"}),
    years_Of_experience:z.number("Years Of Experience must be higher than 1").min(1, { message: "Years Of Experience must be higher than 1" }),
   img_url: z.string({message: "image is required"}).url({message: "image is required"}), 
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), 

  })

  // export const ourResultSchema = z.object({
  //   tags: z.string().regex(/.+/, { message: "At least one tag is required" }),
  //   description: z.string().min(1, { message: "Description is required" }),
  //   rating: z.number().min(1, { message: "Rating must be between 1 and 5" }).max(5, { message: "Rating must be between 1 and 5" }),
  //   completed_projects: z.number().min(1, { message: "Completed Projects must be higher than 1" }),
  //   years_Of_experience: z.number().min(1, { message: "Years Of Experience must be higher than 1" }),
  //   happy_clients: z.number().min(1, { message: "Happy Clients must be higher than 1" }),
  //   bottom_img_url: z.string().url({ message: "Image URL must be valid" }).min(1, { message: "Image is required" }),
  //   section_name: z.string().min(1, { message: "Section name is required" }),
  //   header: z.string().min(1, { message: "Header is required" }),
  //   highlighted_word: z.string().optional(), // Optional field for highlighted words
  // });
  export const FAQs_headerSchema = z.object({
    section_name: z.string().min(1, "Section name is required"),
    header: z.string().min(1, "Header is required"),
    highlighted_word: z.string().optional(), // Optional field for highlighted words
  
  })