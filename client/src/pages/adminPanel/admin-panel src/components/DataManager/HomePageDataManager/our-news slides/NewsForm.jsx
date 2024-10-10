import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Alerts from "../../../../pages/UiElements/Alerts";
import CustomAlert from "../../../../../../../component/Alerts/CustomAlert";
import { toast } from "react-toastify";

const NewsForm = ({ onSubmit, existingData }) => {
  const { slideId } = useParams(); // Get slideId from URL parameters
  const navigate = useNavigate(); // Initialize useNavigate

  const initialFormData = {
    description: "",
    tags: "",
    imgUrl: "", // Set to null initially for a cleaner state
  };
  const [formData, setFormData] = useState(initialFormData);

  const [imagePreview, setImagePreview] = useState(
    existingData?.imgUrl || null
  );
  const [imageChanged, setImageChanged] = useState(false); // Track if the image has changed
  const [newTag, setNewTag] = useState(""); // State for the new tag input

  const [showAlert, setShowAlert] = useState(false);

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
        setFormData({ ...formData, imgUrl: file }); // Store the file object
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null); // Clear the preview if no file is selected
      setFormData({ ...formData, imgUrl: null }); // Reset imgUrl
    }
  };
  console.log("showAlert", showAlert);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the image if there is one
    let uploadedImageUrl = formData.imgUrl;
    if (imageChanged) {
      uploadedImageUrl = await uploadImage();
    }
    // Prepare form data for submission
    const finalData = {
      description: formData.description,
      tags: formData.tags,
      imgUrl: uploadedImageUrl, // Use the uploaded image URL if available
    };

    // Call the onSubmit function with the final data
    try {
      if (slideId) {
        // Update existing slide
        await axios.put(`${baseUrl}slides/news/${slideId}`, finalData);
      } else {
        // Add new slide
        await axios.post(`${baseUrl}slides/news`, finalData);
      }

      // Navigate back to the slide list after submission
      navigate("../");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response.data.extraDetails[0]);
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

        return response.data.imgUrl; // Adjust based on your API response structure
      } catch (error) {
        console.error("Error uploading the file", error);
        return null; // Return null if there's an error
      }
    }
    return null; // Return null if no image is uploaded
  };
  // Function to add a new tag
  const addTag = () => {
    if (newTag.trim() !== "") {
      setFormData({
        ...formData,
        tags: formData.tags
          ? formData.tags + "," + newTag.trim()
          : newTag.trim(),
      });
      setNewTag(""); // Clear the input field
    }
  };

  // Function to remove a tag
  const removeTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags
        .split(",")
        .filter((_, i) => i !== index)
        .join(),
    });
  };
  console.log("formData.tags", formData.tags);
  useEffect(() => {
    // Fetch slide data if in edit mode (slideId exists)
    if (slideId) {
      const fetchSlide = async () => {
        try {
          const res = await axios.get(`${baseUrl}slides/news`);
          const slide = res.data.find(
            (slide) => slide.id === parseInt(slideId)
          );

          setFormData({
            description: slide.description,
            tags: slide.tags,
            imgUrl: slide.imgUrl,
          });
          setImagePreview(slide.imgUrl);
        } catch (error) {
          console.error("Error fetching slide:", error);
        }
      };
      fetchSlide();
    }
  }, [slideId]);

  // Update imageChanged state when a new image is selected
  useEffect(() => {
    if (formData.imgUrl !== imagePreview) {
      setImageChanged(true);
    } else {
      setImageChanged(false);
    }
  }, [formData.imgUrl, initialFormData.imgUrl]);

  return (
    <form
      action="#"
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      {showAlert && (
        <CustomAlert
          message="Please add at least one tag."
          type="error"
          open={showAlert}
          setOpen={setShowAlert}
        />
      )}

      <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
        {existingData ? "Update Slide" : "Add New Slide"}
      </h2>

      <div className="space-y-6">
        {/* Tags Input */}
        <div className="mb-6">
          <label
            htmlFor="tags"
            className="mb-2 block text-black dark:text-white"
          >
            Tags
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="newTag"
              name="newTag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
            {formData.tags.split(",").map(
              (tag, index) =>
                tag.length > 0 && (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mr-2 mb-2"
                  >
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
            )}
          </div>
        </div>

        {/* Description Input */}
        <div className="mb-6">
          <label className="mb-2 block text-black dark:text-white">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            rows={6}
            name="description"
            placeholder="Type your Description"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="mb-3 block text-black dark:text-white">
            Attach Image
          </label>
          <input
            type="file"
            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
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
          {existingData ? "Update Slide" : "Add Slide"}
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
