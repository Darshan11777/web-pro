// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import CustomAlert from '../../../../../../component/Alerts/CustomAlert';

// const OurResultSectionForm = ({ onSubmit, existingData }) => {
//     const navigate = useNavigate();

//     const initialFormData = {
//         header: '',
//         highlight: '',
//         headerTags: '',
//         description: '',
//         img: null, // Set to null initially for a cleaner state
//         starReview: 0, // Default to 0
//         completedProjects: 0, // Default to 0
//         happyClients: 0, // Default to 0
//         tags: '',
//         experience: 0,
//         sectionName:'',
//     };

//     const [formData, setFormData] = useState(initialFormData);
//     const [imagePreview, setImagePreview] = useState(existingData?.img || null);
//     const [newTag, setNewTag] = useState('');
//     // const [showAlert, setShowAlert] = useState(false);

//     const baseUrl = import.meta.env.VITE_API_BASE_URL;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//                 setFormData((prevData) => ({ ...prevData, img: file })); // Store the file object
//             };
//             reader.readAsDataURL(file);
//         } else {
//             setImagePreview(null); // Clear the preview if no file is selected
//             setFormData((prevData) => ({ ...prevData, img: null })); // Reset img
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Prepare form data for submission
//         const finalData = {
//             header: formData.header,
//             highlighted_word: formData.highlight,
//             headerTags: formData.headerTags,
//             description: formData.description,
//             bottom_img_url: formData.img, // Use the uploaded image if available
//             rating: formData.starReview,
//             completed_projects: formData.completedProjects,
//             happy_clients: formData.happyClients,
//             tags: formData.tags,
//             section_name:formData.sectionName,
//             years_Of_experience:formData.experience,

//         };

//         try {
//             // Call the onSubmit function with the final data
//             await axios.post(`${baseUrl}results`, finalData); // Adjust based on your API endpoint

//             // Navigate back to the results list after submission
//             navigate('/admin/results');
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             toast.error(error.response.data.extraDetails[0]);
//         }
//     };

//     // Function to add a new tag
//     const addTag = () => {
//         if (newTag.trim() !== '') {
//             setFormData((prevData) => ({
//                 ...prevData,
//                 tags: prevData.tags ? prevData.tags + "," + newTag.trim() : newTag.trim(),
//             }));
//             setNewTag(''); // Clear the input field
//         }
//     };

//     // Function to remove a tag
//     const removeTag = (index) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             tags: prevData.tags.split(',').filter((_, i) => i !== index).join(),
//         }));
//     };

//     useEffect(() => {
//         // Fetch slide data if in edit mode (slideId exists)

//           const fetchSlide = async () => {
//             try {
//               const res = await axios.get(`${baseUrl}slides/news`);
//               const slide = res.data[0];

//               setFormData({

//                 header: slide.header,
//                 highlight: slide.highlighted_word,
//                 headerTags: slide.headerTags,
//                 description: slide.description,
//                 img: slide.bottom_img_url,
//                 starReview: slide.rating,
//                 completedProjects: slide.completed_projects,
//                 happyClients: slide.happy_clients,
//                 tags: slide.tags,
//                 experience: slide.years_Of_experience,
//                 sectionName:slide.section_name,
//               });
//               setImagePreview(slide.bottom_img_url);
//             } catch (error) {
//               console.error('Error fetching slide:', error);
//             }
//           };
//           fetchSlide();

//       }, []);

//     return (
//         <form action="#" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>

//             <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
//                 {existingData ? 'Update Result Section' : 'Add New Result Section'}
//             </h2>
//             <div className="space-y-6">
//                 {/* Header Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Section Name</label>
//                     <input
//                         type="text"
//                         name="sectionName"
//                         value={formData.sectionName}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Header"
//                     />
//                 </div>
//                 {/* Header Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Header</label>
//                     <input
//                         type="text"
//                         name="header"
//                         value={formData.header}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Header"
//                     />
//                 </div>

//                 {/* Highlight Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Highlight</label>
//                     <input
//                         type="text"
//                         name="highlight"
//                         value={formData.highlight}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Highlight"
//                     />
//                 </div>

//                 {/* Header Tags Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Header Tags</label>
//                     <input
//                         type="text"
//                         name="headerTags"
//                         value={formData.headerTags}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Header Tags"
//                     />
//                 </div>

//                 {/* Tags Input */}
//                 <div className="mb-6">
//                     <label htmlFor="tags" className="mb-2 block text-black dark:text-white">Tags</label>
//                     <div className="flex items-center">
//                         <input
//                             type="text"
//                             id="newTag"
//                             name="newTag"
//                             value={newTag}
//                             onChange={(e) => setNewTag(e.target.value)}
//                             className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                             placeholder="Add a tag..."
//                         />
//                         <button
//                             type="button"
//                             onClick={addTag}
//                             className="flex w-[80px] ml-2 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
//                         >
//                             Add
//                         </button>
//                     </div>

