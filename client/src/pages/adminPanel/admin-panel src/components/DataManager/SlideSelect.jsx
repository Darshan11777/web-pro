import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const PageSelector = () => {
  const pages = [
    { id: 1, title: 'Our Services Section', path: 'our-service' },
    { id: 2, title: 'Our Process Section', path: 'our-process' },
    { id: 3, title: 'Our Work', path: 'our-work' },
    { id: 4, title: 'Our Review', path: 'our-review' },
    // Add more pages as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 px-4 ">
      <div className="bg-white rounded-lg shadow-md p-6  w-full">
        {/* <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Select a Section to Edit
        </h1> */}
        <Breadcrumb pageName="Section" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          {pages.map((page) => (
            <div 
              key={page.id} 
              
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg flex flex-col items-center justify-center h-48" 
            >
              
              <h2 className="text-xl font-semibold text-gray-800">
                {page.title}
              </h2>
              <Link to={page.path} className='bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Edit now
              
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
