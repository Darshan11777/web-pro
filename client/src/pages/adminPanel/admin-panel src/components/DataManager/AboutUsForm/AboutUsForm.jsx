import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SectionForm from "../../SectionForm/SectionForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../common/Loader";

const AboutUsForm = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const FormData = {
    header: "",
    highlight: "",
    description: "",
    tags: "",
    yearsOfExperience: "",
    rating: "",
    ImgUrl: "",

    sectionName: "",
  };
  // Example initial data (you can replace this with your real initial data or existing data from an API)
  const [initialFormData, setInitialFormData] = useState(null);

  const fields = [
    {
      name: "header",
      label: "Header",
      placeholder: "Enter Header",
      type: "text",
    },
    {
      name: "highlight",
      label: "Highlight Header",
      placeholder: "Enter Highlight",
      type: "text",
    },
    {
      name: "sectionName",
      label: "Section Name",
      placeholder: "Enter Section Name",
      type: "text",
    },

    {
      name: "description",
      label: "Description",
      placeholder: "Enter description",
      type: "textarea",
    },

    {
      name: "yearsOfExperience",
      label: "Years Of Experience",
      placeholder: "Enter number",
      type: "text",
      isNumber: true,
    },

    { name: "ImgUrl", label: "Image", type: "file" },
    // { name: "video_url", label: "Video", type: "file" },
    {
      name: "tags",
      label: "Learn About Us",
      placeholder: "Enter tags",
      type: "tags",
    },
  ];

  const handleSubmit = async (formData) => {
    // Mock API call or any submission logic here
    console.log("formSata", formData);
    try {
      console.log("Submitted data:", formData);
      const finalData = {
        header: formData.header,
        highlighted_word: formData.highlight,
        section_name: formData.sectionName,
        description: formData.description,

        years_Of_experience: +formData.yearsOfExperience,

        img_url: formData.ImgUrl,

        tags: formData.tags,
      };
      const res = await axios.put(
        `${baseUrl}section/header/about-us`,
        finalData
      );

      // toast.success(formdata);
      navigate("../"); // Example of navigating to a different page after submission
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error(error?.response?.data?.extraDetails[0]);
    }
  };

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/about-us`);
      const data = res.data;
      console.log("Data", data);
      setInitialFormData({
        header: data.header,
        highlight: data.highlighted_word,
        sectionName: data.section_name,
        description: data.description,

        yearsOfExperience: +data.years_of_experience,

        ImgUrl: data.img_url,
        // video_url: "",
        tags: data.tags,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching header:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("initialFormData", initialFormData);

  if (loading) {
    return <Loader />;
  }

  return (
    <SectionForm
      onSubmit={handleSubmit}
      initialFormData={initialFormData} // Pass the initial data to the form
      fields={fields} // Define which fields to render
      formTitle="Create New Section" // Customize the form title
      //   existingData={ImgUrl:initialFormData.ImgUrl}
    />
  );
};

export default AboutUsForm;
