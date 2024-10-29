import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch five different data points
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  try {

    // Replace these URLs with your actual API endpoints
    const [
      heroSection,
      overServiceHeader,
      OurServiceSlides,
      aboutUsSection,
      ourProcessHeader,
      ourProcessSlides,
      ourWorkHeader,
      ourWorkSlides,
      resultSection,
      ourClientHeader,
      reviewSlides,
      newsHeader,
      newsSlides,
      contactUsHeader,
      contactUsForm,
      faqsHeader,
      faqs,
      footerSection,
      aboutHeroSection,
      aboutProjectSection,
      aboutImageProjectSection,
      AboutHistorySection,
       historyDetailesSection,
       aboutQuoteSection,
       aboutTeamHeader,
       teamDetails,
       ourServicesItServicesHeader,
      itServicesDetailsSlides,
      ourServicesOurWork,
      ourServicesOurWorkHeader,
      ourServicesProject,
      ourServicesQuote,
      contactUsPageHeader,
      contactUsPageForm,
      contactUsPageFormHeader,
      inquiryPageHeader,
      inquiryPageFormDetails,
      OurWorkPortfolioHeader,
      OurWorkProjectHighlight,
      OurWorkProjectHighlightSection2,
      OurWorkProjectOverview,
      OurWorkProjectInfo,
      OurWorkPortfolioSnapshot,

    ] = await Promise.all([
      // home Page
      axios.get(`${baseUrl}section/header/hero-section`),
      axios.get(`${baseUrl}section/header/our-service`),
      axios.get(`${baseUrl}slides/our-service`),
      axios.get(`${baseUrl}section/header/about-us`),
      axios.get(`${baseUrl}section/header/our-process`),
      axios.get(`${baseUrl}slides/our-process`),
      axios.get(`${baseUrl}section/header/our-work`),
      axios.get(`${baseUrl}slides/our-work`),
      axios.get(`${baseUrl}section/header/result`),
      axios.get(`${baseUrl}section/header/our-client`),
      axios.get(`${baseUrl}slides/reviews`),
      axios.get(`${baseUrl}section/header/news`),
      axios.get(`${baseUrl}slides/news`),
      axios.get(`${baseUrl}section/header/contact-us`),
      axios.get(`${baseUrl}slides/contact-us-form`),
      axios.get(`${baseUrl}section/header/faqs`),
      axios.get(`${baseUrl}slides/faqs`),
      axios.get(`${baseUrl}section/header/footer`),
      // about Us page
     axios.get(`${baseUrl}about-us/hero-section`),
      axios.get(`${baseUrl}about-us/project`),
      axios.get(`${baseUrl}about-us/image-project`),
      axios.get(`${baseUrl}about-us/history`),
      axios.get(`${baseUrl}about-us/history-detailes`),
      axios.get(`${baseUrl}about-us/quote`),
      axios.get(`${baseUrl}about-us/team-header`),
      axios.get(`${baseUrl}about-us/team-details`),
      // our Services Page
      axios.get(`${baseUrl}our-services/it-services-header`),
      axios.get(`${baseUrl}our-services/our-services`),
      axios.get(`${baseUrl}our-services/our-work`),
      axios.get(`${baseUrl}our-services/our-work/header`),
      axios.get(`${baseUrl}our-services/project`),
      axios.get(`${baseUrl}our-services/quote`),
      // contact us Page
      axios.get(`${baseUrl}contact-us/header`),
      axios.get(`${baseUrl}contact-us/contact-us-form`),
      axios.get(`${baseUrl}contact-us/contact-us-form/header`),
      // inquiry Page
      axios.get(`${baseUrl}inquiry/header`),
      axios.get(`${baseUrl}inquiry/form-details`),
      // our work page
      axios.get(`${baseUrl}our-work/portfolio-header`),
      axios.get(`${baseUrl}our-work/project-highlights`),
      axios.get(`${baseUrl}our-work/project-highlights-section-2`),
      axios.get(`${baseUrl}our-work/project-overview`),
      axios.get(`${baseUrl}our-work/project-info`),
      axios.get(`${baseUrl}our-work/portfolio-snapshot-slides`),


      
    ]);

    // Return the combined data as an object
    return {
      heroSection: heroSection.data[0],
      overServiceHeader: overServiceHeader.data[0],
      OurServiceSlides: OurServiceSlides.data,
      aboutUsSection: aboutUsSection.data,
      ourProcessHeader: ourProcessHeader.data[0],
      ourProcessSlides: ourProcessSlides.data,
      ourWorkHeader: ourWorkHeader.data[0],
      ourWorkSlides: ourWorkSlides.data,
      resultSection: resultSection.data,
      ourClientHeader: ourClientHeader.data[0],
      reviewSlides: reviewSlides.data,
      newsHeader: newsHeader.data[0],
      newsSlides: newsSlides.data,
      contactUsHeader: contactUsHeader.data[0],
      contactUsForm: contactUsForm.data[0],
      faqsHeader: faqsHeader.data[0],
      faqs: faqs.data,
      footerSection: footerSection.data,
      aboutHeroSection:aboutHeroSection.data,
      aboutProjectSection:aboutProjectSection.data,
      aboutImageProjectSection:aboutImageProjectSection.data,
      AboutHistorySection:AboutHistorySection.data,
      historyDetailesSection:historyDetailesSection.data,
      aboutQuoteSection:aboutQuoteSection.data,
      aboutTeamHeader:aboutTeamHeader.data,
      teamDetails:teamDetails.data,
      ourServicesItServicesHeader:ourServicesItServicesHeader.data,
      itServicesDetailsSlides:itServicesDetailsSlides.data,
      ourServicesOurWork:ourServicesOurWork.data,
      ourServicesOurWorkHeader:ourServicesOurWorkHeader.data[0],
      ourServicesProject:ourServicesProject.data,
      ourServicesQuote:ourServicesQuote.data,
      contactUsPageHeader:contactUsPageHeader.data,
      contactUsPageForm:contactUsPageForm.data[0],
      contactUsPageFormHeader:contactUsPageFormHeader.data[0],
      inquiryPageHeader:inquiryPageHeader.data,     
      inquiryPageFormDetails:inquiryPageFormDetails.data[0],
      OurWorkPortfolioHeader:OurWorkPortfolioHeader.data,
      OurWorkProjectHighlight:OurWorkProjectHighlight.data,
      OurWorkProjectHighlightSection2:OurWorkProjectHighlightSection2.data,
      OurWorkProjectOverview:OurWorkProjectOverview.data,
      OurWorkProjectInfo:OurWorkProjectInfo.data,
      OurWorkPortfolioSnapshot:OurWorkPortfolioSnapshot.data,
    };
  } catch (error) {
    throw error.response?.data || "An error occurred";
  }
});

