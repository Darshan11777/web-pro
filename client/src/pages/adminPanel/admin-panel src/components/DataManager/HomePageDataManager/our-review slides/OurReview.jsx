import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Breadcrumbs/Breadcrumb";
import ReactPaginate from "react-paginate"; // Import ReactPaginate
import StarRating from "../../../../../../../component/Rating/Rating";
const Review = () => {
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Number of items per page
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    const res = await axios.get(`${baseUrl}slides/reviews`);
    setSlides(res.data);
  };

  const deleteSlide = async (id) => {
    if (window.confirm("Are you sure you want to delete this slide?")) {
      await axios.delete(`${baseUrl}slides/reviews/${id}`);
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
    setCurrentPage(event.selected);
  };

  // Search filtering
  const filteredSlides = searchTerm
    ? slides.filter(
        (slide) =>
          slide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          slide.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          slide.review.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : slides;

  // Data slicing for current page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentSlides = filteredSlides.slice(indexOfFirstItem, indexOfLastItem);

  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="font-bold text-red-600">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mx-auto mt-10">
      
      <Breadcrumb pageName="Manage Our Review Slides" />
      <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Search by name, email or review..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="placeholder-black w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out"
        />
        <button
          onClick={addNewSlide}
          className="bg-green-500 flex items-center space-x-2 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          <span>Add New Slide</span>
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 shadow-2">
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            {/* <th className="p-4 text-left">Tags</th> */}
            <th className="p-4 text-left mx-w-[200px]">Review</th>
            <th className="p-4 text-left mx-w-[200px]">Rating</th>
            <th className="p-4 text-left mx-w-[200px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentSlides.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="p-4">
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-[60px] aspect-square object-cover rounded-full"
                />
              </td>
              <td className="p-4">
                <p className="text-sm">{highlightText(item.name)}</p>
              </td>
              <td className="p-4">
                <p className="text-sm">{highlightText(item.email)}</p>
              </td>
              <td className="p-4  mx-w-[200px] overflow-hidden ">
                <p className="text-sm line-clamp-2">
                  {highlightText(item.review)}
                </p>
              </td>
              <td className="p-4  ">
                <StarRating rating={item.rating} size={20} />
              </td>

              <td className="p-4 ">
                <div className="flex ">
                  <button
                    className="hover:text-indigo-500 pr-3"
                    onClick={() => startEditing(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M18.414062 2C18.158062 2 17.902031 2.0979687 17.707031 2.2929688L15.707031 4.2929688L14.292969 5.7070312L3 17L3 21L7 21L21.707031 6.2929688C22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062L19.121094 2.2929688C18.926094 2.0979687 18.670063 2 18.414062 2zM18.414062 4.4140625L19.585938 5.5859375L18.292969 6.8789062L17.121094 5.7070312L18.414062 4.4140625zM15.707031 7.1210938L16.878906 8.2929688L6.171875 19L5 19L5 17.828125L15.707031 7.1210938z"></path>
                    </svg>
                  </button>
                  <button
                    className="hover:text-red-500"
                    onClick={() => deleteSlide(item.id)}
                  >
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502Z"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        pageCount={Math.ceil(filteredSlides.length / itemsPerPage)} // Ensure this matches your pagination logic
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick} // Ensure this is your function for handling page clicks
        containerClassName="flex justify-center space-x-2 mt-4" // Tailwind styles for the pagination container
        pageClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-indigo-500 hover:text-white transition duration-200" // Tailwind styles for individual page items
        pageLinkClassName="flex items-center justify-center w-full h-full" // Center link styles
        previousClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-indigo-500 hover:text-white transition duration-200" // Previous button styles
        nextClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-indigo-500 hover:text-white transition duration-200" // Next button styles
        activeClassName="bg-indigo-500 text-white" // Active page styles
        previousLabel={
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
            className="h-4 w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        }
        nextLabel={
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
            className="h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        }
      />
    </div>
  );
};

export default Review;