//                     {/* Display existing tags */}
//                     <div className="mt-4 flex flex-wrap">
//                         {formData.tags.split(',').map((tag, index) => (
//                             tag.length > 0 && (
//                                 <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mr-2 mb-2">
//                                     {tag}
//                                     <button
//                                         type="button"
//                                         onClick={() => removeTag(index)}
//                                         className="ml-2 text-indigo-700 hover:text-indigo-900 focus:outline-none"
//                                     >
//                                         <svg
//                                             className="h-4 w-4"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     </button>
//                                 </span>
//                             )
//                         ))}
//                     </div>
//                 </div>

//                 {/* Description Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Description</label>
//                     <textarea
//                         value={formData.description}
//                         onChange={handleChange}
//                         rows={6}
//                         name="description"
//                         placeholder="Type your Description"
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                     ></textarea>
//                 </div>

//                 {/* Star Review Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Star Review (integer)</label>
//                     <input
//                         type="number"
//                         name="starReview"
//                         value={formData.starReview}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Star Review"
//                     />
//                 </div>

//                 {/* Completed Projects Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Completed Projects</label>
//                     <input
//                         type="number"
//                         name="completedProjects"
//                         value={formData.completedProjects}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Completed Projects"
//                     />
//                 </div>
//                 {/* Completed Projects Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Year Of Experience</label>
//                     <input
//                         type="number"
//                         name="experience"
//                         value={formData.experience}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Completed Projects"
//                     />
//                 </div>

//                 {/* Happy Clients Input */}
//                 <div className="mb-6">
//                     <label className="mb-2 block text-black dark:text-white">Happy Clients</label>
//                     <input
//                         type="number"
//                         name="happyClients"
//                         value={formData.happyClients}
//                         onChange={handleChange}
//                         className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
//                         placeholder="Happy Clients"
//                     />
//                 </div>

//                     {/* Image Upload */}
//         <div className="mb-6">
//           <label className="mb-3 block text-black dark:text-white">
//             Attach Image
//           </label>
//           <input
//             type="file"
//             className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* Image Preview */}
//         {imagePreview && (
//           <div className="mb-6">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-full h-48 object-cover rounded-md"
//             />
//           </div>
//         )}

//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="mt-4 w-full rounded bg-primary p-3 text-white hover:bg-opacity-90">
//                 {existingData ? 'Update Result Section' : 'Add Result Section'}
//             </button>
//         </form>
//     );
// };

// export default OurResultSectionForm;

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SectionForm from "../../SectionForm/SectionForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../common/Loader";

const ExampleUsage = () => {

const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
 const FormData= {
    header: "",
    highlight: "",
    description: "",
    rating: "",
    completedProjects: "",
    yearsOfExperience: "",

    happyClients: "",
    ImgUrl: "",
    sectionName:"",
    // video_url: "",
    tags: "",
  }
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
      name: "rating",
      label: "Rating",
      placeholder: "Enter rating",
      type: "text",
      isNumber: true,
    },
    {
      name: "completedProjects",
      label: "Completed Projects",
      placeholder: "Enter number",
      type: "text",
      isNumber: true,
    },
    {
      name: "yearsOfExperience",
      label: "Years Of Experience",
      placeholder: "Enter number",
      type: "text",
      isNumber: true,
    },
    {
      name: "happyClients",
      label: "Happy Clients",
      placeholder: "Enter number",
      type: "number",
      isNumber: true,
    },
    { name: "ImgUrl", label: "Image", type: "file" },
    // { name: "video_url", label: "Video", type: "file" },
    { name: "tags", label: "Tags", placeholder: "Enter tags", type: "tags" },
  ];

  const handleSubmit = async (formData) => {
    // Mock API call or any submission logic here
    console.log( "formSata",formData);
    try {
      console.log("Submitted data:", formData);
      const finalData={
        header:formData.header,
        highlighted_word:formData.highlight,
        section_name:formData.sectionName,
        description:formData.description,
        rating:+formData.rating,
        completed_projects:+formData.completedProjects,
        years_Of_experience:+formData.yearsOfExperience,
        happy_clients:+formData.happyClients,
        bottom_img_url:formData.ImgUrl,
        
        tags:formData.tags,
      }
      const res = await axios.put(`${baseUrl}section/header/result`,finalData);


      // toast.success(formdata);
      navigate(-1); // Example of navigating to a different page after submission
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error(error?.response?.data?.extraDetails[0]);
    }
  };

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}section/header/result`);
      const data = res.data;
      console.log("Data", data);
      setInitialFormData({
            header: data.header,
            highlight: data.highlighted_word,
            sectionName:data.section_name,
            description:data.description,
            rating: +data.rating,
            completedProjects: +data.completed_projects,
            yearsOfExperience: +data.years_of_experience,
        
            happyClients: +data.happy_clients,
            ImgUrl: data.bottom_img_url,
            // video_url: "",
            tags: data.tags,
          })
      
      setLoading(false)
    } catch (error) {
      console.error("Error fetching header:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
console.log( "initialFormData",initialFormData);

if(loading){
    return <Loader/>
}

let a="5555"
console.log( "+a",+a);

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

export default ExampleUsage;
