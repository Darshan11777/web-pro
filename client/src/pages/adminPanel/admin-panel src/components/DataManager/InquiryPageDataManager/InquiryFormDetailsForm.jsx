import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../redux/slices/AuthSlice';

const InquiryFormDetailsForm = ({ endPoint = 'inquiry/form-details' }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    email: '',
    phone_number: '',
    open_time: '', // Default open time
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const finalData = {
      email: formData.email,
      phone_number: formData.phone_number,
      open_time: formData.open_time,
    };

    try {
      // Update existing slide
      await axios.put(`${baseUrl}${endPoint}`, finalData, { withCredentials: true });

      // Navigate back to the contacts list after submission
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response.data.extraDetails[0]);
      if (error.response.data.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
    }
  };

  useEffect(() => {
    // Fetch existing data if in edit mode
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}${endPoint}`);
        setFormData({
          email: res.data[0].email,
          phone_number: res.data[0].phone_number,
          open_time: res.data[0].open_time,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <form action="#" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        Update Inquiry Form
      </h2>

      <div className="space-y-6">
        {/* Email Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
            required
          />
        </div>

        {/* Open Time Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Open Time
          </label>
          <input
            type="text"
            name="open_time"
            value={formData.open_time}
            onChange={handleChange}
            placeholder="10:00 AM - 07:00 PM"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          Update Inquiry Form
        </button>
      </div>
    </form>
  );
};

export default InquiryFormDetailsForm;
