import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HeroSectionForm = ({ existingData }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    header: '',
    subheader: '',
    description: '',
    bg_video_url: '',
    below_img_url: '',
    brandImages:''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [bgVideoPreview, setBgVideoPreview] = useState(existingData?.bg_video_url || null);
  const [belowImgPreview, setBelowImgPreview] = useState(existingData?.below_img_url || null);
  const [bgVideoFile, setBgVideoFile] = useState(null);
  const [belowImgFile, setBelowImgFile] = useState(null);

  // State for multiple images
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);


  // Loading state
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file) => {
    if (file) {
      const data = new FormData();
      data.append('image', file);

      try {
        const response = await axios.post(`${baseUrl}image/upload`, data, {
          withCredentials: true,
        });
        return response.data.imgUrl; // Adjust based on your API response structure
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

  const handleBgVideoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgVideoPreview(reader.result);
        setBgVideoFile(file); // Store the file object
      };
      reader.readAsDataURL(file);
    } else {
      setBgVideoPreview(null);
      setBgVideoFile(null);
    }
  };
console.log( "bgVideoPreview",bgVideoPreview);
  const handleBelowImgChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBelowImgPreview(reader.result);
        setBelowImgFile(file); // Store the file object
      };
      reader.readAsDataURL(file);
    } else {
      setBelowImgPreview(null);
      setBelowImgFile(null);
    }
  };
  console.log( "formData",formData);

  // Handle multiple image uploads
  const handleMultipleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const newImagePreviews = files.map(file => URL.createObjectURL(file));

    setImageFiles((prevFiles) => [...prevFiles, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
  };

  // Remove an image
  const removeImage = (index) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setFormData((prevData) => ({
      ...prevData,
      brandImages: prevData.brandImages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const uploadedBgVideoUrl = bgVideoFile ? await uploadImage(bgVideoFile) : formData.bg_video_url;
    const uploadedBelowImgUrl = belowImgFile ? await uploadImage(belowImgFile) : formData.below_img_url;

    // Only upload images if imageFiles has changed
    let uploadedImages = [];
    if (imageFiles.length > 0) {
      uploadedImages = await Promise.all(
        imageFiles.map(async (file) => await uploadImage(file))
      );
    }

    const finalData = {
      header: formData.header,
      subheader: formData.subheader,
      description: formData.description,
      bg_video_url: uploadedBgVideoUrl,
      below_img_url: uploadedBelowImgUrl,
      brandImages: uploadedImages.filter(url => url)?.join(',') || formData.brandImages.join(","),
    };

    try {
      await axios.put(`${baseUrl}section/header/hero-section`, finalData);
      toast.success('Slide updated successfully'); // Success toast
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await axios.get(`${baseUrl}section/header/hero-section`);
        const slide = res.data[0];

        setFormData({
          header: slide.header,
          subheader: slide.subheader,
          description: slide.description,
          bg_video_url: slide.bg_video_url,
          below_img_url: slide.below_img_url,
          brandImages: slide.brandImages.split(',')
        });
        setBgVideoPreview(slide.bg_video_url);
        setBelowImgPreview(slide.below_img_url);
        setImagePreviews(slide.brandImages.split(','));
      } catch (error) {
        console.error('Error fetching slide:', error);
      }
    };
    fetchSlide();
  }, []);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Slide' : 'Add New Slide'}
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

        {/* Subheader Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Subheader</label>
          <input
            type="text"
            name="subheader"
            value={formData.subheader}
            onChange={handleChange}
            placeholder="Type your subheader"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Description</label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            rows={6}
            name="description"
            placeholder="Type your description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-black dark:text-white">
            Attach Background Video
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={handleBgVideoChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Background Video Preview */}
        {bgVideoPreview && (
          <div className="mb-6">
            <video controls className="w-full h-48 object-cover rounded-md" src={bgVideoPreview}>
              {/* <source src={bgVideoPreview} type="video/mp4" /> */}
              {/* Your browser does not support the video tag. */}
            </video>
          </div>
        )}

        {/* Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black dark:text-white">
            Attach Bottom Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBelowImgChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Below Image Preview */}
        {belowImgPreview && (
          <div className="mb-6">
            <img src={belowImgPreview}  alt="Below Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}

        {/* Multiple Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black dark:text-white">
            Upload Brand Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleMultipleImagesChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Image Previews */}
        <div className="grid grid-cols-3 gap-4">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative">
              <img src={preview} alt={`Brand Preview ${index}`} className="w-full h-24 object-contain rounded-md" />
              <button
        type="button"
        onClick={() => removeImage(index)}
        className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-red-500 text-white rounded-full transition duration-200 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className={`mt-6 w-full rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable the button while loading
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default HeroSectionForm;
