
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SectionForm from "../../../SectionForm/SectionForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../../common/Loader";

const FooterSectionForm = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const FormData = {
    header: "",
    highlight: "",
    description: "",
    facebook_url:'',
    instagram_url:'',
    twitter_url:'',
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
      label: "Highlight Header Word",
      placeholder: "Enter Highlight",
      type: "text",
    },
   
    {
      name: "description",
      label: "Description",
      placeholder: "Enter description",
      type: "textarea",
    },
    {name:'facebook_url',
      label:"Facebook Link",
      type:'text',
      placeholder:'add Facebook Link',

    },
    {name:'instagram_url',
      label:"Instagram Link",
      type:'text',
      placeholder:'add instagram Link',

    },
    {name:'twitter_url',
      label:"Twitter Link",
      type:'text',
      placeholder:'add Twitter Link',

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
        
        description: formData.description,
        facebook_url:formData.facebook_url,
        twitter_url:formData.twitter_url,
        instagram_url:formData.instagram_url

        
        

        
      };
      const res = await axios.put(`${baseUrl}section/header/footer`, finalData);

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
      const res = await axios.get(`${baseUrl}section/header/footer`);
      const data = res.data;
      console.log("Data", data);
      setInitialFormData({
        header: data.header,
        highlight: data.highlighted_word,
       
        description: data.description,
        facebook_url:data.facebook_url,
        twitter_url:data.twitter_url,
        instagram_url:data.instagram_url
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

  let a = "5555";
  console.log("+a", +a);

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

export default FooterSectionForm;
