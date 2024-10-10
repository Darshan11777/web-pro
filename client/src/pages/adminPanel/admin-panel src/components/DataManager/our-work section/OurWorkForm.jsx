import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { toast } from 'react-toastify';

const OurWorkForm = ({ onSubmit, existingData }) => {
  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    description: '',
    tags: '',
    imgUrl: '', // Set to null initially for a cleaner state
  };
  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(existingData?.imgUrl || null);
  const [imageChanged, setImageChanged] = useState(false); // Track if the image has changed
  const [newTag, setNewTag] = useState(''); // State for the new tag input
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading status
  const [error, setError] = useState(''); // Track error message

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are any tags
   

    setLoading(true); // Start loading
    setError(''); // Reset error message

    // Upload the image if there is one
    let uploadedImageUrl = formData.imgUrl;
    if (imageChanged) {
      uploadedImageUrl = await uploadImage();
    }

    // Prepare form data for submission
    const finalData = {
      description: formData.description,
      tags: formData.tags,
      imgUrl: uploadedImageUrl, // Use the uploaded image URL if available
    };

    // Call the onSubmit function with the final data
    try {
      if (slideId) {
        // Update existing slide
        await axios.put(`${baseUrl}slides/our-work/${slideId}`, finalData);
      } else {
        // Add new slide
        await axios.post(`${baseUrl}slides/our-work`, finalData);
      }

      // Navigate back to the slide list after submission
      navigate('/admin/slides/our-work');
    } catch (error) {
      // setError('Error submitting form. Please try again.'); // Set error message
      toast.error(error.response.data.extraDetails[0]);
      console.log( "error.response.data",error.response.data);
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); // Stop loading
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
        setError('Error uploading the image. Please try again.'); // Set error message
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
        tags: formData.tags ? formData.tags + ',' + newTag.trim() : newTag.trim(),
      });
      setNewTag(''); // Clear the input field
    }
  };

  // Function to remove a tag
  const removeTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags.split(',').filter((_, i) => i !== index).join(','),
    });
  };

  useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/our-work`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));

          setFormData({
            description: slide.description,
            tags: slide.tags,
            imgUrl: slide.imgUrl,
          });
          setImagePreview(slide.imgUrl);
        } catch (error) {
          setError('Error fetching slide data.'); // Set error message
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      {showAlert && <CustomAlert message="Please add at least one tag." type="error" open={showAlert} setOpen={setShowAlert} />}
      {error && <CustomAlert message={error} type="error" open={true} setOpen={() => setError('')} />}

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Slide' : 'Add New Slide'}
      </h2>

      <div className="space-y-6">
        {/* Description Input */}
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
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            
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
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Add a tag..."
            />
            <button
              type="button"
              onClick={addTag}
              className="ml-2 flex w-[80px] justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
            >
              Add
            </button>
          </div>

          {/* Display existing tags */}
          <div className="mt-4 flex flex-wrap">
            {formData.tags.split(',').map((tag, index) => (
              tag.length > 0 && (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mr-2 mb-2">
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
              )
            ))}
          </div>
        </div>

        {/* Image Input */}
        <div className="mb-6">
          <label className="mb-3 block text-black dark:text-white">
            Attach Image
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-opacity-90 w-full text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Submitting...' : existingData ? 'Update Slide' : 'Add Slide'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default OurWorkForm;
