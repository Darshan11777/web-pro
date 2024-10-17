import express from "express";
// import { getHomePage, getPages } from "../../..controller/pages.controller.js";
import { getPages } from '../../controller/pages/pages.controller.js';
import { getHomePage } from './../../controller/pages/pages.controller.js';
import authenticateAdmin from './../../middleware/authenticateAdmin.js';
import authenticateJWT from "../../middleware/authenticateJWT.js";

const router = express.Router();

// Get all slides
router.get("/",authenticateAdmin,getPages );
// router.get("/",authenticateJWT,getPages );
router.get("/home",authenticateAdmin, getHomePage);

export default router;