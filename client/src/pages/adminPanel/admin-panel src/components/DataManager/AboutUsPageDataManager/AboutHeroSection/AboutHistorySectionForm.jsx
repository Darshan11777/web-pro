import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../../redux/slices/AuthSlice';

const AboutHistorySectionForm = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    header_line_1: '',
    header_line_2: '',
    shortDescription: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${baseUrl}about-us/history`, formData, { withCredentials: true });
      toast.success('Slide updated successfully');
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
      if (error.response?.data?.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await axios.get(`${baseUrl}about-us/history`, { withCredentials: true });
        const slide = res.data;

        setFormData({
          header_line_1: slide.header_line_1,
          header_line_2: slide.header_line_2,
          shortDescription: slide.shortDescription
        });
      } catch (error) {
        console.error('Error fetching slide:', error);
        if (error.response?.data?.message === "jwt authentication error") {
          dispatch(checkAuth());
        }
      }
    };
    fetchSlide();
  }, []);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        Update Our History Section
      </h2>

      <div className="space-y-6">
        {/* Header Line 1 Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 1</label>
          <input
            type="text"
            name="header_line_1"
            value={formData.header_line_1}
            onChange={handleChange}
            placeholder="Type your header line 1"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Header Line 2 Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 2</label>
          <input
            type="text"
            name="header_line_2"
            value={formData.header_line_2}
            onChange={handleChange}
            placeholder="Type your header line 2"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Short Description Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Short Description</label>
          <textarea
            value={formData.shortDescription}
            onChange={handleChange}
            rows={6}
            name="shortDescription"
            placeholder="Type your short description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`mt-6 w-full rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none ${loading ? 'opacity-50' : ''}`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default AboutHistorySectionForm;
