import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Alerts from '../../../pages/UiElements/Alerts';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { FaStar } from 'react-icons/fa'; // Import a star icon

const FAQsForm = ({ onSubmit, existingData }) => {

  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
   title:'',
   description:''
  };

    const [formData, setFormData] = useState(initialFormData);

  
    
  // const [showAlert, setShowAlert] = useState(false);
console.log( "formData",formData);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

      // Handle star rating changes
  const handleRatingChange = (newRating) => {
    setFormData({
      ...formData,
      rating: newRating,
    });
  };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData({ ...formData, imgUrl: file }); // Store the file object
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null); // Clear the preview if no file is selected
            setFormData({ ...formData, imgUrl: null }); // Reset imgUrl
        }
    };
// console.log( "showAlert",showAlert);
    const handleSubmit = async (e) => {
        e.preventDefault();


       
       
        const finalData = {
        ...formData
        };

        // Call the onSubmit function with the final data
        try {
          if (slideId) {
            // Update existing slide
            await axios.put(`${baseUrl}slides/faqs/${slideId}`, finalData);
          } else {
            // Add new slide
            await axios.post(`${baseUrl}slides/faqs`, finalData);
          }
    
          // Navigate back to the slide list after submission
          navigate('/admin/slides/faqs'); 
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    };
 

console.log( "formData.tags",formData.tags);
 useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/faqs`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));
          
          
       
          
          setFormData({...slide});
        
        } catch (error) {
          console.error('Error fetching slide:', error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);
  
  
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
              {/* {showAlert && <CustomAlert message="Please add at least one tag." type="error" open={showAlert} setOpen={setShowAlert} />}  */}

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {existingData ? 'Update Slide' : 'Add Ne   asew Slide'}
        </h2>
  
        <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title 
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
  
     

     
  
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={7}
            className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

  
      

  
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {existingData ? 'Update Slide' : 'Add Slide'}
          </button>
        </div>
      </form>
    );
};

export default FAQsForm;
