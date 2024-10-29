import { z } from "zod";
export const portfolio_header_section_dataSchema = z.object({
    header_line_1: z.string().min(1,{message: "Header Line 1 is required"}),
    header_line_2: z.string().min(1, {message:"Header Line 2 is required"}),
    project_video: z.string().url({ message: "project video is required" }),
    project_img: z.string({message: "Short Description is required"}).url({ message: "project image is required" }),
    short_description: z.string({message: "Short Description is required"}).min(1,{message: "Short Description is required"}),
  });
 

  export const project_highlights_section_dataSchema = z.object({
    description: z.string().min(1,{message: "Description is required"}),
    image: z.string({message: "Image is required"}).url({ message: "Image url is not valid" }),
    projectTitle: z.string().min(1, {message:"Project Title is required"}),
  });
  export const project_highlights_section2_dataSchema = z.object({
    description: z.string().min(1,{message: "Description is required"}),
    image: z.string({message: "Image is required"}).url({ message: "Image url is not valid" }),
    projectTitle: z.string().min(1, {message:"Project Title is required"}),
  });

  export const project_overview_section_dataSchema = z.object({
    sections: z.array(
      z.object({
        header: z.string().min(1, { message: "Header is required" }),
        image: z.string({ message: "Image is required" }).url({
          message: "Image url is not valid",
        }),
      })
    ),
  });
  export const project_info_section_dataSchema = z.object({
    description: z.string().min(1,{message: "Description is required"}),

  });
  export const portfolio_snapshot_slides = z.object({
    image: z.string({message: "Image is required"}).url({ message: "Image url is not valid" }),

  });