// Initial state
const initialState = {
  data: {
    heroSection: null,
    overServiceHeader: null,
    OurServiceSlides: [],
    aboutUsSection: null,
    ourProcessHeader: null,
    ourProcessSlides: [],
    ourWorkHeader: null,
    ourWorkSlides: [],
    resultSection: null,
    ourClientHeader: null,
    reviewSlides: [],
    newsHeader: null,
    newsSlides: [],
    contactUsHeader: null,
    contactUsForm: null,
    faqsHeader: null,
    faqs: [],
    footerSection: null,
  },
  loading: true,
  error: null,
};

// Redux slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to configure in the store
export default dataSlice.reducer;



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async thunk to fetch data
// export const fetchData = createAsyncThunk("data/fetchData", async () => {
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;
//   try {
//     const apiEndpoints = [
//       // Home Page
//       { key: "heroSection", url: "section/header/hero-section" },
//       { key: "overServiceHeader", url: "section/header/our-service" },
//       { key: "OurServiceSlides", url: "slides/our-service" },
//       { key: "aboutUsSection", url: "section/header/about-us" },
//       { key: "ourProcessHeader", url: "section/header/our-process" },
//       { key: "ourProcessSlides", url: "slides/our-process" },
//       { key: "ourWorkHeader", url: "section/header/our-work" },
//       { key: "ourWorkSlides", url: "slides/our-work" },
//       { key: "resultSection", url: "section/header/result" },
//       { key: "ourClientHeader", url: "section/header/our-client" },
//       { key: "reviewSlides", url: "slides/reviews" },
//       { key: "newsHeader", url: "section/header/news" },
//       { key: "newsSlides", url: "slides/news" },
//       { key: "contactUsHeader", url: "section/header/contact-us" },
//       { key: "contactUsForm", url: "slides/contact-us-form" },
//       { key: "faqsHeader", url: "section/header/faqs" },
//       { key: "faqs", url: "slides/faqs" },
//       { key: "footerSection", url: "section/header/footer" },
//       // About Us Page
//       { key: "aboutHeroSection", url: "about-us/hero-section" },
//       { key: "aboutProjectSection", url: "about-us/project" },
//       { key: "aboutImageProjectSection", url: "about-us/image-project" },
//       { key: "AboutHistorySection", url: "about-us/history" },
//       { key: "historyDetailesSection", url: "about-us/history-detailes" },
//       { key: "aboutQuoteSection", url: "about-us/quote" },
//       { key: "aboutTeamHeader", url: "about-us/team-header" },
//       { key: "teamDetails", url: "about-us/team-details" },
//       // Services Page
//       { key: "ourServicesItServicesHeader", url: "our-services/it-services-header" },
//       { key: "itServicesDetailsSlides", url: "our-services/our-services" },
//       { key: "ourServicesOurWork", url: "our-services/our-work" },
//       { key: "ourServicesOurWorkHeader", url: "our-services/our-work/header" },
//       { key: "ourServicesProject", url: "our-services/project" },
//       { key: "ourServicesQuote", url: "our-services/quote" },
//       // Contact Us Page
//       { key: "contactUsPageHeader", url: "contact-us/header" },
//       { key: "contactUsPageForm", url: "contact-us/contact-us-form" },
//       { key: "contactUsPageFormHeader", url: "contact-us/contact-us-form/header" },
//       // Inquiry Page
//       { key: "inquiryPageHeader", url: "inquiry/header" },
//       { key: "inquiryPageFormDetails", url: "inquiry/form-details" },
//     ];

