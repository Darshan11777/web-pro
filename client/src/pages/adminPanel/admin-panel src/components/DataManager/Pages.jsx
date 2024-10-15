import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import ReactPaginate from 'react-paginate';

const Pages = () => {
  const [slides, setSlides] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const [searchTerm, setSearchTerm] = useState('');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
 
  const navigate=useNavigate()
  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try{

      // const res = await axios.get(`${baseUrl}pages/`,{},{ withCredentials: true,});
      const res = await axios.get(`${baseUrl}pages/`,{},{ withCredentials: true,headers: {
        'Content-Type': 'application/json',
      }});
      
      setSlides(res.data);
    }catch(error){
      console.log(error.response.data)
   if(error.response.data.message==="jwt authentication error"){
    navigate('/admin/pages')
    }
  };}
  console.log( "slides",slides);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const filteredSlides = searchTerm
    ? slides.filter((slide) =>
        slide.page_name.toLowerCase().includes(searchTerm.toLowerCase())||
        slide.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : slides;

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  // let currentSlides = filteredSlides.slice(indexOfFirstItem, indexOfLastItem) || [];
  let currentSlides = Array.isArray(filteredSlides) 
  ? filteredSlides.slice(indexOfFirstItem, indexOfLastItem) 
  : [];

  const highlightSearchTerm = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, '<span class="font-bold text-red-600">$1</span>');
  };


  return (
    <div className="container mx-auto mt-10">
      <Breadcrumb pageName="Pages" />
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
        {/* <button
          onClick={() => navigate("/admin/slides/new")}
          className="bg-green-500 flex items-center space-x-2 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
        >
          <span>Add New Slide</span>
        </button> */}
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">Section Name</th>
            <th className="p-4 text-left">Details</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentSlides.length !==0 && currentSlides?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="p-4">  <p
    className="text-base line-clamp-2"
    dangerouslySetInnerHTML={{
      __html: highlightSearchTerm(item.page_name),
    }}
  /></td>
              <td className="p-4 max-w-xs">
  <p
    className="text-sm line-clamp-2"
    dangerouslySetInnerHTML={{
      __html: highlightSearchTerm(item.description),
    }}
  />
</td>

              <td className="p-4  flex justify-center items-center">
                <Link
                  to={item.navigation_link}
                  className="text-blue-500 hover:underline  mx-auto"
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
                 
                </Link>
                {/* <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this slide?")) {
                      deleteSlide(item.id);
                    }
                  }}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button> */}
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
export default Pages;

// import React from 'react'
// import ReusableTable from '../Resusablepages/ReusableTable'
// import CKEditorComponent from '../CkEditor/CkEditor'

// export default function Pages() {
//   return (
//     <div>
//       {/* <ReusableTable fetchUrl={'pages/'} columns={[ */}
//     {/* //   { key: 'page_name', title: 'Page Name' },
//     //   { key: 'description', title: 'Description' },
//     // ]} highlightFields={['page_name', 'description']} /> */}
//     <CKEditorComponent/>
//     </div>
//   )
// }
