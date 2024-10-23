import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../redux/slices/AuthSlice';

const ContactPageHeader = ({ endPoint='contact-us/header' }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const endUrl = endPoint ? endPoint : 'about-us/quote';
  
  const initialFormData = {
    headerLine1: '',  // Header Line 1
    headerLine2: '',  // Header Line 2
    shortDescription: '',
    image: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    if (file) {
      const data = new FormData();
      data.append('image', file);
      try {
        const response = await axios.post(`${baseUrl}image/upload`, data, { withCredentials: true });
        return response.data.imgUrl;
      } catch (error) {
        console.error('Error uploading the file', error);
        return null;
      }
    }
    return null;
  };

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
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedImageUrl = imageFile ? await uploadImage(imageFile) : formData.image;

    const finalData = {
      ...formData,
      image: uploadedImageUrl,
    };

    try {
      await axios.put(`${baseUrl}${endUrl}`, finalData, { withCredentials: true });
      toast.success('Slide updated successfully');
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
      if (error.response.data.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await axios.get(`${baseUrl}${endUrl}`, { withCredentials: true });
        const slide = res.data;

        setFormData({
          headerLine1: slide.headerLine1 || '',
          headerLine2: slide.headerLine2 || '',
          shortDescription: slide.shortDescription,
          image: slide.image,
        });
        setImagePreview(slide.image);
      } catch (error) {
        console.error('Error fetching slide:', error);
        if (error.response.data.message === "jwt authentication error") {
          dispatch(checkAuth());
        }
      }
    };
    fetchSlide();
  }, []);
 

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        Update  Contact Us Header Section
      </h2>

      <div className="space-y-6">
        {/* Header Line 1 Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 1</label>
          <input
            type="text"
            name="headerLine1"
            value={formData.headerLine1}
            onChange={handleChange}
            placeholder="Type the first line of the header"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Header Line 2 Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 2</label>
          <input
            type="text"
            name="headerLine2"
            value={formData.headerLine2}
            onChange={handleChange}
            placeholder="Type the second line of the header"
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
            placeholder="Type your description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-6">
            <img src={imagePreview} alt="Image Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}
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

export default ContactPageHeader;
