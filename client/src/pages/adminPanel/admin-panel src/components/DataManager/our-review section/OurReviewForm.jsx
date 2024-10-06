import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Alerts from '../../../pages/UiElements/Alerts';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { FaStar } from 'react-icons/fa'; // Import a star icon

const OurReviewForm = ({ onSubmit, existingData }) => {

  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    name: '', // Changed from "title"
    review: '',
    post: '', // New field for review text
    rating: 0, // New field for rating (0-5)
    imgUrl: '', 
    email: '',
  };

    const [formData, setFormData] = useState(initialFormData);

    const [imagePreview, setImagePreview] = useState(existingData?.imgUrl || null);
    const [imageChanged, setImageChanged] = useState(false); // Track if the image has changed
    const [newTag, setNewTag] = useState(''); // State for the new tag input
    
  const [showAlert, setShowAlert] = useState(false);
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
console.log( "showAlert",showAlert);
    const handleSubmit = async (e) => {
        e.preventDefault();


        // Upload the image if there is one
        let uploadedImageUrl=formData.imgUrl;
        if (imageChanged) {
          uploadedImageUrl = await uploadImage();
        }
        // Prepare form data for submission
        const finalData = {
          name: formData.name, // Sending "name" instead of "title"
          review: formData.review,
          email: formData.email,
          
          rating: formData.rating, // Including the rating
          imgUrl: uploadedImageUrl,
        };

        // Call the onSubmit function with the final data
        try {
          if (slideId) {
            // Update existing slide
            await axios.put(`${baseUrl}slides/reviews/${slideId}`, finalData);
          } else {
            // Add new slide
            await axios.post(`${baseUrl}slides/reviews`, finalData);
          }
    
          // Navigate back to the slide list after submission
          navigate('/admin/slides/review'); 
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

console.log( "formData.tags",formData.tags);
 useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/reviews`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));
          
          
       
          
          setFormData({...slide});
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
          {existingData ? 'Update Slide' : 'Add Ne   asew Slide'}
        </h2>
  
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name 
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
  
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Email 
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      {/* <div>
        <label htmlFor="post" className="block text-sm font-medium text-gray-700">
          Post/Review
        </label>
        <textarea
          id="post"
          name="post"
          value={formData.post}
          onChange={handleChange}
          rows={4}
          className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div> */}
  
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={4}
            className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

  
          {/* Star Rating */}
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar 
            key={star} 
            className="cursor-pointer" 
            size={24} 
            onClick={() => handleRatingChange(star)}
            color={formData.rating >= star ? '#ffc107' : '#e4e5e9'} // Change color based on rating
          />
        ))}
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
                className="rounded-full h-[200px] aspect-square mx-auto object-cover"
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

export default OurReviewForm;
