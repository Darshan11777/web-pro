import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Breadcrumbs/Breadcrumb";
import ReactPaginate from "react-paginate"; // Import ReactPaginate
import DeleteIcon from "../../../../../../../component/Icons/DeleteIcon";

const FAQs = () => {
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const itemsPerPage = 4; // Number of items to show per page
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    const res = await axios.get(baseUrl + "slides/faqs");
    setSlides(res.data);
  };

  const deleteSlide = async (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      await axios.delete(baseUrl + `slides/faqs/${id}`);
      fetchSlides();
    }
  };

  const startEditing = (slide) => {
    navigate(`${slide.id}/edit`);
  };

  const addNewSlide = () => {
    navigate("new");
  };

  const handlePageClick = (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage);
  };

  // Search filtering
  const filteredSlides = searchTerm
    ? slides.filter(
        (slide) =>
          slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          slide.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : slides;

  // Data Slicing for current page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentSlides = filteredSlides.slice(indexOfFirstItem, indexOfLastItem);
  const highlightSearchTerm = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, '<span class="">$1</span>');
  };
  return (
    <div className="container mx-auto mt-10">
      <Breadcrumb pageName="Manage FAQs Slides" />
      <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-3">
    <input
      type="text"
      placeholder="Search by description or tags..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="placeholder-black w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
    />
    <button
      type="button"
      className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
        <button
          onClick={addNewSlide}
          className="bg-green-500 flex items-center space-x-2 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <span>Add New Slide</span>
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 shadow-2">
            <th className="p-4 text-left">Questions</th>
            <th className="p-4 text-left">Answers</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentSlides.map((slide) => (
            <tr key={slide.id} className="hover:bg-gray-100">
                <td className="p-4">
    <p className="text-sm" dangerouslySetInnerHTML={{ __html: highlightSearchTerm(slide.title) }} />
  </td>

              <td className="p-4 max-w-xs   " >
              <p className="text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: highlightSearchTerm(slide.description) }}>

              </p>
              </td>
              <td className="p-4">
              <button
                  className="hover:text-primary pr-3"
                  onClick={() => startEditing(slide)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
                  </svg>
                </button>
                <button
                  className="hover:text-red-500"
                  onClick={() => deleteSlide(slide.id)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        pageCount={Math.ceil(filteredSlides.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center space-x-2 mt-4"
        pageClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-indigo-500 hover:text-white transition duration-200"
        activeClassName="bg-indigo-500 text-white"
        previousLabel="<"
        nextLabel=">"
      />
    </div>
  );
};

export default FAQs;
