
import express from 'express';
// Import your controller function here

import { getContactUsForm, getContactUsFormHeader, getContactUsHeader, updateContactUsForm, updateContactUsFormHeader, updateContactUsHeader } from '../../../controller/pages/ContactUsPage/section.controller.js';
import authenticateAdmin from '../../../middleware/authenticateAdmin.js';
import { validate } from '../../../middleware/validate-middleware.js';

import { contact_page_header_section_dataSchema, contact_us_form_header_dataSchema } from '../../../validators/ContactUsPage/section.validator.js';
import { contactUsFormSchema } from '../../../validators/HomePage/slides.validator.js';

const router = express.Router();
//about Quote  section
router.get('/header',getContactUsHeader); 
router.put('/header',authenticateAdmin,validate(contact_page_header_section_dataSchema), updateContactUsHeader); 

// contact us Form
router.get("/contact-us-form", getContactUsForm);
router.put(
  "/contact-us-form",
  authenticateAdmin,
  validate(contactUsFormSchema),
  updateContactUsForm
);


//contact us form header  section
router.get('/contact-us-form/header',getContactUsFormHeader); 
router.put('/contact-us-form/header',authenticateAdmin,validate(contact_us_form_header_dataSchema), updateContactUsFormHeader); 

export default router;
