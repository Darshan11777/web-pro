import { useEffect, useState } from "react";
import axios from "axios";
import SlidesForm from "./OurServiceForm";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb";

const OurService = () => {
  const data = [
    {
      title: "Welcome to Our Platform",
      description:
        "Discover amazing features and a seamless user experience with our platform.",
      tags: "welcome, features, user experience",
      imgUrl: "https://via.placeholder.com/400x300?text=Welcome+Slide",
    },
    {
      title: "Explore the Latest Trends",
      description:
        "Stay updated with the latest trends in technology, fashion, and lifestyle.",
      tags: "trends, technology, lifestyle",
      imgUrl: "https://via.placeholder.com/400x300?text=Trends+Slide",
    },
    {
      title: "Join Our Community",
      description:
        "Be a part of a growing community of like-minded individuals and share your experiences.",
      tags: "community, join, share",
      imgUrl: "https://via.placeholder.com/400x300?text=Community+Slide",
    },
    {
      title: "Get Exclusive Offers",
      description:
        "Sign up today and enjoy exclusive discounts and early access to new features.",
      tags: "offers, discounts, sign up",
      imgUrl: "https://via.placeholder.com/400x300?text=Offers+Slide",
    },
  ];
  

  const [slides, setSlides] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate=useNavigate()

  useEffect(() => {
    fetchSlides();
    // setSlides(data)
  }, []);

  const fetchSlides = async () => {
    const res = await axios.get(baseUrl + "slides/our-service");
    setSlides(res.data);
  };

  const deleteSlide = async (id) => {
    await axios.delete(baseUrl + `slides/our-service/${id}`);
    fetchSlides(); // Refresh the list
  };

  const startEditing = (slide) => {
    navigate(`/admin/slides/our-service/${slide.id}/edit`); // Navigate to edit page
  };
  const addNewSlide = () => {
    navigate('/admin/slides/our-service/new'); // Navigate to add new slide page
  };


 

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Manage Our Services Slides
        </h2> */}
        <Breadcrumb pageName=" Manage Our Services Slides" />
        <div className="grid h-fit grid-cols-1 grid-auto-rows: min-content md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out"
            >
              <img
                src={slide.imgUrl}
                alt={slide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {slide.description}
                </p>
                <div className="mt-3">
                  {slide.tags.split(",").map((tag, tagIndex) => (
                  <span
                  key={tagIndex}
                  className="inline-block bg-indigo-100 text-indigo-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                >
                  {tag.trim()}
                </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => startEditing(slide)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mr-2 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSlide(slide.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* Add New Slide Button */}
<div
  className="bg-white rounded-lg min-h-50 shadow-md overflow-hidden flex flex-col items-center justify-center  cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out hover:bg-indigo-50" 
  onClick={addNewSlide}
>
  <span className="text-lg text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </span>
  <p className="text-gray-600 mt-2 font-medium">Add New Slide</p>
</div>


        </div>
      </div>
    </div>
  );
};

export default OurService;
