import React, { useEffect } from "react";
// import Loader from './component/Loader'
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import WebProLoader from "./component/WebProLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/slices/WebProDataSlice";

export default function WebPro() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const isLoading = useSelector((state) => state.data.loading);
  const hero = useSelector((state) => state.data.data.heroSection);
  
  return (
    <>
      {/* <Loader/>  */}

      {isLoading ? (
        <Routes>
          <Route path="/" element={<WebProLoader />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
          </Routes>
        </>
      )}
    </>
  );
}
