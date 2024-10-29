import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuth } from "../../../../../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const ProjectHighlightsForm = ({ endPoint = "our-work/project-highlights" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialFormData = {
    description: "",
    image: "",
    projectTitle: "", // Updated state name to match label
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
        setFormData({ ...formData, image: file });
        setIsImageChanged(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setFormData({ ...formData, image: null });
      setIsImageChanged(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true at start of submission

    const uploadedImageUrl = isImageChanged ? await uploadImage() : formData.image;

    const finalData = {
      description: formData.description,
      image: uploadedImageUrl || formData.image,
      projectTitle: formData.projectTitle, // Updated to match state name
    };

    try {
      await axios.put(`${baseUrl}${endPoint}`, finalData, { withCredentials: true });
      navigate("../");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.extraDetails[0] || "An error occurred");

      if (error.response.data.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  const uploadImage = async () => {
    if (formData.image && isImageChanged) {
      const data = new FormData();
      data.append("image", formData.image);

      try {
        const response = await axios.post(`${baseUrl}image/upload`, data, {
          withCredentials: true,
        });
        return response.data.imgUrl;
      } catch (error) {
        console.error("Error uploading the file", error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const res = await axios.get(`${baseUrl}${endPoint}`);
        const slide = res.data;
        if (slide) {
          setFormData({
            description: slide.description,
            image: slide.image,
            projectTitle: slide.projectTitle || "", // Updated to match state name
          });
          setImagePreview(slide.image);
          setIsImageChanged(false);
        }
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    };
    fetchSlideData();
  }, []);

  return (
    <form
      action="#"
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        Project Highlights Section Form
      </h2>

      {/* Description Input */}
      <div className="mb-6">
        <label className="mb-2 block text-black">Project Description</label>
        <textarea
          value={formData.description}
          onChange={handleChange}
          rows={4}
          name="description"
          placeholder="Type a short description"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
        ></textarea>
      </div>

      {/* Project Title Input */}
      <div className="mb-6">
        <label className="mb-2 block text-black">Project Title</label>
        <input
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
          placeholder="Enter project title"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="mb-3 block text-black">Project Image</label>
        <input
          type="file"
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:py-3 file:px-5 file:bg-primary file:bg-opacity-10 focus:border-primary"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* Image Preview */}
      {imagePreview && (
        <div className="mb-6">
          <label className="mb-3 block text-black">Preview Image</label>
          <img src={imagePreview} alt="Preview" className="max-h-52 w-full object-contain" />
        </div>
      )}

      <div className="mb-6 flex justify-end gap-4">
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 ${loading && 'opacity-50 cursor-not-allowed'}`}
        >
          {loading ? "Submitting..." : "Submit"} {/* Show loading text */}
        </button>
      </div>
    </form>
  );
};

export default ProjectHighlightsForm;