//     // Fetch all data concurrently
//     const responses = await Promise.all(
//       apiEndpoints.map((endpoint) => axios.get(`${baseUrl}${endpoint.url}`))
//     );

//     // Combine the responses into an object using the keys from apiEndpoints
//     const data = apiEndpoints.reduce((acc, endpoint, index) => {
//       acc[endpoint.key] = responses[index].data;
//       return acc;
//     }, {});

//     return data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// });

// // Initial state with specific loading states
// const initialState = {
//   data: {},
//   loading: {
//     home: true,
//     aboutUs: true,
//     services: true,
//     contactUs: true,
//     inquiry: true,
//   },
//   error: null,
// };

// // Redux slice
// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         // Set loading states for specific pages
//         state.loading.home = true;
//         state.loading.aboutUs = true;
//         state.loading.services = true;
//         state.loading.contactUs = true;
//         state.loading.inquiry = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading.home = false;
//         state.loading.aboutUs = false;
//         state.loading.services = false;
//         state.loading.contactUs = false;
//         state.loading.inquiry = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading.home = false;
//         state.loading.aboutUs = false;
//         state.loading.services = false;
//         state.loading.contactUs = false;
//         state.loading.inquiry = false;
//         state.error = action.error.message;
//       });
//   },
// });

// // Export the reducer to configure in the store
// export default dataSlice.reducer;
