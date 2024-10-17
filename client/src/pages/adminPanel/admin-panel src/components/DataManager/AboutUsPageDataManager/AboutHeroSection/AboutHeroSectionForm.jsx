import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../../redux/slices/AuthSlice';

const AboutHeroSectionForm = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    header: '',
    blueHighLight: '',
    transparentHighLight: '', 
    shortDescription: '',
    image: '',
    image_2: '' // Renamed from below_img_url to image_2
  };

  const [formData, setFormData] = useState(initialFormData);
  const [image, setImagePreview] = useState( null);
  const [image2Preview, setImage2Preview] = useState( null); // Updated
  const [bgImageFile, setBgImageFile] = useState(null);
  const [image2File, setImage2File] = useState(null); // Updated

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

  const handleBgImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBgImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage2Change = (e) => { // Updated handler for image_2
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage2Preview(reader.result); // Updated
        setImage2File(file); // Updated
      };
      reader.readAsDataURL(file);
    }
  };

  const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedBgVideoUrl = bgImageFile ? await uploadImage(bgImageFile) : formData.image;
    const uploadedImage2Url = image2File ? await uploadImage(image2File) : formData.image_2; // Updated

    const finalData = {
      ...formData,
      image: uploadedBgVideoUrl,
      image_2: uploadedImage2Url, // Updated
    };

    try {
      await axios.put(`${baseUrl}about-us/hero-section`, finalData,{ withCredentials: true });
      await axios.put(`${baseUrl}about-us/hero-section`, finalData,{ withCredentials: true });
      toast.success('Slide updated successfully');
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
      if(error.response.data.message==="jwt authentication error"){
        dispatch(checkAuth())
        }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await axios.get(`${baseUrl}about-us/hero-section`,{withCredentials:true});
        const slide = res.data;

        setFormData({
          header: slide.header,
          blueHighLight: slide.blueHighLight,
          transparentHighLight: slide.transparentHighLight,
          shortDescription: slide.shortDescription,
          image: slide.image,
          image_2: slide.image_2, // Updated
        });
        setImagePreview(slide.image);
        setImage2Preview(slide.image_2); // Updated
      } catch (error) {
        console.error('Error fetching slide:', error);
        if(error.response.data.message==="jwt authentication error"){
          dispatch(checkAuth())
          }
      }
    };
    fetchSlide();
  }, []);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
         Update About Hero Section 
      </h2>

      <div className="space-y-6">
        {/* Header Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Header</label>
          <input
            type="text"
            name="header"
            value={formData.header}
            onChange={handleChange}
            placeholder="Type your header"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Blue Highlight Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Blue Highlight</label>
          <input
            type="text"
            name="blueHighLight"
            value={formData.blueHighLight}
            onChange={handleChange}
            placeholder="Type your blue highlight"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Transparent Highlight Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Transparent Highlight</label>
          <input
            type="text"
            name="transparentHighLight"
            value={formData.transparentHighLight}
            onChange={handleChange}
            placeholder="Type your transparent highlight"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Description Input */}
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

        {/* Background Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBgImageChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Background Image Preview */}
        {image && (
          <div className="mb-6">
            <img src={image} alt="Background Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}

        {/* Image 2 Upload (Bottom Image) */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image 2</label> {/* Updated label */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImage2Change} // Updated
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Image 2 Preview */}
        {image2Preview && ( // Updated
          <div className="mb-6">
            <img src={image2Preview} alt="Image 2 Preview" className="w-full h-48 object-cover rounded-md" />
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

export default AboutHeroSectionForm;
