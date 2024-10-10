import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OurProcessHeaderDataForm = ({ existingData }) => {
  const navigate = useNavigate(); 
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    section_name: '',
    header: '',
    highlighted_word: '',
   
  };

  const [formData, setFormData] = useState(initialFormData);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // const finalData = {
    //   header: formData.header,
    //   subheader: formData.subheader,
    //   description: formData.description,
    //   bg_video_url: uploadedBgVideoUrl,
    //   below_img_url: uploadedBelowImgUrl
    // };

    try {
      await axios.put(`${baseUrl}section/header/our-process`, formData);
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
    }
  };

  useEffect(() => {
    const fetchSlide = async () => {
      try {
        const res = await axios.get(`${baseUrl}section/header/our-process`);
        const slide = res.data[0];

        setFormData({
            section_name: slide.section_name,
            header: slide.header,
            highlighted_word: slide.highlighted_word,
          
        });
       
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
          <label className="mb-2 block text-black">Section Name</label>
          <input
            type="text"
            name="section_name"
            value={formData.section_name}
            onChange={handleChange}
            placeholder="Type your section name"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>
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
          <label className="mb-2 block text-black">Highlighted Header Text</label>
          <input
            type="text"
            name="highlighted_word"
            value={formData.highlighted_word}
            onChange={handleChange}
            placeholder="Type your subheader"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>


       
    
        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
           Update Section
        </button>
      </div>
    </form>
  );
};

export default OurProcessHeaderDataForm ;
