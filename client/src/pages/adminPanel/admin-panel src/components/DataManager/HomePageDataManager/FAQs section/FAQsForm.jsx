import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

const FAQsForm = ({ existingData }) => {
  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    title: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = {
      ...formData,
    };

    try {
      if (slideId) {
        // Update existing slide
        await axios.put(`${baseUrl}slides/faqs/${slideId}`, finalData);
      } else {
        // Add new slide
        await axios.post(`${baseUrl}slides/faqs`, finalData);
      }

      // Navigate back to the slide list after submission
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      // setError('There was an error submitting the form.');
      toast.error(error.response.data.extraDetails[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/faqs`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));
          setFormData(slide);
        } catch (error) {
          console.error('Error fetching slide:', error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {existingData ? 'Update FAQ' : 'Add New FAQ'}
      </h2>

      <div className="space-y-6">
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
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
            
          
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
            rows={7}
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
            
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 w-full hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? 'Submitting...' : existingData ? 'Update FAQ' : 'Add FAQ'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FAQsForm;
