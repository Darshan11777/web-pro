import express from "express";
import {
  getSlides,
  addSlide,
  updateSlide,
  deleteSlide,
  getProcesses,
  addProcess,
  updateProcess,
  deleteProcess,
  getWorks,
  addWork,
  updateWork,
  deleteWork,
  getReviews,
  addReview,
  updateReview,
  deleteReview,
  getFAQs,
  addFAQ,
  updateFAQ,
  deleteFAQ,
  getNews,
  addNews,
  updateNews,
  deleteNews,
  getHeroSection,
  updateHeroSection,
  getContactUsForm,
  updateContactUsForm,
} from "../controller/slides.controller.js";
import { validate } from "../middleware/validate-middleware.js";
import {
  contactUsFormSchema,
  FAQsSchema,
 
  newsSchema,
  our_processSchema,
  our_servicesSchema,
  our_WorkSchema,
  reviewSchema,
} from "../validators/hero-section/slides.validator.js";
const router = express.Router();

// Get all slides
router.get("/our-service", getSlides);

// Add a new slide
router.post("/our-service", validate(our_servicesSchema), addSlide);

// Update a slide
router.put("/our-service/:id", validate(our_servicesSchema), updateSlide);

// Delete a slide
router.delete("/our-service/:id", deleteSlide);

// our process slides

router.get("/our-process", getProcesses);

router.post("/our-process", validate(our_processSchema), addProcess);

router.put("/our-process/:id", validate(our_processSchema), updateProcess);

router.delete("/our-process/:id", deleteProcess);

// our work slides

router.get("/our-work", getWorks);

router.post("/our-work", validate(our_WorkSchema), addWork);

router.put("/our-work/:id", validate(our_WorkSchema), updateWork);

router.delete("/our-work/:id", deleteWork);

// Review slides

router.get("/reviews", getReviews);

router.post("/reviews", validate(reviewSchema), addReview);

router.put("/reviews/:id", validate(reviewSchema), updateReview);

router.delete("/reviews/:id", deleteReview);

// faqs slides

router.get("/faqs", getFAQs);

router.post("/faqs", validate(FAQsSchema), addFAQ);

router.put("/faqs/:id", validate(FAQsSchema), updateFAQ);

router.delete("/faqs/:id", deleteFAQ);
// news slides

router.get("/news", getNews);

router.post("/news", validate(newsSchema), addNews);

router.put("/news/:id", validate(newsSchema), updateNews);

router.delete("/news/:id", deleteNews);

// contact us Form
router.get("/contact-us-form", getContactUsForm);
router.put("/contact-us-form", validate(contactUsFormSchema), updateContactUsForm);


export default router;
