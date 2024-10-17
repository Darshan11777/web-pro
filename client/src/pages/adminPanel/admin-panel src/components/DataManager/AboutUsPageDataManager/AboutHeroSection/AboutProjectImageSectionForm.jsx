import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../../redux/slices/AuthSlice';

const AboutImageProjectSectionForm = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    image_1: '',
    image_2: '',
    image_3: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [image3Preview, setImage3Preview] = useState(null);
  const [image1File, setImage1File] = useState(null);
  const [image2File, setImage2File] = useState(null);
  const [image3File, setImage3File] = useState(null);
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

  const handleImageChange = (e, setImagePreview, setImageFile) => {
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

    const uploadedImage1Url = image1File ? await uploadImage(image1File) : formData.image_1;
    const uploadedImage2Url = image2File ? await uploadImage(image2File) : formData.image_2;
    const uploadedImage3Url = image3File ? await uploadImage(image3File) : formData.image_3;

    const finalData = {
      image_1: uploadedImage1Url,
      image_2: uploadedImage2Url,
      image_3: uploadedImage3Url,
    };

    try {
      await axios.put(`${baseUrl}about-us/image-project`, finalData, { withCredentials: true });
      toast.success('Images updated successfully');
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
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${baseUrl}about-us/image-project`, { withCredentials: true });
        const data = res.data;

        setFormData({
          image_1: data.image_1,
          image_2: data.image_2,
          image_3: data.image_3,
        });
        setImage1Preview(data.image_1);
        setImage2Preview(data.image_2);
        setImage3Preview(data.image_3);
      } catch (error) {
        console.error('Error fetching images:', error);
        if (error.response.data.message === "jwt authentication error") {
          dispatch(checkAuth());
        }
      }
    };
    fetchImages();
  }, []);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        Update Project Images
      </h2>

      <div className="space-y-6">
        {/* Image 1 Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image 1</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage1Preview, setImage1File)}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Image 1 Preview */}
        {image1Preview && (
          <div className="mb-6">
            <img src={image1Preview} alt="Image 1 Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}

        {/* Image 2 Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image 2</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage2Preview, setImage2File)}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Image 2 Preview */}
        {image2Preview && (
          <div className="mb-6">
            <img src={image2Preview} alt="Image 2 Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}

        {/* Image 3 Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">Attach Image 3</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage3Preview, setImage3File)}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {/* Image 3 Preview */}
        {image3Preview && (
          <div className="mb-6">
            <img src={image3Preview} alt="Image 3 Preview" className="w-full h-48 object-cover rounded-md" />
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

export default AboutImageProjectSectionForm;
