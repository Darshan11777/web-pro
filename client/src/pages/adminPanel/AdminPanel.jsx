import React, { useEffect, useState } from "react";
import Loader from "./admin-panel src/common/Loader";
import DefaultLayout from "./admin-panel src/layout/DefaultLayout";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "./admin-panel src/components/PageTitle";
import ECommerce from "./admin-panel src/pages/Dashboard/ECommerce";
import LoginPage from "./admin-panel src/pages/Login/Login";
import RegisterPage from "./admin-panel src/pages/Register/Register";
import Calendar from "./admin-panel src/pages/Calendar";
import Profile from "./admin-panel src/pages/Profile";
import FormElements from "./admin-panel src/pages/Form/FormElements";
import FormLayout from "./admin-panel src/pages/Form/FormLayout";
import Tables from "./admin-panel src/pages/Tables";
import Settings from "./admin-panel src/pages/Settings";
import Chart from "./admin-panel src/pages/Chart";
import Alerts from "./admin-panel src/pages/UiElements/Alerts";
import Buttons from "./admin-panel src/pages/UiElements/Buttons";
import SignIn from "./admin-panel src/pages/Authentication/SignIn";
import SignUp from "./admin-panel src/pages/Authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { checkAuth } from "../../redux/slices/AuthSlice";
import ChangePassword from "./admin-panel src/pages/Form/ChangePassword";
import SlideManager from "./admin-panel src/components/DataManager/HomePageDataManager/our-work slides/OurWorkForm";
import SlidesList from "./admin-panel src/components/DataManager/HomePageDataManager/our-work slides/OurWork";
import SlideSelect from "./admin-panel src/components/DataManager/HomePageDataManager/HomePage";
import OurService from "./admin-panel src/components/DataManager/HomePageDataManager/our-service slides/OurService";
import OurServiceForm from "./admin-panel src/components/DataManager/HomePageDataManager/our-service slides/OurServiceForm";
import OurProcess from "./admin-panel src/components/DataManager/HomePageDataManager/our-process slides/OurProcess";
import OurProcessForm from "./admin-panel src/components/DataManager/HomePageDataManager/our-process slides/OurProcessForm";
import OurWork from "./admin-panel src/components/DataManager/HomePageDataManager/our-work slides/OurWork";
import OurWorkForm from "./admin-panel src/components/DataManager/HomePageDataManager/our-work slides/OurWorkForm";
import OurReview from "./admin-panel src/components/DataManager/HomePageDataManager/our-review slides/OurReview";
import OurReviewForm from "./admin-panel src/components/DataManager/HomePageDataManager/our-review slides/OurReviewForm";
import FAQs from "./admin-panel src/components/DataManager/HomePageDataManager/FAQs section/FAQs";
import FAQsForm from "./admin-panel src/components/DataManager/HomePageDataManager/FAQs section/FAQsForm";
import News from "./admin-panel src/components/DataManager/HomePageDataManager/our-news slides/News";
import NewsForm from "./admin-panel src/components/DataManager/HomePageDataManager/our-news slides/NewsForm";
import HeroSectionForm from "./admin-panel src/components/DataManager/HomePageDataManager/HeroSection/HeroSectionForm";
import OurServiceHeaderDataForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurServiceHeaderData/OurServiceHeaderDataForm";
import OurProcessHeaderDataForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurProcessHeaderData/OurProcessHeaderDataForm";
import OurWorkHeaderDataForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurWorkHeaderDataForm/OurWorkHeaderDataForm";
import OurClientHeaderDataForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurClientHeader/OurClientHeaderForm";
import NewsHeaderForm from "./admin-panel src/components/DataManager/HomePageDataManager/NewsHeader/NewsHeaderForm";
import ContactUsHeaderForm from "./admin-panel src/components/DataManager/HomePageDataManager/ContactUsHeader/ContactUsHeaderForm";
import ContactUsFormData from "./admin-panel src/components/DataManager/HomePageDataManager/ContactUsFormData/ContactUsForm";
import OurResultSectionForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurResult section/OurResultSectionForm";
import AboutUsForm from "./admin-panel src/components/DataManager/HomePageDataManager/AboutUsForm/AboutUsForm";
import Pages from "./admin-panel src/components/DataManager/Pages";

