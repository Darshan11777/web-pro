import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const TeamDetailsForm = ({ onSubmit, existingData }) => {
  const { teamMemberId } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    role: '',
    image: '',  // Changed from imgUrl to image
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const uploadImage = async (file) => {
    if (file) {
      const data = new FormData();
      data.append('image', file);
      try {
        const response = await axios.post(`${baseUrl}image/upload`, data);
        return response.data.imgUrl;
      } catch (error) {
        console.error('Error uploading image:', error);
        return null;
      }
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImageUrl = imageFile ? await uploadImage(imageFile) : formData.image;

    const finalData = {
      name: formData.name,
      role: formData.role,
      image: uploadedImageUrl, // Use the uploaded image URL
    };

    try {
      if (teamMemberId) {
        // Update existing team member
        await axios.put(`${baseUrl}about-us/team-details/${teamMemberId}`, finalData,{withCredentials:true});
      } else {
        // Add new team member
        await axios.post(`${baseUrl}about-us/team-details`, finalData,{withCredentials:true});
      }

      navigate('../');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.response?.data?.message || 'An error occurred');
      if(error.response.data.message === "jwt authentication error"){
        navigate('/admin-panel/login')
    }}
  };

  useEffect(() => {
    if (teamMemberId) {
      const fetchTeamMember = async () => {
        try {
          const res = await axios.get(`${baseUrl}about-us/team-details`);
          const teamMember = res.data.find((member) => member.id === parseInt(teamMemberId));
          setFormData({
            name: teamMember.name,
            role: teamMember.role,
            image: teamMember.image,
          });
          setImagePreview(teamMember.image); // Show existing image preview
        } catch (error) {
          console.error('Error fetching team member:', error);
        }
      };
      fetchTeamMember();
    }
  }, [teamMemberId]);

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? 'Update Team Member' : 'Add New Team Member'}
      </h2>

      <div className="space-y-6">
        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="mb-2 block text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Role Input */}
        <div className="mb-6">
          <label htmlFor="role" className="mb-2 block text-black">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="mb-2 block text-black">
            Upload Image
          </label>
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

        {/* Submit Button */}
        <button
          type="submit"
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90"
        >
          {existingData ? 'Update Team Member' : 'Add Team Member'}
        </button>
      </div>
    </form>
  );
};

export default TeamDetailsForm;
