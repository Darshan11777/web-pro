import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch five different data points
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const baseUrl=import.meta.env.VITE_API_BASE_URL;
  try {

    // Replace these URLs with your actual API endpoints
    const [heroSection, overServiceHeader, OurServiceSlides, aboutUsSection, ourProcessHeader,ourProcessSlides,ourWorkHeader,ourWorkSlides,resultSection,
      ourClientHeader,reviewSlides,newsHeader,newsSlides,contactUsHeader,contactUsForm,faqsHeader,faqs,footerSection

    ] = await Promise.all([
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
      contactUsForm:contactUsForm.data[0],
      faqsHeader:faqsHeader.data[0],
      faqs:faqs.data,
      footerSection:footerSection.data,
     
      
    };
  } catch (error) {
    throw error.response?.data || "An error occurred";
  }
});

// Initial state
const initialState = {
  data: {
    heroSection: null,
   
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
