import express from "express";
import {
  getAboutUs,
  getContactUsHeader,
  getFAQsHeader,
  getFooter,
  getHeroSection,
  getNewsHeader,
  getOurClientHeader,
  getOurProcessHeader,
  getOurResult,
  getOurServiceHeader,
  getOurWorkHeader,
  updateAboutUs,
  updateContactUsHeader,
  updateFAQsHeader,
  updateFooter,
  updateHeroSection,
  updateNewsHeader,
  updateOurClientHeader,
  updateOurProcessHeader,
  updateOurResult,
  updateOurServiceHeader,
  updateOurWorkHeader,
} from "../../../controller/pages/HomePage/section-header.controller.js";

import { validate } from "../../../middleware/validate-middleware.js";
import {
  aboutUsSchema,
  contact_us_header_dataSchema,
  FAQs_headerSchema,
  footerSchema,
  heroSectionSchema,
  news_header_dataSchema,
  our_client_header_dataSchema,
  our_service_headerSchema,
  our_work_header_dataSchema,
  ourResultSchema,
} from "../../../validators/HomePage/section-header.validator.js";
import { our_process_header_dataSchema } from "../../../validators/HomePage/section-header.validator.js";

const router = express.Router();

// Get all slides
router.get("/hero-section", getHeroSection);

router.put("/hero-section", validate(heroSectionSchema), updateHeroSection);
// our services header
router.get("/our-service", getOurServiceHeader);

router.put(
  "/our-service",
  validate(our_service_headerSchema),
  updateOurServiceHeader
);
// our process header
router.get("/our-process", getOurProcessHeader);

router.put(
  "/our-process",
  validate(our_process_header_dataSchema),
  updateOurProcessHeader
);
// our Work header
router.get("/our-work", getOurWorkHeader);

router.put(
  "/our-work",
  validate(our_work_header_dataSchema),
  updateOurWorkHeader
);
// our client header
router.get("/our-client", getOurClientHeader);

router.put(
  "/our-client",
  validate(our_client_header_dataSchema),
  updateOurClientHeader
);
// news header
router.get("/news", getNewsHeader);

router.put("/news", validate(news_header_dataSchema), updateNewsHeader);
// contact us header
router.get("/contact-us", getContactUsHeader);

router.put(
  "/contact-us",
  validate(contact_us_header_dataSchema),
  updateContactUsHeader
);
// our Result Section
router.get("/result", getOurResult);

router.put("/result", validate(ourResultSchema), updateOurResult);

// About us section
router.get("/about-us", getAboutUs);

router.put("/about-us", validate(aboutUsSchema), updateAboutUs);
// FAQs section
router.get("/faqs", getFAQsHeader);

router.put("/faqs", validate(FAQs_headerSchema), updateFAQsHeader);
// FAQs section
router.get("/footer", getFooter);

router.put("/footer", validate(footerSchema), updateFooter);


export default router;
