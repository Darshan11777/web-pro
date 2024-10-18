import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuth } from "../../../../../../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";

const ItServicesHeaderForm = () => {
  const navigate = useNavigate();

  const initialFormData = {
    headerLine1: "",
    headerLine2: "",
    description: "",
    tags: "",
    image: "", // The image URL or the image file
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imagePreview, setImagePreview] = useState(null);
  const [newTag, setNewTag] = useState("");
  const [isImageChanged, setIsImageChanged] = useState(false); // Track if image has changed

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
        setIsImageChanged(true); // Mark the image as changed
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setFormData({ ...formData, image: null });
      setIsImageChanged(false); // No new image selected
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If the image is changed, upload it, otherwise use the existing one
    const uploadedImageUrl = isImageChanged ? await uploadImage() : formData.image;

    const finalData = {
      header_line_1: formData.headerLine1,
      header_line_2: formData.headerLine2,
      description: formData.description,
      tags: formData.tags,
      image: uploadedImageUrl || formData.image,
    };

    try {
      await axios.put(`${baseUrl}our-services/it-services-header`, finalData,{withCredentials:true});
      navigate("../");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.extraDetails[0] || "An error occurred");

      if (error.response.data.message === "jwt authentication error") {
        dispatch(checkAuth());
      }
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
        return response.data.image;
      } catch (error) {
        console.error("Error uploading the file", error);
        return null;
      }
    }
    return null;
  };

  const addTag = () => {
    if (newTag.trim() !== "") {
      setFormData({
        ...formData,
        tags: formData.tags ? formData.tags + "," + newTag.trim() : newTag.trim(),
      });
      setNewTag("");
    }
  };

  const removeTag = (index) => {
    setFormData({
      ...formData,
      tags: formData.tags.split(",").filter((_, i) => i !== index).join(","),
    });
  };

  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const res = await axios.get(`${baseUrl}our-services/it-services-header`);
        const slide = res.data;
        if (slide) {
          setFormData({
            headerLine1: slide.header_line_1,
            headerLine2: slide.header_line_2,
            description: slide.description,
            tags: slide.tags,
            image: slide.image,
          });
          setImagePreview(slide.image);
          setIsImageChanged(false); // No change to image initially
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
        It Services Header
      </h2>

      <div className="mb-6">
        <label className="mb-2 block text-black">Header Line 1</label>
        <input
          value={formData.headerLine1}
          onChange={handleChange}
          name="headerLine1"
          placeholder="Type Header Line 1"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-black">Header Line 2</label>
        <input
          value={formData.headerLine2}
          onChange={handleChange}
          name="headerLine2"
          placeholder="Type Header Line 2"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
        />
      </div>

      {/* Tags Input */}
      <div className="mb-6">
        <label htmlFor="tags" className="mb-2 block text-black">Tags</label>
        <div className="flex items-center">
          <input
            type="text"
            id="newTag"
            name="newTag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
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
          {formData.tags.split(",").map((tag, index) =>
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
        <label className="mb-2 block text-black">Description</label>
        <textarea
          value={formData.description}
          onChange={handleChange}
          rows={6}
          name="description"
          placeholder="Type your Description"
          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="mb-3 block text-black">Attach Image</label>
        <input
          type="file"
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary"
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
          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ItServicesHeaderForm;
