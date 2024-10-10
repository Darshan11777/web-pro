import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";
import ReactPaginate from "react-paginate";

const OurProcess = () => {
  const [slides, setSlides] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Set your desired items per page
  const maxTagsToShow = 3; // Limit for displaying tags
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    const res = await axios.get(`${baseUrl}slides/our-process`);
    setSlides(res.data);
  };

  const handleSearch = () => {
    setCurrentPage(0); // Reset to the first page on search
  };

  const filteredSlides = slides.filter(slide =>
    slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    slide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    slide.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate current slides for pagination
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentSlides = filteredSlides.slice(indexOfFirstItem, indexOfLastItem);

  const deleteSlide = async (id) => {
    await axios.delete(`${baseUrl}slides/our-process/${id}`);
    fetchSlides(); // Refresh the list
  };

  const startEditing = (slide) => {
    navigate(`/admin/slides/our-process/${slide.id}/edit`); // Navigate to edit page
  };

  const addNewSlide = () => {
    navigate('/admin/slides/our-process/new'); // Navigate to add new slide page
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="text-red-500">{part}</span>
      ) : part
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb pageName="Manage Our Process Slides" />

        {/* Search and Add New Slide Section */}
        <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={handleSearch}
              className="placeholder-black w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Search Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <button
            onClick={addNewSlide}
            className="bg-green-500 flex items-center space-x-2 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add New Slide</span>
          </button>
        </div>

        {/* Slides Table */}
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 shadow-2">
              <th className="p-4 text-left w-1/4">Title</th>
              <th className="p-4 text-left w-1/2 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">Description</th>
              <th className="p-4 text-left w-1/4">Tags</th>
              <th className="p-4 text-left w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentSlides.map((slide) => (
              <tr key={slide.id} className="hover:bg-gray-100">
                <td className="p-4">{highlightText(slide.title)}</td>
                <td className="p-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {highlightText(slide.description)}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {slide.tags.split(",").slice(0, maxTagsToShow).map((tag, index) => (
                      <span key={index} className="inline-block bg-success text-success rounded-full bg-opacity-10 px-3 py-1 text-sm font-semibold">
                        {highlightText(tag.trim())}
                      </span>
                    ))}
                    {slide.tags.split(",").length > maxTagsToShow && (
                      <span className="inline-block text-indigo-600 px-3 py-1 text-sm font-semibold">...</span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <button className="hover:text-blue-500 pr-3" onClick={() => startEditing(slide)}>
                    {/* Edit Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                      <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
                    </svg>
                  </button>
                 {/* delete icon */}
                  <button
                  className="hover:text-red-500"
                  onClick={() => deleteSlide(slide.id)}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                      fill=""
                    />
                    <path
                      d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                      fill=""
                    />
                    <path
                      d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                      fill=""
                    />
                    <path
                      d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                      fill=""
                    />
                  </svg>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
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
    </div>
  );
};

export default OurProcess;
