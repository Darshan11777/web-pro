import express from "express";
import { getHomePage, getPages } from "../controller/section.controller.js";


const router = express.Router();

// Get all slides
router.get("/",getPages );
router.get("/home", getHomePage);

export default router;