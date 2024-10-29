import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../redux/slices/AuthSlice';

const PortfolioHeader = ({endPoint='our-work/portfolio-header'}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;


  

  const initialFormData = {
    header_line_1: '',
    header_line_2: '',
    project_video: '',
    project_img: '',
    short_description: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [projectVideoPreview, setProjectVideoPreview] = useState(null);
  const [projectImgPreview, setProjectImgPreview] = useState(null);
  const [projectVideoFile, setProjectVideoFile] = useState(null);
  const [projectImgFile, setProjectImgFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (file) => {
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

useEffect(() => {

const fetchData=async()=>{
  const res= await axios.get(baseUrl+endPoint,{
    withCredentials: true,
  });
  <video loading="lazy" src="https://res.cloudinary.com/dbuuc0cdy/video/upload/v1728538850/webpro/mpe7afwycvs2iqgtaoqm.mp4" autoplay="" loop="" class="rounded-[40px] object-cover w-[300px] h-[100%]" aria-hidden="true"></video>
  
  console.log(res.data)
  setFormData({
    header_line_1: res.data.header_line_1,
    header_line_2: res.data.header_line_2,
    project_video: res.data.project_video,
    project_img: res.data.project_img,
    short_description: res.data.short_description
  })
  setProjectVideoPreview(res.data.project_video)
  setProjectImgPreview(res.data.project_img)
  setProjectVideoFile(null)
  setProjectImgFile(null)

}


  fetchData()
}, [])



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProjectVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectVideoPreview(reader.result);
        setProjectVideoFile(file);
      };
      reader.readAsDataURL(file);
    } else {
      setProjectVideoPreview(null);
      setProjectVideoFile(null);
    }
  };

  const handleProjectImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImgPreview(reader.result);
        setProjectImgFile(file);
      };
      reader.readAsDataURL(file);
    } else {
      setProjectImgPreview(null);
      setProjectImgFile(null);
    }

  };
  console.log( "project_video",formData.project_video);
  console.log( "projectVideoFile",projectVideoFile);
  console.log( "projectImgFile",projectImgFile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedProjectVideoUrl = projectVideoFile ? await uploadFile(projectVideoFile) : formData.project_video || "";
    console.log( "projectVideoFileaaaaa",{projectVideoFile,formDataProject:formData.project_video,uploadedProjectVideoUrl});
    const uploadedProjectImgUrl = projectImgFile ? await uploadFile(projectImgFile) : formData.project_img || "";

    const finalData = {
      header_line_1: formData.header_line_1,
      header_line_2: formData.header_line_2,
      project_video: uploadedProjectVideoUrl,
      project_img: uploadedProjectImgUrl,
      short_description: formData.short_description
    };

    try {
      await axios.put(`${baseUrl}${endPoint}`, finalData, {
        withCredentials: true,
      });
      toast.success('Slide updated successfully');
      navigate('../');
    } catch (error) {
      if (error.response?.data?.message === 'jwt authentication error') {
        dispatch(checkAuth());
      } else {
        console.error('Error submitting form:', error);
        toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">Update Project Information</h2>

      <div className="space-y-6">
        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 1</label>
          <input
            type="text"
            name="header_line_1"
            value={formData.header_line_1}
            onChange={handleChange}
            placeholder="Type header line 1"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-black">Header Line 2</label>
          <input
            type="text"
            name="header_line_2"
            value={formData.header_line_2}
            onChange={handleChange}
            placeholder="Type header line 2"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-black">Short Description</label>
          <textarea
            value={formData.short_description}
            onChange={handleChange}
            rows={4}
            name="short_description"
            placeholder="Type a short description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-black"> Project Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleProjectVideoChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {projectVideoPreview && (
          <div className="mb-6">
            <video controls className="w-full h-48 object-cover rounded-md" src={projectVideoPreview} />
          </div>
        )}

        <div className="mb-6">
          <label className="mb-3 block text-black"> Project Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProjectImgChange}
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
          />
        </div>

        {projectImgPreview && (
          <div className="mb-6">
            <img src={projectImgPreview} alt="Project Preview" className="w-full h-48 object-cover rounded-md" />
          </div>
        )}
      </div>

      <button
        type="submit"
        className={`mt-6 w-full rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default PortfolioHeader;
