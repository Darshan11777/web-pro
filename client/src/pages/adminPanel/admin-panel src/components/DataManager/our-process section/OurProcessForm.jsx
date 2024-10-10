import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { toast } from 'react-toastify';

const OurProcessForm = ({ onSubmit, existingData }) => {
  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    title: '',
    description: '',
    tags: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [newTag, setNewTag] = useState(''); // State for the new tag input
  const [showAlert, setShowAlert] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if there are any tags
    if (formData.tags.trim() === '') {
      setShowAlert(true); // Show the custom alert
      return; // Stop form submission
    }

    // Prepare form data for submission
    const finalData = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags,
    };

    // Call the onSubmit function with the final data
    try {
      if (slideId) {
        // Update existing slide
        await axios.put(`${baseUrl}slides/our-process/${slideId}`, finalData);
      } else {
        // Add new slide
        await axios.post(`${baseUrl}slides/our-process`, finalData);
      }

      // Navigate back to the slide list after submission
      navigate('/admin/slides/our-process');
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log( "errorl.response.data.extraDetails[0]",error.response.data. extraDetails[0]);
      toast.error(error.response.data.extraDetails[0]);
    }
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
          const res = await axios.get(`${baseUrl}slides/our-process`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));

          setFormData({
            title: slide.title,
            description: slide.description,
            tags: slide.tags,
          });
        } catch (error) {
          console.error('Error fetching slide:', error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);

  return (
    <form action="#" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      {showAlert && <CustomAlert message="Please add at least one tag." type="error" open={showAlert} setOpen={setShowAlert} />}

      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Slide' : 'Add New Slide'}
      </h2>

      <div className="space-y-6">
        {/* Title Input */}
        <div className="mb-6">
          <label htmlFor="title" className="mb-2 block text-black dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            rows={6}
            name="description"
            placeholder="Type your Description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        {/* Tags Input */}
        <div className="mb-6">
          <label htmlFor="tags" className="mb-2 block text-black dark:text-white">
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="newTag"
              name="newTag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Add a tag..."
            />
            <button
              type="button"
              onClick={addTag}
              className="flex w-[80px] ml-2 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          {existingData ? 'Update Slide' : 'Add Slide'}
        </button>
      </div>
    </form>
  );
};

export default OurProcessForm;