import HomePage from "./admin-panel src/components/DataManager/HomePageDataManager/HomePage";
import FAQsHeaderDataForm from "./admin-panel src/components/DataManager/HomePageDataManager/FAQsHeaderData/FAQsHeaderDataForm";
import FooterForm from "./admin-panel src/components/DataManager/HomePageDataManager/OurResult section/OurResultSectionForm";
import FooterSectionForm from "./admin-panel src/components/DataManager/HomePageDataManager/Footer section/FooterSectionForm";
import StaticPages from "./admin-panel src/pages/Static Pages/StaticPages";
import StaticPagesEditor from "./admin-panel src/pages/Static Pages/StaticPagesEditor";
import AboutUsPageDataManager from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutUsPageDataManager";
import AboutHeroSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutHeroSectionForm";
import AboutProjectSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutProjectSectionForm";
import AboutImageProjectSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutProjectImageSectionForm";
import AboutHistorySectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutHistorySectionForm";
import AboutHistoryDetailesSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutHistoryDetailesSectionForm";
import AboutQuoteSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/QuoteSectionForm";
import AboutTeamSectionForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/AboutHeroSection/AboutTeamSectionForm";
import TeamDetails from "./admin-panel src/components/DataManager/AboutUsPageDataManager/teamDetailes slides/TeamDetails";
import TeamDetailsForm from "./admin-panel src/components/DataManager/AboutUsPageDataManager/teamDetailes slides/TeamDetailsForm";
import OurServicesPageData from "./admin-panel src/components/DataManager/OurServicesPageDataManager/OurServicesPageData";
import ItServicesHeaderForm from "./admin-panel src/components/DataManager/OurServicesPageDataManager/ItServicesHeader/ItServicesHeaderForm";
import ItServicesDetailsSlides from "./admin-panel src/components/DataManager/OurServicesPageDataManager/ItServicesDetails slides/ItServicesDetailsSlides";
import ItServicesDetailesSlidesForm from "./admin-panel src/components/DataManager/OurServicesPageDataManager/ItServicesDetails slides/ItServicesDetailsSlidesForm";
import ContactPageContactUsHeaderForm from "./admin-panel src/components/DataManager/ContactUsPageDataManager/ContactPageHeader";
import ContactUsFormHeaderForm from "./admin-panel src/components/DataManager/ContactUsPageDataManager/ContactUsFormHeader";
import ContactPageHeader from "./admin-panel src/components/DataManager/ContactUsPageDataManager/ContactPageHeader";
import InquiryHeaderForm from "./admin-panel src/components/DataManager/InquiryPageDataManager/InquiryHeaderForm";
import InquiryFormDetailsForm from "./admin-panel src/components/DataManager/InquiryPageDataManager/InquiryFormDetailsForm";
import PortfolioHeader from "./admin-panel src/components/DataManager/OurWorkPage/PortfolioHeader";
import ProjectHighlightsForm from "./admin-panel src/components/DataManager/OurWorkPage/ProjectHighlightsForm";
import ProjectOverviewForm from "./admin-panel src/components/DataManager/OurWorkPage/ProjectOverview";
import ProjectInfo from "./admin-panel src/components/DataManager/OurWorkPage/ProjectInfo";
import PortfolioSnapshotSlides from "./admin-panel src/components/DataManager/OurWorkPage/PortfolioSnapshotSlides/PortfolioSnapshotSlides";
import PortfolioSnapshotSlidesForm from "./admin-panel src/components/DataManager/OurWorkPage/PortfolioSnapshotSlides/PortfolioSnapshotSlidesForm";

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    console.log("fetthing");
    // setTimeout(() => setLoading(false), 1000);
    //   userData();

    // dispatch(fetchUsers())
  }, [dispatch]);
  const { isAuthenticated, status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const userData = async () => {
    // console.log( "running");
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL; // Assuming you have this defined
      const response = await axios.get(baseUrl + "admin/user-data", {
        withCredentials: true,
      });

      console.log("res:", response);

      if (loading) {
        setLoading(false);
      }
      return response.data;
    } catch (error) {
      if (error.response.data.message === "jwt authentication error") {
        navigate("/admin/auth/signin");
      }
      // Handle errors appropriately

      // console.log('error in fetching data',error.response.data)
      // throw error;
    }
  };
  // console.log( "loading",loading);
  useEffect(() => {
    window.scrollTo(0, 0);
    // const cookies = Cookies.get("admin");
    // if (!cookies) {
    //   navigate("/admin/auth/signin");
    // }
  }, [pathname]);
  if (status === "loading") {
    return <Loader />; // Show loading state while checking auth
  }

  return (
    <>
      {!isAuthenticated ? (
        <SignIn />
      ) : (
        <DefaultLayout>
          <Routes>
            <Route path="/admin">
              <Route
                index
                element={
                  <>
                    <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                    <ECommerce />
                  </>
                }
              ></Route>
              <Route
                path="change-password"
                element={
                  <>
                    <PageTitle title="Change Password" />
                    {/* <PageTitle title="Login Page" />
                    <PageTitle title="Login Page" /> */}
                    <ChangePassword />
                  </>
                }
              />
              <Route path="static-pages">
                <Route index element={<StaticPages />} />
                <Route path="new" element={<StaticPagesEditor />} />

                <Route path=":pageId/edit" element={<StaticPagesEditor />} />
              </Route>

              <Route path="pages">
                <Route
                  // path="slide"
                  index
                  element={
                    <>
                      <Pages />
                    </>
                  }
                />
                <Route path="home-page">
                  <Route
                    // path="slide"
                    index
                    element={
                      <>
                        <HomePage />
                      </>
                    }
                  />

                  <Route path="our-service">
                    <Route index element={<OurService />} />
                    <Route path="new" element={<OurServiceForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<OurServiceForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="review">
                    <Route index element={<OurReview />} />
                    <Route path="new" element={<OurReviewForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<OurReviewForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="hero-section">
                    <Route index element={<HeroSectionForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-service-header">
                    <Route index element={<OurServiceHeaderDataForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="FAQs-header">
                    <Route index element={<FAQsHeaderDataForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-process-header">
                    <Route index element={<OurProcessHeaderDataForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-work-header">
                    <Route index element={<OurWorkHeaderDataForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-client-header">
                    <Route index element={<OurClientHeaderDataForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="news-header">
                    <Route index element={<NewsHeaderForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="contact-us-header">
                    <Route index element={<ContactUsHeaderForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="contact-us-form">
                    <Route index element={<ContactUsFormData />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-result">
                    <Route index element={<OurResultSectionForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="footer">
                    <Route index element={<FooterSectionForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="about-us">
                    <Route index element={<AboutUsForm />} />

                    {/* Route for editing slides */}
                  </Route>
                  <Route path="news">
                    <Route index element={<News />} />
                    <Route path="new" element={<NewsForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route path=":slideId/edit" element={<NewsForm />} />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="FAQs">
                    <Route index element={<FAQs />} />
                    <Route path="new" element={<FAQsForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route path=":slideId/edit" element={<FAQsForm />} />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-process">
                    <Route index element={<OurProcess />} />
                    <Route path="new" element={<OurProcessForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<OurProcessForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-work">
                    <Route index element={<OurWork />} />
                    <Route path="new" element={<OurWorkForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<OurWorkForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                </Route>
                <Route path="about-us">
                  <Route
                    // path="slide"
                    index
                    element={
                      <>
                        <AboutUsPageDataManager />
                      </>
                    }
                  />
                  <Route
                    path="hero-section"
                    element={
                      <>
                        <AboutHeroSectionForm />
                      </>
                    }
                  />
                  <Route
                    path="project"
                    element={
                      <>
                        <AboutProjectSectionForm />
                      </>
                    }
                  />
                  <Route
                    path="image-project"
                    element={
                      <>
                        <AboutImageProjectSectionForm />
                      </>
                    }
                  />
                  <Route
                    path="history"
                    element={
                      <>
                        <AboutHistorySectionForm />
                      </>
                    }
                  />
                  <Route path="team-details">
                    <Route index element={<TeamDetails />} />
                    <Route path="new" element={<TeamDetailsForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":teamMemberId/edit"
                      element={<TeamDetailsForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route
                    path="quote"
                    element={
                      <>
                        <AboutQuoteSectionForm />
                      </>
                    }
                  />
                  <Route
                    path="team-header"
                    element={
                      <>
                        <AboutTeamSectionForm />
                      </>
                    }
                  />
                  <Route
                    path="team-detailes"
                    element={
                      <>
                        <AboutTeamSectionForm />
                      </>
                    }
                  />
                </Route>
                <Route path="our-services">
                  <Route
                    // path="slide"
                    index
                    element={
                      <>
                        <OurServicesPageData />
                      </>
                    }
                  />
                  <Route
                    path="project"
                    element={
                      <>
                        <AboutProjectSectionForm
                          endPoint={"our-services/project"}
                        />
                      </>
                    }
                  />
                  <Route
                    path="quote"
                    element={
                      <>
                        <AboutQuoteSectionForm
                          endPoint={"our-services/quote"}
                        />
                      </>
                    }
                  />
                  <Route
                    path="it-services-header"
                    element={
                      <>
                        <ItServicesHeaderForm />
                      </>
                    }
                  />
                  <Route path="services-slides">
                    <Route index element={<ItServicesDetailsSlides />} />
                    <Route
                      path="new"
                      element={<ItServicesDetailesSlidesForm />}
                    />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<ItServicesDetailesSlidesForm />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-work">
                    <Route
                      index
                      element={<OurWork dataUrl="our-services/our-work" />}
                    />
                    <Route
                      path="new"
                      element={<OurWorkForm dataUrl="our-services/our-work" />}
                    />{" "}
                    {/* Route for adding new slides */}
                    <Route
                      path=":slideId/edit"
                      element={<OurWorkForm dataUrl="our-services/our-work" />}
                    />{" "}
                    {/* Route for editing slides */}
                  </Route>
                  <Route path="our-work-header">
                    <Route
                      index
                      element={
                        <OurWorkHeaderDataForm dataUrl="our-services/our-work/header" />
                      }
                    />

                    {/* Route for editing slides */}
                  </Route>
                </Route>

                <Route path="contact-us">
                  <Route
                    index
                    element={
                      <>
                        <OurServicesPageData
                          title="Contact Us Page"
                          endPoint={"pages/contact-us"}
                        />
                      </>
                    }
                  />
                  <Route
                    path="contact-us-form"
                    element={
                      <ContactUsFormData endPoint="contact-us/contact-us-form" />
                    }
                  />

                  <Route
                    path="contact-us-header"
                    element={
                     <ContactPageHeader />} 
                  />
                  <Route
                    path="contact-us-form-header"
                    element={
                     <ContactUsFormHeaderForm />} 
                  />
                </Route>
                <Route path="inquiry">
                  <Route
                    index
                    element={
                      <>
                        <OurServicesPageData
                          title="Inquiry Page"
                          endPoint={"pages/inquiry"}
                        />
                      </>
                    }
                  />
                   <Route
                    path="header"
                    element={
                      <>
                        <InquiryHeaderForm />
                      </>
                    }
                  />
                   <Route
                    path="form-details"
                    element={
                      <InquiryFormDetailsForm />}
                  />
                </Route>
                <Route path="our-work">
                <Route
                    index
                    element={
                      <>
                        <OurServicesPageData
                          title="Our Work Page"
                          endPoint={"pages/our-work"}
                        />
                      </>
                    }
                  />
                  <Route path="portfolio-snapshot">
                    <Route index element={<PortfolioSnapshotSlides />} />
                    <Route path="new" element={<PortfolioSnapshotSlidesForm />} />{" "}
                    {/* Route for adding new slides */}
                    <Route path=":slideId/edit" element={<PortfolioSnapshotSlidesForm />} />{" "}
                    {/* Route for editing slides */}
                  </Route>
                 
                <Route
                    path="portfolio-header"
                    element={
                      <>
                        <PortfolioHeader
                         
                        />
                      </>
                    }
                  />
                <Route
                    path="project-highlights"
                    element={
                      <>
                        <ProjectHighlightsForm
                         
                        />
                      </>
                    }
                  />
                <Route
                    path="project-info"
                    element={
                      <>
                        <ProjectInfo
                         
                        />
                      </>
                    }
                  />
                <Route
                    path="project-overview"
                    element={
                      <>
                        <ProjectOverviewForm
                         
                        />
                      </>
                    }
                  />
                <Route
                    path="project-highlights-section-2"
                    element={
                      <>
                        <ProjectHighlightsForm endPoint="our-work/project-highlights-section-2"
                         
                        />
                      </>
                    }
                  />
                {/* <Route
                    path="portfolio-header"
                    element={
                      <>
                        <PortfolioHeader
                         
                        />
                      </>
                    }
                  /> */}

                </Route>

               
              </Route>
              <Route
                  path="register"
                  element={
                    <>
                      <PageTitle title="Login Page" />
                      {/* <PageTitle title="Login Page" />
                    <PageTitle title="Login Page" /> */}
                      <RegisterPage />
                    </>
                  }
                />
                <Route
                  path="calendar"
                  element={
                    <>
                      <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Calendar />
                    </>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <>
                      <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Profile />
                    </>
                  }
                />
                <Route
                  path="forms/form-elements"
                  element={
                    <>
                      <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <FormElements />
                    </>
                  }
                />
                <Route
                  path="forms/form-layout"
                  element={
                    <>
                      <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <FormLayout />
                    </>
                  }
                />
                <Route
                  path="tables"
                  element={
                    <>
                      <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Tables />
                    </>
                  }
                />
                <Route
                  path="settings"
                  element={
                    <>
                      <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Settings />
                    </>
                  }
                />
                <Route
                  path="chart"
                  element={
                    <>
                      <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Chart />
                    </>
                  }
                />
                <Route
                  path="ui/alerts"
                  element={
                    <>
                      <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Alerts />
                    </>
                  }
                />
                <Route
                  path="ui/buttons"
                  element={
                    <>
                      <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <Buttons />
                    </>
                  }
                />
                <Route
                  path="auth/signin"
                  element={
                    <>
                      <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <SignIn />
                    </>
                  }
                />
                <Route
                  path="auth/signup"
                  element={
                    <>
                      <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                      <SignUp />
                    </>
                  }
                />
            </Route>
          </Routes>
        </DefaultLayout>
      )}
    </>
  );
};
export default AdminPanel;
