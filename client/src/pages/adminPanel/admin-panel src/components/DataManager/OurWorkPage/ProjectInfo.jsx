import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuth } from "../../../../../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const ProjectInfo = ({ endPoint = "our-work/project-info" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialFormData = {
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`${baseUrl}${endPoint}`, formData, { withCredentials: true });
      navigate("../");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.extraDetails[0] || "An error occurred");

      if (error.response.data.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const res = await axios.get(`${baseUrl}${endPoint}`);
        const slide = res.data;
        if (slide) {
          setFormData({
            description: slide.description,
          });
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
        Project Info Section Form
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

      <div className="mb-6 flex justify-end gap-4">
        <button
          type="submit"
          disabled={loading}
          className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 ${loading && 'opacity-50 cursor-not-allowed'}`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ProjectInfo;
