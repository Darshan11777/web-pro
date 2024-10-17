import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../../../../../../redux/slices/AuthSlice';

const AboutProjectSectionForm = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const initialFormData = {
    year_of_experience: 0,
    complete_projects: 0,
    happy_clients: 0,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${baseUrl}about-us/project`, formData, { withCredentials: true });
      toast.success('Section updated successfully');
      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.extraDetails[0] || 'Error submitting form');
      if (error.response.data.message === 'jwt authentication error') {
        dispatch(checkAuth());
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const res = await axios.get(`${baseUrl}about-us/project`, { withCredentials: true });
        const sectionData = res.data;

        setFormData({
          year_of_experience: sectionData.year_of_experience,
          complete_projects: sectionData.complete_projects,
          happy_clients: sectionData.happy_clients,
        });
      } catch (error) {
        console.error('Error fetching section data:', error);
        if (error.response.data.message === 'jwt authentication error') {
          dispatch(checkAuth());
        }
      }
    };
    fetchSectionData();
  }, []);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
         Update About Project Section 
      </h2>

      <div className="space-y-6">
        {/* Years of Experience Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Years of Experience</label>
          <input
            type="number"
            name="year_of_experience"
            value={formData.year_of_experience}
            onChange={handleChange}
            placeholder="Enter years of experience"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Completed Projects Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Completed Projects</label>
          <input
            type="number"
            name="complete_projects"
            value={formData.complete_projects}
            onChange={handleChange}
            placeholder="Enter completed projects"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Happy Clients Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black">Happy Clients</label>
          <input
            type="number"
            name="happy_clients"
            value={formData.happy_clients}
            onChange={handleChange}
            placeholder="Enter happy clients"
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

export default AboutProjectSectionForm;
