import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import { Pagination } from "@mui/material";

const News = () => {
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to show per page
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    const res = await axios.get(baseUrl + "slides/news");
    setSlides(res.data);
  };

  const deleteSlide = async (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      await axios.delete(baseUrl + `slides/news/${id}`);
      fetchSlides();
    }
  };

  const startEditing = (slide) => {
    navigate(`/admin/slides/news/${slide.id}/edit`);
  };

  const addNewSlide = () => {
    navigate("/admin/slides/news/new");
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSlides = slides.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <Breadcrumb pageName="Manage News Section Slides" />
        <div className="mb-4 flex justify-end">
          <button
            onClick={addNewSlide}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            Add New Slide
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tags
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentSlides.map((slide) => (
                <tr key={slide.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={slide.imgUrl}
                      alt={slide.description}
                      className="h-12 w-24 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900 line-clamp-3">
                      {slide.description}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {slide.tags
                      .split(",")
                      .map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-indigo-100 text-indigo-600 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => startEditing(slide)}
                      className="text-indigo-600 hover:text-indigo-900 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSlide(slide.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <Pagination
            count={Math.ceil(slides.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
