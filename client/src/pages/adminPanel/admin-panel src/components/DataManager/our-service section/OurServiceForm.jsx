import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Alerts from '../../../pages/UiElements/Alerts';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';

const OurServiceForm = ({ onSubmit, existingData }) => {

  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

    const initialFormData={
        title: '',
        description: '',
        tags:  '',
        imgUrl:'' // Set to null initially for a cleaner state
    }
    const [formData, setFormData] = useState(initialFormData);

    const [imagePreview, setImagePreview] = useState(existingData?.imgUrl || null);
    const [imageChanged, setImageChanged] = useState(false); // Track if the image has changed
    const [newTag, setNewTag] = useState(''); // State for the new tag input
    
  const [showAlert, setShowAlert] = useState(false);

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
console.log( "showAlert",showAlert);
    const handleSubmit = async (e) => {
        e.preventDefault();
// Check if there are any tags
if (formData.tags.trim() === '') {
  setShowAlert(true); // Show the custom alert

  // Alerts('sdfkj')
  return; // Stop form submission
}

        // Upload the image if there is one
        let uploadedImageUrl=formData.imgUrl;
        if (imageChanged) {
          uploadedImageUrl = await uploadImage();
        }
        // Prepare form data for submission
        const finalData = {
            title: formData.title,
            description: formData.description,
            tags: formData.tags,
            imgUrl: uploadedImageUrl // Use the uploaded image URL if available
        };

        // Call the onSubmit function with the final data
        try {
          if (slideId) {
            // Update existing slide
            await axios.put(`${baseUrl}slides/our-service/${slideId}`, finalData);
          } else {
            // Add new slide
            await axios.post(`${baseUrl}slides/our-service`, finalData);
          }
    
          // Navigate back to the slide list after submission
          navigate('/admin/slides/our-service'); 
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    };
    
    const uploadImage = async () => {
        if (formData.imgUrl) {
            const data = new FormData();
            data.append('image', formData.imgUrl);

            try {
                const response = await axios.post(`${baseUrl}image/upload`, data, {
                    withCredentials: true,
                });

                
                return response.data.imgUrl; // Adjust based on your API response structure
            } catch (error) {
                console.error('Error uploading the file', error);
                return null; // Return null if there's an error
            }
        }
        return null; // Return null if no image is uploaded
    };
 // Function to add a new tag
 const addTag = () => {
  if (newTag.trim() !== '') {
    setFormData({
      ...formData,
      tags: formData.tags ? formData.tags +","+newTag.trim():newTag.trim(),
    });
    setNewTag(''); // Clear the input field
  }
};

// Function to remove a tag
const removeTag = (index) => {
  setFormData({
    ...formData,
    tags: formData.tags.split(',').filter((_, i) => i !== index).join(),
  });
};
console.log( "formData.tags",formData.tags);
 useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/our-service`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));
          
          
       
          
          setFormData({
            title: slide.title,
            description: slide.description,
            tags: slide.tags,
            imgUrl: slide.imgUrl,
          });
          setImagePreview(slide.imgUrl);
        } catch (error) {
          console.error('Error fetching slide:', error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);
  
    // Update imageChanged state when a new image is selected
    useEffect(() => {
      if (formData.imgUrl !== imagePreview) {
        setImageChanged(true);
      } else {
        setImageChanged(false);
      }
    }, [formData.imgUrl, initialFormData.imgUrl]);
    
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
              {showAlert && <CustomAlert message="Please add at least one tag." type="error" open={showAlert} setOpen={setShowAlert} />} 

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {existingData ? 'Update Slide' : 'Add New Slide'}
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
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

  
        
              {/* Tags Input */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <div className="mt-1 flex items-center">
          <input
            type="text"
            id="newTag"
            name="newTag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Add a tag..."
          />
          <button
            type="button"
            onClick={addTag}
            className="ml-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>

        {/* Display existing tags */}
        <div className="mt-2 flex flex-wrap">
          {formData.tags.split(',').map((tag, index) => (
          tag.length >0 &&   <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mr-2 mb-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="ml-2 text-indigo-700 hover:text-indigo-900 focus:outline-none"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
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

export default OurServiceForm;
