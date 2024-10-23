import express from "express";
// import { getHomePage, getPages } from "../../..controller/pages.controller.js";
import { getContactUsPage, getInquiryPage, getOurSErvicesPage, getPages } from '../../controller/pages/pages.controller.js';
import { getHomePage } from './../../controller/pages/pages.controller.js';
import authenticateAdmin from './../../middleware/authenticateAdmin.js';
import authenticateJWT from "../../middleware/authenticateJWT.js";
import { getOurServiceHeader } from "../../controller/pages/HomePage/section-header.controller.js";

const router = express.Router();

// Get all slides
router.get("/",authenticateAdmin,getPages );
// router.get("/",authenticateJWT,getPages );
router.get("/home",authenticateAdmin, getHomePage);
router.get("/our-services",authenticateAdmin, getOurSErvicesPage);
router.get("/contact-us",authenticateAdmin, getContactUsPage);

router.get("/inquiry",authenticateAdmin, getInquiryPage);



export default router;