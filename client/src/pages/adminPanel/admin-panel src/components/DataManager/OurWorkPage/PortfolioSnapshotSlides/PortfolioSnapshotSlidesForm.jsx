import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuth } from "../../../../../../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const PortfolioSnapshotSlidesForm = ({
  endPoint = "our-work/portfolio-snapshot-slides",
}) => {
  const { slideId } = useParams();
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for submission
  const dispatch = useDispatch();

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImgUrl(file);
      };
      reader.readAsDataURL(file);
      setImageChanged(true);
    }
  };

  const uploadImage = async () => {
    if (imgUrl && imageChanged) {
      const data = new FormData();
      data.append("image", imgUrl);

      try {
        const response = await axios.post(`${baseUrl}image/upload`, data, {
          withCredentials: true,
        });
        return response.data.imgUrl;
      } catch (error) {
        if (error.response?.data?.message === "jwt authentication error") {
          dispatch(checkAuth());
        } else {
          console.error("Error submitting form:", error);
          toast.error(
            error.response?.data?.extraDetails[0] || "Error submitting form"
          );
        }
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit

    const uploadedImageUrl = await uploadImage();

    if (uploadedImageUrl) {
      try {
        if (slideId) {
          await axios.put(
            `${baseUrl}${endPoint}/${slideId}`,
            { image: uploadedImageUrl },
            { withCredentials: true }
          );
        } else {
          await axios.post(
            `${baseUrl}${endPoint}`,
            { image: uploadedImageUrl },
            { withCredentials: true }
          );
        }
        navigate("../");
      } catch (error) {
        if (error.response?.data?.message === "jwt authentication error") {
          dispatch(checkAuth());
        } else {
          console.error("Error submitting form:", error);
          toast.error(
            error.response?.data?.extraDetails[0] || "Error submitting form"
          );
        }
      }
    }
    setLoading(false); // Set loading to false after submission
  };

  useEffect(() => {
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}${endPoint}`, {
            withCredentials: true,
          });
          const slide = res.data.find((item) => `${item.id}` === slideId);
          setImagePreview(slide.image);
        } catch (error) {
          console.error("Error fetching slide:", error);
          if (error.response?.data?.message === "jwt authentication error") {
            dispatch(checkAuth());
          } else {
            toast.error(
              error.response?.data?.extraDetails[0] || "Error fetching slide"
            );
          }
        }
      };
      fetchSlide();
    }
  }, [slideId, endPoint]);

  return (
    <form
      action="#"
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {slideId ? "Update Slide Image" : "Add Slide Image"}
      </h2>

      <div className="mb-6">
        <label className="mb-3 block text-black dark:text-white">
          Attach Image
        </label>
        <input
          type="file"
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {imagePreview && (
        <div className="mb-6">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}

      <button
        type="submit"
        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 disabled:opacity-50"
        disabled={loading} // Disable button when loading
      >
        {loading ? "Submitting..." : slideId ? "Update Image" : "Add Image"}
      </button>
    </form>
  );
};

export default PortfolioSnapshotSlidesForm;
