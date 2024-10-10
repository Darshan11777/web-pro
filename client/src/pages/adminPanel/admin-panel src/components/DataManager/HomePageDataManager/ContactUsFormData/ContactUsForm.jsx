import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
// import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { toast } from 'react-toastify';
// import { contactUsFormSchema } from '../schemas/contactUsFormSchema'; // Make sure to import your schema

const ContactUsFormData = ({ onSubmit, existingData }) => {
 
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    email: '',
    phone_number: '',
    open_time: '10:00 AM - 07:00 PM', // Default open time
    address: '',
  };

  const [formData, setFormData] = useState(initialFormData);
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

   
    

    // Prepare form data for submission
    const finalData = {
      email: formData.email,
      phone_number: formData.phone_number,
      open_time: formData.open_time,
      address: formData.address,
    };

    // Call the onSubmit function with the final data
    try {
     
        // Update existing slide
        await axios.put(`${baseUrl}slides/contact-us-form`, finalData);
     
      // Navigate back to the contacts list after submission
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response.data.extraDetails[0]);
    }
  };

  useEffect(() => {
    // Fetch existing data if in edit mode (slideId exists)
    
      const fetchData = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/contact-us-form`);
          setFormData({
            email: res.data[0].email,
            phone_number: res.data[0].phone_number,
            open_time: res.data[0].open_time,
            address: res.data[0].address,
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    
  }, []);

  return (
    <form action="#" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      {showAlert && <CustomAlert message="Please fill out all fields." type="error" open={showAlert} setOpen={setShowAlert} />}
      
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Contact' : 'Add New Contact'}
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

        {/* Address Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          {existingData ? 'Update Contact' : 'Add Contact'}
        </button>
      </div>
    </form>
  );
};

export default ContactUsFormData;
