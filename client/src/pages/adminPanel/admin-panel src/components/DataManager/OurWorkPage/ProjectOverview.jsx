import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuth } from "../../../../../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const ProjectOverviewForm = ({ endPoint = "our-work/project-overview" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialFormData = [
    { header: "", image: "" ,id:1},
    { header: "", image: "",id:2}
  ]; // Two sections initialized with empty headers and images

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreviews, setImagePreviews] = useState([null, null]);
  const [isImageChanged, setIsImageChanged] = useState([false, false]);
  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e, index) => {
    const newFormData = [...formData];
    newFormData[index][e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagePreviews = [...imagePreviews];
        newImagePreviews[index] = reader.result;
        setImagePreviews(newImagePreviews);

        const newFormData = [...formData];
        newFormData[index].image = file;
        setFormData(newFormData);

        const newImageChanged = [...isImageChanged];
        newImageChanged[index] = true;
        setIsImageChanged(newImageChanged);
      };
      reader.readAsDataURL(file);
    } else {
      const newImagePreviews = [...imagePreviews];
      newImagePreviews[index] = null;
      setImagePreviews(newImagePreviews);

      const newFormData = [...formData];
      newFormData[index].image = null;
      setFormData(newFormData);

      const newImageChanged = [...isImageChanged];
      newImageChanged[index] = false;
      setIsImageChanged(newImageChanged);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = await Promise.all(
      formData.map(async (data, index) => ({
        header: data.header,
        image: isImageChanged[index] ? await uploadImage(index) : data.image,
      }))
    );

    try {
      await axios.put(`${baseUrl}${endPoint}`, { sections: updatedData }, { withCredentials: true });
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

  const uploadImage = async (index) => {
    if (formData[index].image && isImageChanged[index]) {
      const data = new FormData();
      data.append("image", formData[index].image);

      try {
        const response = await axios.post(`${baseUrl}image/upload`, data, { withCredentials: true });
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
        if (slide ) {
          setFormData(slide);
          setImagePreviews(slide.map(section => section.image));
          setIsImageChanged([false, false]);
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
        Project Overview Section Form
      </h2>

      {formData.map((_, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Project {index + 1}</h3>

          {/* Header Input */}
          <div className="mb-6">
            <label className="mb-2 block text-black">Header</label>
            <input
              type="text"
              name="header"
              value={formData[index].header}
              onChange={(e) => handleChange(e, index)}
              placeholder="Enter header text"
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
              onChange={(e) => handleImageChange(e, index)}
            />
          </div>

          {/* Image Preview */}
          {imagePreviews[index] && (
            <div className="mb-6">
              <label className="mb-3 block text-black">Preview Image</label>
              <img src={imagePreviews[index]} alt={`Preview ${index + 1}`} className="max-h-52 w-full object-contain" />
            </div>
          )}
        </div>
      ))}

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

export default ProjectOverviewForm;
