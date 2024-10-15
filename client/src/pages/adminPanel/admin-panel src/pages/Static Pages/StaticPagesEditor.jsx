import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Loader from "../../common/Loader";
import { toast } from "react-toastify";

export default function StaticPagesEditor() {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isNew, setIsNew] = useState(!pageId);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchSlides = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseUrl}static-pages/`);
      if (pageId) {
        const filteredData = res.data.find((item) => item.id == pageId);
        setData({
          title: filteredData.header, // Rename 'header' to 'title'
          shortText: filteredData.short_text,
          longText: filteredData.long_text,
          status: filteredData.status, // Assume this is already a boolean
        });
      }
    } catch (error) {
      console.error("Error in fetching static pages", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isNew) {
      fetchSlides();
    }
  }, [pageId, isNew]);

  const handleChange = (field) => (event, editor) => {
    const content = editor ? editor.getData() : event.target.value;
    setData((prevData) => ({ ...prevData, [field]: content }));
  };

  const handleStatusChange = (event) => {
    setData((prevData) => ({ ...prevData, status: event.target.value === "true" ? 1 : 0  }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const finalData = {
        header: data.title,  // Submit title as header
        short_text: data.shortText,
        long_text: data.longText,
        status: data.status, // This will be true or false
      };

      if (isNew) {
        await axios.post(`${baseUrl}static-pages/`, finalData);
        toast.success("Static page created successfully!");
      } else {
        await axios.put(`${baseUrl}static-pages/${pageId}`, finalData);
        toast.success("Static page updated successfully!");
      }
      navigate('../');
    } catch (error) {
      console.error("Error saving static page", error);
      toast.error("Error saving static page");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{isNew ? "Create New Static Page" : "Edit Static Page"}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Title</h2>
          <input
            type="text"
            onChange={(event) => handleChange("title")(event)}
            value={data.title || ""}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter title here"
          />
        </div>

        {/* Short Text Textarea */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Short Text</h2>
          <textarea
            onChange={(event) => handleChange("shortText")(event)}
            value={data.shortText || ""}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter short text here"
          />
        </div>

        {/* Long Text CKEditor */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Long Text</h2>
          <CKEditor
            editor={ClassicEditor}
            data={data.longText || ""}
            onChange={handleChange('longText')}
          />
        </div>

        {/* Status Radio Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Would you like the Page to be visible on  Website?</h2>
          <div className="flex space-x-4">
            <label
              className={`cursor-pointer px-6 py-2 rounded-lg text-lg font-medium transition-colors shadow-md ${
                data.status === 1 ? "bg-blue-500 text-white shadow-blue-500/50" : "bg-white text-gray-700 shadow-gray-300"
              }`}
            >
              <input
                type="radio"
                name="status"
                value="true"
                checked={data.status === 1}
                onChange={handleStatusChange}
                className="hidden"
              />
              Yes
            </label>
            
            <label
              className={`cursor-pointer px-6 py-2 rounded-lg text-lg font-medium transition-colors shadow-md ${
                data.status === 0 ? "bg-blue-500 text-white shadow-blue-500/50" : "bg-white text-gray-700 shadow-gray-300"
              }`}
            >
              <input
                type="radio"
                name="status"
                value="false"
                checked={data.status === 0}
                onChange={handleStatusChange}
                className="hidden"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[300px] mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-200"
        >
          {isNew ? "Create" : "Update"} Static Page
        </button>
      </form>
    </div>
  );
}
