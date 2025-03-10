import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ReusableTable = ({ baseUrl=import.meta.env.VITE_API_BASE_URL, fetchUrl, columns, highlightFields, itemsPerPage = 4 }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${baseUrl}${fetchUrl}`);
    setData(res.data);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const filteredData = searchTerm
    ? data.filter(item =>
        highlightFields.some(field =>
          item[field].toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : data;

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const highlightSearchTerm = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="font-bold text-red-600">$1</span>');
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="placeholder-black w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            {columns?.map((column) => (
              <th key={column.key} className="p-4 text-left">{column.title}</th>
            ))}
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              {columns?.map((column) => (
                <td key={column.key} className="p-4">
                  <p
                    className="text-base line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: highlightSearchTerm(item[column.key]) }}
                  />
                </td>
              ))}
              <td className="p-4 flex justify-center items-center">
                {/* Add action buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ReactPaginate
        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center space-x-2 mt-4"
        pageClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full hover:bg-indigo-500 hover:text-white transition duration-200"
        activeClassName="bg-indigo-500 text-white"
      /> */}
       {Math.ceil(filteredSlides.length / itemsPerPage) > 1 &&( <ReactPaginate
        pageCount={Math.ceil(filteredData.length / itemsPerPage)} // Ensure this matches your pagination logic
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
      />)}
    </div>
  );
};

export default ReusableTable;
