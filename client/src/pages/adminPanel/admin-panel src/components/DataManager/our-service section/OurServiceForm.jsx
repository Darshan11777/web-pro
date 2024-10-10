import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CustomAlert from '../../../../../../component/Alerts/CustomAlert';
import { toast } from 'react-toastify';

const OurServiceForm = ({ existingData }) => {
  const { slideId } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    title: '',
    description: '',
    tags: '',
    imgUrl: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(existingData?.imgUrl || null);
  const [imageChanged, setImageChanged] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [Alert, setAlert] = useState(null);
  
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
        setFormData({ ...formData, imgUrl: file });
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setFormData({ ...formData, imgUrl: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (formData.tags.trim() === '') {
    //   setAlert("Please add at least one tag.");
    //   return;
    // }

    let uploadedImageUrl = formData.imgUrl;
    if (imageChanged) {
      uploadedImageUrl = await uploadImage();
    }

    const finalData = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags,
      imgUrl: uploadedImageUrl
    };

    try {
      if (slideId) {
        await axios.put(`${baseUrl}slides/our-service/${slideId}`, finalData);
      } else {
        await axios.post(`${baseUrl}slides/our-service`, finalData);
      }
      navigate('/admin/slides/our-service');
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log(error.response.data.extraDetails[0]);
      
      toast.error(error.response.data.extraDetails[0]);
    }
  };

  const uploadImage = async () => {
    if (formData.imgUrl) {
      const data = new FormData();
      data.append('image', formData.imgUrl);

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

  const addTag = () => {
    if (newTag.trim() !== '') {
      setFormData({
        ...formData,
        tags: formData.tags ? formData.tags + ',' + newTag.trim() : newTag.trim(),
      });
      setNewTag('');
    }
  };

  const removeTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags.split(',').filter((_, i) => i !== index).join(','),
    });
  };

  useEffect(() => {
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/our-service`);
          const slide = res.data.find((slide) => slide.id === parseInt(slideId));
          setFormData({
            title: slide.title,
            description: slide.description,
            tags: slide.tags,
            imgUrl: slide.imgUrl,
          });
          setImagePreview(slide.imgUrl);
        } catch (error) {
          console.error('Error fetching slide:', error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);

  useEffect(() => {
    if (formData.imgUrl !== imagePreview) {
      setImageChanged(true);
    } else {
      setImageChanged(false);
    }
  }, [formData.imgUrl, imagePreview]);

  return (
    <form action="#" className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      {Alert && <CustomAlert message={alert} type="error" open={Alert} setOpen={setAlert} />}
      
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Slide' : 'Add New Slide'}
      </h2>
      <div className="mb-6">
          <label className="mb-2 block text-black">
            Title
          </label>
          <input
            value={formData.title}
            onChange={handleChange}
            
            name="title"
            placeholder="Type your Description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          ></input>
        </div>
      
      <div className="space-y-6">
        {/* Tags Input */}
        <div className="mb-6">
          <label htmlFor="tags" className="mb-2 block text-black">
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="newTag"
              name="newTag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
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
    
        {/* Description Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            rows={6}
            name="description"
            placeholder="Type your Description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          ></textarea>
        </div>
    
        {/* Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black">
            Attach Image
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
    
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-6">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        )}
    
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

export default OurServiceForm;
