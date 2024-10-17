import { z } from "zod";
export const about_hero_section_dataSchema = z.object({
  header: z.string().min(1, "Header is required"),
  blueHighLight: z.string().optional(),
  transparentHighLight: z.string().optional(),
  shortDescription: z.string().min(1, "Description is required"),
  image: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),

  image_2: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
});
export const about_project_dataSchema = z.object({
    year_of_experience: z
    .number("Years Of Experience must be higher than 1")
    .min(1, { message: "Years Of Experience must be higher than 1" }),
  complete_projects: z
    .number("Completed Projects must be higher than 1")
    .min(1, { message: "Completed Projects must be higher than 1" }),
  happy_clients: z
    .number("Happy Clients must be higher than 1")
    .min(1, { message: "Happy Clients must be higher than 1" }),
});
export const image_project_dataSchema = z.object({
  image_1: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
  image_2: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
  image_3: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
});

export const about_history_section_dataSchema = z.object({
    header_line_1: z.string().min(1, "Header is required"),
    header_line_2: z.string().min(0, "Header is required"),
   
    shortDescription: z.string().min(1, "Description is required"),
 
  });
export const about_history_detailes_section_dataSchema = z.object({
    image: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
    header: z.string().min(1, "Header is required"),
    
    shortDescription: z.string().min(1, "Description is required"),
 
  });
export const about_quote_section_dataSchema = z.object({
    image: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
    headerLine1: z.string().min(1, "Header is required"),
    headerLine2: z.string().min(1, "Header is required"),
    highLight: z.string().optional(),
    
    shortDescription: z.string().min(1, "Description is required"),
 
  });
export const about_team_header_section_dataSchema = z.object({
    
    header: z.string().min(1, "Header is required"),
    highLight: z.string().optional(),
    
    shortDescription: z.string().min(1, "Description is required"),
 
  });
export const about_team_detailes_section_dataSchema = z.object({
    
    name: z.string().min(1, "Header is required"),
    role:z.string().min(1, "role is required"),
    
    image: z
    .string({ message: "image is required" })
    .url({ message: "image is required" }),
 
  });