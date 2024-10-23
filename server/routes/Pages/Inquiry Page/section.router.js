
import express from 'express';
// Import your controller function here
import { getInquiryFormDetails, getInquiryHeader, updateInquiryFormDetails, updateInquiryHeader } from '../../../controller/pages/InquiryPage/section.controller.js';
import authenticateAdmin from '../../../middleware/authenticateAdmin.js';
import { inquiry_form_details_schema, inquiry_header_section_dataSchema } from '../../../validators/InquiryPage/section.validator.js';
import { validate } from '../../../middleware/validate-middleware.js';

const router = express.Router();

// Define your route and HTTP method
router.get('/header',getInquiryHeader); 
router.put('/header',authenticateAdmin,validate(inquiry_header_section_dataSchema), updateInquiryHeader);
// Define your route and HTTP method
router.get('/form-details',getInquiryFormDetails); 
router.put('/form-details',authenticateAdmin,validate(inquiry_form_details_schema), updateInquiryFormDetails);
export default router;
