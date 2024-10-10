import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CustomAlert from "../../../../../../../component/Alerts/CustomAlert";
import { FaStar } from "react-icons/fa"; // Import a star icon
import { toast } from "react-toastify";

const OurReviewForm = ({ existingData }) => {
  const { slideId } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    review: "",
    rating: 0,
    imgUrl: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(
    existingData?.imgUrl || null
  );
  const [imageChanged, setImageChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (newRating) => {
    setFormData({
      ...formData,
      rating: newRating,
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
    setLoading(true);
    let uploadedImageUrl = formData.imgUrl;

    if (imageChanged) {
      uploadedImageUrl = await uploadImage();
    }

    const finalData = {
      name: formData.name,
      review: formData.review,
      email: formData.email,
      rating: formData.rating,
      imgUrl: uploadedImageUrl,
    };

    try {
      if (slideId) {
        await axios.put(`${baseUrl}slides/reviews/${slideId}`, finalData);
      } else {
        await axios.post(`${baseUrl}slides/reviews`, finalData);
      }
      navigate('../');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response.data.extraDetails[0]);
      // setError('There was an error submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async () => {
    if (formData.imgUrl) {
      const data = new FormData();
      data.append("image", formData.imgUrl);

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
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/reviews`);
          const slide = res.data.find(
            (slide) => slide.id === parseInt(slideId)
          );
          setFormData(slide);
          setImagePreview(slide.imgUrl);
        } catch (error) {
          console.error("Error fetching slide:", error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      {error && (
        <CustomAlert
          message={error}
          type="error"
          open={true}
          setOpen={() => setError("")}
        />
      )}

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {existingData ? "Update Review" : "Add New Review"}
      </h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700"
          >
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>

          <div className=" items-center flex item-center" id="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className="cursor-pointer"
                size={24}
                onClick={() => handleRatingChange(star)}
                color={formData.rating >= star ? "#ffc107" : "#e4e5e9"}
              />
            ))}
          </div>
        </div>
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Attach Image
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
            accept="image/*"
            onChange={handleImageChange}
          />

          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="aspect-square h-40 object-cover rounded-full mx-auto"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-opacity-90 w-full text-white font-medium py-2 px-4 rounded-md focus:outline-none"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : existingData
              ? "Update Review"
              : "Add Review"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default OurReviewForm;
